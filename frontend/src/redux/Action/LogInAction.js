import axios from "axios";
// import 'react-toastify/dist/ReactToastify.css';


export const LOGIN_PANDING = "LOGIN_PANDING"
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT"


export const loginPanding = ()=>({type:LOGIN_PANDING})
export const loginError = ()=>({type:LOGIN_ERROR})
export const loginSuccess = (payload) =>({type:LOGIN_SUCCESS , payload})
export const logout = () =>({ type: LOGOUT })

export const LoginData = (login )=>(Dispatch)=>{
    Dispatch(loginPanding())
    axios.post("http://localhost:8080/login" , login).then((res)=>{
     alert("Log In Success")
        setTimeout(() => {
            Dispatch(loginSuccess(res.data.user)) 
        }, 1000);
    }).catch((err)=>{
        setTimeout(() => {
            Dispatch(loginError())     
        }, 3000);
      alert("error");
    })
}