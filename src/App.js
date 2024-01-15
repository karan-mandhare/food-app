import { Outlet } from "react-router-dom";
import Header from "./components/Header";

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy loading
// On demand Loading


const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
