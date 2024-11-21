import './Landing.css'
import landingPhoto from '../../assets/imagens/landing-photo.png'
import guidoPhoto from '../../assets/imagens/guido-landing-page.png'

import githubIcon from '../../assets/imagens/social/github-icon.svg'
import linkedinIcon from '../../assets/imagens/social/linkedin-icon.svg'
import instagramIcon from '../../assets/imagens/social/instagram-icon.svg'
import behanceIcon from '../../assets/imagens/social/behance-icon.svg'

function Landing() {
    return (
        <section className="landing-section">
            <div className='landing-text'>
                <h1>Olá, Mundo!</h1>
                <h3>Sou o Guido</h3>
                <p>
                    Graduando em Análise e Desenvolvimento de Sistemas e Designer com foco em <span className='text-highlight'>desenvolvimento Front-End</span>.
                </p>
                <div className='social-icons'>
                    <a href='https://www.linkedin.com/in/glhrmlima/' target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" />
                    </a>
                    <a href='https://github.com/glhrmlima' target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub" />
                    </a>
                    <a href='https://instagram.com/guidolimaoliveira' target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" />
                    </a>
                    <a href='https://www.behance.net/guidolima' target="_blank" rel="noopener noreferrer">
                    <img src={behanceIcon} alt="Behance" />
                    </a>
                </div>
            </div>
            <div className='landing-img'>
                <img src={guidoPhoto} alt="" />
            </div>
        </section>
    )
}

export default Landing