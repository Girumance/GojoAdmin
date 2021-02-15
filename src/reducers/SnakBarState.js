const SnakBarState =(state={},action)=> {
    switch(action.type){
        case "ADD_SNAKDATA":
            return state=action.data
         default:
          return state;   


    }
} 

export default SnakBarState;