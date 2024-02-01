import { useState } from "react";

function Mensaje3({ mensaje }) {
    const [estado, setEstado] = useState("cambio desde el estado");
    return (
        <div>
            <h1>
                Hola {mensaje} {estado}
            </h1>
        </div>
    );
}

export default Mensaje3;
