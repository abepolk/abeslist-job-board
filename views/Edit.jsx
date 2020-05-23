const React = require('react');

class Edit extends React.Component {
    render() {
        const {job, canEdit} = this.props;
        return (
            <>
                <h1>Update {job.title}</h1>
                <form action={`/${job._id}?_method=PUT`} method="POST">
                Title: <input type="text" name="title" value={job.title} />
                Location: <input type="text" name="location" value={job.location} />
                Company: <input type="text" name="company" value={job.company} />
                Job Description: <input type="textarea" name="description" value={job.description} />
                Skills required (separated by semicolons): <input type="text" name="skills" value={job.skills.join(';')} />
                <input type="submit" name="" value="Update job" />
                </form>
            </>
        )
    }
}

module.exports = Edit;