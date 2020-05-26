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
                    <input type="submit" value="Log out" />
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
                <nav><UserOptions authType={authType} /></nav>
                <ul>
                    {jobs.map((job, index) => {
                        return (
                            <li key={index}>
                                <h3><a href={`/info/${job._id}`}>{job.title}</a></h3>
                                <p>{job.location}</p>
                                <p>{job.company}</p>
                                <p>Posted: {job.createdAt.toString()}</p>
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