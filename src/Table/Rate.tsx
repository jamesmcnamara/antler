import * as React from 'react';
import styled from 'styled-components';
import { VelocityTransitionGroup } from 'velocity-react';

import Table from '.';
import { depthColor, toMoney } from '../utils';
import { $Cell } from './types';

interface $Props {
  depth: number;
}

export default function Rate({
  rate,
  base,
  step,
  count,
  depth
}: $Cell & $Props) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <StyledRate onClick={() => setIsOpen(!isOpen)}>
        <In depth={depth}>{toMoney(base)}</In>
        <Out depth={depth}>{toMoney(base / rate)}</Out>
      </StyledRate>
      <VelocityTransitionGroup enter="slideDown" leave="slideUp">
        {isOpen && (
          <Table
            base={base}
            step={step / 10}
            count={count}
            rate={rate}
            depth={depth + 1}
          />
        )}
      </VelocityTransitionGroup>
    </>
  );
}

const StyledRate = styled.div`
  display: flex;
`;

const BaseRate = styled.span`
  display: inline-block;
  color: white;
  width: 50%;
  padding: 1rem;
  font-size: 1.2rem;
`;
interface $RateProps {
  depth: number;
}

const In = styled(BaseRate)`
  background-color: ${(props: $RateProps) =>
    depthColor('#292C35', props.depth)};
  color: white;
  text-align: right;
`;

const Out = styled(BaseRate)`
  background-color: ${(props: $RateProps) =>
    depthColor('#7B8D8E', props.depth)};
  color: white;
`;
