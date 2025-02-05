import React, { useContext } from 'react';
import { Box } from '@mui/material';
import MainButton from './MainButton';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import DataContext from '../context/DataContext';
import useFormSubmit from '../hooks/useFormSubmit';
import { useParams } from 'react-router-dom';
import INITIAL_VALUE, { fields } from '../../env.js';
import useFormInitialization from '../hooks/useFormInitialization.js';
import FormInput from './FormInput.jsx';
import useCountries from '../hooks/useCountries.js';
import useTypeProvider from '../hooks/useTypeProvider.js';
import SiteLogo from './SiteLogo.jsx';
import { handleChangeData } from '../utils/functions.js';



function ServiceForm({ initialValues }) {
  const { id } = useParams();
  const { countryOptions } = useCountries();
  const { types } = useTypeProvider();
  const { addService, updateService, nextId, setNextId } = useContext(DataContext);
  const [data, setData] = useFormInitialization(initialValues || INITIAL_VALUE);
  const { handleFormSubmit, errors } = useFormSubmit(data, setData, addService, updateService, nextId, setNextId);
  const lastFieldIndex = fields.length - 1;
  const specificIndexFields = [0, 1, 2, 3, 4, lastFieldIndex];
  const selectedFieldsByIndex = fields.filter((field, index) => specificIndexFields.includes(index));

  return (
    <Box sx={{ maxWidth: 700, boxShadow: 3, borderRadius: 3, background: 'white' }}>
      <form className="flex gap-6 items-center flex-col justify-center p-5" onSubmit={handleFormSubmit}>
        {/* <SiteLogo className='w-1/2'/> */}
        <FormInput handleChange={(e) => handleChangeData(e, setData)} data={data} errors={errors} countryOptions={countryOptions} types={types} setData={setData} fields={selectedFieldsByIndex}/>
        <MainButton
          Icon={<DownloadDoneIcon />}
          type="submit"
          variant="contained"
          buttonText={id ? "Edit Service" : "Add Service"}
        />
      </form>
    </Box>
  );
}

export default ServiceForm;

