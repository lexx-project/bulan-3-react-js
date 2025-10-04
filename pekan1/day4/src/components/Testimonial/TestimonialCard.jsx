import UserAvatar from "./UserAvatar";
import "./testimonial.css";
export default function TestimonialCard({ user }) {
  return (
    <div className="testimonialContainer">
      <UserAvatar user={user} />
      <h3 className="testimonialName">{user.name}</h3>
      <p className="testimonialText">{user.text}</p>
    </div>
  );
}
