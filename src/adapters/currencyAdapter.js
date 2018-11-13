export const fetchRates = () => {
  const usd = "https://api.exchangeratesapi.io/latest?base=USD"
  const url = "https://api.exchangeratesapi.io/latest"
  return fetch(usd).then(res => res.json())
}

// Helper

// createRatesData = (rates) => {
//
// AUD: 1.3868619618
// BGN: 1.7361739902
// BRL: 3.7476253884
// CAD: 1.3202840657
// CHF: 1.0091433644
// CNY: 6.9637816245
// CZK: 23.0288504217
// DKK: 6.622015091
// EUR: 0.8877052818
// GBP: 0.7773013759
// HKD: 7.8332889481
// HRK: 6.5929871283
// HUF: 285.5925432756
// IDR: 14807.0128717266
// ILS: 3.677141589
// INR: 72.8900133156
// ISK: 122.9471815357
// JPY: 113.8038171327
// KRW: 1136.3692853972
// MXN: 20.2727918331
// MYR: 4.1840213049
// NOK: 8.4667554372
// NZD: 1.4823790502
// PHP: 53.2383488682
// PLN: 3.814292055
// RON: 4.1344873502
// RUB: 67.6253883711
// SEK: 9.1171770972
// SGD: 1.3812694186
// THB: 33.1096316023
// TRY: 5.4400355082
// USD: 1
// ZAR: 14.3675987572
// }
