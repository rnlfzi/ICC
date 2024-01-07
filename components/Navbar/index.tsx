import MyButton from "../Button";
import Logo from "../Logo";
import MenuItem from "./MenuItem";

const Navbar = () => {
  return (
    <nav className="flex fixed z-50 w-full h-24 justify-between items-center bg-black/80 backdrop-blur text-white px-5">
      <Logo />
      <div className="flex gap-1">
        <MenuItem label="Home" href="/" active />
        <MenuItem label="Guests" href="/" />
        <MenuItem label="Rundown" href="/" />
        <MenuItem label="Tenants" href="/" />
        <MenuItem label="Promo" href="/" />
        <MenuItem label="Gallery" href="/" />
        <MenuItem label="More" href="/" />
      </div>
      <MyButton variant="contained" label="Get your ticket" />
    </nav>
  );
};

export default Navbar;
