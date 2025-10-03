import Wrapper from "./Wrapper";

export default function CardProfile({ name, age, addres, hobi }) {
  return (
    <>
      <Wrapper>
        <h2>{name}</h2>
        <h3>Umur : {age}</h3>
        <h3>Alamat : {addres}</h3>
        <h3>Hobi : {hobi}</h3>
      </Wrapper>
    </>
  );
}
