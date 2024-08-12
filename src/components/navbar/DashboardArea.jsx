import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage, DashboardPage, ProductPage, SettingsPage } from '../../pages';

export const DashboardArea = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
};
