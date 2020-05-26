const React = require('react');
const Default = require('./Default.jsx')

const CoverLetter = (props) => {
    const {application} = props;
    if (application.coverLetterUrl) {
        return (
            <a href={application.coverLetterUrl}>Cover Letter</a>
        )
    } else {
        // This may need to be made more compact
        return (
            <p>{application.coverLetterText}</p>
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
                            <li key={index}>
                                <h4>{application.numMatchingSkills} matching skills</h4>
                                <a href={application.resume}>Resume</a>
                                <CoverLetter application={application} />
                                <p>Skills: {application.skills.join(', ')}</p>
                            </li>
                        );
                    })}
                </ul>
            </Default>
        );
    };
}

module.exports = ShowApplications;