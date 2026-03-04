import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';

function App() {
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'مرحباً بك! أنا المعلم الذكي، كيف يمكنني مساعدتك في دروسك اليوم؟' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      // هنا يتم محاكاة الرد، يمكنك ربطه بـ Gemini API لاحقاً
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          role: 'bot', 
          content: `أحسنت بسؤالك عن "${userMessage}". كمعلمك الذكي، سأساعدك في فهم هذا الموضوع بعمق. هل تريد شرحاً مفصلاً أم أمثلة تطبيقية؟` 
        }]);
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50 font-sans" dir="rtl">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-lg flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-white p-2 rounded-lg">
            <Bot className="text-blue-600" size={24} />
          </div>
          <h1 className="text-xl font-bold">المعلم الذكي</h1>
        </div>
        <Sparkles className="text-yellow-300" />
      </header>

      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl shadow-sm ${
              msg.role === 'user' 
                ? 'bg-blue-100 text-blue-900 rounded-tr-none' 
                : 'bg-white text-slate-800 rounded-tl-none border border-slate-200'
            }`}>
              <div className="flex items-center gap-2 mb-1 opacity-70 text-xs">
                {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                <span>{msg.role === 'user' ? 'أنت' : 'المعلم الذكي'}</span>
              </div>
              <p className="leading-relaxed">{msg.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-end">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
              <Loader2 className="animate-spin text-blue-600" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </main>

      {/* Input Area */}
      <footer className="p-4 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="اسأل معلمك الذكي عن أي شيء..."
            className="flex-1 p-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading}
            className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            <Send size={24} />
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
            
