import { Award, Clock, Users, ShieldCheck, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "26 anos de experiência",
      description: "Mais de duas décadas trabalhando com manutenção de computadores"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "218 avaliações 5 estrelas",
      description: "Excelência reconhecida por todos os nossos clientes"
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Transparência total",
      description: "Diagnóstico claro e orçamento sem surpresas"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Melhor custo-benefício",
      description: "Preços justos com qualidade profissional"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Sobre a André Notebooks
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Profissional com <strong className="text-foreground">26 anos de experiência</strong> em 
                  manutenção e upgrade de hardware PC e software Windows, sempre procurando o melhor 
                  custo-benefício para a manutenção de computadores de mesa e notebooks.
                </p>
                <p>
                  Resolvo qualquer problema que dê em seu computador de forma <strong className="text-foreground">rápida e transparente</strong>. 
                  Ofereço 3 meses de garantia para todos os equipamentos e disponho de estoque local com fornecedor rápido.
                </p>
                <p className="text-primary font-semibold text-xl">
                  "Reparos rápidos e garantidos"
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <Card key={index} className="border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <div className="text-primary">
                          {highlight.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {highlight.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats & Testimonials */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="bg-gradient-hero rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">Nossos números</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">26</div>
                  <div className="text-white/80">Anos de experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">218</div>
                  <div className="text-white/80">Avaliações 5★</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-success mb-2">3</div>
                  <div className="text-white/80">Meses garantia</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24h</div>
                  <div className="text-white/80">Atendimento</div>
                </div>
              </div>
            </div>

            {/* Google Reviews Badge */}
            <Card className="bg-white border-border/50">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                <h4 className="font-bold text-lg mb-2">218 avaliações no Google</h4>
                <p className="text-muted-foreground mb-4">
                  Todas as 218 avaliações são 5 estrelas, comprovando a qualidade do nosso trabalho
                </p>
                <a 
                  href="https://share.google/hcyZdTQCODM098FaT" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Ver avaliações no Google
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;