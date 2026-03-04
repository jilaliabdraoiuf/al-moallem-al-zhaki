import React, { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([{ role: 'bot', content: 'مرحباً! أنا المعلم الذكي، كيف أساعدك اليوم؟' }]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', content: input }, { role: 'bot', content: 'أنا أسمعك جيداً! كمعلمك، سأقوم بتحليل سؤالك والرد عليك فور ربط الذكاء الاصطناعي.' }]);
    setInput('');
  };

  return (
    <div style={{ direction: 'rtl', fontFamily: 'sans-serif', backgroundColor: '#f0f4f8', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ backgroundColor: '#2563eb', color: 'white', padding: '15px', textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>المعلم الذكي 🤖</header>
      <main style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ marginBottom: '15px', textAlign: msg.role === 'user' ? 'left' : 'right' }}>
            <div style={{ display: 'inline-block', padding: '10px 15px', borderRadius: '15px', backgroundColor: msg.role === 'user' ? '#dbeafe' : 'white', border: '1px solid #e2e8f0' }}>
              {msg.content}
            </div>
          </div>
        ))}
      </main>
      <footer style={{ padding: '20px', backgroundColor: 'white', borderTop: '1px solid #e2e8f0', display: 'flex', gap: '10px' }}>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="اسأل هنا..." style={{ flex: 1, padding: '10px', borderRadius: '10px', border: '1px solid #cbd5e1' }} />
        <button onClick={handleSend} style={{ backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '10px', cursor: 'pointer' }}>إرسال</button>
      </footer>
    </div>
  );
}

export default App;
      
            
