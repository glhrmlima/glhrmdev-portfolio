import './Footer.css'
import copyright from '../../assets/imagens/copyright.svg'

function Footer() {
    return (
        <section className="footer-section">
            <div className="footer-div">
                <img src={copyright} alt="Copyright" />
                <p>glhrmdev, 2024.</p>
                <p>Todos os direitos reservados.</p>
            </div>
        </section>
    )
}

export default Footer