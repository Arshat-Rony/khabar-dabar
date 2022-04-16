import React from 'react';
import google from "../../../images/others/google.png"
import facebook from "../../../images/others/facebook.png"
import { useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './SocialLogin.css'
import { async } from '@firebase/util';
import { useLocation, useNavigate } from 'react-router-dom';

const Sociallogin = ({ email, password }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    const [signInWithGoogle, user] = useSignInWithGoogle(auth, { sendEmailVerification: true });
    const [sendEmailVerification] = useSendEmailVerification(
        auth
    );
    if (user) {
        console.log(user)
    }
    const handleGoogle = async (e) => {
        e.preventDefault()
        await signInWithGoogle(email, password)
            .then(res => {
                navigate(from, { replace: true })
            })
        await sendEmailVerification()
    }
    return (
        <div className='social-container d-flex flex-column justify-content-center align-itmes-center gap-4'>
            <button onClick={handleGoogle} className='py-2 border-0' style={{ width: "300px" }}>
                <img className='me-3' style={{
                    width
                        : "40px"
                }} src={google} alt="" />
                Continue with Google
            </button>
            <button className='py-2 border-0' style={{ width: "300px" }}>
                <img style={{
                    width: "40px"
                }} className='me-3' src={facebook} alt="" />
                Continue with Facebook
            </button>
        </div>
    );
};

export default Sociallogin;