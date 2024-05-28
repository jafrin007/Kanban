// import React, { useState } from 'react';
// import { useHistory } from "react-router-dom";

// function Register(props) {
//     const [username, setUsername] = useState();
//     const [password, setPassword] = useState();
//     const history = useHistory();

//     async function createUser() {
//         const formData = {
//             username: username,
//             password_hash: password,
//         }

//         const response = await fetch('/users', {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(formData)
//         });
//         const data = await response.json();

//         return data;
//     }

//     function handleSubmit(e) {
//         e.preventDefault();
        
//         createUser().then(data => {
//             props.setToken(data.access_token);
//             localStorage.setItem('token', JSON.stringify(data.access_token));
//             history.push("/");
//         });
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 {/* Username <input type="text" onChange={e => setUsername(e.target.value)} />
//                 Password <input type="password" onChange={e => setPassword(e.target.value)} /> 
//                 <button>Register</button> */}
//                 <p>Username: <input type="text" onChange={e => setUsername(e.target.value)} /></p> 
//                 <p>Password: <input type="password" onChange={e => setPassword(e.target.value)} /></p>
//                 <p><button>Register</button></p>
//             </form>
//         </div>
//     )
// }

// export default Register;


import React, { useState } from 'react';
import { useHistory, Link } from "react-router-dom";
import styled from 'styled-components';

const PageContainer = styled.div`
    display: flex;
    justify-content: flex-start; /* Align items to the start (left side) */
    align-items: center;
    height: 100vh;
    background-image: url('/bg3.png'); // Apply the background image
    background-size: cover; // Ensure the background image covers the entire container
    background-position: center; // Center the background image
`;

const Container = styled.div`
    position: relative; /* Enable positioning */
    top: -20px; /* Move the container 50px up */
    left: 50px; /* Move the container 50px to the right */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(255,255,255,0.8);
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 350px; /* Set a fixed width for the container */
    height: 25rem;
`;

const WelcomeText = styled.h1`
    font-size: 36px;
    margin-bottom: 20px;
    color: #246688;
`;

const RegisterForm = styled.form`
    width: 100%; /* Take the full width of the container */
`;

const FormTitle = styled.h2`
    font-size: 24px;
    margin-bottom: 20px;
    color: #246688;
`;

const FormInput = styled.input`
    width: 100%;
    padding: 12px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;

const FormButton = styled.button`
    width: 100%;
    padding: 12px;
    background-color: #4682b4;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
`;

const ErrorMsg = styled.p`
    color: red;
    margin-top: 10px;
    font-size: 14px;
`;

const LoginLink = styled(Link)`
    display: block;
    text-align: center;
    margin-top: 20px;
    color: #4682b4;
    text-decoration: none;
`;

function Register(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    async function createUser() {
        const formData = {
            username: username,
            password_hash: password,
        }

        const response = await fetch('/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json();

        return data;
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        createUser().then(data => {
            if (data.access_token) { 
                props.setToken(data.access_token);
                localStorage.setItem('token', JSON.stringify(data.access_token));
                history.push("/");
            } else {
                setError(data.message || 'User Already Exists!');
            }
        }).catch(error => {
            setError('An error occurred. Please try again.');
        });
    }

    return (
        <PageContainer>
            <Container>
                <WelcomeText>Join Us!</WelcomeText>
                <RegisterForm onSubmit={handleSubmit}>
                    <FormTitle>Register</FormTitle>
                    <FormInput 
                        type="text" 
                        placeholder="Username" 
                        value={username} 
                        onChange={e => setUsername(e.target.value)} 
                    />
                    <FormInput 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                    />
                    <FormButton>Register</FormButton>
                    {error && <ErrorMsg>{error}</ErrorMsg>}
                    <LoginLink to="/">Already have an account? Login here</LoginLink>
                </RegisterForm>
            </Container>
        </PageContainer>
    )
}

export default Register;
