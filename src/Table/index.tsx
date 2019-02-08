import * as _ from 'lodash';
import * as React from 'react';

import Rate from './Rate';
import { $Cell } from './types';

interface $Props {
  depth: number;
}

export default function Table({
  base,
  step,
  count,
  rate,
  depth
}: $Props & $Cell) {
  const cells = _.range(1, depth === 0 ? 50 : 10).map(n => ({
    base: base + step * n,
    step,
    rate,
    count,
    depth
  }));
  return (
    <div>
      {cells.map(cell => (
        <Rate {...cell} />
      ))}
    </div>
  );
}
