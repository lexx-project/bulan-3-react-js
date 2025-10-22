import { useState } from "react";
import CheckoutItems from "../components/checkout/CheckoutItems";
import Navbar from "../components/Navbar";
import PopUpConfirmation from "../components/checkout/PopUpConfirmation";
import ThanksPopUp from "../components/checkout/ThanksPopUp";
import useCart from "../hooks/useCart.jsx";

export default function Checkout() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isOpen, onClose] = useState(false);
  const { items, clearCart } = useCart();

  const handleOpenPopup = () => {
    if (items.length === 0) return;
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleConfirmCheckout = () => {
    clearCart();
    setIsPopupOpen(false);
    onClose(true);
  };

  const handleCloseThanksPopup = () => {
    onClose(false);
  };

  return (
    <>
      <Navbar />
      <CheckoutItems onCheckout={handleOpenPopup} />
      <PopUpConfirmation
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        onConfirm={handleConfirmCheckout}
      />
      <ThanksPopUp isOpen={isOpen} onClose={handleCloseThanksPopup} />
    </>
  );
}
