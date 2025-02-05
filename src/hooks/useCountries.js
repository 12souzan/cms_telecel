import { useState, useEffect } from 'react';

const useCountries = () => {
    const [countryOptions, setCountryOptions] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => {
                const countries = data.map((country) => ({
                    value: country.cca2,
                    text: country.name.common,
                    flag: country.flags.png,
                }));
                setCountryOptions(countries);
            })
            .catch((err) => {
                setError('Error fetching country data.');
            });
    }, []);

    return { countryOptions, error };
};

export default useCountries;
