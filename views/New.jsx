const React = require('react');
const Default = require('./Default.jsx')

class New extends React.Component {
    render() {
        return (
            <Default authType="employer">
                <h1>New Job Position</h1>
                <form action="/" method="POST">
                Job title: <input type="text" name="title" /><br/>
                Company: <input type="text" name="company" /><br/>
                Location: <input type="text" name="location" /><br/>
                    Job description: <input type="textarea" name="description" /><br/>
                    Skills (separate by semicolons): <input type="text" name="skills" /><br/>
                    <input type="submit" name="" value="Create New Job" />
                </form>
            </Default>
        )
    }
}

module.exports = New;