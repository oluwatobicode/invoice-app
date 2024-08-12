export function formatCurrency(total) {
  let formattedTotal = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "GBP",
  });

  return formattedTotal.format(total);
}
