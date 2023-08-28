'use client';

import { useRef, useContext, useEffect } from 'react';
import {
  SelectedSectionContext,
  SelectedSectionContextType,
} from '@/logic/context/SelectedSectionContext';
import useOnScreen from '@/logic/hooks/useOnScreen';

const Home = () => {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const homeIsVisible = useOnScreen(homeRef);
  const aboutIsVisible = useOnScreen(aboutRef);
  const contactIsVisible = useOnScreen(contactRef);
  const projectsIsVisible = useOnScreen(projectsRef);

  const { setSelectedSection } = useContext(
    SelectedSectionContext,
  ) as SelectedSectionContextType;

  useEffect(() => {
    console.log(
      homeIsVisible,
      aboutIsVisible,
      contactIsVisible,
      projectsIsVisible,
    );
    if (homeIsVisible) {
      setSelectedSection('home');
    } else if (aboutIsVisible) {
      setSelectedSection('about');
    } else if (contactIsVisible) {
      setSelectedSection('contact');
    } else if (projectsIsVisible) {
      setSelectedSection('projects');
    }
  }, [
    homeIsVisible,
    aboutIsVisible,
    contactIsVisible,
    projectsIsVisible,
    setSelectedSection,
  ]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white">
      <div id="home" ref={homeRef} className=" bg-red-500 w-full h-[2000px]">
        Home
      </div>
      <div id="about" ref={aboutRef} className="bg-blue-500 w-full h-[2000px]">
        About
      </div>
      <div
        id="contact"
        ref={contactRef}
        className="bg-yellow-500 w-full h-[2000px]"
      >
        Contact
      </div>
      <div
        id="projects"
        ref={projectsRef}
        className="bg-green-500 w-full h-[2000px]"
      >
        Projects
      </div>
    </main>
  );
};

export default Home;
