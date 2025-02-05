import React from 'react';
import { Autocomplete, TextField, Box, ListItemIcon, ListItemText, FormControl, FormHelperText } from '@mui/material';

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
              variant="standard"
              sx={{
                
                '& .MuiInput-underline:before': {
                  borderBottomColor: 'black',
                },
                '& .MuiInput-underline:hover:before': {
                  borderBottomColor: 'black',
                },
                '& .MuiInput-underline.Mui-focused:before': {
                  borderBottomColor: 'black',
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
        {error && helperText && <FormHelperText sx={{margin:0}}>{helperText}</FormHelperText>}
      </FormControl>
    </Box>
  );
}

export default DropDown;
