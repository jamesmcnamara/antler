import './App.css';

import HammerJS from 'hammerjs';
import * as React from 'react';
import Hammer from 'react-hammerjs';

import Header from './Header';
import Table from './Table';

function App() {
  const [step, setStep] = React.useState(1);
  const [invert, setInvert] = React.useState(false);
  const [rate, setRate] = React.useState(0.0015);

  function swipeHandler({ direction }: any) {
    if (direction === HammerJS.DIRECTION_LEFT) {
      setStep(step * 10);
    } else if (direction === HammerJS.DIRECTION_RIGHT) {
      setStep(step / 10);
    }
  }

  return (
    <div>
      <Header
        rate={rate}
        setRate={setRate}
        invert={invert}
        setInvert={setInvert}
      />
      <Hammer onSwipe={swipeHandler}>
        <div>
          <Table
            base={0}
            step={step}
            count={10}
            rate={invert ? 1 / rate : rate}
            depth={0}
          />
        </div>
      </Hammer>
    </div>
  );
}

export default App;
