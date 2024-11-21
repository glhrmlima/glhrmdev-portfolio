import './Skills.css'

import skillCss from '../../assets/imagens/skills/css-3.svg'
import skillGit from '../../assets/imagens/skills/git.svg'
import skillGithub from '../../assets/imagens/skills/github.svg'
import skillHtml from '../../assets/imagens/skills/html-5.svg'
import skillIllustrator from '../../assets/imagens/skills/illustrator.svg'
import skillJavascript from '../../assets/imagens/skills/javascript.svg'
import skillPhotoshop from '../../assets/imagens/skills/photoshop.svg'
import skillReact from '../../assets/imagens/skills/react.svg'
import skillScrum from '../../assets/imagens/skills/scrum.svg'

function Skills() {
    return (
        <section className='skills-section'>
            <div className='skills-div'>
                <h4>
                    Minhas habilidades 
                </h4>
                <div className='skills-icons'>
                    <img src={skillReact} alt='React' />
                    <img src={skillCss} alt='Css 3' />
                    <img src={skillHtml} alt='Html 5' />
                    <img src={skillJavascript} alt='Javascript' />
                    <img src={skillScrum} alt='Scrum' />
                    <img src={skillGit} alt='Git' />
                    <img src={skillGithub} alt='Github' />
                    <img src={skillPhotoshop} alt='Photoshop' />
                    <img src={skillIllustrator} alt='Illustrator' />
                </div>
            </div>
        </section>
    )
}

export default Skills