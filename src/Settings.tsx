import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import { useState } from 'react';

const solutions = [
  { name: 'Change Time Format', description: 'Switch between 12h and 24h time format', href: '#', },
  { name: 'Change Background Image', description: 'Upload your own background image', href: '#',},
  { name: 'Change Weather Location', description: 'Adjust your weather location manually', href: '#',},
  { name: 'Clear Local Storage', description: 'Perform a full reset of Acceleration', href: '#',},

]


export default function Settings() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-200 focus:outline-none" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className={`h-6 w-6 m-2 transition material-symbols-rounded icon${
            isOpen ? 'text-gray-800 rotate-45' : 'text-slate-200'
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
                <button key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-white/15 text-left w-full"    
                onClick={() => {
                  if (item.name === 'Clear Local Storage') {
                    localStorage.clear();
                    window.location.reload();
                  }
                }}
>
                  <div>
                    {item.name}
                      {/* <span className="absolute inset-0" /> */}
                      
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