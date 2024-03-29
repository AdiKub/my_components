import isEmail from 'validator/lib/isEmail';
import isInt from 'validator/lib/isInt';
import isIn from 'validator/lib/isIn';
import isURL from 'validator/lib/isURL';

const isEmpty = (value) => value === undefined || value === null || value === '' ;
const join = (rules) => (value, data) =>
  rules.map((rule) => rule(value, data)).filter((error) => !!error)[0];

export const email = (value) =>
  !isEmpty(value) && !isEmail(value) && 'Неверный адрес электронной почты';

export const url = (value) => !isEmpty(value) && !isURL(value) && 'Invalid URL';

export const required = (value) => isEmpty(value) && 'Обязательное поле';

export const minLength = (min) => (value) =>
  !isEmpty(value) && value.length < min && `Must be at least ${min} characters`;

export const maxLength = (max) => (value) =>
  !isEmpty(value) && value.length > max && `Must be no more than ${max} characters`;

export const integer = (value) => value !== undefined && !isInt(value) && 'Must be an integer';

export const phone = (value) =>
  value !== undefined &&
  (!isInt(value) ||
    value.match(/7\d{10}/g) === null ||
    !(value.match(/\d/g).length === 11)) &&
  'Неверный номер телефона';

export const oneOf = (values) => (value) =>
  !isIn(value, values) && `Must be one of: ${values.join(', ')}`;

export const match = (field) => (value, data) => data && value !== data[field] && 'Must match';


export const createValidator = (rules) => (data = {}) => {
  const errors = {};
  Object.keys(rules).forEach((key) => {
    const rule = join([].concat(rules[key]));
    const error = rule(data[key], data);
    if (error) {
      errors[key] = error;
    }
  });
  return errors;
};
