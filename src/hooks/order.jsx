import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './auth';
import { api } from '../services/api';

const OrderContext = createContext();

function OrderProvider({ children }) {
    const [order, setOrder] = useState(null);
    const [count, setCount] = useState(0); // Inicialize com 0 ou qualquer valor padrão
    const { user } = useAuth();
    const [orderObservetion, setOrderObservetion] = useState(false);

    async function handleOrder(id, amount, price) {
        try {
            await api.post('/salesOrder', {
                dishes_id: id,
                quantity: amount,
                price: price
            }, { withCredentials: true });
            setOrderObservetion(!orderObservetion);
        } catch (error) {
            console.error("Erro ao criar pedido", error);
        }
    }
    useEffect(() => {
        async function getOrder() {
            try {
                const response = await api.get('/salesOrder', { withCredentials: true });
                const data = response.data;
    
                localStorage.setItem("@food:order", JSON.stringify(data));
                setOrder(data);
            } catch (error) {
                console.error("Erro ao buscar o pedido:", error);
            }
        }
    
        getOrder();
    }, []);

useEffect(() => {
    async function getOrder() {
        try {
            const response = await api.get('/salesOrder', { withCredentials: true });
            const data = response.data;

            localStorage.setItem("@food:order", JSON.stringify(data));
            setOrder(data);
        } catch (error) {
            console.error("Erro ao buscar o pedido:", error);
        }
    }

    getOrder();
}, [orderObservetion]);

useEffect(() => {
    const data = localStorage.getItem("@food:order");

    if (data) {
        setOrder(JSON.parse(data));
    }
}, []);

useEffect(() => {
    async function getQuantity() {
        if (order && order.id) {
            try {
                const response = await api.get(`/details/${order.id}`, { withCredentials: true });
                setCount(response.data);
            } catch (error) {
                console.error("Erro ao buscar a quantidade:", error);
            }
        }
    }

    getQuantity();
}, [order]); // Adicione order como dependência

return (
    <OrderContext.Provider value={{ count, order, handleOrder }}>
        {children}
    </OrderContext.Provider>
);
}

function useOrder() {
    const context = useContext(OrderContext);
    return context;
}

export { OrderProvider, useOrder };
