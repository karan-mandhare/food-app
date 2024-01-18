import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy loading
// On demand Loading

const App = () => {
  const [userName, setUserName] = useState();
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div>
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

export default App;
