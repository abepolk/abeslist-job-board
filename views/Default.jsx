const React = require('react');

class Default extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>AbesList</title>
                </head>
                <body>
                    <form action="/sessions/?_method=delete" method="post">
                    <input type="submit" value="Log out" />
                </form>
                    {this.props.children}
                </body>
            </html>
        );
    }
}

module.exports = Default;
