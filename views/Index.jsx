const React = require('react');
const Default = require('./Default.jsx')

const UserOptions = (props) => {
    if (props.authType === 'employer') {
        return (
            <>
                <a class="user-option" href='/new'>Add entry</a><br/>
                <a class="user-option" href='/myjobs'>View my open positions</a>
            </>
        );
    } else if (props.authType === 'seeker') {
        return (
            <>
                <a class="user-option" href='/resume'>Add or update resume and skills</a>
            </>
        );
    } else {
        return null;
    }
};

const OwnerJobOptions = (props) => {
    if (props.authType === 'employer' && props.username === props.job.owner) {
        return (
            <div class="owner-job-options">
                <form action={`/edit/${props.job._id}`}>
                    <input type="submit" value="Edit listing" />
                </form>
                <form action={`/${props.job._id}?_method=delete`} method="post">
                    <input type="submit" value="Remove" />
                </form>
                <form action={`/showApplications/${props.job._id}`}>
                    <input type="submit" value="View applications" />
                </form>
            </div>
        )
    } else {
        return null;
    }
}

class Index extends React.Component {
    render() {
        const {authType, jobs, username} = this.props;
        return (
            <Default authType={authType} additionalCss="Index.css">
                <h1 id="title">Abe's List</h1>
                <h3>Jobs where you need 'em, when you need 'em</h3>
                <div id="user-options-bar"><UserOptions authType={authType} /></div>
                <ul>
                    {jobs.map((job, index) => {
                        const postedDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long', day: 'numeric' }).format(job.createdAt);
                        return (
                            <li class="shadow-box job-listing" key={index}>
                                <a href={`/info/${job._id}`}>
                                    <h3>{job.title}</h3>
                                    <h3 class="company-name">{job.company}</h3>
                                    <h3 class="location">{job.location}</h3>
                                    <p class="date">Posted: {postedDate}</p>
                                </a>
                                <OwnerJobOptions authType={authType} username={username} job={job}/>
                            </li>
                        );
                    })}
                </ul>
            </Default>
        );
    };
}

module.exports = Index;