import nav_logo from "../assets/nav-logo.svg";
function Navbar() {
  return (
    <header>
      <nav className="nav">
        <img className="nav__logo" src={nav_logo} alt="logo" />
        <h2 className="nav__title">My travel journal</h2>
      </nav>
    </header>
  );
}
export default Navbar;
