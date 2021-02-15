export const Login = ()=>{

    return {
        type: "Login"
    }
}


export const Logout = () => {
    return {
        type : "Logout"
    }
}

export const Adduserdata  = (data) =>{

            return{
                type: "Store",
                data:data
            }

}


export const ADDSNAKBARDATA  = (data) =>{

    return{
        type: "ADD_SNAKDATA",
        data:data
    }

}

