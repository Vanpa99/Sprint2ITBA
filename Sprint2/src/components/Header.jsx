import Logo from "../assets/LogoITPowerBank.png"
function Encabezado() {
    return (
        <header className="encabezado" >
            <div className="logo">
                <img src={Logo} width="50px" eight="50px" alt="Logo de la Empresa"/>
            </div>
            <div id="cont_log_index"></div>
            <div id="cont__boton_logout"></div>
        </header>
      );
}

export default Encabezado;