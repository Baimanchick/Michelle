export function formatNumberAndAddCurrency(
  number: number | string,
  currencySymbol: string
): string {
  const numericValue = typeof number === "string" ? parseFloat(number) : number;

  if (!isNaN(numericValue)) {
    const formattedNumber = numericValue.toFixed(2).replace(/\.00$/, "");
    const formattedNumberWithSpaces = formattedNumber.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      " "
    );
    return `${formattedNumberWithSpaces} ${currencySymbol}`;
  } else {
    return "Invalid number";
  }
}
