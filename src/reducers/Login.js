

const Login= (state=false,action) => {

    switch(action.type){
            case "Login":
                return state=true

            case "Logout":
                return state=false 
                
             default :
             return state   


    }


}


export default Login;