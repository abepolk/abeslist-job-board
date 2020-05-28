const React = require('react');
const Default = require('./Default.jsx')

class MyJobs extends React.Component {
    render() {
        const {jobs} = this.props;
        return (
            <Default authType="employer">
                <h1>My open positions</h1>
                <div id="user-options-bar">
                    <a class="user-option" href='/new'>Add Entry</a><br/>
                    <a class="user-option" href='/'>View all open positions</a>
                </div>
                <ul>
                    {jobs.map((job, index) => {
                        const postedDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long', day: 'numeric' }).format(job.createdAt);
                        return (
                            <li class="shadow-box job-listing" key={index}>
                                <h3><a href={`/info/${job._id}`}>{job.title}</a></h3>
                                <h3 class="company-name">{job.company}</h3>
                                <h3 class="location">{job.location}</h3>
                                <p class="date">Posted: {postedDate}</p>
                                <div class="owner-job-options">
                                    <form action={`/edit/${job._id}`}>
                                        <input type="submit" value="Edit listing" />
                                    </form>
                                    <form action={`/${job._id}?_method=delete`} method="post">
                                        <input type="submit" value="Log out" />
                                    </form>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </Default>
        );
    };
}

module.exports = MyJobs;