import React from 'react'
import { ChipIcon } from '@heroicons/react/solid'

export default function Skills() {
  return (
    <section id="skills">
      <div className="py-10">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl fnt-medium title-font text-white mb-4">
            Skills
          </h1>
          <p>
            A small sample of the languages, frameworks and tools I've developed
            throughout my education.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto">
          <div className="p-2 sm:w-1/2">
            <div className="rounded flex p-4" style={{ background: '#640D14' }}>
              <img src="react.png" className="h-6 mr-4" />
              <p>
                <span className="font-medium text-white">React.js</span> - used
                to create this website.
              </p>
            </div>
          </div>
          <div className="p-2 sm:w-1/2">
            <div className="rounded flex p-4" style={{ background: '#640D14' }}>
              <img src="flask.png" className="h-6 mr-4" />
              <p>
                <span className="font-medium text-white">Flask</span> - used to
                make RESTful APIs in Python.
              </p>
            </div>
          </div>
          <div className="p-2 sm:w-1/2">
            <div className="rounded flex p-4" style={{ background: '#640D14' }}>
              <img src="tailwindcss.png" className="h-6 mr-4" />
              <p>
                <span className="font-medium text-white">Tailwind CSS</span> -
                used to style this website.
              </p>
            </div>
          </div>
          <div className="p-2 sm:w-1/2">
            <div className="rounded flex p-4" style={{ background: '#640D14' }}>
              <img src="java.png" className="h-6 mr-4" />
              <p>
                <span className="font-medium text-white">Java & C#</span> -
                using TextPad and Visual Studios.
              </p>
            </div>
          </div>
          <div className="p-2 sm:w-1/2">
            <div className="rounded flex p-4" style={{ background: '#640D14' }}>
              <img src="postgresql.png" className="h-6 mr-4" />
              <p>
                <span className="font-medium text-white">PostgreSQL</span> - and
                other DMSs like MariaDB and PDO.
              </p>
            </div>
          </div>
          <div className="p-2 sm:w-1/2">
            <div className="rounded flex p-4" style={{ background: '#640D14' }}>
              <img src="bash.png" className="text-green-400 h-6 mr-4" />
              <p>
                <span className="font-medium text-white">Bash</span> - used in
                penetration testing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
