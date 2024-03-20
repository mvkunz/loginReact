import Button from "../components/Button";
import InputBase from "../components/InputBase";

function Login() {

  return(
    <div id="login-page">
      <InputBase />
      <Button to='/welcome' text='LOGIN'/>
    </div>
  )
}

export default Login;