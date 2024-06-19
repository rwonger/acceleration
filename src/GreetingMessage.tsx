import React, { useEffect, useState } from "react";


interface StartupProps {
    username: string;
  }
  

function GreetingMessage( {username}: StartupProps ) {
    const [time] = useState(getCurrentTime());
    const [name, setName] = useState(() => {
        return localStorage.getItem('userName') || username;
    });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        localStorage.setItem('userName', name);
    }, [name]);

    function getCurrentTime() {
        const date = new Date();
        const hours = date.getHours();
        return { hours };
    }

    function updateMOTD(curr: number) {
        if (0 <= curr && curr < 12) {
            return "morning";
        } else if (12 <= curr && curr < 18) {
            return "afternoon";
        } else {
            return "evening";
        }
    }

    function handleNameDoubleClick() {
        setIsEditing(true);
    }

    function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }

    function handleNameBlur() {
        setIsEditing(false);
    }

    function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            setIsEditing(false);
        }
    }

    function handleNameRender() {
        return (
            isEditing ? (
                <input
                    className="nameInput"
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    onBlur={handleNameBlur}
                    onKeyDown={handleKeyPress}
                    autoFocus 
                />
            ) : (
                <span className="hover:bg-black/25 rounded-2xl px-5 transition">{name}</span>
            )
        )
    }

    return (
        <div>
            <h2 className='greeting' onDoubleClick={handleNameDoubleClick}>
                Good {updateMOTD(time.hours)}, {handleNameRender()}.
            </h2>
        </div>
    );
}

export default GreetingMessage;
