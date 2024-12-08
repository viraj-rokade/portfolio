import "./App.css";
import { useState } from "react";
import AppLoader from "./Components/AppLoader/AppLoader";
import AppBase from "./Components/AppBase/AppBase";

const App = () => {
  const [showAppLoader, setShowAppLoader] = useState<boolean>(true);

  setTimeout(() => {
    setShowAppLoader(false);
  }, 4000);

  return (
    <div className="app">{showAppLoader ? <AppLoader /> : <AppBase />}</div>
  );
};

export default App;
