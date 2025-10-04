import InfoUser from "./InfoUser";

export default function ProfileBox({ user }) {
  return (
    <>
      <InfoUser
        user={user}
        style={{
          marginBottom: "10px",
          border: "1px solid blue",
          padding: "10px",
          width: "250px",
          borderRadius: "10px",
          textAlign: "center",
          boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f9f9f9",
          color: "#333",
          fontSize: "14px",
          lineHeight: "1.5",
        }}
      />
    </>
  );
}
