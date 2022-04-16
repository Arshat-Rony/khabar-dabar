import { sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import img from "../../../images/others/logo2.png"
import Sociallogin from '../../Shared/Social/Sociallogin';
import "./SignUp.css"



const SignUp = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [displayName, setDisplayName] = useState('');
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword, user
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile] = useUpdateProfile(auth);
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePass = e => {
        setPass(e.target.value)
    }
    const handleName = e => {
        setDisplayName(e.target.value)
    }
    if (user) {
        navigate('/home')
        console.log(user)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        await createUserWithEmailAndPassword(email, pass)
            .then(res => {

            })
        await updateProfile({ displayName })
    }
    return (
        <div className='form-container text-center'>
            <img className='my-5' style={{ width: "200px" }} src={img} alt="" />
            <div className='my-5 d-flex align-items-center flex-md-row justify-content-center flex-column sign-up-container gap-md-5'>
                <Form onSubmit={handleSubmit}>
                    <Form.Control onBlur={handleName} style={{ height: "50px", background: "rgba(114, 110, 111, 0.200)" }} className="mt-3 w-100 border-0 " type="text" name="name" placeholder="Your Name" required />

                    <Form.Control onBlur={handleEmail} style={{ height: "50px", background: "rgba(114, 110, 111, 0.200)" }} className="mt-3 w-100 border-0 " type="email" name="email" placeholder="Your Email" required />

                    <Form.Control onBlur={handlePass} style={{ height: "50px", background: "rgba(114, 110, 111, 0.200)" }} className="mt-3 w-100 border-0 " type="password" name="passwrod" placeholder="Your password" required />

                    <Form.Control style={{ height: "50px", background: "rgba(114, 110, 111, 0.200)" }} className="mt-3 w-100 border-0 " type="password" name="confirmpassword" placeholder="Your password" required />

                    <FormControl style={{ background: "crimson", height: "50px" }} type="submit" className='text-white mt-3' value="SignUp" />

                    <p className='mt-3' style={{ color: "crimson" }}>Already have an Account? <Link className='text-decoration-none fw-bold' to='/login'>
                        <span className='text-black'>Please Login</span>
                    </Link></p>

                </Form>
                <div className="bg-secondary float " ></div>
                <Sociallogin
                    email={email}
                    password={pass}
                ></Sociallogin>
            </div>

        </div>
    );
};

export default SignUp;