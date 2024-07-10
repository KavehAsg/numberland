import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
