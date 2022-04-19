## Currency Converter

Web application to convert from one currency to another. The application consist of 
two pages *Convertr* and *Currencies*.

Convert - represents converter which calculate the amount depending on entered query. 

![Currency Converter](assets/currency-converter.png)

The following requests are available (space separated):

- `<amount> <initial currency> <in> <target currency>`
- `<amount> <initial currency>`

If target currency omitted, the currency picked on *Currencies* page (base currency) are used as target.

For example:
- `15 usd in rub`
- `200 cny`

Currency List - allowing to choose base currency and displays other currencies relative to it.

![Currency List](assets/currencies-list.png)

Clicks on currency change user's base currency. Changing the base currency recalculate other currencies
exchange rates.