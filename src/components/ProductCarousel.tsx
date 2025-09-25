import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Array com todas as imagens da galeria
const galleryImages = [
  // Imagens midia_
  ...Array.from({ length: 30 }, (_, i) => ({
    id: `midia_${i + 1}`,
    src: `/galeria/midia_${i + 1}.jpg`,
    alt: `Trabalho de reparo ${i + 1} - André Conserto de Notebooks e PCs`
  })),
  // Imagens WhatsApp
  { id: 'wa1', src: '/galeria/IMG-20250726-WA0034.jpeg', alt: 'Reparo de notebook - André Conserto' },
  { id: 'wa2', src: '/galeria/IMG-20250726-WA0036.jpeg', alt: 'Manutenção de PC - André Conserto' },
  { id: 'wa3', src: '/galeria/IMG-20250726-WA0038.jpeg', alt: 'Upgrade de computador - André Conserto' },
  { id: 'wa4', src: '/galeria/IMG-20250726-WA0072.jpeg', alt: 'Reparo de placa-mãe - André Conserto' },
  { id: 'wa5', src: '/galeria/IMG-20250726-WA0079.jpeg', alt: 'Limpeza de PC Gamer - André Conserto' },
  { id: 'wa6', src: '/galeria/IMG-20250726-WA0097.jpeg', alt: 'Troca de componentes - André Conserto' },
  { id: 'wa7', src: '/galeria/IMG-20250726-WA0132.jpeg', alt: 'Serviço técnico especializado - André Conserto' },
  { id: 'wa8', src: '/galeria/IMG-20250728-WA0008.jpeg', alt: 'Reparo de notebook - André Conserto' },
  { id: 'wa9', src: '/galeria/IMG-20250728-WA0010.jpeg', alt: 'Manutenção preventiva - André Conserto' },
  { id: 'wa10', src: '/galeria/IMG-20250728-WA0045.jpeg', alt: 'Upgrade de hardware - André Conserto' },
  { id: 'wa11', src: '/galeria/IMG-20250728-WA0053.jpeg', alt: 'Reparo de PC - André Conserto' },
  { id: 'wa12', src: '/galeria/IMG-20250728-WA0058.jpeg', alt: 'Limpeza interna - André Conserto' },
  { id: 'wa13', src: '/galeria/IMG-20250728-WA0097.jpeg', alt: 'Troca de pasta térmica - André Conserto' },
  { id: 'wa14', src: '/galeria/IMG-20250728-WA0099.jpeg', alt: 'Reparo técnico - André Conserto' },
  { id: 'wa15', src: '/galeria/IMG-20250729-WA0048.jpeg', alt: 'Manutenção de notebook - André Conserto' },
  { id: 'wa16', src: '/galeria/IMG-20250729-WA0055.jpeg', alt: 'Upgrade de memória - André Conserto' },
  { id: 'wa17', src: '/galeria/IMG-20250729-WA0057.jpeg', alt: 'Reparo de fonte - André Conserto' },
  { id: 'wa18', src: '/galeria/IMG-20250729-WA0060.jpeg', alt: 'Serviço especializado - André Conserto' },
  { id: 'wa19', src: '/galeria/IMG-20250812-WA0052.jpeg', alt: 'Reparo de placa-mãe - André Conserto' },
  { id: 'wa20', src: '/galeria/IMG-20250813-WA0004.jpeg', alt: 'Limpeza profunda - André Conserto' },
  { id: 'wa21', src: '/galeria/IMG-20250813-WA0022.jpeg', alt: 'Troca de HD por SSD - André Conserto' },
  { id: 'wa22', src: '/galeria/IMG-20250813-WA0024.jpeg', alt: 'Reparo de tela - André Conserto' },
  { id: 'wa23', src: '/galeria/IMG-20250814-WA0013.jpeg', alt: 'Manutenção de PC Gamer - André Conserto' },
  { id: 'wa24', src: '/galeria/IMG-20250814-WA0017.jpeg', alt: 'Upgrade de placa de vídeo - André Conserto' },
  { id: 'wa25', src: '/galeria/IMG-20250814-WA0021.jpeg', alt: 'Reparo de notebook - André Conserto' },
  { id: 'wa26', src: '/galeria/IMG-20250814-WA0024.jpeg', alt: 'Limpeza e manutenção - André Conserto' },
  { id: 'wa27', src: '/galeria/IMG-20250814-WA0026.jpeg', alt: 'Troca de componentes - André Conserto' },
  { id: 'wa28', src: '/galeria/IMG-20250814-WA0028.jpeg', alt: 'Reparo técnico - André Conserto' },
  { id: 'wa29', src: '/galeria/IMG-20250814-WA0032.jpeg', alt: 'Upgrade de sistema - André Conserto' },
  { id: 'wa30', src: '/galeria/IMG-20250814-WA0058.jpeg', alt: 'Manutenção preventiva - André Conserto' },
  { id: 'wa31', src: '/galeria/IMG-20250814-WA0062.jpeg', alt: 'Reparo de fonte - André Conserto' },
  { id: 'wa32', src: '/galeria/IMG-20250817-WA0054.jpeg', alt: 'Limpeza de PC - André Conserto' },
  { id: 'wa33', src: '/galeria/IMG-20250817-WA0057.jpeg', alt: 'Troca de pasta térmica - André Conserto' },
  { id: 'wa34', src: '/galeria/IMG-20250817-WA0059.jpeg', alt: 'Reparo de placa-mãe - André Conserto' },
  { id: 'wa35', src: '/galeria/IMG-20250817-WA0063.jpeg', alt: 'Upgrade de hardware - André Conserto' },
  { id: 'wa36', src: '/galeria/IMG-20250817-WA0067.jpeg', alt: 'Manutenção de notebook - André Conserto' },
  { id: 'wa37', src: '/galeria/IMG-20250817-WA0071.jpeg', alt: 'Reparo especializado - André Conserto' },
  { id: 'wa38', src: '/galeria/IMG-20250817-WA0073.jpeg', alt: 'Limpeza profunda - André Conserto' },
  { id: 'wa39', src: '/galeria/IMG-20250817-WA0077.jpeg', alt: 'Troca de componentes - André Conserto' },
  { id: 'wa40', src: '/galeria/IMG-20250818-WA0026.jpeg', alt: 'Reparo de PC - André Conserto' },
  { id: 'wa41', src: '/galeria/IMG-20250818-WA0028.jpeg', alt: 'Manutenção técnica - André Conserto' },
  { id: 'wa42', src: '/galeria/IMG-20250818-WA0030.jpeg', alt: 'Upgrade de memória - André Conserto' },
  { id: 'wa43', src: '/galeria/IMG-20250818-WA0040.jpeg', alt: 'Reparo de notebook - André Conserto' },
  { id: 'wa44', src: '/galeria/IMG-20250818-WA0056.jpeg', alt: 'Limpeza e organização - André Conserto' },
  { id: 'wa45', src: '/galeria/IMG-20250818-WA0060.jpeg', alt: 'Troca de HD por SSD - André Conserto' },
  { id: 'wa46', src: '/galeria/IMG-20250818-WA0065.jpeg', alt: 'Reparo de fonte - André Conserto' },
  { id: 'wa47', src: '/galeria/IMG-20250818-WA0070.jpeg', alt: 'Manutenção preventiva - André Conserto' },
  { id: 'wa48', src: '/galeria/IMG-20250818-WA0074.jpeg', alt: 'Upgrade de PC Gamer - André Conserto' },
  { id: 'wa49', src: '/galeria/IMG-20250818-WA0098.jpeg', alt: 'Reparo técnico - André Conserto' },
  { id: 'wa50', src: '/galeria/IMG-20250818-WA0100.jpeg', alt: 'Limpeza de componentes - André Conserto' },
  { id: 'wa51', src: '/galeria/IMG-20250818-WA0104.jpeg', alt: 'Troca de pasta térmica - André Conserto' },
  { id: 'wa52', src: '/galeria/IMG-20250819-WA0011.jpeg', alt: 'Reparo de placa-mãe - André Conserto' },
  { id: 'wa53', src: '/galeria/IMG-20250819-WA0015.jpeg', alt: 'Manutenção de notebook - André Conserto' },
  { id: 'wa54', src: '/galeria/IMG-20250819-WA0021.jpeg', alt: 'Upgrade de sistema - André Conserto' },
  { id: 'wa55', src: '/galeria/IMG-20250819-WA0023.jpeg', alt: 'Reparo especializado - André Conserto' },
  { id: 'wa56', src: '/galeria/IMG-20250823-WA0027.jpeg', alt: 'Limpeza profunda - André Conserto' },
  { id: 'wa57', src: '/galeria/IMG-20250823-WA0029.jpeg', alt: 'Troca de componentes - André Conserto' },
  { id: 'wa58', src: '/galeria/IMG-20250823-WA0031.jpeg', alt: 'Reparo de PC - André Conserto' },
  { id: 'wa59', src: '/galeria/IMG-20250823-WA0033.jpeg', alt: 'Manutenção técnica - André Conserto' },
  { id: 'wa60', src: '/galeria/IMG-20250823-WA0035.jpeg', alt: 'Upgrade de hardware - André Conserto' },
  { id: 'wa61', src: '/galeria/IMG-20250823-WA0040.jpeg', alt: 'Reparo de notebook - André Conserto' },
  { id: 'wa62', src: '/galeria/IMG-20250823-WA0042.jpeg', alt: 'Limpeza e manutenção - André Conserto' },
  { id: 'wa63', src: '/galeria/IMG-20250830-WA0031.jpeg', alt: 'Troca de pasta térmica - André Conserto' },
  { id: 'wa64', src: '/galeria/IMG-20250830-WA0033.jpeg', alt: 'Reparo de fonte - André Conserto' },
  { id: 'wa65', src: '/galeria/IMG-20250830-WA0048.jpeg', alt: 'Manutenção preventiva - André Conserto' },
  { id: 'wa66', src: '/galeria/IMG-20250830-WA0202.jpeg', alt: 'Upgrade de PC - André Conserto' },
  { id: 'wa67', src: '/galeria/IMG-20250830-WA0255.jpeg', alt: 'Reparo técnico - André Conserto' },
  { id: 'wa68', src: '/galeria/IMG-20250830-WA0272.jpeg', alt: 'Limpeza de componentes - André Conserto' },
  { id: 'wa69', src: '/galeria/IMG-20250830-WA0275.jpeg', alt: 'Troca de HD por SSD - André Conserto' },
  { id: 'wa70', src: '/galeria/IMG-20250830-WA0279.jpeg', alt: 'Reparo de placa-mãe - André Conserto' },
  { id: 'wa71', src: '/galeria/IMG-20250831-WA0000.jpeg', alt: 'Manutenção de notebook - André Conserto' },
  { id: 'wa72', src: '/galeria/IMG-20250831-WA0002.jpeg', alt: 'Upgrade de memória - André Conserto' },
  { id: 'wa73', src: '/galeria/IMG-20250831-WA0012.jpeg', alt: 'Reparo especializado - André Conserto' },
  { id: 'wa74', src: '/galeria/IMG-20250831-WA0014.jpeg', alt: 'Limpeza profunda - André Conserto' },
  { id: 'wa75', src: '/galeria/IMG-20250831-WA0016.jpeg', alt: 'Troca de componentes - André Conserto' },
  { id: 'wa76', src: '/galeria/IMG-20250831-WA0018.jpeg', alt: 'Reparo de PC Gamer - André Conserto' },
  { id: 'wa77', src: '/galeria/IMG-20250831-WA0020.jpeg', alt: 'Manutenção técnica - André Conserto' },
  { id: 'wa78', src: '/galeria/IMG-20250831-WA0026.jpeg', alt: 'Upgrade de placa de vídeo - André Conserto' },
  { id: 'wa79', src: '/galeria/IMG-20250831-WA0061.jpeg', alt: 'Reparo de notebook - André Conserto' },
  { id: 'wa80', src: '/galeria/IMG-20250831-WA0083.jpeg', alt: 'Limpeza e organização - André Conserto' },
  { id: 'wa81', src: '/galeria/IMG-20250908-WA0034.jpeg', alt: 'Troca de pasta térmica - André Conserto' },
  { id: 'wa82', src: '/galeria/IMG-20250908-WA0078.jpeg', alt: 'Reparo de fonte - André Conserto' },
  { id: 'wa83', src: '/galeria/IMG-20250909-WA0015.jpeg', alt: 'Manutenção preventiva - André Conserto' },
  { id: 'wa84', src: '/galeria/IMG-20250909-WA0135.jpeg', alt: 'Upgrade de sistema - André Conserto' },
  // Imagens datadas
  { id: 'date1', src: '/galeria/20250818_164337.jpg', alt: 'Trabalho realizado - André Conserto' },
  { id: 'date2', src: '/galeria/20250818_164342.jpg', alt: 'Serviço técnico - André Conserto' },
  { id: 'date3', src: '/galeria/20250826_153650.jpg', alt: 'Reparo de equipamento - André Conserto' },
  { id: 'date4', src: '/galeria/20250826_153655.jpg', alt: 'Manutenção realizada - André Conserto' },
  { id: 'date5', src: '/galeria/20250826_153726.jpg', alt: 'Upgrade completo - André Conserto' },
  { id: 'date6', src: '/galeria/20250826_153922.jpg', alt: 'Reparo finalizado - André Conserto' }
];

export function ProductCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {galleryImages.map((image) => (
            <CarouselItem key={image.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <div className="p-1">
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-0">
                        <div className="aspect-square overflow-hidden rounded-lg">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] sm:max-w-4xl max-h-[90vh] p-2 sm:p-4">
                    <div className="relative">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto max-h-[70vh] sm:max-h-[80vh] object-contain rounded-lg"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 hidden sm:flex" />
        <CarouselNext className="right-2 hidden sm:flex" />
      </Carousel>
    </div>
  );
}