import { Html} from "@react-three/drei";
import "./loader.css";

const CanvasLoader = () => {
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div class="spinner">
        <div class="spinner1"></div>
      </div>
    </Html>
  );
};

export default CanvasLoader;
