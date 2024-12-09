import "./App.css";
import { useState, useEffect } from "react";
import AppLoader from "./Components/AppLoader/AppLoader";
import AppBase from "./Components/AppBase/AppBase";

const App: React.FC = () => {
  const [showAppLoader, setShowAppLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAppLoader(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">{showAppLoader ? <AppLoader /> : <AppBase />}</div>
  );
};

export default App;
