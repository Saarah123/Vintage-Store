 import {createStore} from "redux"

 import {productReducer} from './reducer'
 import thunk from "redux-thunk";
 import { combineReducers  } from "redux";
 import { applyMiddleware } from "redux";
 import { Signupreducer } from "./Reducer/SignUpReducer";
 import {Loginreducer} from "./Reducer/LogInReducer";

 

 
  const rootReducer = combineReducers({
   ProductFetch : productReducer,
    SignupFatch : Signupreducer,
    LoginFatch : Loginreducer
    
})


export const  Store = createStore(rootReducer , applyMiddleware(thunk))


  