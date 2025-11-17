import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const servers = [
    { name: 'ПРОМЕЖ БУЛОК | Dust2 Only', players: '24/32', map: 'de_dust2', status: 'online' },
    { name: 'ПРОМЕЖ БУЛОК | Mirage Mix', players: '18/32', map: 'de_mirage', status: 'online' },
    { name: 'ПРОМЕЖ БУЛОК | Классика', players: '30/32', map: 'de_inferno', status: 'online' },
    { name: 'ПРОМЕЖ БУЛОК | GunGame', players: '12/16', map: 'aim_map', status: 'online' },
  ];

  const rules = [
    { id: 1, title: 'Запрещено использование читов', description: 'Любое стороннее ПО для получения преимущества' },
    { id: 2, title: 'Уважение к игрокам', description: 'Оскорбления и токсичное поведение караются баном' },
    { id: 3, title: 'Командная игра', description: 'Играйте в команде, не мешайте союзникам' },
    { id: 4, title: 'Без спама в чате', description: 'Флуд и реклама запрещены' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-card/80 backdrop-blur-lg border-b border-primary/20 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/projects/83a9d0cc-3714-4f9a-85cb-b6afee4a5209/files/35e85420-fab8-44d0-95c0-8b64d5449de5.jpg" 
                alt="Logo" 
                className="h-12 w-12 rounded-lg animate-glow-pulse"
              />
              <h1 className="text-2xl font-bold text-primary text-glow">ПРОМЕЖ БУЛОК</h1>
            </div>
            <div className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'servers', label: 'Сервера', icon: 'Server' },
                { id: 'rules', label: 'Правила', icon: 'FileText' },
                { id: 'contacts', label: 'Контакты', icon: 'Mail' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:bg-primary/20 ${
                    activeSection === item.id ? 'bg-primary text-primary-foreground' : 'text-foreground'
                  }`}
                >
                  <Icon name={item.icon as any} size={20} />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        {activeSection === 'home' && (
          <div className="animate-fade-in">
            <section className="relative h-[600px] overflow-hidden">
              <div className="absolute inset-0">
                <img 
                  src="https://cdn.poehali.dev/projects/83a9d0cc-3714-4f9a-85cb-b6afee4a5209/files/5bc8b76b-873f-4994-8462-3df02e7a471c.jpg"
                  alt="Hero"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background"></div>
              </div>
              <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
                <h2 className="text-6xl md:text-8xl font-bold mb-6 text-glow text-primary glitch">
                  COUNTER-STRIKE 1.6
                </h2>
                <p className="text-2xl md:text-3xl mb-8 text-secondary text-glow">
                  Легендарные сервера вернулись
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/80 text-primary-foreground text-xl px-8 py-6 neon-border animate-glow-pulse"
                  onClick={() => setActiveSection('servers')}
                >
                  <Icon name="PlayCircle" size={24} className="mr-2" />
                  Играть сейчас
                </Button>
              </div>
            </section>

            <section className="container mx-auto px-4 py-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-card border-primary/30 p-6 hover:border-primary transition-all hover:scale-105">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <Icon name="Users" size={32} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">1000+ игроков</h3>
                  </div>
                  <p className="text-muted-foreground">Активное комьюнити онлайн 24/7</p>
                </Card>

                <Card className="bg-card border-secondary/30 p-6 hover:border-secondary transition-all hover:scale-105">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-secondary/20 p-3 rounded-lg">
                      <Icon name="Server" size={32} className="text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold">10 серверов</h3>
                  </div>
                  <p className="text-muted-foreground">Разные режимы и карты</p>
                </Card>

                <Card className="bg-card border-accent/30 p-6 hover:border-accent transition-all hover:scale-105">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-accent/20 p-3 rounded-lg">
                      <Icon name="Shield" size={32} className="text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold">Anti-Cheat</h3>
                  </div>
                  <p className="text-muted-foreground">Честная игра гарантирована</p>
                </Card>
              </div>
            </section>
          </div>
        )}

        {activeSection === 'servers' && (
          <div className="container mx-auto px-4 py-16 animate-fade-in">
            <div className="relative mb-12">
              <img 
                src="https://cdn.poehali.dev/projects/83a9d0cc-3714-4f9a-85cb-b6afee4a5209/files/f2a34180-2a94-4c90-923e-2c555f7ad1b3.jpg"
                alt="Servers"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent rounded-lg flex items-center">
                <h2 className="text-5xl font-bold ml-8 text-glow text-primary">Наши сервера</h2>
              </div>
            </div>

            <div className="grid gap-6">
              {servers.map((server, idx) => (
                <Card key={idx} className="bg-card border-primary/30 p-6 hover:border-primary transition-all hover:scale-[1.02]">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/20 p-3 rounded-lg">
                        <Icon name="Server" size={32} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{server.name}</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                          <Icon name="Map" size={16} />
                          {server.map}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <Icon name="Users" size={20} className="text-secondary mx-auto mb-1" />
                        <p className="text-lg font-bold">{server.players}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold text-green-500">ОНЛАЙН</span>
                      </div>
                      <Button className="bg-primary hover:bg-primary/80">
                        <Icon name="PlayCircle" size={20} className="mr-2" />
                        Играть
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'rules' && (
          <div className="container mx-auto px-4 py-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-12 text-center text-glow text-primary">Правила сервера</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {rules.map((rule) => (
                <Card key={rule.id} className="bg-card border-primary/30 p-6 hover:border-primary transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg flex-shrink-0">
                      <span className="text-2xl font-bold text-primary">{rule.id}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{rule.title}</h3>
                      <p className="text-muted-foreground">{rule.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="container mx-auto px-4 py-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-12 text-center text-glow text-primary">Контакты</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-card border-primary/30 p-8">
                <h3 className="text-2xl font-bold mb-6">Наши контакты</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" size={24} className="text-primary" />
                    <span>admin@promezhbulok.ru</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MessageCircle" size={24} className="text-secondary" />
                    <span>Discord: PromezhBulok</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={24} className="text-accent" />
                    <span>+7 (xxx) xxx-xx-xx</span>
                  </div>
                </div>
              </Card>

              <Card className="bg-card border-primary/30 p-8">
                <h3 className="text-2xl font-bold mb-6">Написать нам</h3>
                <form className="space-y-4">
                  <Input 
                    placeholder="Ваше имя" 
                    className="bg-background border-primary/30 focus:border-primary"
                  />
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    className="bg-background border-primary/30 focus:border-primary"
                  />
                  <Textarea 
                    placeholder="Сообщение" 
                    rows={4}
                    className="bg-background border-primary/30 focus:border-primary"
                  />
                  <Button className="w-full bg-primary hover:bg-primary/80">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-card border-t border-primary/20 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 ПРОМЕЖ БУЛОК CS 1.6. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
