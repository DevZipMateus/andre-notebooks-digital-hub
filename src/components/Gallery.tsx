import { ProductCarousel } from "./ProductCarousel";

const Gallery = () => {
  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Galeria de trabalhos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja alguns dos nossos trabalhos de reparo, upgrade e manutenção realizados com excelência e dedicação.
          </p>
        </div>
        
        <ProductCarousel />
        
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Clique em qualquer imagem para visualizar em tamanho completo
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;