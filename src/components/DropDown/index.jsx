import { useState } from "react";
import { Arrow, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "./style";
import { StatusBall } from "../../page/MyOrders/style";
import { api } from "../../services/api";

export function CustomSelect({ id, status, statusName }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState({ status: status, description: statusName });

  const handleSelect = async (status, description) => {
    setSelectedValue({ status, description });
    setIsOpen(false);


    await api.patch('/salesOrder', {
      sales_order_id: id,
      status: status
    }, { withCredentials: true })


  };


  return (
    <Dropdown>
      <DropdownToggle onClick={() => setIsOpen(!isOpen)}>
        <div className="infos">
          <StatusBall data-status={selectedValue.status} />
          {selectedValue.description}
        </div>
        <Arrow />
      </DropdownToggle>
      {isOpen && (
        <DropdownMenu>
          <DropdownItem onClick={() => handleSelect(0, "Pendete de Pagamento")}>
            <StatusBall data-status={0} />
            Pendete de Pagamento
          </DropdownItem>
          <DropdownItem onClick={() => handleSelect(1, "Confirmação de pagamento pendete")}>
            <StatusBall data-status={1} />
            Confirmação de pagamento pendete
          </DropdownItem>
          <DropdownItem onClick={() => handleSelect(2, "Pagamento Aprovado")}>
            <StatusBall data-status={2} />
            Pagamento Aprovado
          </DropdownItem>
          <DropdownItem onClick={() => handleSelect(3, "Pedido Entregue")}>
            <StatusBall data-status={3} />
            Pedido Entregue
          </DropdownItem>
          <DropdownItem onClick={() => handleSelect(4, "Finalizado")}>
            <StatusBall data-status={4} />
            Finalizado
          </DropdownItem>
        </DropdownMenu>
      )}
    </Dropdown>
  );
};