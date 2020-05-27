const React = require('react');
const Default = require('./Default.jsx')

const UserOptions = (props) => {
    if (props.authType === 'employer') {
        return (
            <>
                <a href='/new'>Add entry</a><br/>
                <a href='/myjobs'>View my open positions</a>
            </>
        );
    } else if (props.authType === 'seeker') {
        return (
            <>
                <a href='/resume'>Add or update resume and skills</a>
            </>
        );
    } else {
        return null;
    }
};

const OwnerJobOptions = (props) => {
    if (props.authType === 'employer' && props.username === props.job.owner) {
        return (
            <>
                <form action={`/edit/${props.job._id}`}>
                    <input type="submit" value="Edit listing" />
                </form>
                <form action={`/${props.job._id}?_method=delete`} method="post">
                    <input type="submit" value="Delete" />
                </form>
                <form action={`/showApplications/${props.job._id}`}>
                    <input type="submit" value="View applications" />
                </form>
            </>
        )
    } else {
        return null;
    }
}

class Index extends React.Component {
    render() {
        const {authType, jobs, username} = this.props;
        return (
            <Default authType={authType}>
                <h1>Abe's List</h1>
                <h3>Jobs where you need 'em, when you need 'em</h3>
                <nav><UserOptions authType={authType} /></nav>
                <ul>
                    {jobs.map((job, index) => {
                        return (
                            <li key={index}>
                                <a href={`/info/${job._id}`}>
                                    <h3>{job.title}</h3>
                                    <p>{job.location}</p>
                                    <p>{job.company}</p>
                                    <p>Posted: {job.createdAt.toString()}</p>
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