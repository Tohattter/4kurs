import { connect, ConnectedProps } from "react-redux";
import AuthForm from "../components/AuthForm";
import fetchAuth from "../redux/actions/fetchAuth";
import { RootState } from "../redux/reducers";

export type AuthProps = ConnectedProps<typeof connector>

const mapStateToProps = (state: RootState) => ({
  isLoading: state.loader.isLoading
})

const mapDispatchToProps = dispatch => ({
  loginUser: (email: string, password: string) => {
    dispatch(fetchAuth(email, password))
  },
})

const connector = connect(mapStateToProps, mapDispatchToProps) 

export default connector(AuthForm)