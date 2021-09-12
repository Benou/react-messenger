import { useEffect, useState } from 'react';

const useFormValidation = (props) => {
  const dependencies = Object.entries(props).map(([, value]) => value[0]);
  const [validation, setValidation] = useState({});

  const validate = () => {
    setValidation(
      Object.entries(props).reduce((validation, [key, [value, validators]]) => {
        return {
          ...validation,
          [key]: validators.every((validator) => validator(value)),
        };
      }, {})
    );
  };

  useEffect(() => {
    const timeout = setTimeout(() => validate(), 250);
    return () => clearTimeout(timeout);
  }, dependencies);

  return validation;
};

export default useFormValidation;
