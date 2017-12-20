import axios from "axios";
const BaseUrl="http://192.168.43.160:7070/";
class DataService {
  
    async StoreDetails(data,date) {
        let result = await axios.post(`${BaseUrl}api/storedetails`, data,date)
        return result;
    }
    async Getdetails(data) {
        let result = await axios.get(`${BaseUrl}api/getdetails/${data}`);
        return result;
    }

    async GetCarddetails(id) {
        let result = await axios.get(`${BaseUrl}api/getcarddetails/${id}`);
        return result;
    }
    async LoginUser(name,password) {
        let result = await axios.post(`${BaseUrl}api/loginuser`,name,password);
        return result;
    }
    async SignUp(name,password,username,post,email) {
        let result = await axios.post(`${BaseUrl}api/loginuser`,name,password,username,post,email);
        return result;
    }
}

export default new DataService();