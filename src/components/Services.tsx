import { 
  Laptop, 
  Monitor, 
  HardDrive, 
  Cpu, 
  Settings, 
  ShieldCheck,
  Wrench,
  Download,
  ChevronDown,
  Battery,
  Gamepad2,
  Keyboard,
  Zap
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Services = () => {
  const serviceCategories = [
    {
      title: "Reparo de Hardware",
      icon: <Wrench className="h-8 w-8" />,
      description: "Soluções especializadas em reparo de componentes",
      services: [
        "Reparo em placa-mãe de notebook",
        "Troca de tela, bateria e teclado de notebook",
        "Instalação de SSD, NVME e Memória RAM",
        "Bateria e Carregadores",
        "Reparo de componentes eletrônicos"
      ]
    },
    {
      title: "PC Gamer",
      icon: <Gamepad2 className="h-8 w-8" />,
      description: "Serviços especializados para computadores gamer",
      services: [
        "Limpeza física e diagnóstico de PC Gamer",
        "Montagem de PCs gamer personalizados",
        "Otimização de performance para jogos",
        "Instalação de placas de vídeo",
        "Overclock seguro de componentes"
      ]
    },
    {
      title: "Notebooks",
      icon: <Laptop className="h-8 w-8" />,
      description: "Manutenção completa para notebooks",
      services: [
        "Troca de tela LCD/LED",
        "Substituição de teclado",
        "Troca de bateria",
        "Reparo de carregadores",
        "Limpeza interna completa"
      ]
    },
    {
      title: "Sistemas Operacionais",
      icon: <Download className="h-8 w-8" />,
      description: "Instalação e configuração de sistemas",
      services: [
        "Reinstalação de Windows",
        "Formatação completa",
        "Instalação de drivers",
        "Configuração de sistema",
        "Instalação de softwares essenciais"
      ]
    },
    {
      title: "Manutenção Geral",
      icon: <Settings className="h-8 w-8" />,
      description: "Serviços diversos de manutenção",
      services: [
        "Limpeza física completa",
        "Diagnóstico de problemas",
        "Montagem de computadores",
        "Instalação de periféricos",
        "E muito mais!"
      ]
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {serviceCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/50"
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary group-hover:scale-110 transition-transform">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {category.description}
                  </p>
                </div>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="w-full justify-between hover:bg-primary/5 hover:border-primary/50"
                    >
                      Ver serviços
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-80 max-h-64 overflow-y-auto bg-background border-border">
                    {category.services.map((service, serviceIndex) => (
                      <DropdownMenuItem 
                        key={serviceIndex}
                        className="cursor-pointer hover:bg-primary/5 focus:bg-primary/5 text-foreground py-3 px-4"
                      >
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-sm">{service}</span>
                        </div>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 lg:mt-16 bg-gradient-primary rounded-2xl p-6 sm:p-8 text-center text-white">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-4 space-y-3 sm:space-y-0">
            <ShieldCheck className="h-10 sm:h-12 w-10 sm:w-12 sm:mr-4" />
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold">Garantia de 3 meses</h3>
              <p className="text-white/90 text-sm sm:text-base">Para todos os serviços realizados</p>
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