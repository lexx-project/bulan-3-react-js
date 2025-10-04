import "./App.css";
import LoginBtn from "./components/loginForm/LoginBtn";
import RegisterBtn from "./components/loginForm/RegisterBtn";
import ProfileBox from "./components/ProfileBox/ProfileBox";
import TestimonialCard from "./components/Testimonial/TestimonialCard";
import Alert from "./components/Alert/Alert";
import ResponsiveCard from "./components/ResponsiveCard/ResponsiveCard";

const usersData = [
  {
    nama: "Lexx",
    email: "lexx@gmail.com",
    addres: "Ponorogo",
    img: "https://upload.lexxganz.my.id/uploads/my.png",
  },
  {
    nama: "Budi",
    email: "budi01gaming@gmail.com",
    addres: "Madiun",
    img: "data:image/jpeg;base64,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",
  },
];

function App() {
  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Inline Style (Tugas No 1)
      </h1>
      {usersData.map((user, index) => (
        <ProfileBox
          key={index}
          user={{
            name: user.nama,
            email: user.email,
            address: user.addres,
            img: user.img,
          }}
        />
      ))}
      <hr />
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Css classes dan classname (Tugas No 2)
      </h1>

      <TestimonialCard
        user={{
          name: usersData[0].nama,
          text: "Hidup adalah petualangan, dan setiap tantangan adalah kesempatan untuk tumbuh. Jangan pernah menyerah pada impianmu, karena di setiap langkah kecil terdapat kekuatan besar yang menantimu. Semangat!",
          img: usersData[0].img,
        }}
      />
      <hr />
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Css modules (Tugas No 3)
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <LoginBtn />
        <RegisterBtn />
      </div>
      <hr />
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Dynamic Styling (Tugas No 4)
      </h1>
      <Alert type="success" message="ini adalah type succes" />
      <Alert type="error" message="ini adalah type error" />

      <hr />
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Responsive Component (Tugas No 4)
      </h1>
      <ResponsiveCard />
    </>
  );
}

export default App;
