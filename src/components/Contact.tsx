import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Entre em contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Agende seu atendimento e tenha seu equipamento funcionando rapidamente
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-border/50 hover:shadow-elegant transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Telefone / WhatsApp</h3>
                    <p className="text-muted-foreground mb-3">
                      Entre em contato via WhatsApp para atendimento rápido
                    </p>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      <a href="https://wa.me/5511982986431" className="flex items-center">
                        (11) 98298-6431
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:shadow-elegant transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-muted-foreground mb-3">
                      Envie sua dúvida por email e responderemos em breve
                    </p>
                    <a 
                      href="mailto:andrenotebooks@outlook.com" 
                      className="text-accent hover:underline font-medium"
                    >
                      andrenotebooks@outlook.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:shadow-elegant transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-success/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-success" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Endereço</h3>
                    <p className="text-muted-foreground mb-3">
                      Atendimento no local com hora marcada
                    </p>
                    <p className="font-medium">
                      Rua Embaré, 20<br />
                      Mirandópolis, São Paulo - SP
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:shadow-elegant transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Atendimento</h3>
                    <p className="text-muted-foreground mb-3">
                      Flexibilidade total para seu horário
                    </p>
                    <p className="font-medium text-success">
                      24 horas - Mediante agendamento
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Instagram */}
            <Card className="border-border/50 hover:shadow-elegant transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-500/10 p-3 rounded-lg">
                    <Instagram className="h-6 w-6 text-pink-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Instagram</h3>
                    <p className="text-muted-foreground mb-3">
                      Acompanhe nosso trabalho nas redes sociais
                    </p>
                    <a 
                      href="https://www.instagram.com/andreconsertos_/?e=b0b65776-b5ab-4453-a520-7218d37f33ed&g=5" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-pink-500 hover:underline font-medium"
                    >
                      @andreconsertos_
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <Card className="border-border/50">
              <CardContent className="p-0">
                <div className="rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.857384125313!2d-46.642613723787!3d-23.609447163362265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a48594b8e9f%3A0xd06f35791877b1e9!2sR.%20Embar%C3%A9%2C%2020%20-%20Mirand%C3%B3polis%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004052-050!5e0!3m2!1spt-BR!2sbr!4v1757032613667!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="400" 
                    style={{border: 0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização André Notebooks - Rua Embaré, 20, Mirandópolis, São Paulo"
                  />
                </div>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="bg-gradient-primary text-white border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Pronto para resolver seu problema?
                </h3>
                <p className="text-white/90 mb-6">
                  Entre em contato agora e tenha seu equipamento funcionando rapidamente
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 shadow-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  <a href="https://wa.me/5511982986431" className="flex items-center">
                    Chamar no WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;