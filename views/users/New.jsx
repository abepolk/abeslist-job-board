const React = require('react');

class NewUser extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>AbesList</title>
                    <link rel="stylesheet" href="/css/styles.css" />
                </head>
                <body>
                    <div id="main-container">
                        <h1>New User</h1>
                        <div id="form-container">
                        <form action="/users/" method="POST">
                            <label for="username">Username:</label>
                            <input type="text" name="username" />
                            <br />
                            <label for="password">Password:</label>
                            <input type="password" name="password" />
                            <br />
                            <input id="create-user-button" type="submit" value="Create User" />
                        </form>
                        </div>
                    </div>
                </body>
            </html>

        );
    }
}

module.exports = NewUser;
