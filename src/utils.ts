import Color from 'color';

export function toMoney(amt: number): string {
  const asString = amt == Math.floor(amt) ? amt.toString() : amt.toFixed(2);
  return asString.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function depthColor(color: string, depth: number) {
  return Color(color)
    .darken(0.2 * depth)
    .toString();
}
