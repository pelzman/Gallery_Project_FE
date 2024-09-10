import { Routes, Route } from 'react-router-dom';
import Login from '../features/auth/login';
import Layout from '../layouts/admin';
import Dashboard from '../features/admin/pages/dashboard';
// import Home from '../features/client/page/home';
const PrivateRoute = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />

            </Route>

        </Routes>

    )
}

export default PrivateRoute