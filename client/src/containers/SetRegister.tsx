import { connect, ConnectedProps } from "react-redux";
import RegisterForm from "../components/RegisterForm";
import fetchRegister from "../redux/actions/fetchRegister";
import { RootState } from "../redux/reducers";
import { AlertType, autoCloseAlert } from "../redux/actions/showAlert";

export type RegisterFormProps = ConnectedProps<typeof connector>

const mapStateToProps = (state: RootState) => ({
  btnActive: state.loader.isLoading,
  isRegister: state.register.isRegister
})

const mapDispatchToProps = dispatch => ({
  registerUser: (email: string, password: string) => {
    dispatch(fetchRegister(email, password))
  },
  showAlert: (type: AlertType, text: string ) => {
    dispatch(autoCloseAlert(type, text, 2500))
  }
})

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(RegisterForm)