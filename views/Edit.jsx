const React = require('react');
const Default = require('./Default.jsx')

class Edit extends React.Component {
    render() {
        const {job, authType} = this.props;
        return (
            <Default authType={authType}>
                <h1>Update {job.title}</h1>
                <div class="form-container" id="form-container-edit">
                    <form action={`/${job._id}?_method=PUT`} method="POST">
                        <label for="title">Title:</label>
                        <input type="text" name="title" value={job.title} /><br/>
                        <label for="location">Location:</label>
                        <input type="text" name="location" value={job.location} /><br/>
                        <label for="company">Company:</label>
                        <input type="text" name="company" value={job.company} />
                        <label for="description">Job Description:</label><input type="textarea" name="description" value={job.description} />
                        <label for="skills">Skills required (separated by semicolons):</label>
                        <input type="text" name="skills" value={job.skills.join(';')} />
                        <input class="shadow-box form-submit-button" type="submit" name="" value="Update job" />
                    </form>
                </div>
            </Default>
        )
    }
}

module.exports = Edit;