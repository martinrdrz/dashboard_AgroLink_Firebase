import { Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const TextCard = () => {
    return (
        <Card sx={{ minWidth: 275, maxWidth: 275 }}>
            <CardContent>
                <Typography variant="h6" color="primary.main" gutterBottom>
                    Recent Deposits
                </Typography>
                <Typography variant="h4" component="div">
                    $3,024.00
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    on 15 March, 2019
                </Typography>
                <Link href="#" underline="hover">
                    View balance
                </Link>
            </CardContent>
        </Card>
    );
};
