import { useState } from "react";


function Toggle() {
    const [isOn, setIson] = useState(false);

    return (
        <>
            <button onClick={() => setIson((btn) => !btn)}
                style={{
                    color: isOn ? 'green' : 'red',
                    border: '1px solid currentColor',
                    background: 'transparent',
                    padding: '0.5rem 1rem',
                    fontSize: '1rem',
                    cursor: 'pointer',
                }} >
                {isOn? "ON":"OFF"}
            </button>
        </>
    )
}

export default Toggle;