import { NavLink } from "react-router-dom";

interface ButtonProps {
  to: string;
  text: string;
}

function Button({ to, text }: ButtonProps) {
  return (
    <NavLink to={ to }>
      <button
        type="submit"
      >
        { text }
      </button>
    </NavLink>
  )
}

export default Button;