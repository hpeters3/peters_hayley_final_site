import React from 'react'

export default function Navbar() {
  return (
    <header
      className="md:sticky top-0 z-10"
      style={{ backgroundColor: '#38040E' }}
    >
      <div className=" flex p-5 flex-col md:flex-row items-center">
        <div className="font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="text-xl">
            Hayley Peters
          </a>
        </div>
        <nav className="md:ml-3 md:pl-3 md:border-l md:border-gray-700">
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#resources" className="mr-5 hover:text-white">
            Resources
          </a>
        </nav>
      </div>
    </header>
  )
}
