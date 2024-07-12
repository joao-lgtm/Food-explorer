import { Container } from "./style"
export function Select({name, data,label }) {
    return (
        <Container>
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name}>
                {data && data.map((categorys) => (
                    <option key={categorys.id} value={categorys.id}>{categorys.name}</option>
                ))
                }
            </select>
        </Container>
    )
}