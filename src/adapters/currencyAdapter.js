export const fetchRates = () => {
  const url = "https://api.exchangeratesapi.io/latest"
  fetch(url).then(res => res.json())
}
