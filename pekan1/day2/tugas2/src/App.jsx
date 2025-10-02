import { useState } from "react";
import "./App.css";

const calculateDiscount = (price, discount) => price - (price * discount) / 100;

function showPriceAfterDisount() {
  const price = 78000000;
  const discount = 10;

  return (
    <div>
      <h2>Rog Strix Scar 18</h2>
      <p>Harga: Rp {price.toLocaleString()}</p>
      <p>Diskon: {discount}%</p>
      <p>
        Harga setelah diskon: Rp{" "}
        {calculateDiscount(price, discount).toLocaleString()}
      </p>
    </div>
  );
}

function greeting() {
  const nama = "Lexx";
  return (
    <div>
      <h2>Halo {nama}</h2>
    </div>
  );
}

function plus(a, b) {
  const result = a + b;
  return (
    <p>
      {a} + {b} = {result}
    </p>
  );
}

function minus(a, b) {
  const result = a - b;
  return (
    <p>
      {a} - {b} = {result}
    </p>
  );
}

function multiply(a, b) {
  const result = a * b;
  return (
    <p>
      {a} * {b} = {result}
    </p>
  );
}

function divide(a, b) {
  const result = a / b;
  return (
    <p>
      {a} / {b} = {result}
    </p>
  );
}

function App() {
  return (
    <>
      <h1>Hitung Diskon</h1>
      {showPriceAfterDisount()}
      <hr />
      <h1>Sapa </h1>
      {greeting()}
      <hr />
      <h1>Operasi Matematika Sederhana</h1>
      {plus(10, 20)}
      {minus(20, 10)}
      {multiply(2, 5)}
      {divide(10, 2)}
    </>
  );
}

export default App;
