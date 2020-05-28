const React = require('react');

// Shows logout button if logged in, and visa versa
const LogInOutButton = (props) => {
    if (props.authType === 'none') {
        return (
            <div>
                <form action="/sessions/new/">
                    <input class="log-in-out-button" type="submit" value="Log in" />
                </form>
            </div>
        );
    } else {
        return (
            <form action="/sessions/?_method=delete" method="post">
                <input class="log-in-out-button" type="submit" value="Log out" />
            </form>
        );
    }
}

// Default things are on each page, and include the login and logout buttons, things that go on the top bar
class Default extends React.Component {
    render() {
    const {authType, additionalCss} = this.props; // To decide if the logout button should be shown, or possibly other things
        return (
            <html>
                <head>
                    <title>AbesList</title>
                    <link rel="stylesheet" href="/css/styles.css" />
                    <link rel="stylesheet" href={`/css/${additionalCss}`} />
                </head>
                <body>
                    <header>
                        <div id="button-container">
                            <LogInOutButton authType={authType}/>
                        </div>
                    </header>
                    <div id="main-container">
                        {this.props.children}
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Default;
