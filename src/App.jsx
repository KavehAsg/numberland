import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import MegaMenu from "./Components/MegaMenu/MegaMenu";

function App() {
  return (
    <div className="">
      <Navbar />
      <main>
        {/* <Outlet /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
