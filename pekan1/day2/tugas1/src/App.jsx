import { useState } from "react";
import "./App.css";

function App() {
  const profile = [
    {
      id: 1,
      nama: "Siti ",
      img: "https://upload.lexxganz.my.id/uploads/1%20(1).png",
      umur: 20,
      pekerjaan: "Mahasiswa",
      daftarKeahlian: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      nama: "Novita",
      img: "https://upload.lexxganz.my.id/uploads/3%20(1).png",
      umur: 22,
      pekerjaan: "Dosen",
      daftarKeahlian: ["Mengajar", "Penelitian"],
    },
    {
      id: 3,
      nama: "Melinda",
      img: "https://upload.lexxganz.my.id/uploads/8%20(1).png",
      umur: 25,
      pekerjaan: "Programmer",
      daftarKeahlian: ["Python", "Java", "C++"],
    },
    {
      id: 4,
      nama: "Alex",
      img: "https://upload.lexxganz.my.id/uploads/2%20(1).png",
      umur: 23,
      pekerjaan: "Dokter",
      daftarKeahlian: ["Diagnosa", "Pengobatan"],
    },
    {
      id: 5,
      nama: "Budi",
      img: "https://upload.lexxganz.my.id/uploads/4%20(1).png",
      umur: 30,
      pekerjaan: "Insinyur",
      daftarKeahlian: ["Desain", "Analisis"],
    },
    {
      id: 6,
      nama: "Dono",
      img: "https://upload.lexxganz.my.id/uploads/5%20(1).png",
      umur: 28,
      pekerjaan: "Desainer",
      daftarKeahlian: ["Grafis", "UI/UX"],
    },
    {
      id: 7,
      nama: "Candra",
      img: "https://upload.lexxganz.my.id/uploads/6%20(1).png",
      umur: 35,
      pekerjaan: "Pengusaha",
      daftarKeahlian: ["Manajemen", "Strategi"],
    },
    {
      id: 8,
      nama: "Gita",
      img: "https://upload.lexxganz.my.id/uploads/7%20(1).png",
      umur: 29,
      pekerjaan: "Guru",
      daftarKeahlian: ["Mengajar", "Motivasi"],
    },
    {
      id: 9,
      nama: "Ferry",
      img: "https://upload.lexxganz.my.id/uploads/9%20(1).png",
      umur: 32,
      pekerjaan: "Seniman",
      daftarKeahlian: ["Lukis", "Patung"],
    },
    {
      id: 10,
      nama: "Tukiman",
      img: "https://upload.lexxganz.my.id/uploads/10%20(1).png",
      umur: 27,
      pekerjaan: "Penulis",
      daftarKeahlian: ["Fiksi", "Non-Fiksi"],
    },
  ];

  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
    width: "200px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "16px",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
    color: "#333",
    boxSizing: "border-box",
  };

  const imgStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    marginBottom: "12px",
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          width: "100%",
        }}
      >
        {profile.map((item) => (
          <div id={item.id} style={cardStyle}>
            <img src={item.img} alt="" style={imgStyle} />
            <p>Nama : {item.nama}</p>
            <p>Umur : {item.umur}</p>
            <p>Pekerjaan : {item.pekerjaan}</p>
            <p>Keahlian : </p>
            {item.daftarKeahlian.map((i) => (
              <li
                style={{
                  marginBottom: "4px",
                  listStyle: "none",
                  fontSize: "14px",
                  color: "#555",
                }}
                key={i}
              >
                {i}
              </li>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
