import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <p>© 2024 ITPowerBank. Todos los derechos reservados.</p>
            <nav>
                <ul>
                    <li>
                        <Link href="#">Política de Privacidad</Link>
                    </li>
                    <li>
                        <Link href="#">Términos y Condiciones</Link>
                    </li>
                    <li>
                        <Link href="#">Contacto</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Footer;