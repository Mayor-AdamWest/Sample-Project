/* REACT BOOTSTRAP */
import Spinner from "react-bootstrap/Spinner";

export default function Loader() {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        height: "150px",
        width: "150px",
        margin: "auto",
        display: "block",
      }}
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
