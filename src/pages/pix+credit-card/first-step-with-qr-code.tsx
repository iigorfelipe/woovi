import { toast } from "react-toastify";
import { usePaymentContex } from "../../contexts/payment";
import { formatToBRL } from "../../helpers/formatToBRL";

const URL = 'https://www.linkedin.com/in/iigor-felipe/';

type props = {
  handleEvents: (selectedIndex: number) => void
}

export const FirstStepWitgQrCode = ({
  handleEvents
}: props) => {
  const { user } = usePaymentContex();

  const handleCopyQrCode = () => {
    
    navigator.clipboard.writeText(URL)
    toast.success('QR CODE copiado!', { autoClose: 1000 })
    const toastId = toast.loading("Realizando pagamento...");

    setTimeout(() => {
      toast.update(toastId, {
        render: "Pagamento via Pix realizado!",
        type: "success",
        isLoading: false,
        autoClose: 1500,
        closeButton: true,
        onClose: () => handleEvents(1),
      });

    }, 3200);
  };

  return (
    <div className="flex items-center flex-col gap-5 justify-center">
      <div className="text-2xl font-extrabold leading-8 text-center flex flex-col">
        <span>{user.name}, pague a entrada de</span>
        <span>{formatToBRL(user.payment.installment?.amount!)} pelo Pix</span>
      </div>

      <div className="border-2 border-[#03D69D] rounded-xl p-1">
        <img src="./qr-code.png" alt="qr-code" className="max-w-[332px] max-h-[332px]"/>
      </div>

      <button onClick={handleCopyQrCode} className="bg-[#133A6F] flex items-center justify-center gap-2 w-72 h-10 rounded-lg">
        <span className="normal-case text-white text-base">Cique para copiar QR CODE</span>
        <img src="./note.svg" alt="note" />
      </button>
    </div>
  )
}
