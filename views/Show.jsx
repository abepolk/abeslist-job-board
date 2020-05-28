const React = require('react');
const Default = require('./Default.jsx')

const ApplyButton = (props) => {
    if (!props.canApply) {
        return null;
    }
    return (
        <div class="owner-job-options">
            <form action={`/apply/${props.id}`}>
                <input type="submit" value="Apply now" />
            </form>
        </div>
    )
}

const EditDelete = (props) => {
    if (!props.isOwner) {
        return null;
    }
    return (
        <div class="owner-job-options">
            <form action={`/showApplications/${props.id}`}>
                <input type="submit" value="View applications" />
            </form>
            <form action={`/edit/${props.id}`}>
                <input type="submit" value="Edit this listing" />
            </form>
            <form action={`/${props.id}?_method=DELETE`} method="post">
                <input type="submit" value="Remove" />
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
                    <div id="show-container" class="shadow-box">
                        <h1>{job.title}</h1>
                        <h3 class="company-name">{job.company}</h3>
                        <h3 class="location">{job.location}</h3>
                        <h5>Posted: {postedDate}</h5>
                        <div id="description-skills-container">
                            <h4>Job Description:</h4>
                            <p>{job.description}</p><br/>
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
                        <ApplyButton id={job._id} canApply={canApply} />
                        <EditDelete isOwner={isOwner} id={job._id} />
                    </div>
            </Default>
        )
    }
}

module.exports = Show;