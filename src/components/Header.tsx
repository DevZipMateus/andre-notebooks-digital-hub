import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Fixed header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'shadow-elegant' : ''
    }`} style={{ backgroundColor: '#1f2535' }}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="André Notebooks Logo" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-white hover:text-primary transition-colors font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-white hover:text-primary transition-colors font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-white hover:text-primary transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('galeria')}
              className="text-white hover:text-primary transition-colors font-medium"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-white hover:text-primary transition-colors font-medium"
            >
              Contato
            </button>
          </div>

          {/* Contact Info Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-primary" />
              <a 
                href="https://wa.me/5511982986431" 
                className="text-sm font-medium text-white hover:text-primary transition-colors"
              >
                (11) 98298-6431
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-accent" />
              <span className="text-sm text-white/80">Rua Embaré, 20</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 border-t shadow-elegant" style={{ backgroundColor: '#1f2535' }}>
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="block w-full text-left py-2 text-white hover:text-primary transition-colors font-medium"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="block w-full text-left py-2 text-white hover:text-primary transition-colors font-medium"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="block w-full text-left py-2 text-white hover:text-primary transition-colors font-medium"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('galeria')}
                className="block w-full text-left py-2 text-white hover:text-primary transition-colors font-medium"
              >
                Galeria
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left py-2 text-white hover:text-primary transition-colors font-medium"
              >
                Contato
              </button>
              <div className="pt-4 border-t">
                <div className="flex items-center space-x-2 mb-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a 
                    href="https://wa.me/5511982986431" 
                    className="text-sm font-medium text-white hover:text-primary transition-colors"
                  >
                    (11) 98298-6431
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span className="text-sm text-white/80">Rua Embaré, 20</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;