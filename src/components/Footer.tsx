import { Phone, Mail, MapPin, Instagram, Star } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={logo} alt="André Notebooks" className="h-16 w-auto" />
            <p className="text-secondary-foreground/80 leading-relaxed">
              26 anos de experiência em manutenção de computadores e notebooks. 
              Reparos rápidos e garantidos.
            </p>
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm text-secondary-foreground/80">218 avaliações</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Serviços</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>Formatação de computadores</li>
              <li>Diagnóstico PC Gamer</li>
              <li>Limpeza completa</li>
              <li>Montagem de PCs</li>
              <li>Reparo em placa-mãe</li>
              <li>Manutenção de notebooks</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <a 
                  href="https://wa.me/5511982986431" 
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  (11) 98298-6431
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <a 
                  href="mailto:andrenotebooks@outlook.com" 
                  className="text-secondary-foreground/80 hover:text-accent transition-colors"
                >
                  andrenotebooks@outlook.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-success" />
                <span className="text-secondary-foreground/80">
                  Rua Embaré, 20<br />
                  Mirandópolis, São Paulo - SP
                </span>
              </div>
            </div>
          </div>

          {/* Social & Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Redes sociais</h3>
            <div className="space-y-3">
              <a 
                href="https://www.instagram.com/andreconsertos_/?e=b0b65776-b5ab-4453-a520-7218d37f33ed&g=5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-secondary-foreground/80 hover:text-pink-500 transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span>@andreconsertos_</span>
              </a>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium mb-2">Atendimento</h4>
              <p className="text-secondary-foreground/80 text-sm">
                24 horas<br />
                Mediante agendamento
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-secondary-foreground/80 text-sm">
              © 2024 André Conserto de Notebooks e PCs. Todos os direitos reservados.
            </div>
            <div className="text-secondary-foreground/80 text-sm">
              CNPJ: 53.075.246/0001-99
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;