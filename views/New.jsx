const React = require('react');
const Default = require('./Default.jsx')

class New extends React.Component {
    render() {
        return (
            <Default authType="employer">
                <h1>New Job Position</h1>
                <div id="form-container">
                    <form action="/" method="POST">
                        <label for="title">Job title:</label>
                        <input type="text" name="title" /><br/>
                        <label for="company">Company:</label>
                        <input type="text" name="company" /><br/>
                        <label for="location">Location:</label>
                        <input type="text" name="location" /><br/>
                        <label for="description">Job description:</label><input type="textarea" name="description" /><br/>
                        <label for="skills">Skills (separate by semicolons):</label>
                        <input type="text" name="skills" /><br/>
                        <input type="submit" name="" value="Create New Job" />
                    </form>
                </div>
            </Default>
        )
    }
}

module.exports = New;