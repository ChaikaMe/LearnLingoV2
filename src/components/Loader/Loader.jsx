import { ThreeDots } from "react-loader-spinner";

export default function Loader({ theme }) {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ThreeDots visible={true} color={theme} />
    </div>
  );
}
