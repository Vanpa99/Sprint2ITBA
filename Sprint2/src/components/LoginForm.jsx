// import React from 'react';
// import PropTypes from 'prop-types';

// function LoginForm({ username, password, setUsername, setPassword, handleLogin, error }) {
//   return (
//     <div>
//       <h1>¡Bienvenido a IT POWER BANK!</h1>
//       <br />
//       <h3>Por favor, ingrese sus credenciales para iniciar sesión:</h3>
//       <label>
//         Nombre de usuario:
//         <input 
//           type="text" 
//           value={username} 
//           onChange={(e) => setUsername(e.target.value)} 
//           placeholder="Nombre de usuario" 
//         />
//       </label>
//       <label>
//         Contraseña:
//         <input 
//           type="password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//           placeholder="Contraseña" 
//         />
//       </label>
//       <button onClick={handleLogin}>Iniciar sesión</button>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// }

// LoginForm.propTypes = {
//   username: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired,
//   setUsername: PropTypes.func.isRequired,
//   setPassword: PropTypes.func.isRequired,
//   handleLogin: PropTypes.func.isRequired,
//   error: PropTypes.string,
// };

// export default LoginForm;