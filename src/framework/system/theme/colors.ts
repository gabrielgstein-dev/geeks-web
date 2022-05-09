export enum Colors {
  Black = '#171819',
  SoftBlack = '#404040',
  White = '#ffffff',
  SoftWhite = '#e1e1e6',
  Red = '#c25343',
  LightRed = '#ff9791',
  Yellow = '#f5d87d',
  Green = '#a0da8c',
  DarkGreen = '#5a7e68',
  GeeksBlue = '#00c4fe'
}
export interface ColorsProps {
  black?: Colors.Black;
  softBlack?: Colors.SoftBlack;
  softWhite?: Colors.SoftWhite;
  white?: Colors.White;
  red?: Colors.Red;
  lightRed?: Colors.LightRed;
  yellow?: Colors.Yellow;
  green?: Colors.Green;
  darkGreen?: Colors.DarkGreen;
  geeksBlue?: Colors.GeeksBlue;
}

export interface ThemeOptions {
  success?: Colors.Green;
  warn?: Colors.Yellow;
  error?: Colors.Red;
  default?: Colors.Black;
}

export interface ThemeColor {
  bg?: Colors;
  bgHover?: Colors;
  text?: Colors;
  textLight?: Colors;
  border?: Colors;
}
