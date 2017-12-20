import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import DashBoard from "../component/Dashbord/DashBoard";
import { Storedetails,Getdetails ,Getcarddetails} from "../redux/action/actions";
const mapStateToProps = (state) => {
    return ({
        Data:state.StoreData.StoreData,
        getdata:state.StoreData.Getdetails,
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

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);