const React = require('react');
const Default = require('./Default.jsx')

class Apply extends React.Component {
    render() {
        const {job, seeker} = this.props;
        return (
            <Default authType="seeker">
                <h1>Apply for job</h1>
                <h2>{job.title}</h2>
                <form action="/apply" method="POST">
                    Link to resume (Google Drive, Dropbox, etc.): <input type="text" name="resume" value={seeker.resume}/><br/>
                    Link to cover letter: (or leave blank and type text below) <input type="text" name="coverLetterUrl" /><br/>
                    Cover letter: <input type="textarea" name="coverLetterText" />
                    Relevant skills: <input type="text" name="skills" value={seeker.skills.join('; ')} />
                    <input type="submit" value="Submit Application" />
                </form>
            </Default>
        )
    }
}

module.exports = Apply;