import { Container, SelectApparence } from "./style";

export function Select({ name, data, label, setItem }) {
    return (
        <Container>
            <label htmlFor={name}>{label}</label>
            <SelectApparence>
                <select
                    onChange={(e) => setItem(e.target.value)}
                    name={name}
                    id={name}
                >
                    <option value="">--Please choose an option--</option>
                    {data && data.map((item) => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                </select>
            </SelectApparence>
        </Container>
    );
}
