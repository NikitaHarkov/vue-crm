export default function currencyFilter(value, currency = 'EUR') {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency
  }).format(value)
}
