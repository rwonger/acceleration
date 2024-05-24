import { useEffect, useState } from "react";
import App from "./App";


function Startup() {
    const [isNewUser, setIsNewUser] = useState(() => {
        return !localStorage.getItem("userName");
    })
    const [name, setName] = useState(() => {
        const storedName = localStorage.getItem('userName');
        return storedName || ''; 
    })

    const [inputVal, setInputVal] = useState(name)

    useEffect(() => {
        localStorage.setItem('userName', name);
    }, [name]);

    localStorage.clear();


    function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInputVal(e.target.value);
    }


    function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            setName(inputVal);
        }
    }

    function handleNameRender() {
        return (
            <input
                className="nameInput startup"
                type="text"
                value={inputVal}
                onChange={handleNameChange}
                onKeyDown={handleKeyPress}
                autoFocus
            />
        )

    }

    return (
        <div>
            {isNewUser ? (
                <div className='greeting main-content font-semibold text-slate-100'>
                    Hey there, what's your name?
                    <div>
                        <h2>
                            {handleNameRender()}
                        </h2>
                    </div>
                </div>
            ) : (
                <div>
                    <App />
                </div>
            )}
        </div>
    )
}

export default Startup;