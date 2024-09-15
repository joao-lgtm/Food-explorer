import { useState } from "react";
import { LuMinus } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";
import { Container } from "./style";

export function Count({ setAmount, amount,size}) {    
    function count(action) {
        if (action === "sum") {
            setAmount(amount + 1);
        } else if (action === "subtraction" && amount > 1) {
            setAmount(amount - 1);
        }
    }
    return (
        <Container>
            <LuMinus color="gray"  onClick={() => count("subtraction")} cursor="pointer" size={size} />
            {amount}
            <LuPlus  color="gray"  onClick={() => count("sum")} cursor="pointer" size={size} />
        </Container>
    );
}