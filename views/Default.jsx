const React = require('react');

// Shows logout button if logged in, and visa versa
const LogInOutButton = (props) => {
    if (props.authType === 'none') {
        return (
            <div>
                <form action="/sessions/new/">
                    <input type="submit" value="Log in" />
                </form>
            </div>
        );
    } else {
        return (
            <form action="/sessions/?_method=delete" method="post">
                <input type="submit" value="Log out" />
            </form>
        );
    }
}

// Default things are on each page, and include the login and logout buttons, things that go on the top bar
class Default extends React.Component {
    render() {
    const {authType} = this.props; // To decide if the logout button should be shown, or possibly other things
        return (
            <html>
                <head>
                    <title>AbesList</title>
                    <link rel="stylesheet" href="/css/styles.css" />
                </head>
                <body>
                    <header>
                        <LogInOutButton authType={authType}/>
                    </header>
                    {this.props.children}
                </body>
            </html>
        );
    }
}

module.exports = Default;
