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
