const React = require('react');

class Login extends React.Component {
    render() {
        const {authType} = this.props;
        if (authType !== 'employer' && authType !== 'seeker') {
            throw 'invalid authType';
        }
        const authTypeString = authType === 'employer' ? 'employer' : 'job seeker'
        return (
            <html>
                <head>
                    <title>AbesList</title>
                    <link rel="stylesheet" href="/css/styles.css" />
                </head>
                <body>
                    <div id="main-container">
                        <h1>{authType === 'employer' ? 'Employer' : 'Job Seeker'} Log in</h1>
                        <div id="form-container">
                            <form id="login-form" action="/sessions/" method="POST">
                                <label for="username">Username:</label>
                                <input type="text" name="username" /><br/>
                                <label for="password">Password:</label>
                                <input type="password" name="password" /><br/>
                                <input class="shadow-box" type="submit" name="" value="Log in" />
                            </form>
                            <form action="/users/new/">
                                <input id="register-button" class="shadow-box" type="submit" name="" value="Register" />
                            </form>
                        </div>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Login;
