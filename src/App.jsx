import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Crown, Sparkles, Rocket, Star, Heart, Menu, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ========================
// 1. COMPONENTS
// ========================

const Navbar = () => {
    const navRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            ref={navRef}
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full px-6 py-3 flex items-center justify-between gap-8 md:gap-16 w-[90%] max-w-4xl ${isScrolled
                ? 'bg-white/80 backdrop-blur-xl border border-primary/10 shadow-lg text-primary'
                : 'bg-transparent text-white'
                }`}
        >
            <div className="flex items-center gap-2 font-heading font-bold text-xl tracking-tight">
                <Crown strokeWidth={2.5} className="w-6 h-6" />
                <span>Casa da Fantasia</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                <a href="#catálogo" className="hover:-translate-y-[1px] transition-transform">Catálogo</a>
                <a href="#diferenciais" className="hover:-translate-y-[1px] transition-transform">Diferenciais</a>
                <a href="#manifesto" className="hover:-translate-y-[1px] transition-transform">Nossa Magia</a>
            </div>
            <button
                className="magnetic-btn bg-accent text-white px-6 py-2 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(239,68,68,0.4)] relative overflow-hidden group"
                onClick={() => window.open('https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER_HERE', '_blank')}
            >
                <span className="relative z-10 flex items-center gap-2">
                    WhatsApp <Sparkles className="w-4 h-4" />
                </span>
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </button>
        </nav>
    );
};

const Hero = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.hero-elem', {
                y: 40,
                opacity: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: 'power3.out',
                delay: 0.2
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    // Using a magical cinematic background from Unsplash
    return (
        <section ref={containerRef} className="relative w-full h-[100dvh] overflow-hidden bg-dark flex flex-col justify-end pb-24 px-6 md:px-12 lg:px-24">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1516997184883-933df3723363?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Magical background"
                    className="w-full h-full object-cover opacity-80"
                />
                {/* Colorful gradient matching the brand values (Blue to dark) */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start text-white">
                <h1 className="flex flex-col gap-2">
                    <span className="hero-elem font-heading font-extrabold text-3xl md:text-5xl lg:text-6xl uppercase tracking-tighter text-background">
                        Diversão ilimitada encontra a
                    </span>
                    <span className="hero-elem font-drama italic text-7xl md:text-[8rem] lg:text-[11rem] leading-[0.85] text-white">
                        Fantasia.
                    </span>
                </h1>
                <p className="hero-elem mt-6 text-lg md:text-2xl text-white/90 max-w-2xl font-heading font-medium">
                    Aluguel premium de fantasias para crianças e adultos. <br />A mágica que você precisa para o seu próximo evento.
                </p>
                <button
                    className="hero-elem magnetic-btn mt-10 bg-background text-primary px-8 py-4 rounded-full text-lg font-bold shadow-2xl relative overflow-hidden group flex items-center gap-3"
                    onClick={() => window.open('https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER_HERE', '_blank')}
                >
                    <span className="relative z-10">Alugar Minha Fantasia</span>
                    <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                </button>
            </div>
        </section>
    );
};

const ShufflerCard = () => {
    const [items, setItems] = useState(["Princesas & Heróis", "Épocas & Retrô", "Terror & Halloween"]);

    useEffect(() => {
        const interval = setInterval(() => {
            setItems(prev => {
                const newArr = [...prev];
                const last = newArr.pop();
                newArr.unshift(last);
                return newArr;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-primary/5 flex flex-col h-80 relative overflow-hidden group">
            <div className="mb-6 flex justify-between items-center">
                <h3 className="font-heading font-bold text-xl text-primary flex items-center gap-2">
                    <Crown className="w-5 h-5" /> Catálogo Mágico
                </h3>
                <span className="font-mono text-xs font-bold bg-background text-primary px-3 py-1 rounded-full">300+</span>
            </div>
            <p className="text-sm font-medium text-dark/60 mb-8">Mais de 300 opções para todas as idades e temas inimagináveis.</p>

            <div className="flex-1 relative w-full h-full flex flex-col items-center justify-center">
                {items.map((item, i) => {
                    const isTop = i === 0;
                    return (
                        <div
                            key={item}
                            className="absolute w-full py-4 px-6 rounded-2xl border transition-all duration-700 font-heading font-bold flex justify-between items-center"
                            style={{
                                top: `${i * 15}px`,
                                scale: 1 - i * 0.05,
                                opacity: 1 - i * 0.3,
                                zIndex: 10 - i,
                                backgroundColor: isTop ? '#1E40AF' : '#FEF3C7',
                                color: isTop ? 'white' : '#1E40AF',
                                borderColor: isTop ? 'transparent' : 'rgba(30, 64, 175, 0.1)'
                            }}
                        >
                            {item}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const TypewriterCard = () => {
    const text = "Corte perfeito. Materiais premium. Detalhes bordados à mão. Produção 100% própria e artesanal para garantir a qualidade que você merece.";
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayed(text.slice(0, index));
            index++;
            if (index > text.length) index = 0; // loop
        }, 70);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-primary/5 flex flex-col h-80">
            <div className="mb-6 flex justify-between items-center">
                <h3 className="font-heading font-bold text-xl text-primary flex items-center gap-2">
                    <Star className="w-5 h-5" /> Ateliê Exclusivo
                </h3>
                <div className="flex items-center gap-2 font-mono text-xs font-bold bg-accent/10 text-accent px-3 py-1 rounded-full">
                    <span className="block w-2 h-2 rounded-full bg-accent animate-pulse" /> Fabricação
                </div>
            </div>
            <p className="font-mono text-sm leading-relaxed text-dark bg-background/50 p-4 rounded-xl flex-1 border border-primary/10">
                {displayed}
                <span className="inline-block w-2 h-4 bg-accent ml-1 animate-pulse align-middle" />
            </p>
        </div>
    );
};

const SchedulerCard = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const t = gsap.timeline({ repeat: -1 });
            t.to('.cursor-svg', { x: 80, y: 60, duration: 1, ease: 'power2.inOut' })
                .to('.cursor-svg', { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
                .to('.price-btn', { backgroundColor: '#1E40AF', color: 'white', duration: 0.2 }, "-=0.1")
                .to('.cursor-svg', { opacity: 0, duration: 0.5, delay: 0.5 })
                .to('.price-btn', { backgroundColor: 'transparent', color: '#1E40AF', duration: 0.2 })
                .set('.cursor-svg', { x: 0, y: 0, opacity: 1 });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="bg-white rounded-[2rem] p-8 shadow-xl border border-primary/5 flex flex-col h-80 relative">
            <div className="mb-6 flex justify-between items-center">
                <h3 className="font-heading font-bold text-xl text-primary flex items-center gap-2">
                    <Heart className="w-5 h-5" /> Valor Acessível
                </h3>
            </div>
            <p className="text-sm font-medium text-dark/60 mb-4">O melhor preço da região, combinando qualidade fantástica com economia real.</p>

            <div className="flex-1 bg-background/40 rounded-xl border border-primary/10 p-4 flex flex-col gap-3 relative">
                {/* Simulate app interface */}
                <div className="w-full h-8 bg-white rounded flex items-center px-3 border border-primary/5">
                    <span className="w-16 h-2 bg-primary/20 rounded-full" />
                </div>
                <div className="w-full flex justify-between items-center p-3 bg-white rounded border border-primary/5">
                    <span className="font-bold text-primary font-mono text-lg">R$ --,--</span>
                    <button className="price-btn border border-primary text-primary px-4 py-1 rounded text-xs font-bold transition-colors">
                        Alugar
                    </button>
                </div>

                {/* Animated Custom Cursor */}
                <svg className="cursor-svg w-8 h-8 absolute top-4 left-4 drop-shadow-lg z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 3L19.5 10.5L12 12.5L10.5 21L5.5 3Z" fill="#EF4444" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    );
};

const Features = () => {
    return (
        <section id="diferenciais" className="py-32 px-6 md:px-12 lg:px-24 bg-background">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-primary mb-16 text-center">A Engenharia da Magia</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ShufflerCard />
                    <TypewriterCard />
                    <SchedulerCard />
                </div>
            </div>
        </section>
    );
};

const Philosophy = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.phil-line', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                },
                y: 30,
                opacity: 0,
                stagger: 0.3,
                duration: 1,
                ease: 'power3.out'
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="manifesto" ref={containerRef} className="relative w-full py-40 overflow-hidden bg-primary text-white flex items-center justify-center">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Magical colors"
                    className="w-full h-full object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/80 to-primary/95" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-24 flex flex-col items-center text-center">
                <p className="phil-line font-heading text-lg md:text-2xl font-semibold opacity-60 mb-6 tracking-wide">
                    A maioria das lojas foca em: apenas alugar roupas.
                </p>
                <p className="phil-line font-drama italic text-5xl md:text-7xl lg:text-8xl leading-none">
                    Nós focamos em <br /> <span className="text-background italic">realizar sonhos.</span>
                </p>
            </div>
        </section>
    );
};

const ProtocolStep = ({ number, title, desc, SVGComponent }) => {
    return (
        <div className="h-screen w-full flex items-center justify-center sticky top-0 bg-background">
            <div className="bg-white rounded-[3rem] p-12 w-[90%] max-w-5xl h-[70vh] shadow-2xl border border-primary/10 flex flex-col md:flex-row items-center gap-12 protocol-card">
                <div className="flex-1 flex justify-center items-center w-full h-full bg-background/50 rounded-[2rem]">
                    {SVGComponent}
                </div>
                <div className="flex-1 flex flex-col">
                    <span className="font-mono text-accent text-xl font-bold mb-4">FASE_0{number}</span>
                    <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-primary mb-6">{title}</h2>
                    <p className="text-xl text-dark/70 font-medium leading-relaxed">{desc}</p>
                </div>
            </div>
        </div>
    );
};

const ProtocolSection = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.protocol-card');

            cards.forEach((card, i) => {
                if (i < cards.length - 1) {
                    ScrollTrigger.create({
                        trigger: card.parentElement,
                        start: 'top top',
                        endTrigger: cards[i + 1].parentElement,
                        end: 'top top',
                        pinSpacing: false,
                        animation: gsap.to(card, {
                            scale: 0.9,
                            opacity: 0.5,
                            filter: 'blur(10px)',
                            duration: 1,
                            ease: 'none'
                        }),
                        scrub: true,
                    });
                }
            });

            // SVG Animations
            gsap.to('.svg-rotate', { rotation: 360, duration: 20, repeat: -1, ease: 'linear' });
            gsap.to('.svg-scan', { y: 200, duration: 2, repeat: -1, yoyo: true, ease: 'power1.inOut' });
            gsap.to('.svg-pulse', { strokeDashoffset: 0, duration: 2, repeat: -1, ease: 'linear' });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative z-10 w-full pb-32">
            <div className="py-24 text-center sticky top-0 bg-background z-[-1] h-screen flex items-center justify-center">
                <h2 className="font-heading font-extrabold text-5xl text-primary">O Protocolo de Descoberta</h2>
            </div>

            <ProtocolStep
                number={1}
                title="Escolha o Tema"
                desc="Mergulhe em nosso vasto catálogo de mais de 300 fantasias. Nós ajudamos a encontrar o personagem perfeito para a sua história."
                SVGComponent={
                    <svg className="w-48 h-48 svg-rotate" viewBox="0 0 100 100" fill="none" stroke="#1E40AF" strokeWidth="2">
                        <circle cx="50" cy="50" r="40" strokeDasharray="10 5" />
                        <circle cx="50" cy="50" r="25" stroke="#EF4444" strokeWidth="4" />
                        <path d="M50 10 L50 90 M10 50 L90 50" strokeOpacity="0.3" />
                    </svg>
                }
            />

            <ProtocolStep
                number={2}
                title="O Ajuste Perfeito"
                desc="Experimente seu traje em nosso espaço. Como somos fabricantes próprios, as peças têm acabamento superior e um caimento impecável."
                SVGComponent={
                    <svg className="w-48 h-48 relative overflow-hidden" viewBox="0 0 100 100" fill="none">
                        <rect width="100" height="100" fill="#FEF3C7" />
                        <g opacity="0.2">
                            {[...Array(10)].map((_, i) => <line key={i} x1={i * 10} y1="0" x2={i * 10} y2="100" stroke="#1E40AF" strokeWidth="1" />)}
                            {[...Array(10)].map((_, i) => <line key={i} x1="0" y1={i * 10} x2="100" y2={i * 10} stroke="#1E40AF" strokeWidth="1" />)}
                        </g>
                        <line className="svg-scan" x1="0" y1="-50" x2="100" y2="-50" stroke="#EF4444" strokeWidth="4" />
                    </svg>
                }
            />

            <ProtocolStep
                number={3}
                title="Sustentar a Fantasia"
                desc="Vá para o seu evento e brilhe. Depois, a devolução é descomplicada e nós cuidamos de toda a limpeza e higienização para você."
                SVGComponent={
                    <svg className="w-48 h-48" viewBox="0 0 200 100" fill="none" stroke="#1E40AF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <path className="svg-pulse" d="M0,50 L50,50 L70,10 L90,90 L110,50 L200,50" strokeDasharray="400" strokeDashoffset="400" />
                        <circle cx="110" cy="50" r="6" fill="#EF4444" stroke="none" />
                    </svg>
                }
            />
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="bg-dark text-white rounded-t-[4rem] px-6 py-16 md:px-12 lg:px-24 mt-[-4rem] relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                    <div className="flex items-center gap-2 font-heading font-extrabold text-2xl tracking-tight mb-4 text-background">
                        <Crown strokeWidth={2.5} className="w-8 h-8" />
                        <span>Casa da Fantasia</span>
                    </div>
                    <p className="text-white/60 font-medium max-w-xs">Aluguel premium de fantasias com fabricação própria e o melhor preço da região.</p>
                </div>

                <div className="flex flex-col gap-4 font-heading font-medium text-white/80">
                    <a href="#" className="hover:text-accent transition-colors">Voltar ao Topo</a>
                    <a href="#catálogo" className="hover:text-accent transition-colors">Catálogo</a>
                    <a href="#diferenciais" className="hover:text-accent transition-colors">Diferenciais</a>
                </div>

                <div>
                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl w-max">
                        <div className="relative flex items-center justify-center w-4 h-4">
                            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                            <div className="relative w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="font-mono text-sm tracking-widest text-green-400">LOJA ABERTA</span>
                    </div>
                    <button
                        className="magnetic-btn mt-6 w-full md:w-auto bg-accent text-white px-8 py-4 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2"
                        onClick={() => window.open('https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER_HERE', '_blank')}
                    >
                        Falar no WhatsApp
                    </button>
                </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm font-mono text-white/40">
                <p>© 2026 Casa da Fantasia. Rua da Faculdade, 292, Ibicaraí-BA.</p>
                <p>Desenvolvido com Magia.</p>
            </div>
        </footer>
    );
};

// ========================
// 2. MAIN APP
// ========================

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <Philosophy />
            <ProtocolSection />
            <Footer />
        </>
    );
}

export default App;
