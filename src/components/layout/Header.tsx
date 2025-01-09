import React from 'react';
import { Menu, X, Code2, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              
              <span className="text-xl font-bold text-gray-900">新农创(北京)大数据科技有限公司</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/services">服务项目</NavLink>
            <NavLink href="/cases">成功案例</NavLink>
            <NavLink href="/about">关于我们</NavLink>
            <NavLink href="/news">新闻资讯</NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink href="/services">服务项目</MobileNavLink>
              <MobileNavLink href="/cases">成功案例</MobileNavLink>
              <MobileNavLink href="/about">关于我们</MobileNavLink>
              <MobileNavLink href="/news">新闻资讯</MobileNavLink>
              <button className="w-full text-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                联系我们
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-600 hover:text-gray-900 transition-colors flex items-center"
  >
    {children}
    {(href === '/services' || href === '/cases') && (
      <ChevronDown className="ml-1 h-4 w-4" />
    )}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
  >
    {children}
  </a>
);

export default Header;