export default function Alert({ type, message }) {
  const styles = {
    padding: "1px",
    margin: "10px 0",
    borderRadius: "5px",
    color: "white",
    backgroundColor: type === "success" ? "green" : "red",
  };
  return (
    <>
      <div style={styles}>
        <p
          style={{
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {message}
        </p>
      </div>
    </>
  );
}
