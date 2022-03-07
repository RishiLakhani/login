import React from 'react';
import FacebookLogin from 'react-facebook-login';

function Facebook(props) {
    const responseFacebook = (response) => {
        props.setData([response, "Facebook"]);
        if (response.accessToken) {
            props.isLoggedin(true);
        }
    }

    return (
        <div className="App">
            <FacebookLogin
                appId="269689978660517"
                fields="name"
                scope="public_profile,user_friends"
                callback={responseFacebook}
                icon="fa-facebook"
            />
        </div>
    );
}

export default Facebook;