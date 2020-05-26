const React = require('react');
const Default = require('./Default.jsx')

const ApplyButton = (props) => {
    if (!props.canApply) {
        return null;
    }
    return (
        <a href={`/apply/${props.id}`}>Apply now</a>
    )
}

const EditDelete = (props) => {
    if (!props.isOwner) {
        return null;
    }
    return (
        <div>
            <a href={`/showApplications/${props.id}`}>View applications</a><br/>
            <a href={`/edit/${props.id}`}>Edit this listing</a>
            <form action={`/${props.id}?_method=DELETE`} method="post">
                <input type="submit" value="delete" />
            </form>
        </div>
    );
  }

class Show extends React.Component {
    render() {
        const {job, isOwner, canApply, authType} = this.props;
        return (
            <Default authType={authType}>
                <a href="/">View all jobs</a>
                <h1>{job.title}</h1>
                    <h5>{job.location}</h5>
                    <h5>{job.company}</h5>
                    <h5>Posted: {job.createdAt.toString()}</h5>
                    <h4>Job Description:</h4>
                    <p>{job.description}</p>
                    <h4>Skills required</h4>
                    <ul>
                        {job.skills.map((skill, index) => {
                            return (
                                <li key={index}>{skill}</li>
                            )
                            }
                        )}
                    </ul>
                    <ApplyButton id={job._id} canApply={canApply} />
                    <EditDelete isOwner={isOwner} id={job._id} />
            </Default>
        )
    }
}

module.exports = Show;