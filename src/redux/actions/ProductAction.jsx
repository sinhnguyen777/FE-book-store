import prouctApi from "../../api/productApi";
import { GET_PRODUCTBYID } from "../constants";

export const getProductDetail = (id) => {
    return async dispatch => {
        dispatch({
            type: GET_PRODUCTBYID,
            data: await prouctApi.GetProductsById(id)
        })
    }
}

