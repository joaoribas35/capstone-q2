import { AiOutlineDelete } from "react-icons/ai";
import { ServerJsonApi } from "../../services/api";
import jwtDecode from "jwt-decode";

const ButtonDelTransaction = ({id}) => {
    const token = localStorage.getItem("token");
    const { sub } = jwtDecode(token);

    const handleClick = () => {
        ServerJsonApi.delete(`/transactions/${9}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        console.log("done")
    }

    return(
        <AiOutlineDelete onClick={() => handleClick()}/>
    )
}

export default ButtonDelTransaction;