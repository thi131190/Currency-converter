const exchangeRates = {
  usd: {
    eur: 0.91,
    aud: 1.48,
    krw: 1203.0,
    vnd: 23200.7
  },
  eur: {
    usd: 1.09,
    aud: 1.62,
    krw: 1316.21,
    vnd: 25383.96
  },
  aud: {
    usd: 0.68,
    eur: 0.62,
    krw: 813.58,
    vnd: 15690.63
  },
  krw: {
    usd: 0.00083,
    aud: 0.0012,
    eur: 0.00076,
    vnd: 19.29
  },
  vnd: {
    krw: 0.052,
    usd: 0.000043,
    aud: 0.000064,
    eur: 0.000039
  }
};

function formatCurrency(type, value) {
  const formatter = new Intl.NumberFormat(type, {
    currency: type,
    style: "currency"
  });
  return formatter.format(value);
}

function convertCurrency(amount, fromCurrency, toCurrency) {
  const convertedValue = (
    amount * exchangeRates[fromCurrency][toCurrency]
  ).toFixed(2);
  return formatCurrency(toCurrency, convertedValue);
}

const fromCurrency = prompt("Which type of currency do you have? ");
const amount = prompt("How much do you have?");
const toCurrency = prompt("Which type of currency do you want to convert to? ");

console.log(convertCurrency(amount, fromCurrency, toCurrency));
