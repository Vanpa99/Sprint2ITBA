import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <p>© 2024 ITPowerBank. Todos los derechos reservados.</p>
            <nav>
                <ul>
                    <li>
                        <Link to="#">Política de Privacidad</Link>
                    </li>
                    <li>
                        <Link to="#">Términos y Condiciones</Link>
                    </li>
                    <li>
                        <Link to="#">Contacto</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;