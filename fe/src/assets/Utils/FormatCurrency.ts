export function FormatCurrency(price: number){
  return new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(price);
}
