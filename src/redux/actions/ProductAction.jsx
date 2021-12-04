import prouctApi from "../../api/productApi";
import { GET_PRODUCTBYID } from "../constants";

export const getProductDetail = () => async dispatch => {
    try {
        // dispatch({
        //     type: GET_PRODUCTBYID,
        //     data: prouctApi.GetProductsById
        // })
        console.log(prouctApi);
    } catch (error) {
        console.log(error);
    }
}

