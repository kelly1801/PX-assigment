import {ButtonBar} from "../styles/TableStyles";
import {ArrowBackIosNewOutlined, ArrowForwardIosOutlined} from "@mui/icons-material";
import {Pagination} from "../interfaces";

export const NavButtons = ({start, limit, prev, next}:Pagination) => {

    return (
         <ButtonBar>
            <button disabled={!start} onClick={prev}>
                <ArrowBackIosNewOutlined />
            </button>

            <button disabled={limit >= 10} onClick={next}>
                <ArrowForwardIosOutlined />
            </button>
        </ButtonBar>
    )
}