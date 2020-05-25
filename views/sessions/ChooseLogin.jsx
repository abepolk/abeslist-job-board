const React = require('react');

class ChooseLogin extends React.Component {
    render() {
        return (
            <div>
                <h1>Choose login type:</h1>
                <form action="/sessions/new/employer">
                    <input type="submit" value="Employer Login" />
                </form>
                <form action="/sessions/new/seeker">
                    <input type="submit" value="Job Seeker Login" />
                </form>
            </div>
        );
    }
}

module.exports = ChooseLogin;
