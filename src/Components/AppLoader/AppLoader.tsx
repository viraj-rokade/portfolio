import "./AppLoader.css";
import { SpiralSpinner } from "react-spinners-kit";

const AppLoader = () => {
  return (
    <div className="app-loader-container">
      <div>
        <div className="loader-text">A beautiful world beyond awaits..</div>
        <div className="loader-display">
          <SpiralSpinner
            size={50}
            frontColor="#FFCF00"
            backColor="#333333"
            loading={true}
            sizeUnit="px"
          />
        </div>
      </div>
    </div>
  );
};

export default AppLoader;
