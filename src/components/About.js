import { Component } from "react";
import { Divider, Fieldset, Window, WindowContent, WindowHeader } from "react95"

class About extends Component {
  render() {
    return (
      <div className="content">
        <Window>
          <WindowHeader>
            <span>About</span>
          </WindowHeader>
          <WindowContent className="container">
            <Fieldset>
              <p>
                Catch up with breaking crypto news from around the world.
                A live feed of breaking and incoming crypto news.
                Any incoming news is added at the top of the news list.
              </p>
              <br />
              <Divider />
              <br />
              <p>
                Work in progress improvements:
              </p>
              <ol>
                <li>Live crypto currency values using external API</li>
                <li>Crypto value change since market open (24h period)</li>
                <li>News item filtering by region and language</li>
                <li>3 commas API integration</li>
              </ol>
            </Fieldset>
          </WindowContent>
        </Window>
      </div>
    )
  }
}

export default About;