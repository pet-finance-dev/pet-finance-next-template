export interface IFormatMoneyOptions {
  currency?: string;
  locale?: string;
}

const formatMoney = (
  amount: number,
  options: IFormatMoneyOptions = {},
): string => {
  const { currency = "USD", locale = "en-US" } = options;

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
};

export default formatMoney;
