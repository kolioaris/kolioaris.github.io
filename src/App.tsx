import React, { useEffect, useState } from 'react';
import { Github, Youtube, Sparkles } from 'lucide-react';

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden flex flex-col justify-between">
      <div className={`relative z-10 container mx-auto px-4 flex-1 flex items-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex flex-col items-center justify-center space-y-8 w-full">
          <div className="text-center">
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              kolioaris
            </h1>
          </div>

          <p className="text-xl text-gray-400 max-w-2xl text-center leading-relaxed">
            <Sparkles className="inline-block w-5 h-5 mr-2 text-purple-400" />
            Tech enthusiast and developer. I also play games... sometimes.
          </p>

          <div className="flex gap-8 mt-12">
            <SocialIcon 
              icon={<Github className="w-8 h-8 fill-current" />}
              link="https://github.com/kolioaris"
              color="hover:text-gray-400"
            />
            <SocialIcon 
              icon={
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/>
                </svg>
              }
              link="https://steamcommunity.com/id/kolioaris"
              color="hover:text-blue-500"
            />
            <SocialIcon 
              icon={
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              }
              link="https://youtube.com/@kolioaris"
              color="hover:text-red-500"
            />
          </div>
        </div>
      </div>

      <footer className="relative z-10 container mx-auto px-4 py-6 text-center text-gray-400">
        <div className="flex items-center justify-center gap-2">
          <span>Love from Greece</span>
          <img 
            src="https://www.svgrepo.com/download/405494/flag-for-flag-greece.svg" 
            alt="Greece Flag" 
            className="w-6 h-6"
          />
        </div>
      </footer>
    </div>
  );
}

function SocialIcon({ icon, link, color }) {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-4 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110 ${color}`}
    >
      {icon}
    </a>
  );
}

export default App;