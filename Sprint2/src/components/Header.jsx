import Logo from "../assets/LogoITPowerBank.png"

function Encabezado( ) {
    
    return (
        <header className="encabezado" >
            <div className="logo">
                <img src={Logo} width="50px" eight="50px" alt="Logo de la Empresa"/>
            </div>
            <h2>¡Bienvenido!</h2>
        </header>  
      );
}

export default Encabezado;