import moment from 'moment'
import _ from 'lodash'
import Logger from './../../utils/Logger'

class StockDetails {
  static toHTMLString(stock) {
    const htmlString =
        `<div class="alert alert-${ _.shuffle(["warning", "info", "danger"])[0] }">
          <div class="row">
            <div class="col-xs-6">
              <h4>${stock.t}</h4>
            </div>
            <div class="col-xs-6">
              <div class="text-right">
                <h4>${stock.l_cur}</h4>
                <small>${moment(stock.lt_dts).format('YYYY MMM, Do hh:mm a')}</small>
              </div>
            </div>
          </div>
        </div>`

    return htmlString
  }
}

export default StockDetails
