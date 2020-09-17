import Axios from "axios";
import Cookie from 'js-cookie';
import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_REGISTER_SUCCESS, USER_REGISTER_REQUEST, USER_REGISTER_FAIL, USER_LOGOUT } from "../constants/userConstants";

const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
    try {
        const { data } = await Axios.post("/api/users/signin", { email, password });
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: USER_SIGNIN_FAIL, payload: "Incorrect Email or Password" });
    }
}

const register = (name, email, password, confirmPassword) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { name, email, password, confirmPassword } });
    try {
        const { data } = await Axios.post("/api/users/register", { name, email, password });
        if (password === confirmPassword) {
            dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
            Cookie.set('userInfo', JSON.stringify(data));
        }
        else if (password !== confirmPassword) {
            dispatch({ type: USER_REGISTER_FAIL, payload: "Passwords do not match" });
        }
    } catch (error) {
        dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
    }
}

const logout = () => (dispatch) => {
    Cookie.remove("userInfo");
    dispatch({ type: USER_LOGOUT })
}


export { signin, register, logout };