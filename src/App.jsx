import './index.css'

export default function App() {
  return (
    <div className="font-sans text-slate-800 bg-[#1C2B22] min-h-screen">
      {/* Main Hero Section Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 min-h-screen p-4 md:p-6 gap-6 bg-[#1C2B22]">
        
        {/* Left Green Block (Container) */}
        <div className="lg:col-span-2 bg-[#1C2B22] border border-[#C8AD62]/30 flex flex-col md:flex-row items-center justify-start gap-6 md:gap-10 relative rounded-sm overflow-hidden p-6 md:p-8">
          
          {/* Top Left Gold Corner Accent */}
          <div className="w-5 h-5 border-t-2 border-l-2 border-[#C8AD62] absolute top-3 left-3 z-20 pointer-events-none" />

          {/* 1. Dark Logo Card (Hugging left edge ONLY, compact height centered on the line) */}
          <div className="bg-[#122118] p-6 py-12 min-h-125 border-y border-r border-[#C8AD62]/20 shadow-2xl w-full md:w-[45%] shrink-0 -ml-6 md:-ml-8 my-auto rounded-r-sm">
            {/* White Logo Container */}
            <div className="bg-white p-4 rounded-sm mb-8 shadow-md">
              <img 
                src="public\brand-logo.JPG"
                alt="Misi Davis Realty Logo" 
                className="w-full h-auto max-h-20 object-contain"
              />
            </div>

            {/* Subtext */}
            <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-semibold text-left mt-10">
              Your premier destination for high-value real estate sales, luxury lettings, and property management.
            </p>
          </div>

          {/* 2. Excellence Typography Block (Sitting on the exact same row) */}
          <div className="text-center md:text-left space-y-4 my-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-100 tracking-wider leading-tight">
              EXCELLENCE IN <br /> REAL ESTATE
            </h2>

            {/* Gold Divider Line */}
            <div className="w-20 h-px bg-[#C8AD62] mx-auto md:mx-0 my-4" />

            {/* Sub-services Bar */}
            <p className="text-xs md:text-sm text-[#C8AD62] font-semibold tracking-widest uppercase">
              SALES • LETTINGS • PROPERTY MANAGEMENT
            </p>
          </div>

          {/* Bottom Right Gold Corner Accent */}
          <div className="w-5 h-5 border-b-2 border-r-2 border-[#C8AD62] absolute bottom-3 right-3 pointer-events-none" />
        </div>

        {/* Right Building Photo */}
        <div className="relative overflow-hidden rounded-sm border border-[#C8AD62]/30 min-h-100 lg:min-h-full">
          <img
            src="public\hero-mansion.JPG"
            alt="Misi Davis Exterior Building"
            className="w-full h-full object-cover"
          />
          {/* Corner Accents */}
          <div className="w-5 h-5 border-t-2 border-r-2 border-[#C8AD62] absolute top-3 right-3" />
          <div className="w-5 h-5 border-b-2 border-r-2 border-[#C8AD62] absolute bottom-3 right-3" />
        </div>

      </section>
    </div>
  );
}