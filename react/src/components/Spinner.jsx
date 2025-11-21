import ClipLoader from "react-spinners/ClipLoader";

function Spinner({ loading, size = 150, margin = "135px auto" }) {
  const override = {
    display: "block",
    margin,
  };

  return (
    <ClipLoader
      color="#4338ca"
      loading={loading}
      cssOverride={override}
      size={size}
    />
  );
}

export default Spinner;
