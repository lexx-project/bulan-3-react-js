import "./App.css";

function App() {
  const buah = ["Apel", "Mangga", "Melon", "Nanas", "Jeruk"];

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px", fontSize: "24px" }}>
        <h1>Daftar Buah</h1>
        {buah.map((buah, index) => (
          <div key={index}>{buah}</div>
        ))}
      </div>
    </>
  );
}

export default App;
