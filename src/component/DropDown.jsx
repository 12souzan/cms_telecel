import React from 'react';
import { Autocomplete, TextField, Box, ListItemIcon, ListItemText, FormControl } from '@mui/material';

function DropDown({ label, options, onChange, value, countries, error, helperText }) {
  return (
    <Box sx={{ minWidth: 350 }}>
      <FormControl fullWidth error={error}>
        <Autocomplete
          value={value || null}
          onChange={(_, newValue) => onChange(newValue)}
          options={options}
          getOptionLabel={(option) => option.text || ""}
          isOptionEqualToValue={(option, val) => option.value === val.value}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              error={error}
              helperText={helperText}
              sx={{
                '& .MuiInputBase-root': {
                  padding: '8px 16px',
                },
              }}
            />
          )}
          renderOption={(props, option) => (
            <li {...props} key={option.value || option.text}>
              <div className="flex items-center">
                {countries && option.flag && (
                  <ListItemIcon>
                    <img
                      src={option.flag}
                      alt={option.text}
                      style={{ width: 24, height: 24, marginRight: 8 }}
                    />
                  </ListItemIcon>
                )}
                <ListItemText primary={option.text} />
              </div>
            </li>
          )}
        />
      </FormControl>
    </Box>
  );
}

export default DropDown;
