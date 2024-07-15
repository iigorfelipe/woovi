import { Parcelas } from "../../data/parcelas";

type CardProps = {
  parcelas: Parcelas;
  handleChecked: (index: number) => void;
}

export const Cards = ({ parcelas, handleChecked }: CardProps) => {

  return (
    <div className="rounded-[10px] flex flex-col w-full mt-4">
      {
        parcelas.map((parcela, index) => (
          <div
            key={parcela.vezes}
            className={`gap-1 flex flex-col p-4 border-2 border-b-0 last-of-type:border-2 first-of-type:rounded-lg last-of-type:rounded-b-lg [&:nth-child(2)]:rounded-t-lg ${
              index === 0 && 'mb-6 border-b-[2px]'
            } ${
              parcela.isChecked
              ? 'border-b-[2px] border-[#03D69D]'
              : 'border-[#E5E5E5]'
            }`}
          >
            {
              index === 0 && (
                <div className="w-[67px] h-[27px] border-2 bg-[#E5E5E5] rounded-[100px] flex items-center justify-center mt-[-30px]">
                  <span className="font-extrabold text-lg">Pix</span>
                </div>
              )
            }
            {
              index === 1 && (
                <div className="w-[157px] h-[27px] border-2 bg-[#E5E5E5] rounded-[100px] flex items-center justify-center mt-[-30px]">
                  <span className="font-extrabold text-lg">Pix Parcelado</span>
                </div>
              )
            }
            <div className="flex items-center justify-center">
              <span className="text-2xl font-semibold"><span className="font-extrabold">{parcela.vezes}</span> {parcela.valor}</span>
              <button
                className={`cursor-pointer flex items-center justify-center rounded-full w-[26px] h-[26px] ml-auto ${parcela.isChecked ? 'bg-[#03D69D]' : 'none'} ${parcela.isChecked ? 'border-0' : 'border-2'}`}
                onClick={() => handleChecked(index)}
              >
                <img src="./checked.svg" alt="checked" />
              </button>
            </div>
            {
              parcela.cashBack?.desconto ? (
                <>
                  <span className="font-semibold text-base text-[#03D69D]">Ganhe <span className="font-extrabold">{parcela.cashBack.desconto}</span> de Cashback</span>
                  <div className="bg-[#133A6F] flex items-center p-2 rounded-md">
                    <span className="text-white font-semibold text-base">
                      <span className="font-extrabold">
                        {parcela.cashBack.message.slice(0, 12)}
                      </span>
                        {parcela.cashBack.message.slice(12)}
                    </span>
                  </div>
                </>
              ) : (
                <span className="text-[#AFAFAF] text-base">Total: {parcela.total}</span>
              )
            }
            {
              parcela.menorJuros?.desconto && (
                <div className="bg-[#133A6F] flex items-center p-2 rounded-md">
                  <span className="text-white font-semibold text-base">
                    <span className="font-extrabold">
                      {parcela.menorJuros.desconto} de juros: {''}
                    </span>
                    {parcela.menorJuros.message}
                  </span>
                </div>
              )
            }
          </div>
        ))
      }
    </div>
  )
}