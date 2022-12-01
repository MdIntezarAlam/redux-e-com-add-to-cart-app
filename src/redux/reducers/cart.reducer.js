import { productActionTypes, responseStatuses } from "../../utils/constants";

const initialState = {
    isLoading: false,
    message: "",
    products: [],
    total: 0,
}

//////=>>>>>>>CART REDUCER>>>>>>>>>>>>>>>///

const cartReducer = (state = initialState, action) => {
    // console.log("==> action in cart reducer: ", action)
    switch (action.type) {
        case productActionTypes.ADD_TO_CART_PENDING:
            state = {
                ...state,
                isLoading: true,
                message: "Adding to cart..."
            }
            return state

        case productActionTypes.ADD_TO_CART_SUCCESS:

            let found = false;
            const currentProduct = action.payload.data;
            const newProducts = state.products.map(product => {
                if (product.id === currentProduct.id) {
                    found = true;   
                    product.quantity += 1;
                }
                return product;
            });

            if (!found) {
                newProducts.push({ ...currentProduct, quantity: 1 })
                state.total += 1
            }

            state = {
                ...state,
                isLoading: false,
                message: "Added to cart",
                products: newProducts
            }
            return state

        case productActionTypes.ADD_TO_CART_FAILED:
            state = {
                ...state,
                isLoading: false,
                message: action.payload.message,
            }
            return state
        default:
            return state;
    }
}
export { cartReducer }