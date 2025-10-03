import InfoUser from "./InfoUser";

export default function Comment({ user }) {
  return (
    <>
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          width: "80%",
          borderRadius: "20px",
          marginBottom: "20px",
        }}
      >
        <InfoUser user={user} />
        <p>{user.text}</p>
      </div>
    </>
  );
}
