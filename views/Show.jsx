const React = require('react');

const EditDelete = (props) => {
    if (!props.canEdit) {
        return null;
    }
    return (
        <div>
    <a href={`/edit/${props.id}`}>Edit this listing</a>
    <form action={`/${props.id}?_method=DELETE`} method="post">
        <input type="submit" value="delete" />
    </form>
    </div>
    );
  }

class Show extends React.Component {
    render() {
        const {job, canEdit} = this.props;
        return (
            <>
                <h1>{job.title}</h1>
                                <h5>{job.location}</h5>
                                <h5>{job.company}</h5>
                                <h5>Posted: {job.createdAt.toString()}</h5>
                                <h4>Job Description:</h4>
                                <p>{job.description}</p>
                                <h4>Skills required</h4>
                                <ul>{job.skills.map((skill, index) => {
                                    return (
                                        <li key={index}>{skill}</li>
                                    )
                                })}</ul>
                                <EditDelete canEdit={canEdit} id={job._id} />
            </>
        )
    }
}

module.exports = Show;