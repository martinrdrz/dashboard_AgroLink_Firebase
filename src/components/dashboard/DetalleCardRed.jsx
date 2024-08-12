import { Box, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export const DetalleCardRed = () => {
    return (
        <Card sx={{ minWidth: 275, maxWidth: 275, borderRadius: 2, boxShadow: 1 }}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Total Users
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                        38,250
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            ml: 2,
                            p: 0.5,
                            borderRadius: 1,
                            bgcolor: '#fbf0e2',
                            color: '#ca6528',
                            border: 1,
                            borderColor: '#ca6528',
                        }}
                    >
                        <ArrowDownwardIcon fontSize="small" />
                        <Typography variant="body2" sx={{ ml: 0.5 }}>
                            35.5%
                        </Typography>
                    </Box>
                </Box>
                <Typography variant="body2" sx={{ mt: 2 }}>
                    You made an extra{' '}
                    <Link href="#" color="primary">
                        8,900
                    </Link>{' '}
                    this year
                </Typography>
            </CardContent>
        </Card>
    );
};
