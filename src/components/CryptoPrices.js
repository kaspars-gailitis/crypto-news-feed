import React from "react";
import { AppBar, Toolbar } from "react95"

class CryptoPrices extends React.Component {
  render() {
    return (
      <AppBar>
        <Toolbar style={{ justifyContent: 'space-between' }} className="moving-message-container">
          <section className="moving-message">
            <p>
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;BTC: 1234
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;ETH: 1234
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;USDT: 1
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;USDC: 1
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;LTC: 123
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;ADA: 123
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;DOT: 123
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;BCH: 123
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;XLM: 123
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;DOGE: 123
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;XMR: 123
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;BNB: 123
            </p>
          </section>
          <section className="moving-message">
            <p>
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;BTC: 1234
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;ETH: 1234
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;USDT: 1
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;USDC: 1
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;LTC: 123
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;ADA: 123
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;DOT: 123
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;BCH: 123
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;XLM: 123
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;DOGE: 123
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;XMR: 123
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;BNB: 123
            </p>
          </section>
        </Toolbar>
      </AppBar>
    )
  }
}

export default CryptoPrices;