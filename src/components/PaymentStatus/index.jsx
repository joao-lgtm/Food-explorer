import { Container } from "./style";
import { GiConfirmed } from "react-icons/gi";
import { FaRegClock } from "react-icons/fa";
import { PiForkKnife } from "react-icons/pi";
export function PaymentStatus({ status }) {
    return (
        <Container>
            {
                status === 1 &&
                <div>
                    <FaRegClock color="gray" size={122} />
                    <span>Aguardando confirmação do pagamento no caixa</span>
                </div>

            }

            {
                status === 2 &&
                <div>
                    <GiConfirmed color="gray" size={122} />
                    <span>Pagamento aprovado!</span>
                </div>
            }

            {
                status === 3 &&
                <div>
                    <PiForkKnife color="gray" size={122} />
                    <span>Pedido entregue!</span>
                </div>
            }
        </Container>
    )
}