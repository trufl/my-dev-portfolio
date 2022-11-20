import pdf from '../../images/Tristan-Saragosa.pdf';

function ResumeContainer() {

    return (
        <>
            <div>
                <aside>
                    <button>
                        <a target="_blank" rel='norefferer' href={pdf}>Download My Resume</a>
                    </button>
                </aside>
                <h3>Front-End Proficiencies</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>jQuery</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>Tailwind</li>
                </ul>
            </div>
            <div>
                <h3>Back-End Proficiencies</h3>
                <ul>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL + Sequelize</li>
                    <li>MongoDB + Mongoose</li>
                    <li>REST</li>
                    <li>APIs</li>
                    <li>GraphQL</li>
                </ul>
            </div>
            
        </>
    );
}

export default ResumeContainer;