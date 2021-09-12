export const isEmpty = (value) =>
  value === undefined || value === null || value.replace(/\s+/g, ' ').trim().length === 0;

export class Validators {
  static required() {
    return (value) => !isEmpty(value);
  }
}
