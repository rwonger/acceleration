import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import { useState } from 'react';

const solutions = [
  { name: 'Change Background Image', description: 'Upload your own background image', id: 'change_bg', },
  { name: 'Reset Background Image', description: 'Restore the original background image', id: 'restore_bg', },
  { name: 'Clear Local Storage', description: 'Perform a full reset of Acceleration', id: 'reset', },

]


export default function Settings() {
  const [isOpen, setIsOpen] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        localStorage.setItem('backgroundImage', result);
        window.location.reload();
      };
      reader.readAsDataURL(file);
    }
  };



  return (
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-200 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className={`h-6 w-6 m-2 transition material-symbols-rounded icon${isOpen ? 'text-gray-800 rotate-45' : 'text-slate-200'
          }`}
          aria-hidden="true">settings</i>
      </PopoverButton>

      <Transition
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
        afterLeave={() => setIsOpen(false)}
      >
        <PopoverPanel className="absolute left-2 z-10 flex w-screen max-w-max bottom-full ">
          <div className="w-screen max-w-96 flex-auto overflow-hidden rounded-2xl bg-black bg-opacity-80 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {solutions.map((item) => (
                <button key={item.name}
                className={`group relative flex gap-x-6 rounded-lg p-4 text-left w-full ${
                  item.id === 'reset' ? 'hover:bg-red-600/40' : 'hover:bg-white/15'
                }`}
                  onClick={() => {
                    if (item.id === 'reset') {
                      localStorage.clear();
                      window.location.reload();
                    } else if (item.id === 'change_bg') {
                      document.getElementById('selectedFile')!.click(); // kinda hacky way of reading file in change_bg    
                    } else if (item.id === 'restore_bg') {
                      localStorage.setItem('backgroundImage', localStorage.getItem('backupImage')!);
                      window.location.reload();
                    }
                  }}>
                  <div>
                    {item.name}
                    {item.id === 'change_bg' && (
                      <input type="file" id='selectedFile' style={{ display: "none" }} accept="image/*" onChange={handleFileChange} />
                    )}
                    <p className="mt-1 text-slate-300">{item.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  )
}