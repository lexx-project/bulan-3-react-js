export default function Avatar({ user }) {
  return (
    <>
      <img src={user.img} style={{ width: "80px" }} />
    </>
  );
}
