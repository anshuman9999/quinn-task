import React from "react";
import { returnNthMonth, returnNextMonth, returnPreviousMonth } from '../utils';
import Weeks from './Weeks';
import Month from './Month';
const MONTH_HEIGHT = (window.innerWidth >= 600) ? 1000 : 900;
const HEIGHT = 1000000;

class Calendar extends React.Component {
  state = {
    index: 0,
    date: new Date()
  };
  ref = React.createRef();
  halfMark = 0;

  componentDidMount() {
    const { current } = this.ref;
    current.scrollTop = (current.scrollHeight - current.clientHeight) / 2;
    this.halfMark = (current.scrollHeight / 2) / MONTH_HEIGHT;
    console.log(MONTH_HEIGHT)
  }

  handleScroll = e => {
    const target = e.target;
    const top = target.scrollTop + target.clientHeight / 4;
    const month = Math.floor(top / MONTH_HEIGHT);
    if (month !== this.state.index) {
      this.setState({ index: month - this.halfMark });
    }
  };

  render() {
    const date = new Date(2020, 9, 17);
    const index = this.state.index;
    const indexedDate = returnNthMonth(date, index)

    return (
      <>

        <Weeks />
        <div className="calendar-app"
        >
          <div ref={this.ref} onScroll={this.handleScroll}
            className="months-container"
          >
            <div style={{ height: HEIGHT + 'px', position: "relative" }}>
              <Month
                onDayClick={this.handleDayClick}
                top={`${(index + this.halfMark - 1) * MONTH_HEIGHT}px`}
                date={returnPreviousMonth(indexedDate)}
              />
              <Month
                onDayClick={this.handleDayClick}
                top={`${(index + this.halfMark) * MONTH_HEIGHT}px`}
                date={indexedDate}
                className="bold"
              />
              <Month
                onDayClick={this.handleDayClick}
                top={`${(index + 1 + this.halfMark) * MONTH_HEIGHT}px`}
                date={returnNextMonth(indexedDate)}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Calendar;