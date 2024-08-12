import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const RectangularComponent = ({ text }) => {
    return (
        <Box
            sx={{
                width: '100%',
                height: 150,
                backgroundColor: 'lightblue',
                borderRadius: 3,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: 3,
                margin: 1,
            }}
        >
            <Typography variant='h6'>{text}</Typography>
        </Box>
    );
};
