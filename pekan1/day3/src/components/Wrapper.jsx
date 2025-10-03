export default function Wrapper({ children }) {
  return (
    <>
      <div
        style={{
          border: "1px solid black",
          padding: "20px",
          margin: "20px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          width: "20%",
          margin: "auto",
        }}
      >
        {children}
      </div>
    </>
  );
}
