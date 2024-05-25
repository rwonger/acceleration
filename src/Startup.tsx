import { useState } from "react";
import MainContent from "./MainContent";


function Startup({ onComplete }) {
    localStorage.clear();

    const isNewUser = !localStorage.getItem("userName");

    const [inputVal, setInputVal] = useState(() => {
        return localStorage.getItem('userName') || "";
    })


    function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInputVal(e.target.value);
    }


    function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            localStorage.setItem('userName', inputVal);
            onComplete();
        }
    }

    return (
        <div>
            {isNewUser ? (
                <div className='greeting main-content font-semibold text-slate-100'>
                    Hey there, what's your name?
                    <input
                        className="nameInput startup"
                        type="text"
                        value={inputVal}
                        onChange={handleNameChange}
                        onKeyDown={handleKeyPress}
                        autoFocus
                    />
                </div>) : (<MainContent />)}
        </div>
    )
}

export default Startup;