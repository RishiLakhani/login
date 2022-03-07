import GoogleLogin from 'react-google-login';
import React from 'react';

function Google(props) {
    const handleLogin = async (googleData) => {
        const res = await fetch('/api/google-login', {
            method: 'POST',
            body: JSON.stringify({
                token: googleData.tokenId,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const data = await res.json();
        props.setData([data, 'Google']);
        props.isLoggedin(true)
    }

    const handleFailure = (result) => {
        alert(result)
    }

    return (
        <div className="App">
            <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Login with Google"
                onSuccess={handleLogin}
                onFailure={handleFailure}
            />
        </div>
    );
}

export default Google;
