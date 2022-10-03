import navStyles from "../styles/Nav.module.css";
import Link from "next/link";

const Nav = () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href={`/article/${getRandomInt(0, 100)}`}>
            Get a random article!
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
