import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './auth';
import { api } from '../services/api';
import { toast } from 'react-toastify';

const OrderContext = createContext();

function OrderProvider({ children }) {
    const [order, setOrder] = useState(null);
    const [orderById, setOrderById] = useState(null);
    const [count, setCount] = useState(0);
    const { user, signOut } = useAuth();
    const [orderObservetion, setOrderObservetion] = useState(false);
    const [orderDetailObservetion, setOrderDetailObservetion] = useState(false);
    const [detailId, setDetailId] = useState();

    async function handleOrder(id, amount, price) {
        try {
            await api.post('/salesOrder', {
                dishes_id: id,
                quantity: amount,
                price: price
            }, { withCredentials: true });
            setOrderObservetion(!orderObservetion);
            toast.success("Prato incluído com sucesso");
        } catch (error) {
            if (error.response?.status === 401) {
                signOut();
                window.location.href = '/';
            } else {
                toast.error("Ocorreu um erro ao adicionar o prato");
            }
        }
    }

    async function handleOrderById(id) {
        try {
            const response = await api.get(`salesOrder/${id}`, { withCredentials: true });
            setOrderById(response.data);
            setDetailId(id);
        } catch (error) {
            if (error.response?.status === 401) {
                signOut();
                window.location.href = '/';
            } else {
                console.error("Ocorreu um erro ao buscar o pedido");
            }
        }
    }

    async function removeDetail(sales_order_id, detail_id) {
        try {
            await api.delete('details', {
                data: {
                    sales_order_id: sales_order_id,
                    detail_id: detail_id
                },
                withCredentials: true
            });

            const updatedOrderById = {
                ...orderById,
                details: orderById.details.filter(detail => detail.id !== detail_id)
            };

            if (updatedOrderById.details.length === 0) {
                setOrder(null);
                setOrderById(null);
                setDetailId(null);
                localStorage.removeItem("@food:order");
                setCount(0);
            } else {
                setOrderById(updatedOrderById);
                const newCount = updatedOrderById.details.reduce((acc, detail) => acc + detail.quantity, 0);
                setCount(newCount);
            }

            setOrderDetailObservetion(!orderDetailObservetion);
            toast.success("Prato excluído com sucesso");
        } catch (error) {
            if (error.response?.status === 401) {
                signOut();
                window.location.href = '/';
            } else {
                toast.error("Falha em excluir o prato");
            }
        }
    }

    useEffect(() => {
        if (detailId) {
            handleOrderById(detailId);
        }
    }, [detailId, orderDetailObservetion]);

    useEffect(() => {
        if (!user) return;
        async function getOrder() {
            try {
                const response = await api.get('/salesOrder', { withCredentials: true });
                const data = response.data;
                localStorage.setItem("@food:order", JSON.stringify(data));
                setOrder(data);
            } catch (error) {
                if (error.response?.status === 401) {
                    signOut();
                    window.location.href = '/';
                } else {
                    console.error("Erro ao buscar o pedido:", error);
                }
            }
        }
        getOrder();
    }, [user, orderObservetion]);

    useEffect(() => {
        const data = localStorage.getItem("@food:order");
        if (data) {
            setOrder(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        if (!user) {
            localStorage.removeItem("@food:order");
            setOrder(null);
            setCount(0);
        }
    }, [user]);

    useEffect(() => {
        if (!user || !order || !order.id) return;
        async function getQuantity() {
            try {
                const response = await api.get(`/details/${order.id}`, { withCredentials: true });
                const totalQuantity = response.data;
                setCount(totalQuantity);
            } catch (error) {
                if (error.response?.status === 401) {
                    signOut();
                    window.location.href = '/';
                } else {
                    console.error("Erro ao buscar a quantidade:", error);
                }
            }
        }
        getQuantity();
    }, [order, orderById, orderDetailObservetion]);

    return (
        <OrderContext.Provider value={{ count, order, orderById, handleOrder, handleOrderById, removeDetail }}>
            {children}
        </OrderContext.Provider>
    );
}

function useOrder() {
    const context = useContext(OrderContext);
    return context;
}

export { OrderProvider, useOrder };
