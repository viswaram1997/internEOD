import DataService from "../../service/Getdetaills";

export function Storedetails(data,date){
    return (dispatch) => {
       
            DataService.StoreDetails(data,date)
                    .then((response) => {
                        console.log(response,"actionstore")
                        dispatch({ 
                            type: "Getdetails",
                            payload: response.data
                        })
                })
                .catch((error) => {
            });

        }  
}

export function Getdetails(data){
    return (dispatch) => {
            DataService.Getdetails(data)
                    .then((response) => {
                        dispatch({ type: "Getdetails",
                        payload: response.data})	
                })
                .catch((error) => {	
            });
        
    }  
}

export function Getcarddetails(data){
    return (dispatch) => {
       
            DataService.GetCarddetails(data)
                    .then((response) => {
                        
                        dispatch({ type: "Getcarddetails",
                        payload: response.data})	
                })
                .catch((error) => {	
            });
        
    }  
}

export function LoginUser(name,password){
    return (dispatch) => {
       
            DataService.LoginUser(name,password)
                    .then((response) => {
                        
                        dispatch({ type: "LoginUser",
                        payload: response.data})	
                })
                .catch((error) => {	
            });
        
    }      
}
export function SignUp(name,password){
    return (dispatch) => {
       
            DataService.SignUp(name,password)
                    .then((response) => {
                        
                        dispatch({ type: "SignUp",
                        payload: response.data})	
                })
                .catch((error) => {	
            });
        
    }  
}