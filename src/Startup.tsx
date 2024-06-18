import React from 'react';

interface StartupProps {
  onComplete: () => void;
  setUsername: (username: string) => void;
  username: string;
}

function Startup({ onComplete, setUsername, username }: StartupProps) {
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onComplete();
    }
  };

  return (
    <div className='greeting main-content font-semibold text-slate-100'>
      <h1>Hey there, what's your name?</h1>
      <input
        className="nameInput startup"
        type="text"
        value={username}
        onChange={handleNameChange}
        onKeyDown={handleKeyPress}
        autoFocus
      />
    </div>
  );
}

export default Startup;
