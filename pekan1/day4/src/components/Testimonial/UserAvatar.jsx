import "./testimonial.css";

export default function UserAvatar({ user }) {
  return (
    <>
      <img src={user.img} className="avatar" />
    </>
  );
}
