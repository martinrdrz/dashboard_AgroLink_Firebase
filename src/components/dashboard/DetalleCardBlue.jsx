import { Box, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export const DetalleCardBlue = () => {
    return (
        <Card sx={{ minWidth: 275, maxWidth: 275, borderRadius: 2, boxShadow: 1 }}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Total Users
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                        78,250
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            ml: 2,
                            p: 0.5,
                            borderRadius: 1,
                            bgcolor: '#e3f2fd',
                            color: '#1e88e5',
                            border: 1,
                            borderColor: '#1e88e5',
                        }}
                    >
                        <ArrowUpwardIcon fontSize="small" />
                        <Typography variant="body2" sx={{ ml: 0.5 }}>
                            70.5%
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
