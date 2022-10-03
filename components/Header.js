import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Jesse&apos;s</span> cool news site!
      </h1>
      <p className={headerStyles.description}>
        Everyone knows Jesse is the best. He&apos;s the best at everything. He&apos;s
        the best at coding, the best at making websites, the best at making
        websites that fetch news, the best at eating cheese. Everything.
      </p>
    </div>
  );
};
export default Header;
