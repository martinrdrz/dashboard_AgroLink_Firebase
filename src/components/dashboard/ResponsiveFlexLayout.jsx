import React from 'react';
import { Container, Box, Paper } from '@mui/material';
import { ColorCard } from './ColorCard';

export const ResponsiveFlexLayout = () => {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {/* Fila 1 */}
            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 2 }}>
                <Box sx={{ xs: '1 1 100%', sm: '1 1 48%', md: '1 1 32%' }}>
                    <ColorCard colorFondo="Pink" />
                </Box>
                <Box sx={{ xs: '1 1 100%', sm: '1 1 48%', md: '1 1 32%' }}>
                    <ColorCard colorFondo="PaleGreen" />
                </Box>
                <Box sx={{ xs: '1 1 100%', sm: '1 1 48%', md: '1 1 32%' }}>
                    <ColorCard colorFondo="PaleTurquoise" />
                </Box>
            </Box>

            {/* Fila 2 */}
            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 2, mt: 2 }}>
                <Box sx={{ xs: '1 1 100%', sm: '1 1 48%', md: '1 1 32%' }}>
                    <ColorCard colorFondo="Pink" />
                </Box>
                <Box sx={{ xs: '1 1 100%', sm: '1 1 48%', md: '1 1 32%' }}>
                    <ColorCard colorFondo="PaleGreen" />
                </Box>
                <Box sx={{ xs: '1 1 100%', sm: '1 1 48%', md: '1 1 32%' }}>
                    <ColorCard colorFondo="PaleTurquoise" />
                </Box>
            </Box>
        </Container>
    );
};
