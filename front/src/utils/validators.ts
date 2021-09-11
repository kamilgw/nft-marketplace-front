import { Address, AddressType, Amount, AmountUnit } from '@lay2/pw-core';
import { ValidatorRule } from 'rc-field-form/lib/interface';
import { differenceInMinutes, isValid } from 'date-fns';

export const validateAddress: ValidatorRule['validator'] = async (_rule, value) => {
  const address = new Address(value, AddressType.ckb);
  if (!address.valid()) {
    throw new Error('Invalid address');
  }
};

export const validatePositiveInt: ValidatorRule['validator'] = async (_rule, value) => {
  if (typeof value !== 'string' || !/^\d+$/.test(value)) {
    throw new Error('Invalid int');
  }
};

export const validateCkb: ValidatorRule['validator'] = async (_rule, value) => {
  // throws in case of error
  new Amount(value, AmountUnit.ckb);
};

export const validateEndDate: ValidatorRule['validator'] = async (_rule, value) => {
  const parsed = new Date(value);
  if (!isValid(parsed) || differenceInMinutes(parsed, Date.now()) < 60) {
    throw new Error('Invalid end date');
  }
};

export const validateMinimumAmount: ValidatorRule['validator'] = async (rule, value) => {
  console.log(rule.min);
  const amount = new Amount(value, AmountUnit.ckb);
  if (amount.lt(new Amount('61', AmountUnit.ckb))) {
    throw new Error('Not enough withdrawal');
  }
};

export const validateMinimumWithdrawalAmount: ValidatorRule['validator'] = async (_rule, value) => {
  const amount = new Amount(value, AmountUnit.ckb);
  if (amount.lt(new Amount('61', AmountUnit.ckb))) {
    throw new Error('Not enough withdrawal');
  }
};

export const validatePositiveDecimal: ValidatorRule['validator'] = async (_rule, value) => {
  if (value && (typeof value !== 'string' || !/^[+]?\d*(?:[.]\d*)?$/.test(value))) {
    throw new Error('Invalid decimal');
  }
};
export const validateUrl: ValidatorRule['validator'] = async (_rule, value) => {
  if (value && (typeof value !== 'string' || !/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i.test(value))) {
    throw new Error('Invalid decimal');
  }
};