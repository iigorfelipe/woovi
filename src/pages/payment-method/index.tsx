import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { parcelas_fake } from "../../data/parcelas";
import { Cards } from "./cards";

export const PaymentMethodPage = () => {
  const navigate = useNavigate();
  const [parcelas, setParcelas] = useState(parcelas_fake);

  const navigateToPaymentPage = () => {
    navigate('/pix+credit-card')
  };

  const handleChecked = (index: number) => {
    setParcelas((prevParcelas) => 
      prevParcelas.map((parcela, i) => i === index
        ? { ...parcela, isChecked: true }
        : { ...parcela, isChecked: false }
      )
    );

    navigateToPaymentPage(); // TODO:
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center flex-col gap-2 max-w-[429px]">

        <span className="text-xl font-extrabold text-[#4D4D4D] mb-4">João, como você quer pagar?</span>
          
        <Cards parcelas={parcelas} handleChecked={handleChecked} />

      </div>
    </div>
  )
}