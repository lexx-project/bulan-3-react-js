import Avatar from "./Avatar";

export default function InfoUser({ user }) {
  return (
    <>
      <Avatar user={user} />
      <h2>{user.name}</h2>
      <h3>{user.email}</h3>
    </>
  );
}
