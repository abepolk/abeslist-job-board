const React = require('react');
const Default = require('./Default.jsx')

const CoverLetter = (props) => {
    const {application} = props;
    if (application.coverLetterUrl) {
        return (
            <a class="application-link" href={application.coverLetterUrl}>Cover Letter</a>
        )
    } else {
        // This may need to be made more compact
        return (
            <p class="cover-letter-text">{application.coverLetterText}</p>
        )
    }
}

class ShowApplications extends React.Component {
    render() {
        const {job} = this.props;
        return (
            <Default authType="employer">
                <h1>Applications for {job.title}</h1>
                <h3>Sorted by number of matching skills</h3>
                <ul>
                    {job.applications.sort((application1, application2) => {
                        return application2.numMatchingSkills - application1.numMatchingSkills
                    }).map((application, index) => {
                        return (
                            <li class="application" key={index}>
                                <h3>{application.name}</h3>
                                <h4>{application.numMatchingSkills} matching skills</h4>
                                <a class="application-link" href={application.resume}>Resume</a><br/>
                                <CoverLetter application={application} />
                                <h4>Skills: {application.skills.join(', ')}</h4>
                            </li>
                        );
                    })}
                </ul>
            </Default>
        );
    };
}

module.exports = ShowApplications;