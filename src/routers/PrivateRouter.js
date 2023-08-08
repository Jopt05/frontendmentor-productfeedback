import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({child}) => {

    const { pathname, search } = useLocation();

    return (true)
        ? child
        : <Navigate to="/login" />
}