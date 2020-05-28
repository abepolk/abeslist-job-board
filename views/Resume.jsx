const React = require('react');
const Default = require('./Default.jsx')

class Resume extends React.Component {
    render() {
        return (
            <Default authType="seeker">
                <h1>Add resume and skills</h1>
                <div class="form-container" id="form-container-resume">
                    <form action="/resume" method="POST">
                        <label for="resume">Link to resume (Google Drive, Dropbox, etc.)</label>
                        <input type="text" name="resume" /><br/>
                        <label for="skills">Skills (separate by semicolons):</label>
                        <input type="text" name="skills" /><br/>
                        <input class="shadow-box form-submit-button" type="submit" name="" value="Submit resume and skills" />
                    </form>
                </div>
            </Default>
        )
    }
}

module.exports = Resume;