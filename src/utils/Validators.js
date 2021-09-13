export const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  value.replace(/\s+/g, ' ').trim().length === 0;

export class Validators {
  static required() {
    return (value) => !isEmpty(value);
  }

  static minlength(minlength) {
    return (value) => {
      if (isEmpty(value)) {
        return true;
      }
      const length = !isEmpty(value) ? value.length : 0;
      return !(length < minlength);
    };
  }

  static maxlength(maxlength) {
    return (value) => {
      if (isEmpty(value)) {
        return true;
      }
      const length = !isEmpty(value) ? value.length : 0;
      return !(length > maxlength);
    };
  }

  static pattern(pattern) {
    return (value) => {
      if (isEmpty(value)) {
        return true;
      }
      const regexp = typeof pattern === 'string' ? new RegExp(pattern) : null;
      return regexp && regexp.test(value);
    };
  }

  static email() {
    return Validators.pattern('.+@.+');
  }

  static password(value) {
    return Validators.pattern(value);
  }
}
