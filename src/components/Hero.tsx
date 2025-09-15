import { Star, Clock, Shield, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen bg-gradient-hero flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                André Conserto de Notebooks e PCs
              </h1>
              <h2 className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed">
                Profissional com 26 anos de experiência em manutenção e upgrade de hardware PC e software Windows. 
                Reparos rápidos e garantidos com o melhor custo-benefício.
              </h2>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="bg-accent/20 p-2 rounded-lg">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">26</p>
                    <p className="text-white/80 text-sm">Anos de experiência</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">218</p>
                    <p className="text-white/80 text-sm">Avaliações 5 estrelas</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="bg-success/20 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">3</p>
                    <p className="text-white/80 text-sm">Meses de garantia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground border-0 shadow-glow transition-all duration-300 hover:scale-105"
              >
                <Phone className="mr-2 h-5 w-5" />
                <a href="https://wa.me/5511982986431" className="flex items-center">
                  Solicitar orçamento
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 text-white border-white/60 hover:bg-accent hover:text-accent-foreground hover:border-accent backdrop-blur-sm transition-all duration-300"
              >
                Ver serviços
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 text-white/80">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-success" />
                <span className="text-sm">Atendimento 24h</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-accent" />
                <span className="text-sm">Garantia de 3 meses</span>
              </div>
            </div>
          </div>

          {/* Logo/Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <img 
                src={logo} 
                alt="André Notebooks - Especialista em reparo de notebooks e PCs" 
                className="relative z-10 w-full max-w-md h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;