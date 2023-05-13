import Logo from "./Logo/Logo";
import NavLink from "./NavLink/NavLink";
import SocialIcons from "./SocialIcons/SocialIcons";

const Header = () => {
  return (
    <header className="w-full container px-32 py-8 font-medium flex items-center justify-between">
      <nav className="flex gap-8">
        <NavLink href="/" title="Home" />
        <NavLink href="/about" title="About" />
        <NavLink href="/projects" title="Projects" />
        <NavLink href="/articles" title="Articles" />
      </nav>
      <div className="absolute left-1/2 top-2 translate-x-1/2">
        <Logo />
      </div>
      <nav className="flex items-center justify-center flex-wrap gap-6">
        <SocialIcons />
      </nav>
    </header>
  );
};

export default Header;
