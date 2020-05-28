const React = require('react');

class ChooseLogin extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>AbesList</title>
                    <link rel="stylesheet" href="/css/styles.css" />
                </head>
                <body>
                    <div id="main-container">
                        <h1>Choose login type:</h1>
                        <div id="choose-login-button-container">
                            <form class="choose-login-button-form" action="/sessions/new/employer">
                                <input class="choose-login-button" type="submit" value="Employer Login" />
                            </form>
                            <form class="choose-login-button-form" action="/sessions/new/seeker">
                                <input class="choose-login-button" type="submit" value="Job Seeker Login" />
                            </form>
                        </div>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = ChooseLogin;
