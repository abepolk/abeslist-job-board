const React = require('react');
const Default = require('./Default.jsx')

class Apply extends React.Component {
    render() {
        const {job, seeker} = this.props;
        return (
            <Default authType="seeker">
                <h1>Apply for job</h1>
                <h2>{job.title}</h2>
                <div class="form-container" id="form-container-apply">
                    <form action="/apply" method="POST">
                        <label for="name">Name:</label>
                        <input type="text" name="name" /><br/>
                        <label for="resume">Link to resume (Google Drive, Dropbox, etc.):</label>
                        <input type="text" name="resume" value={seeker.resume}/><br/>
                        <label for="coverLetter">Link to cover letter: (or leave blank and type text below)</label>
                        <input type="text" name="coverLetterUrl" /><br/>
                        <label for="coverLetterText">Cover letter:</label>
                        <input type="textarea" name="coverLetterText" />
                        <label for="skills">Relevant skills (separated by semicolons):</label><input type="text" name="skills" value={seeker.skills.join('; ')} />
                        <input class="shadow-box form-submit-button" type="submit" value="Submit Application" />
                    </form>
                </div>
            </Default>
        )
    }
}

module.exports = Apply;