import "./App.css";
import CardProfile from "./components/CardProfile";
import Comment from "./components/Comment";
import Greeting from "./components/Greeting";
import ProductCard from "./components/PoductCard";

function App() {
  const product = [
    {
      productName: "Indomie",
      price: 3000,
      stock: 200,
      isAvailable: true,
    },
    {
      productName: "Sedap Goreng",
      price: 4000,
      stock: 100,
      isAvailable: true,
    },
    {
      productName: "Sunlight",
      price: 5000,
      stock: 0,
      isAvailable: false,
    },
    {
      productName: "Sabun",
      price: 2000,
      stock: 20,
      isAvailable: true,
    },
    {
      productName: "Kopi",
      price: 7000,
      stock: 0,
      isAvailable: false,
    },
    {
      productName: "Odol",
      price: 5000,
      stock: 10,
      isAvailable: true,
    },
  ];

  const myProfile = {
    name: "Lexx",
    age: 17,
    addres: "Ponorogo",
    hobi: "Coding",
  };

  const users = [
    {
      name: "Lexx",
      email: "lexx@gmail.com",
      img: "https://t4.ftcdn.net/jpg/05/89/93/27/360_F_589932782_vOeQzkeaGM2wUHRyfy5dqBH9g3FOc4DQ.jpg",
      text: "Belajar React Mudah Dan Menyenangkan Bukan?, Bukann",
    },
    {
      name: "Budi",
      email: "budi01gaming@gmail.com",
      img: "https://t4.ftcdn.net/jpg/05/89/93/27/360_F_589932782_vOeQzkeaGM2wUHRyfy5dqBH9g3FOc4DQ.jpg",
      text: "Orang Sukses Itu Orang Yang Mau Belajar Dan Mau Berusaha",
    },
    {
      name: "Doni",
      email: "doni@gmail.com",
      img: "https://t4.ftcdn.net/jpg/05/89/93/27/360_F_589932782_vOeQzkeaGM2wUHRyfy5dqBH9g3FOc4DQ.jpg",
      text: "Buanglah Rasa Malas Dan Rasa Mager Karena Itu Musuh Utama Kesuksesan",
    },
  ];

  return (
    <>
      <h1>Greeting ( Tugas No 1 )</h1>
      <Greeting name={"Budi"} />
      <hr />
      <h1>Product Card ( Tugas No 2 )</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          width: "80%",
        }}
      >
        {product.map((item) => {
          return (
            <ProductCard
              productName={item.productName}
              price={item.price}
              stock={item.stock}
              isAvailable={item.isAvailable}
            />
          );
        })}
      </div>
      <hr />
      <h1>Children Props (Tugas No 3)</h1>
      <CardProfile
        name={myProfile.name}
        age={myProfile.age}
        addres={myProfile.addres}
        hobi={myProfile.hobi}
      />
      <hr />
      <h1>Komposisi Komponen ( Tugas No 4 )</h1>
      {users.map((i) => (
        <Comment user={i} />
      ))}
    </>
  );
}

export default App;
