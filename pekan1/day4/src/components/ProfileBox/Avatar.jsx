export default function Avatar({ user }) {
  return (
    <>
      <img
        src={user.img}
        style={{
          width: "80px",
          borderRadius: "50%",
          border: "2px solid blue",
          objectFit: "cover",
          marginBottom: "10px",
          aspectRatio: "1/1",
        }}
      />
    </>
  );
}
