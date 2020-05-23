const React = require('react');
const Default = require('./Default.jsx')

class Index extends React.Component {
    render() {
        return (
            <Default>
                <h1>Abe's List</h1>
                {/*<form action="/sessions/?_method=delete" method="post">
                    <input type={this.props.username ? "submit" : "hidden"} value="Logout" />
        </form>*/}
                <nav><a href='/new'>Add Entry</a></nav>
                <ul>
                    {this.props.jobs.map((job, index) => {
                        return (
                            <li key={index}>
                                <h3><a href={`/info/${job._id}`}>{job.title}</a></h3>
                                <p>{job.location}</p>
                                <p>{job.company}</p>
                                <p>Posted: {job.createdAt.toString()}</p>
                            </li>
                        );
                    })}
                </ul>
            </Default>
        );
    }
}

module.exports = Index;