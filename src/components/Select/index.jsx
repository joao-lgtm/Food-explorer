import { useState, useEffect } from "react";
import { Container, SelectApparence } from "./style";

export function Select({ name, data, label, setItem, category }) {
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null); 

    useEffect(() => {
        if (category) {
            const initialItem = data.find((item) => item.id === category);
            setSelectedItem(initialItem);
        }
    }, [category, data]);

    const handleItemClick = (id) => {
        const selected = data.find((item) => item.id === id);
        setSelectedItem(selected); 
        setItem(id); 
        setOpen(false); 
    };

    return (
        <Container>
            <label htmlFor={name}>{label}</label>

            <SelectApparence onClick={() => setOpen(!open)}>
                {
                    open ? (
                        <>
                            <div>{selectedItem ? selectedItem.name : "Selecione uma categoria"}</div>
                            <div className="options">
                                {data && data.map((item) => (
                                    <div key={item.id} onClick={() => handleItemClick(item.id)}>
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : selectedItem ? selectedItem.name : "Selecione uma categoria"
                }
            </SelectApparence>
        
        </Container>
    );
}
