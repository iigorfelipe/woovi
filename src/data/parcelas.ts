export const parcelas_fake = [
  {
    vezes: '1x',
    valor: 'R$ 30.500,00',
    isChecked: false,
    cashBack: {
      desconto: '3%',
      message: '🤑 R$ 300,00 de volta no seu Pix na hora',
    }
  },
  {
    vezes: '2x',
    valor: 'R$ 15.300,00',
    total: 'R$ 30.600,00',
    isChecked: false,
  },
  {
    vezes: '3x',
    valor: 'R$ 10.196,00',
    total: 'R$ 30.620,00',
    isChecked: false,
  },
  {
    vezes: '4x',
    valor: 'R$ 7.725,00',
    total: 'R$ 30.900,00',
    isChecked: false,
    menorJuros: {
      desconto: '-3%',
      message: 'Melhor opção de parcelamento'
    }
  },
  {
    vezes: '5x',
    valor: 'R$ 6.300,00',
    total: 'R$ 31.500,00',
    isChecked: false,
  },
  {
    vezes: '6x',
    valor: 'R$ 5.283,33',
    total: 'R$ 31.699,98',
    isChecked: false,
  },
  {
    vezes: '7x',
    valor: 'R$ 4.542,85',
    total: 'R$ 31.800,00',
    isChecked: false,
  },
]

export type Parcelas = typeof parcelas_fake;
