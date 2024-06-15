import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import { Cog6ToothIcon } from '@heroicons/react/20/solid'
import {
  ChartPieIcon,
  CursorArrowRaysIcon,

} from '@heroicons/react/24/outline'
import { useState } from 'react';

const solutions = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },

]


export default function Settings() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-200 focus:outline-none" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className={`h-6 w-6 m-2 transition material-symbols-outlined icon${
            isOpen ? 'text-gray-400 rotate-45' : 'text-slate-200'
          }`} 
          aria-hidden="true">settings</i>
        <Cog6ToothIcon 
          className={`h-6 w-6 m-2 transition ${
            isOpen ? 'text-gray-400 rotate-45' : 'text-slate-200'
          }`} 
          aria-hidden="true" 
        />
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
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-2xl bg-black bg-opacity-80 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {solutions.map((item) => (
                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon className="h-6 w-6 text-slate-600 group-hover:text-indigo-600" aria-hidden="true" />
                  </div>
                  <div>
                    <a href={item.href} className="font-semibold text-slate-200">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-slate-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  )
}