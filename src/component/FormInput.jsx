import { FormControlLabel, Switch, TextField } from '@mui/material';
import React from 'react';
import DropDown from './DropDown';
import { activeSwitch } from '../utils/style';

function FormInput({ handleChange, data, errors, countryOptions, types, setData, fields }) {
  return (
    <div className="flex items-center flex-col gap-5">
      {fields.map(({ label, name, type, disabled }) => {
        switch (type) {
          case 'text':
          case 'email':
          case 'number':
            return (
              <TextField
                key={name}
                label={label}
                name={name}
                type={type}
                value={data[name] || ''}
                onChange={handleChange}
                sx={{ width: '100%' , margin: "10px !important" }}
                error={!!errors[name]}
                helperText={errors[name]}
                disabled={disabled}
              />
            );
          case 'dropdown':
            return (
              <DropDown
                key={name}
                label={label}
                sx={{ width: '100%' , margin: "10px !important" }}
                options={name === 'country' ? countryOptions : types}
                onChange={(newValue) => setData({ ...data, [name]: newValue })}
                value={data[name]}
                error={!!errors[name]}
                helperText={errors[name]}
                countries="true"
              />
            );
          case 'switch':
            return (
              <div key={name}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={data[name] === 'active'}
                      onChange={(e) =>
                        setData({ ...data, [name]: e.target.checked ? 'active' : 'inactive' })
                      }
                      sx={activeSwitch}
                    />
                  }
                  label={data[name] === 'active' ? 'Active' : 'Inactive'}
                />
              </div>
            );
          default:
            return (
              <TextField
                key={name}
                label={label}
                name={name}
                value={data[name] || ''}
                onChange={handleChange}
                sx={{ width: '100%' , margin: "10px !important" }}
                error={!!errors[name]}
                helperText={errors[name]}
                disabled={disabled}
              />
            );
        }
      })}
    </div>
  );
}

export default FormInput;
