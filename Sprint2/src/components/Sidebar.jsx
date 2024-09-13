import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <aside className="cont-nav">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/cuentas">
                            Cuentas
                        </Link>
                    </li>
                    <li>
                        <Link to="/pagar">
                            Pagar
                        </Link>
                    </li>
                    <li>
                        <Link to="/prestamos">
                            Préstamos
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>

    );
}

export default Sidebar;