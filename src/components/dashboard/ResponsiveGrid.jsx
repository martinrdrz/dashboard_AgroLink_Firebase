import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { RectangularComponent } from './RectangularComponent';

export const ResponsiveGrid = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 2,
                width: '100%',
            }}
        >
            <Grid
                container
                spacing={2}
                sx={{
                    width: '100%',
                    maxWidth: 1200,
                    border: 2,
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                {[...Array(6)].map((_, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={index}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <RectangularComponent text={`Item ${index + 1}`} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
