export const priceFormat = (price: number) => {
  const value = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
  }).format(price);

  return value;
};
