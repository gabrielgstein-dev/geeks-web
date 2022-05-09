interface MoneyFilterContract {
  totPactuado: number;
  totExecutado: number;
  weight?: number;
}

enum Signal {
  CRITICAL = '#FF0000',
  WARNING = '#FFFF00',
  ALLOWED = '#2ecc71',
}

const WEIGHT_DEFAULT = 0.8;

const money = (props: MoneyFilterContract): Signal => {
  const { totExecutado, totPactuado, weight = WEIGHT_DEFAULT } = props;

  const eightyPercent = totPactuado * weight;

  if (totExecutado >= totPactuado) {
    return Signal.CRITICAL;
  }

  if (totExecutado >= eightyPercent) {
    return Signal.WARNING;
  }

  return Signal.ALLOWED;
};

export { money };
