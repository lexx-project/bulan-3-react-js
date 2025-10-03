export default function Greeting(props) {
  return (
    <div>
      <p
        style={{
          color: "blue",
          fontSize: "24px",
        }}
      >
        Haloo, {props.name} !!!
      </p>
    </div>
  );
}
