import nav_logo from "../assets/nav-logo.svg";
function Navbar() {
  return (
    <header>
      <nav>
        <img src={nav_logo} alt="loog" />
        <h2>My travel journal</h2>
      </nav>
    </header>
  );
}
export default Navbar;
