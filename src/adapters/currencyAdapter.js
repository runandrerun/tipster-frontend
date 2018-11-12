export const fetchRates = () => {
  const url = "https://api.exchangeratesapi.io/latest"
  return fetch(url).then(res => res.json())
}
