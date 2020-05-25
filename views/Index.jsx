const React = require('react');
const Default = require('./Default.jsx')

const EmployerOptions = (props) => {
    if (props.authType === 'employer') {
        return (
            <>
                <a href='/new'>Add Entry</a><a href='/myjobs'>View my open positions</a>
            </>
        );
    } else {
        return null;
    }
};

const EditDeleteJobOptions = (props) => {
    if (props.authType === 'employer' && props.username === props.job.owner) {
        return (
            <>
                <form action={`/edit/${job._id}`}>
                    <input type="submit" value="Edit listing" />
                </form>
                <form action={`/${job._id}?_method=delete`} method="post">
                    <input type="submit" value="Log out" />
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
                <nav><EmployerOptions authType={authType} /></nav>
                <ul>
                    {jobs.map((job, index) => {
                        return (
                            <li key={index}>
                                <h3><a href={`/info/${job._id}`}>{job.title}</a></h3>
                                <p>{job.location}</p>
                                <p>{job.company}</p>
                                <p>Posted: {job.createdAt.toString()}</p>
                                <EditDeleteJobOptions authType={authType} username={username} job={job}/>
                            </li>
                        );
                    })}
                </ul>
            </Default>
        );
    };
}

module.exports = Index;