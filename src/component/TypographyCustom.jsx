import React from 'react';
import { Typography, Box } from '@mui/material';

function TypographyCustom({ variant, TypographyContent, sx, icons }) {
    return (
        <Box display="flex" alignItems="center" gap={1}>
            {icons && icons}
            <Typography variant={variant} gutterBottom sx={sx}>
                {TypographyContent}
            </Typography>
        </Box>
    );
}

export default TypographyCustom;
