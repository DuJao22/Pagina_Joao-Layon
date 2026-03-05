/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Demos from './components/Demos';
import Contact from './components/Contact';
import InteractiveTerminal from './components/InteractiveTerminal';
import Differentials from './components/Differentials';

export default function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-[#6a00ff]/30 selection:text-[#00f5ff]">
      <Hero />
      <About />
      <Technologies />
      <Services />
      <Differentials />
      <Demos />
      <Contact />
      <InteractiveTerminal />
      
      <footer className="py-8 text-center text-gray-600 border-t border-[#222] bg-[#0a0a0a]">
        <p>© {new Date().getFullYear()} João Layon. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
