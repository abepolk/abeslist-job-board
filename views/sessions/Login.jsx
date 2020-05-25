const React = require('react');

class Login extends React.Component {
    render() {
        const {authType} = this.props;
        if (authType !== 'employer' && authType !== 'seeker') {
            throw 'invalid authType';
        }
        const authTypeString = authType === 'employer' ? 'employer' : 'job seeker'
        return (
            <div>
                <h1>{authType === 'employer' ? 'Employer' : 'Job Seeker'} Log in</h1>
                <form action="/sessions/" method="POST">
                    username: <input type="text" name="username" />
                    <br />
                    password: <input type="password" name="password" />
                    <br />
                    <input type="submit" name="" value="Log in" />
                </form>
                <form action="/users/new/">
                    <input type="submit" name="" value={`Register new ${authTypeString}`} />
                </form>
            </div>
        );
    }
}

module.exports = Login;
