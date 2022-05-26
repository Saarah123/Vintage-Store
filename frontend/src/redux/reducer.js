const initialState={
setprod:[]

}
export const reducer = (state= initialState,{type,payload}) => {



    switch(type){
        case  "SETPRODUCT":
            return {
                ...state,
                setprod:payload
            }
            default: return state

    }
}