import { useState } from 'react';

const Index = () => {
  const [snowflakes] = useState(() => 
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 10}s`,
      fontSize: `${Math.random() * 10 + 10}px`,
      opacity: Math.random() * 0.6 + 0.4
    }))
  );

  return (
    <div className="min-h-screen relative overflow-hidden bg-vintage-cream flex items-center justify-center p-4">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`,
          mixBlendMode: 'multiply'
        }}></div>
      </div>

      {snowflakes.map(flake => (
        <div
          key={flake.id}
          className="absolute text-white animate-snowfall pointer-events-none"
          style={{
            left: flake.left,
            animationDelay: flake.animationDelay,
            fontSize: flake.fontSize,
            opacity: flake.opacity,
            top: '-20px'
          }}
        >
          ❄
        </div>
      ))}

      <div className="max-w-2xl w-full">
        <div 
          className="relative bg-vintage-beige rounded-3xl shadow-2xl overflow-hidden"
          style={{
            aspectRatio: '3/4',
            boxShadow: '0 30px 60px rgba(139, 69, 19, 0.3), inset 0 0 40px rgba(255, 255, 255, 0.2)'
          }}
        >
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col">
            <div className="text-center mb-6">
              <h1 className="font-script text-5xl md:text-7xl text-vintage-brown mb-2" style={{
                textShadow: '2px 2px 4px rgba(139, 69, 19, 0.2)'
              }}>
                С Новым Годом!
              </h1>
              <div className="flex justify-center gap-3 mb-4">
                <span className="text-3xl animate-float">⭐</span>
                <span className="text-3xl animate-float" style={{ animationDelay: '0.5s' }}>✨</span>
                <span className="text-3xl animate-float" style={{ animationDelay: '1s' }}>⭐</span>
              </div>
            </div>

            <div className="flex-1 relative mb-6 rounded-2xl overflow-hidden border-4 border-vintage-gold shadow-xl" style={{
              backgroundImage: `url(https://cdn.poehali.dev/files/IMG_6012.jpeg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(180deg, rgba(242, 232, 213, 0.1) 0%, rgba(232, 212, 184, 0.2) 100%)',
                mixBlendMode: 'overlay'
              }}></div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-around items-center">
                <div className="text-4xl animate-float" style={{ animationDelay: '0.2s' }}>🎄</div>
                <div className="text-4xl animate-float" style={{ animationDelay: '0.6s' }}>🐿️</div>
                <div className="text-4xl animate-float" style={{ animationDelay: '1.2s' }}>🐰</div>
              </div>

              <div className="text-center">
                <p className="font-serif text-lg md:text-xl text-vintage-brown leading-relaxed" style={{
                  textShadow: '1px 1px 2px rgba(255, 255, 255, 0.5)'
                }}>
                  Пусть в Новом году сбудутся<br />
                  все мечты и желания!
                </p>
              </div>

              <div className="flex justify-center gap-4 text-3xl">
                <span className="animate-float">🎁</span>
                <span className="animate-float" style={{ animationDelay: '0.4s' }}>🔔</span>
                <span className="animate-float" style={{ animationDelay: '0.8s' }}>⛄</span>
              </div>
            </div>
          </div>

          <div className="absolute top-0 left-0 w-full h-32 opacity-20 pointer-events-none">
            <div className="flex justify-around">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="text-vintage-green text-4xl rotate-180">🌲</div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-32 opacity-20 pointer-events-none">
            <div className="flex justify-around">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="text-vintage-green text-4xl">🌲</div>
              ))}
            </div>
          </div>

          <div className="absolute top-4 right-4 text-3xl opacity-60 animate-float">🌟</div>
          <div className="absolute bottom-4 left-4 text-3xl opacity-60 animate-float" style={{ animationDelay: '1.5s' }}>❄️</div>
        </div>

        <div className="mt-8 text-center">
          <p className="font-script text-2xl text-vintage-brown opacity-70">
            2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
