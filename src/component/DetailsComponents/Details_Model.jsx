import React, { useContext } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import INITIAL_VALUE from '../../../env.js';
import MainButton from '../MainButton.jsx';
import useCountries from '../../hooks/useCountries.js';
import useTypeProvider from '../../hooks/useTypeProvider.js';
import DataContext from '../../context/DataContext.jsx';
import { fields } from '../../../env.js';
import FormInput from '../FormInput.jsx';
import useFormSubmit from '../../hooks/useFormSubmit.js';
import useFormInitialization from '../../hooks/useFormInitialization.js';
import { handleChangeData } from '../../utils/functions.js';

const Details_Model = ({ open, onClose, initialValues }) => {
    const { countryOptions } = useCountries();
    const { types } = useTypeProvider();
    const { updateService, addService, nextId, setNextId } = useContext(DataContext);
    const [data, setData] = useFormInitialization(initialValues || INITIAL_VALUE);
    const { handleFormSubmit, errors } = useFormSubmit(data, setData, addService, updateService, nextId, setNextId, onClose);


    return (
        <Dialog open={open} onClose={onClose} >
            <DialogTitle>Edit Service</DialogTitle>
            <DialogContent>
                <FormInput
                    handleChange={(e) => handleChangeData(e, setData)}
                    data={data}
                    errors={errors}
                    countryOptions={countryOptions}
                    types={types}
                    setData={setData}
                    fields={fields}
                    // sx={{
                    //    ' .css-kw13he-MuiDialogContent-root': {
 
                    //         overflowY: 'visible !important',
                    //     }
                    // }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">Cancel</Button>
                <MainButton onClick={handleFormSubmit} buttonText='Edit' sx={{ width: 'fit-content' }} />
            </DialogActions>
        </Dialog>
    );
};

export default Details_Model;
