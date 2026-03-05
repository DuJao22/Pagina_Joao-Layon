import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal as TerminalIcon, X } from 'lucide-react';

export default function InteractiveTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ type: 'input' | 'output', text: string | React.ReactNode }[]>([
    { type: 'output', text: 'Developer Terminal v1.0.0' },
    { type: 'output', text: 'Type "help" to see available commands.' }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output: React.ReactNode = '';

    switch (trimmedCmd) {
      case 'help':
        output = (
          <div className="text-gray-300">
            Available commands:<br/>
            <span className="text-[#00f5ff]">skills</span> - List my technical skills<br/>
            <span className="text-[#00f5ff]">projetos</span> - View my recent projects<br/>
            <span className="text-[#00f5ff]">clear</span> - Clear terminal output<br/>
            <span className="text-[#00f5ff]">contato</span> - Get my contact info
          </div>
        );
        break;
      case 'skills':
        output = (
          <div className="text-gray-300">
            [+] Python<br/>
            [+] Flask<br/>
            [+] JavaScript<br/>
            [+] APIs<br/>
            [+] OpenCV<br/>
            [+] SQLite
          </div>
        );
        break;
      case 'projetos':
        output = (
          <div className="text-gray-300">
            1. Sistema de Clínica<br/>
            2. Sistema de Loja<br/>
            3. Dashboard de Dados<br/>
            4. Automação Empresarial
          </div>
        );
        break;
      case 'contato':
        output = (
          <div className="text-gray-300">
            Email: <a href="mailto:joaolayon.grupohigino@gmail.com" className="text-[#00f5ff] hover:underline">joaolayon.grupohigino@gmail.com</a><br/>
            WhatsApp: <a href="https://wa.me/5531990780959" target="_blank" rel="noopener noreferrer" className="text-[#00f5ff] hover:underline">+55 31 99078-0959</a>
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        return;
      case '':
        return;
      default:
        output = <span className="text-red-400">Command not found: {cmd}</span>;
    }

    setHistory(prev => [...prev, { type: 'input', text: cmd }, { type: 'output', text: output }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#111] border border-[#333] rounded-full flex items-center justify-center text-[#00f5ff] shadow-[0_0_20px_rgba(0,245,255,0.2)] z-40 hover:border-[#00f5ff] transition-colors"
      >
        <TerminalIcon className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-[350px] sm:w-[450px] h-[400px] bg-[#0d0d0d]/95 backdrop-blur-xl border border-[#333] rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            <div className="h-10 bg-[#1a1a1a] border-b border-[#333] flex items-center justify-between px-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={() => setIsOpen(false)} />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-gray-500 font-mono">developer@terminal:~</span>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto font-mono text-sm" onClick={() => inputRef.current?.focus()}>
              {history.map((item, i) => (
                <div key={i} className="mb-2">
                  {item.type === 'input' ? (
                    <div><span className="text-[#00f5ff]">❯</span> {item.text}</div>
                  ) : (
                    <div>{item.text}</div>
                  )}
                </div>
              ))}
              <div className="flex items-center">
                <span className="text-[#00f5ff] mr-2">❯</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none text-white"
                  autoComplete="off"
                  spellCheck="false"
                />
              </div>
              <div ref={bottomRef} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
