import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from "../component/login/login";
import { LoginUser ,SignUp} from "../redux/action/actions";
const mapStateToProps = (state) => {
    return ({
        Login:state.StoreData.LoginStatus,
        SignUp:state.StoreData.SignUp

    });
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
       "LoginUser":LoginUser,
       "SignUp":SignUp
         
       
        
    },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);