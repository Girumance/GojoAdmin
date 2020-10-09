const UserData = (state={},action) => {


    switch(action.type){

        case "Store":
            return state=action.data

         default:
              return state;   


    }

}


export default UserData;