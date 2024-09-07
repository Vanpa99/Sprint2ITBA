import Logo from "../assets/LogoITPowerBank.png"
function Encabezado() {
    return (
    <div>
        <header class="encabezado">
            <div class="logo">
                <img src={Logo} alt="Logo de la Empresa"/>
            </div>
            <div id="cont_log_index"></div>
            <div id="cont__boton_logout"></div>
        </header>
    </div>
      );
}

export default Encabezado;