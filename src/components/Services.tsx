import { 
  Laptop, 
  Monitor, 
  HardDrive, 
  Cpu, 
  Settings, 
  ShieldCheck,
  Wrench,
  Download
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <Download className="h-8 w-8" />,
      title: "Formatação de computadores",
      description: "Formatação completa com instalação limpa do sistema operacional"
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Reinstalação de sistemas",
      description: "Windows, Linux e OSX com drivers e atualizações"
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Diagnóstico PC Gamer",
      description: "Diagnóstico preciso para computadores gamer de alto desempenho"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Limpeza completa",
      description: "Limpeza detalhada de hardware e otimização do sistema"
    },
    {
      icon: <HardDrive className="h-8 w-8" />,
      title: "Instalação de softwares",
      description: "Instalação e configuração de programas diversos"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Montagem de PCs",
      description: "Montagem de computadores office, gamer e workstation"
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Reparo em placa-mãe",
      description: "Reparo especializado em placas-mãe de notebook e PC gamer"
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      title: "Manutenção de notebooks",
      description: "Troca de tela, bateria, teclado das maiores marcas"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas para todos os tipos de problemas em computadores e notebooks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/50"
            >
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 text-center text-white">
          <div className="flex items-center justify-center mb-4">
            <ShieldCheck className="h-12 w-12 mr-4" />
            <div>
              <h3 className="text-2xl font-bold">Garantia de 3 meses</h3>
              <p className="text-white/90">Para todos os serviços realizados</p>
            </div>
          </div>
          <p className="text-white/80 max-w-2xl mx-auto">
            Todos os equipamentos reparados recebem 3 meses de garantia. 
            Trabalhamos com estoque local e fornecedor rápido para maior agilidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;