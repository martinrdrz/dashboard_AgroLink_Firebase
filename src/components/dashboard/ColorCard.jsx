import { Box, Card, Typography } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';

export const ColorCard = ({ colorFondo }) => {
    return (
        <Card
            sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: colorFondo,
                borderRadius: 2,
                padding: 2,
                minWidth: 275,
                maxWidth: 275,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 64,
                    height: 64,
                    backgroundColor: colorFondo,
                    borderRadius: 1,
                    mr: 2,
                }}
            >
                <GridViewIcon sx={{ fontSize: 40, color: '#F9A825' }} />
            </Box>
            <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: 'column', alignItems: 'flex-end', mr: 2 }}>
                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                    150+
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Components
                </Typography>
            </Box>
        </Card>
    );
};
