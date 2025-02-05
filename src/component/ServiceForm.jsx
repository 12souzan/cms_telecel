// import React, { useContext, useState, useEffect } from 'react';
// import DropDown from './DropDown';
// import useCountries from '../hooks/useCountries';
// import useTypeProvider from '../hooks/useTypeProvider';
// import { FormControlLabel, Switch, TextField } from '@mui/material';
// import MainButton from './MainButton';
// import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
// import DataContext from '../context/DataContext';
// import useFormSubmit from '../hooks/useFormSubmit';
// import { activeSwitch, commonTextFieldStyles } from '../utils/style';
// import { useParams } from 'react-router-dom';
// import INITIAL_VALUE from '../../env.js'

// function ServiceForm({ initialValues }) {
//   const { countryOptions } = useCountries();
//   const { types } = useTypeProvider();
//   const { id } = useParams();
//   const [data, setData] = useState(initialValues || INITIAL_VALUE);
//   const { addService, updateService, nextId, setNextId } = useContext(DataContext);
//   const { handleFormSubmit, errors } = useFormSubmit(data, setData, addService, updateService, nextId, setNextId);


//   useEffect(() => {
//     if (initialValues) {
//       const updatedInitialValues = {
//         ...initialValues,
//         country: countryOptions.find(option => option.text === initialValues.country) || { text: initialValues.country, value: initialValues.country }, 
//         serviceType: types.find(option => option.text === initialValues.serviceType) || { text: initialValues.serviceType, value: initialValues.serviceType },
//       };
//       console.log('updated value' ,updatedInitialValues )
//       setData(updatedInitialValues);
//     }
//   }, [initialValues, countryOptions, types]);
  


//   return (
//     <div className="flex flex-col justify-center items-center w-fit bg-[#e523251c] p-6 rounded-md">
//       <form className="flex gap-10 items-center flex-col" onSubmit={handleFormSubmit}>
//         <div className="flex gap-4 w-full flex-col md:flex-row">
//           <TextField
//             id="Company_name"
//             label="Company Name"
//             variant="standard"
//             value={data.name}
//             sx={commonTextFieldStyles}
//             onChange={(e) => setData({ ...data, name: e.target.value })}
//             error={!!errors.name}
//             helperText={errors.name}
//           />
//           <TextField
//             id="Email"
//             label="Email"
//             variant="standard"
//             value={data.email}
//             sx={commonTextFieldStyles}
//             onChange={(e) => setData({ ...data, email: e.target.value })}
//             error={!!errors.email}
//             helperText={errors.email}
//           />
//         </div>

//         <div className="flex gap-4 w-full flex-col md:flex-row">
//           <DropDown
//             label="Select Country"
//             options={countryOptions}
//             onChange={(newValue) => setData({ ...data, country: newValue })}
//             value={data.country}
//             error={!!errors.country}
//             helperText={errors.country}
//             countries="true"
//           />

//           <DropDown
//             label="Select Type"
//             options={types}
//             onChange={(newValue) => setData({ ...data, serviceType: newValue })}
//             value={data.serviceType}
//             error={!!errors.serviceType}
//             helperText={errors.serviceType}
//           />

//         </div>

//         <div className="flex gap-4 w-full items-center flex-col md:flex-row">
//           <TextField
//             id="phone"
//             label="Phone"
//             variant="standard"
//             value={data.phone}
//             onChange={(e) => setData({ ...data, phone: e.target.value })}
//             sx={commonTextFieldStyles}
//             error={!!errors.phone}
//             helperText={errors.phone}
//           />
//           <div className="pt-6">
//             <FormControlLabel
//               control={
//                 <Switch
//                   checked={data.status === 'active'}
//                   onChange={(e) => setData({ ...data, status: e.target.checked ? 'active' : 'inactive' })}
//                   sx={activeSwitch}
//                 />
//               }
//               label={data.status === 'active' ? 'Active' : 'Inactive'}
//             />

//           </div>
//         </div>

//         <MainButton
//           Icon={<DownloadDoneIcon />}
//           type="submit"
//           variant="contained"
//           buttonText={id ? "Edit Service" : "Add Service"}
//         />
//       </form>

//     </div>
//   );
// }

// export default ServiceForm;


import React, { useContext, useState, useEffect } from 'react';
import DropDown from './DropDown';
import useCountries from '../hooks/useCountries';
import useTypeProvider from '../hooks/useTypeProvider';
import { Box, FormControlLabel, Switch, TextField } from '@mui/material';
import MainButton from './MainButton';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import DataContext from '../context/DataContext';
import useFormSubmit from '../hooks/useFormSubmit';
import { activeSwitch, commonTextFieldStyles } from '../utils/style';
import { useParams } from 'react-router-dom';
import INITIAL_VALUE from '../../env.js';

const fields = [
  { label: 'Company Name', name: 'name', type: 'text' },
  { label: 'Email', name: 'email', type: 'email' },
  { label: 'Phone', name: 'phone', type: 'text' },
  { label: 'Country', name: 'country', type: 'dropdown' },
  { label: 'Service Type', name: 'serviceType', type: 'dropdown' },
  { label: 'Status', name: 'status', type: 'switch' }
];

function ServiceForm({ initialValues }) {
  const { countryOptions } = useCountries();
  const { types } = useTypeProvider();
  const { id } = useParams();
  const [data, setData] = useState(initialValues || INITIAL_VALUE);
  const { addService, updateService, nextId, setNextId } = useContext(DataContext);
  const { handleFormSubmit, errors } = useFormSubmit(data, setData, addService, updateService, nextId, setNextId);

  useEffect(() => {
    if (initialValues) {
      const updatedInitialValues = {
        ...initialValues,
        country: countryOptions.find(option => option.text === initialValues.country) || { text: initialValues.country, value: initialValues.country },
        serviceType: types.find(option => option.text === initialValues.serviceType) || { text: initialValues.serviceType, value: initialValues.serviceType },
      };
      console.log('updated value', updatedInitialValues);
      setData(updatedInitialValues);
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
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4, boxShadow: 3, borderRadius: 3 , background:'white' }}>
      <form className="flex gap-10 items-center flex-col justify-center p-5" onSubmit={handleFormSubmit}>
        {/* <div className="flex gap-4 w-full flex-col md:flex-row"> */}
          {fields.slice(0, 3).map(({ label, name, type }) => (
            type === 'text' || type === 'email' ? (
              <TextField
                key={name}
                label={label}
                name={name}
                type={type}
                value={data[name]}
                onChange={handleChange}
                sx={{width:'100%'}}
                error={!!errors[name]}
                helperText={errors[name]}
              />
            ) : null
          ))}
        {/* </div> */}

        {/* <div className="flex gap-4 w-full flex-col md:flex-row"> */}
          {fields.slice(3, 5).map(({ label, name, type }) => (
            type === 'dropdown' ? (
              <DropDown
                key={name}
                label={label}
                options={name === 'country' ? countryOptions : types}
                onChange={(newValue) => setData({ ...data, [name]: newValue })}
                value={data[name]}
                error={!!errors[name]}
                helperText={errors[name]}
                countries='true'
              />
            ) : null
          ))}
        {/* </div> */}

        {/* <div className="flex gap-4 w-full items-center flex-col md:flex-row"> */}
          {fields.slice(5).map(({ label, name, type }) => (
            type === 'switch' ? (
              <div key={name} >
                <FormControlLabel
                  control={
                    <Switch
                      checked={data[name] === 'active'}
                      onChange={(e) => setData({ ...data, [name]: e.target.checked ? 'active' : 'inactive' })}
                      sx={activeSwitch}
                    />
                  }
                  label={data[name] === 'active' ? 'Active' : 'Inactive'}
                />
              </div>
            ) : null
          ))}
        {/* </div> */}

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

