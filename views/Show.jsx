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
        const postedDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long', day: 'numeric' }).format(job.createdAt);
        return (
            <Default authType={authType} additionalCss="Show.css">
                <div id="user-options-bar">
                    <a class="user-option" href="/">View all jobs</a>
                </div>
                    <div class="shadow-box">
                        <h1>{job.title}</h1>
                        <h3 class="company-name">{job.company}</h3>
                        <h3 class="location">{job.location}</h3>
                        <h5>Posted: {postedDate}</h5>
                        <h4>Job Description:</h4>
                        <div id="description-skills-container">
                            <p>{job.description}</p>
                            <h4>Skills required:</h4>
                            <ul id="skills-list">
                                {job.skills.map((skill, index) => {
                                    return (
                                        <li key={index}>{skill}</li>
                                    )
                                    }
                                )}
                            </ul>
                        </div>
                    </div>
                    <ApplyButton id={job._id} canApply={canApply} />
                    <EditDelete isOwner={isOwner} id={job._id} />
            </Default>
        )
    }
}

module.exports = Show;