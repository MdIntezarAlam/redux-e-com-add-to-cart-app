import axios from 'axios'
import { API_BASE_URL, productActionTypes } from "../../utils/constants";

//ADD TO CART 
export const addToCarts = (productId) => {
    return async dispatch => {
        dispatch({
            type: productActionTypes.ADD_TO_CART_PENDING,
        });
        try {
            const res = await axios.get(`${API_BASE_URL}/products/${productId}`)
            console.log("RESPONSE:-WITH_ID ", res)
            dispatch({
                type: productActionTypes.ADD_TO_CART_SUCCESS,
                payload: {
                    data: res.data
                }
            });
        } catch (error) {
            dispatch({
                type: productActionTypes.ADD_TO_CART_FAILED,
                payload: {
                    message: "Something went wrong!"
                }
            });
        }
    }
}