import React, { useEffect, useState } from "react";


const Counter = () => {

    const [segundos, setSegundos] = useState(0);
    const centenas = Math.floor(segundos / 100);
    const decenas = Math.floor((segundos % 100) / 10);
    const unidades = segundos % 10;

    useEffect(() => {
        const interval = setInterval(() => {
            setSegundos(valorSegundos => valorSegundos + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (segundos === 10) {
            alert("¡Has alcanzado los 10 segundos!");
        }
    }, [segundos]);


    return (
        <div className="text-center" id="divprincipal">

            <div className="divCounter">
                <svg
                    className = "iconoReloj"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512">
                    <path
                        d="M0 32C0 14.3 14.3 0 32 0L64 0 320 0l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 11c0 42.4-16.9 83.1-46.9 113.1L237.3 256l67.9 67.9c30 30 46.9 70.7 46.9 113.1l0 11c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0L64 512l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-11c0-42.4 16.9-83.1 46.9-113.1L146.7 256 78.9 188.1C48.9 158.1 32 117.4 32 75l0-11C14.3 64 0 49.7 0 32zM96 64l0 11c0 25.5 10.1 49.9 28.1 67.9L192 210.7l67.9-67.9c18-18 28.1-42.4 28.1-67.9l0-11L96 64zm0 384l192 0 0-11c0-25.5-10.1-49.9-28.1-67.9L192 301.3l-67.9 67.9c-18 18-28.1 42.4-28.1 67.9l0 11z" />
                </svg>

                <div>0</div>
                <div>0</div>

                {segundos < 10 ? (
                    <div>{segundos}</div>
                ) : segundos < 100 ? (
                    <>
                        <div>{decenas}</div>
                        <div>{unidades}</div>
                    </>
                ) : (
                    <>
                        <div>{centenas}</div>
                        <div>{decenas}</div>
                        <div>{unidades}</div>
                    </>
                )}
            </div>

        </div>
    );
};

export default Counter;
