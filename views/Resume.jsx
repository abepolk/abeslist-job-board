const React = require('react');
const Default = require('./Default.jsx')

class Resume extends React.Component {
    render() {
        return (
            <Default authType="seeker">
                <h1>Add resume and skills</h1>
                <form action="/resume" method="POST">
                    Link to resume (Google Drive, Dropbox, etc.) <input type="text" name="resume" /><br/>
                    Skills (separate by semicolons): <input type="text" name="skills" /><br/>
                    <input type="submit" name="" value="Submit resume and skills" />
                </form>
            </Default>
        )
    }
}

module.exports = Resume;