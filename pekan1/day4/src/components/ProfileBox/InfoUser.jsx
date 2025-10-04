import Avatar from "./Avatar";

export default function InfoUser({ user, style }) {
  return (
    <div style={style}>
      <Avatar user={user} />
      <p>Nama: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Alamat: {user.address}</p>
    </div>
  );
}
