const React = require('react');
const Default = require('./Default.jsx')

class MyJobs extends React.Component {
    render() {
        const {jobs} = this.props;
        return (
            <Default authType="employer">
                <h1>My open positions</h1>
                <nav>
                    <a href='/new'>Add Entry</a><br/>
                    <a href='/'>View all open positions</a>
                </nav>
                <ul>
                    {jobs.map((job, index) => {
                        return (
                            <li key={index}>
                                <h3><a href={`/info/${job._id}`}>{job.title}</a></h3>
                                <p>{job.location}</p>
                                <p>{job.company}</p>
                                <p>Posted: {job.createdAt.toString()}</p>
                                <form action={`/edit/${job._id}`}>
                                    <input type="submit" value="Edit listing" />
                                </form>
                                <form action={`/${job._id}?_method=delete`} method="post">
                                    <input type="submit" value="Log out" />
                                </form>
                            </li>
                        );
                    })}
                </ul>
            </Default>
        );
    };
}

module.exports = MyJobs;