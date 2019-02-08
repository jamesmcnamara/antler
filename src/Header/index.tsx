import Color from 'color';
import * as React from 'react';
import styled from 'styled-components';

import InputBar from './Input';

interface $Props {
  invert: boolean;
  rate: number;
  setInvert(invert: boolean): void;
  setRate(rate: number): void;
}

export default function Header({ invert, rate, setInvert, setRate }: $Props) {
  return (
    <StyledHeader>
      <Invert type="button" checked={invert} onClick={() => setInvert(!invert)}>
        Invert
      </Invert>
      <InputBar
        value={rate}
        onChange={({ target: { value } }: any) => setRate(value)}
      />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  padding: 1rem;
  justify-content: space-around;
  background-color: ${Color('#292C35')
    .lighten(0.2)
    .toString()};
`;

interface $InvertProps {
  checked: boolean;
}

const Invert = styled.button`
  padding: 1rem;
  color: white;
  background-color: ${(props: $InvertProps) =>
    props.checked ? '#c0ad8e' : 'transparent'};
  border: 2px solid #c0ad8e;
  border-radius: 10%;
  font-size: 1.25rem;
`;
