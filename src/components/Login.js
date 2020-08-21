import React from "react";
import "./../styles/Login.css";
import Button from "@material-ui/core/Button";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from "@material-ui/icons/Mail";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Link } from "react-router-dom";
import { auth, provider, providerFb } from "./../firebase/firebase";
import { useStateValue } from "./../context/StateProvider";
import { actionTypes } from "./../context/reducer";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

function Login() {
  const [{ user }, dispatch] = useStateValue();
  const [cookies, setCookie] = useCookies(["user"]);
  const history = useHistory();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        let token = result.credential.accessToken;

        dispatch({
          type: actionTypes.SET_TOKEN,
          token: token,
        });

        setCookie("token", token);
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const signInFB = () => {
    auth
      .signInWithPopup(providerFb)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        setCookie("token", result.credential.accessToken, {
          expires: new Date().getTime() + 10 * 24 * 60 * 60 * 1000,
        });
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__welcome">
        <h2>Chào mừng bạn đến với Teentin</h2>
      </div>
      <div className="login_func">
        <h2>Đăng nhập với</h2>
        <div className="login__btn">
          <Button variant="contained" color="primary" onClick={signInFB}>
            <FacebookIcon />
            Login with Facebook
          </Button>

          <Button variant="contained" color="secondary" onClick={signIn}>
            <MailIcon />
            Login with Google
          </Button>
        </div>
        <Link to="/">
          <KeyboardBackspaceIcon />
          Quay lại trang chủ
        </Link>
      </div>
    </div>
  );
}

export default Login;
