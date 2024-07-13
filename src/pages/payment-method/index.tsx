import { useState } from "react";
import { parcelas_fake } from "../../data/parcelas";
import { Cards } from "./cards";
import { Box } from "@mui/material";

export const PaymentMethodPage = () => {
  const [parcelas, setParcelas] = useState(parcelas_fake);

  const handleChecked = (index: number) => {
    setParcelas((prevParcelas) => 
      prevParcelas.map((parcela, i) => i === index
        ? { ...parcela, isChecked: true }
        : { ...parcela, isChecked: false }
      )
    );
  };

  return (
    <Box className="flex items-center justify-center">
      <Box className="flex items-center flex-col gap-2 max-w-[429px]">

        <span className="text-xl font-extrabold text-[#4D4D4D] mb-4">João, como você quer pagar?</span>
          
        <Cards parcelas={parcelas} handleChecked={handleChecked} />

      </Box>
    </Box>
  )
}