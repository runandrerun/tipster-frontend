export const fetchRates = () => {
  const usd = "https://api.exchangeratesapi.io/latest?base=USD"
  const url = "https://api.exchangeratesapi.io/latest"
  return fetch(usd).then(res => res.json())
}
