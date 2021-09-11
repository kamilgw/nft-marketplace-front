import { Amount, AmountUnit } from '@lay2/pw-core';

export const shanonToCkb = (value?: string | null) => {
  return value ? new Amount(value, AmountUnit.shannon).toString(AmountUnit.ckb) : 0;
};

export const ckbToShannon = (value?: string | null) => {
  return value ? new Amount(value, AmountUnit.ckb).toString(AmountUnit.shannon) : 0;
};

export const amountToCkb = (value: Amount, unit: AmountUnit = AmountUnit.shannon) =>
  parseFloat(value.toString(unit));
