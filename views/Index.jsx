const React = require('react');

class Index extends React.Component {
    render() {
        console.log(this.props)
        return (
            <>
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
                        )
                    })}
                </ul>
            </>
        )
    }
}

module.exports = Index;