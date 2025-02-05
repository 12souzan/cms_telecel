import { useEffect, useState } from 'react';
import useCountries from './useCountries';
import useTypeProvider from './useTypeProvider';

const useFormInitialization = (initialValues) => {
  const { countryOptions } = useCountries();
  const { types } = useTypeProvider();
  const [data, setData] = useState(initialValues);

  useEffect(() => {
    if (initialValues) {
      const updatedInitialValues = {
        ...initialValues,
        country: countryOptions.find(option => option.text === initialValues.country.text) || { text: initialValues.country.text || initialValues.country, value: initialValues.country.value || initialValues.country },
        serviceType: types.find(option => option.text === initialValues.serviceType.text) || { text: initialValues.serviceType.text || initialValues.serviceType,  value: initialValues.country.value || initialValues.country },
      };
      setData(updatedInitialValues);
      // console.log("Updated intial values" , updatedInitialValues)
    }
  }, [initialValues, countryOptions, types]);

  return [data, setData];
};

export default useFormInitialization;
