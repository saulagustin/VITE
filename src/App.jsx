import { useState } from "react"; 

 

export default function App() { 

  const [correo, setCorreo] = useState(""); 

  const [clave, setClave] = useState(""); 

  const [mensaje, setMensaje] = useState(""); 

  const[edad, setEdad] = useState("");

  const[tamaño, setTamaño] =useState("");

 

  const enviar = (e) => { 

    e.preventDefault(); 

    if (!correo || !clave) { 

      setMensaje("Escribe tu correo y tu contraseña."); 

      return; 

    } 

    setMensaje(`Bienvenido, ${correo}`); 

  }; 

 

  return ( 

    <main style={{ maxWidth: 360, margin: "40px auto", padding: 16 }}> 

      <h1>Iniciar sesión</h1> 

      <form onSubmit={enviar} style={{ display: "grid", gap: 12 }}> 

        <input type="email" placeholder="Correo" value={correo} 

          onChange={(e) => setCorreo(e.target.value)} /> 

        <input type="password" placeholder="Contraseña" value={clave} 

          onChange={(e) => setClave(e.target.value)} /> 

          <input type="edad" placeholder="Edad" value={edad} 
          
          onChange={(e) => setEdad(e.target.value={edad})}/>

          <input type="tamaño" placeholder="tamaño" value={tamaño}
          
          onChange={(e) => setTamaño(e.target.value={tamaño})}/>

        <button type="submit">Entrar</button> 

      </form> 

      <p>{mensaje}</p> 

    </main> 

  ); 

} 