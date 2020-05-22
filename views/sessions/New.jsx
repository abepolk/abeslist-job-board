const React = require('react');

class LoginUser extends React.Component {
    render() {
        return (
            <div>
                <h1>Log in</h1>
                <form action="/sessions/" method="POST">
                    username: <input type="text" name="username" />
                    <br />
                    password: <input type="password" name="password" />
                    <br />
                    <input type="submit" name="" value="Log in" />
                </form>
            </div>
        );
    }
}

module.exports = LoginUser;
