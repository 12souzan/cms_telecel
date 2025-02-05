

import { useState, useEffect } from 'react';

const useTypeProvider = () => {
    const [types, setTypeOptions] = useState([]);
    const [error1, setError] = useState(null);

    useEffect(() => {
        fetch('https://mocki.io/v1/72a34da8-9148-42a8-a1e0-f8ec0aa8fba0')
            .then((response) => response.json())
            .then((data) => {
                const types = data.map((type) => ({
                    value: type.id,
                    text: type.name,
                    description: type.description
                }));
                setTypeOptions(types);
            })
            .catch((err) => {
                setError('Error fetching types data.');
            });
    }, []);

    return { types , error1 };
};

export default useTypeProvider;
