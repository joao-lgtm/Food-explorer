import { useState } from "react";
import { Arrow, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "./style";
import { StatusBall } from "../../page/MyOrders/style";

export function CustomSelect({ status, statusName }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState({ status: status, description: statusName });

  const handleSelect = (status, description) => {
    setSelectedValue({ status, description });
    setIsOpen(false);
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