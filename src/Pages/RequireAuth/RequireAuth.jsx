import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const [user, loading] = useAuthState(auth)
    const location = useLocation()
    if (loading) {
        return <Spinner className='d-flex justify-content-center align-items-center' animation="border" variant="danger" />
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children;
};

export default RequireAuth;