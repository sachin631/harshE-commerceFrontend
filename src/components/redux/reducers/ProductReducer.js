const ProductData=[];

export const ProductReducer=(state={ProductData},action)=>{
        switch(action.type){
            case "Sucess_get_data":
                return {ProductData:action.payload}

            case "failed_To_Get_Data":
                return {ProductData:action.payload}
            default:
                return state;
        }
}