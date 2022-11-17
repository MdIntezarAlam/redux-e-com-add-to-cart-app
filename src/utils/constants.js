export const productActionTypes = {
    GET_ALL_PRODUCTS_PENDING: "GET_ALL_PRODUCTS_PENDING",
    GET_ALL_PRODUCTS_SUCCESS: "GET_ALL_PRODUCTS_SUCCESS",
    GET_ALL_PRODUCTS_FAILED: "GET_ALL_PRODUCTS_FAILED",

    GET_PRODUCT_BY_ID_PENDING: "GET_PRODUCT_BY_ID_PENDING",
    GET_PRODUCT_BY_ID_SUCCESS: "GET_PRODUCT_BY_ID_SUCCESS",
    GET_PRODUCT_BY_ID_FAILED: "GET_PRODUCT_BY_ID_FAILED",

    // ADD TO CAR
    ADD_TO_CART_PENDING: "ADD_TO_CART_PENDING",
    ADD_TO_CART_SUCCESS: "ADD_TO_CART_SUCCESS",
    ADD_TO_CART_FAILED: "ADD_TO_CART_FAILED",

    //REMOVE FROM THE CART

    REMOVE_FROM_CART_PENDING: "REMOVE_FROM_CART_PENDING",
    REMOVE_FROM_CART_SUCCESS: "REMOVE_FROM_CART_SUCCESS",
    REMOVE_FROM_CART_FAILED: "REMOVE_FROM_CART_FAILED",
}

export const responseStatuses = {
    error: "error",
    warning: "warning",
    info: "info",
    success: "success"
}

export const API_BASE_URL = "https://fakestoreapi.com"



//Login Validation=>>>>>>>>>>>>>
export const initialValues = {
    name: "",
    email: "",
    password: "",
    phone: "",
}

export const allRegex = {
    email_regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    pass_regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,8}$/,
    phone_regex: /^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
}
export const error_message = {
    email_msg: "Invalid Email",
    pass_msg: "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:",
    phone_msg: "Incorrect phone number",
}