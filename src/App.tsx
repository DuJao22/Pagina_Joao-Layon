/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, lazy, Suspense } from 'react';
import { motion } from 'motion/react';
import Hero from './components/Hero';
import About from './components/About';
import InteractiveTerminal from './components/InteractiveTerminal';

// Lazy load components that are hidden initially to optimize initial bundle size
const Technologies = lazy(() => import('./components/Technologies'));
const Services = lazy(() => import('./components/Services'));
const Differentials = lazy(() => import('./components/Differentials'));
const Demos = lazy(() => import('./components/Demos'));
const Contact = lazy(() => import('./components/Contact'));

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-[#6a00ff]/30 selection:text-[#00f5ff]">
      <Hero />
      <About onUnlock={() => setIsUnlocked(true)} />
      
      {isUnlocked && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Suspense fallback={
            <div className="py-32 flex justify-center items-center">
              <div className="text-[#00f5ff] font-mono animate-pulse flex items-center gap-3">
                <span className="w-2 h-4 bg-[#00f5ff] inline-block" />
                Carregando módulos do sistema...
              </div>
            </div>
          }>
            <Technologies />
            <Services />
            <Differentials />
            <Demos />
            <Contact />
          </Suspense>
        </motion.div>
      )}
      
      <InteractiveTerminal />
      
      <footer className="py-8 text-center text-gray-600 border-t border-[#222] bg-[#0a0a0a]">
        <p>© {new Date().getFullYear()} João Layon. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
