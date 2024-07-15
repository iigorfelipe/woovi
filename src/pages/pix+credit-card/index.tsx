
import { Timeline } from "../../components/timeline"
import { copyToClipboard } from "../../helpers/copy-to-clipboard"

export const PixCreditCardPage = () => {
  return (
    <div className="flex items-center flex-col gap-5 justify-center">
      
      <div className="text-2xl font-extrabold leading-8 text-center flex flex-col">
        <span>João, pague a entrada de</span>
        <span>R$ 15.300,00 pelo Pix</span>
      </div>

      <div className="min-w-[350px] min-h-[350px] border-2 border-[#03D69D] rounded-xl p-1">
        <img src="./qr-code.svg" alt="qr-code" />
      </div>

      <button onClick={() => copyToClipboard('QR-CODE-EXAMPLE')} className="bg-[#133A6F] flex items-center justify-center gap-2 w-72 h-10 rounded-lg">
        <span className="normal-case text-white text-base">Cique para copiar QR CODE</span>
        <img src="./note.svg" />
      </button>

      <div className=" text-center flex flex-col text-base">
        <span className="font-semibold text-[#AFAFAF]">Prazo de pagamento:</span>
        <span className="font-extrabold text-[#4D4D4D]">15/12/2021 - 08:17</span>
      </div>

      <Timeline />

      <div className="border-t-2 border-[#E5E5E5] w-full" />

      <div className="flex items-center justify-between w-full">
        <span className="text-sm font-semibold">CET: 0,5%</span>
        <span className="text-lg font-semibold">Total: R$ 30.600,00</span>
      </div>

      <div className="border-t-2 border-[#E5E5E5] w-full" />

      <div className="flex items-center justify-between w-full">
        <span className="font-extrabold text-base">Como funciona?</span>
        <img src="./arrow-up.svg" className="mr-2" />
      </div>

      <div className="border-t-2 border-[#E5E5E5] w-full" />

      <div className="flex flex-col text-center">
        <span className="text-[#B2B2B2] text-sm font-semibold">Identificador:</span>
        <span className="text-[#4D4D4D] font-extrabold">2c1b951f356c4680b13ba1c9fc889c47</span>
      </div>

    </div>
  )
}
