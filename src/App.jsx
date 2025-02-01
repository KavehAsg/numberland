import Navbar from "./Components/templates/Navbar.jsx";
import Footer from "./Components/templates/Footer.jsx";
import NumberLandLogo from "./assets/NumberLand-logo.svg?react";
import { Link, Outlet } from "react-router-dom";

function App() {

  return (
    <div
      className={`font-numberland`}
    >
      <Navbar />

      <Link id="logo" to={"/"} className="w-full block mt-16">
        <NumberLandLogo className="w-4/5 md:w-[350px] mx-auto" />
      </Link>

      <main className="flex justify-center px-2">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
