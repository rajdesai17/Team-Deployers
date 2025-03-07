
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 px-6 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Droplets className="h-8 w-8 text-refillia-blue animate-wave" />
          <span className="text-xl font-bold text-refillia-darkBlue">Refillia</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" isActive={isActive("/")}>
            Home
          </NavLink>
          <NavLink to="/find" isActive={isActive("/find")}>
            Find Stations
          </NavLink>
          <NavLink to="/add" isActive={isActive("/add")}>
            Add Station
          </NavLink>
          <NavLink to="/profile" isActive={isActive("/profile")}>
            Profile
          </NavLink>
          <Button variant="default" className="bg-refillia-blue hover:bg-refillia-darkBlue">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute left-0 right-0 mt-4 px-6 py-4 shadow-md z-50">
          <div className="flex flex-col space-y-4">
            <NavLink to="/" isActive={isActive("/")} onClick={toggleMenu}>
              Home
            </NavLink>
            <NavLink to="/find" isActive={isActive("/find")} onClick={toggleMenu}>
              Find Stations
            </NavLink>
            <NavLink to="/add" isActive={isActive("/add")} onClick={toggleMenu}>
              Add Station
            </NavLink>
            <NavLink to="/profile" isActive={isActive("/profile")} onClick={toggleMenu}>
              Profile
            </NavLink>
            <Button 
              variant="default" 
              className="bg-refillia-blue hover:bg-refillia-darkBlue w-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
}

const NavLink = ({ to, children, isActive, onClick }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "transition-colors hover:text-refillia-blue",
        isActive ? "text-refillia-blue font-medium" : "text-gray-600"
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
