import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import Services from './components/home/Services';
import About from './components/about/About';
import Banner from './components/common/Banner';
import Cases from './components/cases/Cases';
import News from './components/news/News';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<><Hero /><Services /></>} />
            <Route path="/services" element={<><Banner title="服务项目" /><Services /></>} />
            <Route path="/about" element={<><Banner title="关于我们" /><About /></>} />
            <Route path="/cases" element={<><Banner title="成功案例" /><Cases /></>} />
            <Route path="/news" element={<><Banner title="新闻资讯" /><News /></>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;