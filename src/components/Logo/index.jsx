import { Container } from "./style";
import main from "../../assets/Polygon 1.svg";
import { USER_ROLE } from "../../utils/roles";
import { useAuth } from "../../hooks/auth";

export function Logo({ ImgSize, FontSize, ...rest }) {
    const { user } = useAuth();
    return (
        <Container imgSize={ImgSize} fontSize={FontSize} {...rest}>
            <div>
                <img src={main} alt="polygon" />
                <h1 >Food Explorer</h1>
            </div>

            {[USER_ROLE.ADMIN].includes(user?.role) && <span>admin</span>}
        </Container>
    )
}