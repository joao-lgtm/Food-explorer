import { useState } from "react";
import { Arrow, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "./style";
import { StatusBall } from "../../page/MyOrders/style";

export function CustomSelect({}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState({ status: "", description: "Selecione uma opção" });
  
    const handleSelect = (status, description) => {
      setSelectedValue({ status, description });
      setIsOpen(false);
    };
  
    return (
      <Dropdown>
        <DropdownToggle onClick={() => setIsOpen(!isOpen)}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <StatusBall data-status={selectedValue.status} />
            {selectedValue.description}
          </div>
          <Arrow />
        </DropdownToggle>
        {isOpen && (
          <DropdownMenu>
            <DropdownItem onClick={() => handleSelect(0, "Cancelado")}>
              <StatusBall data-status={0} />
              Cancelado
            </DropdownItem>
            <DropdownItem onClick={() => handleSelect(1, "Preparando")}>
              <StatusBall data-status={1} />
              Preparando
            </DropdownItem>
            <DropdownItem onClick={() => handleSelect(2, "Aprovado")}>
              <StatusBall data-status={2} />
              Aprovado
            </DropdownItem>
          </DropdownMenu>
        )}
      </Dropdown>
    );
  };