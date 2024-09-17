import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { PiCreditCardLight, PiPixLogoFill } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { Container, PaymentMedthod, InfoCard, PaymentContainer, Payment } from './style';
import { useState } from 'react';
import { Input } from '../Input';
import { Button } from '../Button'
import QRCode from '../../assets/Meu_QR_Code_Instagram.svg'
import { PaymentStatus } from '../PaymentStatus';
import { api } from '../../services/api';

export function PaymentMethod({ paymentObservetion, setPaymentObservetion, statusOrder , id, setObservetionStatus}) {
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    });
    const [paymentMethod, setPaymentMethod] = useState("credito");
    const [finalizePayment, setFinalizePayment] = useState(false);

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;

        setState((prev) => ({ ...prev, [name]: value }));
    }

    const handleInputFocus = (evt) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
    }

    function handlePaymentMethod(name) {
        setPaymentMethod(name)
    }

    async function handleFinishPayment(){
        await api.patch('/salesOrder',  {
            sales_order_id: id,
            status: 1
        },{ withCredentials: true })
        setObservetionStatus(true)
        setFinalizePayment(true);
    }

    return (
        <Container data-paymentobservetion={paymentObservetion} >
            <IoClose className='close' onClick={() => setPaymentObservetion(!paymentObservetion)} size={24} />
            <h2>Pagamento </h2>
            <PaymentContainer>
                <PaymentMedthod>
                    <div onClick={() => handlePaymentMethod("pix")} data-payment={paymentMethod === "pix" ? paymentMethod : null}>
                        <PiPixLogoFill size={24} /><span>PIX</span>
                    </div>
                    <div onClick={() => handlePaymentMethod("credito")} data-payment={paymentMethod === "credito" ? paymentMethod : null}>
                        <PiCreditCardLight size={24} /><span>Crédito</span>
                    </div>
                </PaymentMedthod>

                {statusOrder === 0 &&
                    <>
                        <Payment $finalizePayment={finalizePayment}>
                            {paymentMethod === "credito" &&
                                <>
                                    <Cards
                                        number={state.number}
                                        expiry={state.expiry}
                                        cvc={state.cvc}
                                        name={state.name}
                                        focused={state.focus}
                                    />

                                    <InfoCard>
                                        <div className='card_number'>
                                            <Input
                                                label="Número do Cartão"
                                                type="text"
                                                name="number"
                                                placeholder="1234 5678 9012 3456"
                                                value={state.number}
                                                onChange={handleInputChange}
                                                onFocus={handleInputFocus}
                                                mask="9999 9999 9999 9999"
                                            />
                                        </div>

                                        <Input
                                            label="Nome"
                                            type="text"
                                            name="name"
                                            placeholder="ex: João Paulo"
                                            value={state.name}
                                            onChange={handleInputChange}
                                            onFocus={handleInputFocus}
                                        />
                                        <div className='expiry_cvc'>
                                            <Input
                                                label="Validade"
                                                type="text"
                                                name="expiry"
                                                placeholder="04/25"
                                                mask="99/99"
                                                value={state.expiry}
                                                onChange={handleInputChange}
                                                onFocus={handleInputFocus}
                                            />
                                            <Input
                                                label="CVC"
                                                type="text"
                                                name="cvc"
                                                placeholder="000"
                                                mask="999"
                                                value={state.cvc}
                                                onChange={handleInputChange}
                                                onFocus={handleInputFocus}
                                            />
                                        </div>
                                    </InfoCard>
                                    <div className='conclude'>
                                        <Button onClick={() => handleFinishPayment()} name="Finalizar Pagamento" />
                                    </div>
                                </>
                            }

                            {paymentMethod === "pix" &&
                                <>
                                    <img src={QRCode} alt="QRCode do pix" />
                                </>
                            }

                        </Payment>
                    </>
                }
                {statusOrder != 0 &&
                    <PaymentStatus status={statusOrder} />
                }

            </PaymentContainer>
        </Container>
    )
}