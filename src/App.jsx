import Navbar from "./Components/templates/Navbar.jsx";
import Footer from "./Components/templates/Footer.jsx";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div
      className={`font-numberland`}
    >
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
