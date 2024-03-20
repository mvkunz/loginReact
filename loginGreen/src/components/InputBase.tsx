import { useState } from "react";
import { NavLink } from "react-router-dom";
import user from "../assets/user.png";
import oneUser from "../assets/oneUser.png";
import locker from "../assets/locker.png";

function InputBase() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  }

  return (
    <div id="input-central">
      <div id="img-user">
        <img src={user} alt="user" />
      </div>
      <div id="input-email">
        <img src={oneUser} id="img-one-user" alt="user" />
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email ID"
        />
      </div>
      <div id="input-password">
        <img src={locker} id="img-locker" alt="locker" />
        <label htmlFor="password"></label>
        <input
          id="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <div id="input-checkbox">
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          checked={isChecked}
          onChange={handleCheckbox}
        />
        <label htmlFor="checkbox">Remember me</label>
        <NavLink to="/forgot-password">Forgot Password?</NavLink>
      </div>
    </div>
  )
}

export default InputBase;
