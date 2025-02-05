import React, { useState, useEffect, useContext } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Box } from '@mui/material';
import INITIAL_VALUE from './../../../env.js'
import MainButton from '../MainButton.jsx';
import { customTextField } from '../../utils/style.js';
import useCountries from '../../hooks/useCountries.js';
import useTypeProvider from '../../hooks/useTypeProvider.js';
import useFormSubmit from '../../hooks/useFormSubmit.js';
import DataContext from '../../context/DataContext.jsx';


const fields = [
    { label: 'Service Name', name: 'name' },
    { label: 'Country', name: 'country' },
    { label: 'Service Type', name: 'serviceType' },
    { label: 'Status', name: 'status' },
    { label: 'Phone', name: 'phone' },
    { label: 'Email', name: 'email' },
    { label: 'Last Updated', name: 'lastUpdated', disabled: true },
    { label: 'Website', name: 'website' },
    { label: 'Location', name: 'location' },
    { label: 'Contact Person', name: 'contactPerson' },
    { label: 'Operating Hours', name: 'operatingHours' },
    { label: 'Services Offered', name: 'Offered' },
    { label: 'Service Ratings', name: 'serviceRatings' },
    { label: 'Service Reviews Count', name: 'serviceReviewsCount' },
    { label: 'Additional Notes', name: 'additionalNotes' },
];


const EditServiceModal = ({ open, onClose,  initialValues , updateService = () => {} }) => {
    const { countryOptions } = useCountries();
    const { types } = useTypeProvider();
    const [data, setData] = useState(initialValues || INITIAL_VALUE);
    const { handleFormSubmit, errors } = useFormSubmit(data, setData, updateService);

    useEffect(() => {
        if (initialValues) {
            const updatedValues = {
                ...initialValues
            };
            updateService(updatedValues)
            console.log('updated value', updatedValues)
            setData(updatedValues);
        }
    }, [initialValues, countryOptions, types]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit Service</DialogTitle>
            <DialogContent>
                {fields.map(({ label, name, disabled = false }) => (
                    <TextField
                        key={name}
                        label={label}
                        name={name}
                        value={data[name]}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        disabled={disabled}
                        sx={customTextField}
                    />
                ))}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">Cancel</Button>
                <MainButton onClick={handleFormSubmit} buttonText='Edit' sx={{ width: 'fit-content' }} />
            </DialogActions>
        </Dialog>
    );
};

export default EditServiceModal;
