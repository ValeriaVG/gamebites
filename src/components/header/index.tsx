import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";
import logo from "./logo.png";

const Header = () => (
  <header class={style.header}>
    <Link href="/" class={style.logo}>
      <img src={logo} alt={"GameBites"} />
    </Link>
  </header>
);

export default Header;
