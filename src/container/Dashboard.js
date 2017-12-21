import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Dashboard from "../component/Dashboard";
import { Storedetails,Getdetails ,Getcarddetails} from "../redux/action/actions";
const mapStateToProps = (state) => {
    console.log(state.StoreData.Getdetails);
    return ({
        Data:state.StoreData.StoreData,
        getdata:state.StoreData.Getdetails.response,
        getcarddata:state.StoreData.Getcarddetails
    });
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        "Storedetails":Storedetails,
         "Getdetails":Getdetails,
         "Getcarddetails":Getcarddetails    
       
        
    },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);