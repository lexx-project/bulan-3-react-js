export default function ProductCard(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "300px",
        padding: "10px",
        textAlign: "center",
        marginBottom: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>{props.productName}</h2>
      <p>Harga : {props.price}</p>
      <p> Stock : {props.stock}</p>
      <p>
        {props.isAvailable ? (
          <p style={{ color: "green" }}> Tersedia</p>
        ) : (
          <p style={{ color: "red" }}>Stock Habis</p>
        )}
      </p>
    </div>
  );
}
