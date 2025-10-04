let user = [
  {
    nama: "Lexx",
    email: "lexx@gmail.com",
    addres: "Ponorogo",
    img: "https://upload.lexxganz.my.id/uploads/my.png",
  },
];
export default function User() {
  return (
    <>
      <h1>Profile User</h1>
      <p>Nama: {user.nama}</p>
      <p>Email: {user.email}</p>
      <p>Website: {user.website}</p>
    </>
  );
}
