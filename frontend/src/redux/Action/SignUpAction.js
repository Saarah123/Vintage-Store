
import axios from "axios";

export const SIGNUP_PANDING = "SIGNUP_PANDING"
export const SIGNUP_ERROR = "SIGNUP_ERROR";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";


export const signupPanding = ()=>({type:SIGNUP_PANDING})
export const signupError = ()=>({type:SIGNUP_ERROR})
export const signupSuccess = (paylod) =>({type:SIGNUP_SUCCESS , paylod})


export const SignupData = (signup)=>(Dispatch)=>{
    Dispatch(signupPanding())
    axios.post("https://backend1242.herokuapp.com/auth/Signup", signup).then((res)=>{
        alert("signup Success")
        console.log(res.data.user)
        Dispatch(signupSuccess(res.data.user))
    }).catch((err)=>{
        alert("something is wrong")
        Dispatch(signupError())
    })
}