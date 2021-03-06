class Stock {
  constructor(symbol, meta) {
    this.symbol   = symbol
    this.last     = meta.last
    this.change   = meta.change

    this.stock    = {
      symbol: this.symbol,
      last: {
        value: this.last.value,
        datetime: this.last.datetime
      },
      change: {
        value: this.change.value,
        percent: this.change.percent,
        type: this.change.type
      },

    }

    return this.stock
  }

  static toHTMLString(stocks) {
    const rows = stocks.map((stock) => {
      const row =
        `<tr>`                        +
          `<td>`                      +
            `${stock.symbol}`         +
          `</td>`                     +
          `<td>`                      +
            `${stock.last.value}`     +
            `<br/>`                   +
            `<small>`                 +
            `${stock.last.datetime}`  +
            `</small>`                +
          `</td>`                     +
          `<td>`                      +
            `<span class="${
              stock.change.type == Stock.Type.GAIN ? "text-success" : "text-danger"
            }">`                      +
            `${stock.change.value}`   +
            `</span>`                 +
          `</td>`                     +
          `<td>`                      +
            `<span class="${
              stock.change.type == Stock.Type.GAIN ? "text-success" : "text-danger"
            }">`                      +
            `${stock.change.percent}` +
            `</span>`                 +
          `</td>`                     +
        `</tr>`

      return row
    })

    const htmlString =
        `<div class="panel panel-info">
            <table class="table table-condensed"
              <thead>
                <tr>
                  <td>
                    Symbol
                  </td>
                  <td>
                    Last Trade
                  </td>
                  <td>
                    Change Value
                  </td>
                  <td>
                    Change (%)
                  </td>
                </tr>
              </thead>
              <tbody>`         +
                rows.join(' ') +
              `</tbody>
            </table>
        </div>`

    return htmlString
  }
}

Stock.Type      = { }
Stock.Type.GAIN = 'gain'
Stock.Type.LOSS = 'loss'

export default Stock
