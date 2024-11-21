import './Header.css'
import arrowUpRight from '../../assets/imagens/arrow-up-right.svg'

function Header() {
    return (
        <div className='header-div'>
            <section className='header-section'>
                <div>
                    <h1>&lt; glhrmdev &gt;</h1>
                </div>
                <div>
                    <menu>
                        <a href="home">Home</a>
                        <a href="sobre">Sobre</a>
                        <a href="projetos">Projetos</a>
                        <a href="contato">Contato
                            <img src={arrowUpRight} alt="Seta" />
                        </a>
                    </menu>
                </div>
            </section>
        </div>
    )
}

export default Header