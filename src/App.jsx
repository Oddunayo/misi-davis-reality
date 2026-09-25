import "./index.css";

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
                src="\images\brand-logo.JPG"
                alt="Misi Davis Realty Logo"
                className="w-full h-auto max-h-20 object-contain"
              />
            </div>

            {/* Subtext */}
            <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-semibold text-left mt-10">
              Your premier destination for high-value real estate sales, luxury
              lettings, and property management.
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
            src="\images\hero-mansion.JPG"
            alt="Misi Davis Exterior Building"
            className="w-full h-full object-cover"
          />
          {/* Corner Accents */}
          <div className="w-5 h-5 border-t-2 border-r-2 border-[#C8AD62] absolute top-3 right-3" />
          <div className="w-5 h-5 border-b-2 border-r-2 border-[#C8AD62] absolute bottom-3 right-3" />
        </div>
      </section>
      {/* ABOUT MISI DAVIS REALTY SECTION */}
      <section className="bg-[#FAF8F2] text-slate-800 py-16 px-6 md:px-12 border-t-2 border-[#C8AD62]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-10">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0F1E2E] tracking-wider uppercase">
                ABOUT MISI DAVIS REALTY
              </h2>
              <div className="w-12 h-0.5 bg-slate-900" />
            </div>
            <div className="w-full h-px bg-[#C8AD62]/40 mt-3" />
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Left Column: Stacked Cards */}
            <div className="flex flex-col gap-6 justify-between">
              {/* Card 1: Trusted Real Estate Partnership */}
              <div className="bg-white p-6 rounded-sm border-l-4 border-[#C8AD62] shadow-sm border-t border-r border-b ">
                <h3 className="text-base font-serif font-bold text-[#C8AD62] tracking-wider uppercase mb-3">
                  TRUSTED REAL ESTATE PARTNERSHIP
                </h3>
                <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-bold">
                  At Misi Davis Realty, we bring unparalleled dedication to
                  matching clients with exceptional residential and commercial
                  properties. Whether you are buying, selling, renting, or
                  seeking comprehensive property management, we deliver seamless
                  transactions.
                </p>
              </div>

              {/* Card 2: Our Core Philosophy */}
              <div className="bg-white p-6 rounded-sm border-l-4 border-[#C8AD62] shadow-sm border-t border-r border-b">
                <h3 className="text-base font-serif font-semibold text-[#C8AD62] tracking-wider uppercase mb-3">
                  OUR CORE PHILOSOPHY
                </h3>
                <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-bold">
                  Built on integrity, transparency, and strategic market
                  insight, our team turns real estate goals into rewarding
                  assets. We serve property owners, investors, and tenants with
                  bespoke solutions tailored to their exact aspirations.
                </p>
              </div>

              {/* Card 3: Quote Card */}
              <div className="bg-[#1C2B22] p-5 rounded-sm border-l-4 border-[#C8AD62] flex items-center gap-3">
                <span className="text-[#C8AD62] text-xl font-serif leading-none">
                  “
                </span>
                <p className="text-xs md:text-sm text-slate-200 font-medium leading-relaxed">
                  Securing your real estate investments with utmost reliability
                  and professional brilliance.
                </p>
              </div>
            </div>

            {/* Right Column: Interior Image */}
            <div className="relative rounded-sm overflow-hidden border border-[#C8AD62] shadow-md min-h-95 lg:min-h-full">
              <img
                src="/images/interior-living.JPG"
                alt="Misi Davis Interior Living Room"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* OUR PREMIER REAL ESTATE SERVICES SECTION */}
      <section className="bg-[#FAF8F2] text-slate-800 py-16 px-6 md:px-12 border-t border-[#C8AD62]/30">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Title Header */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0F1E2E] tracking-wider uppercase mb-3">
              OUR PREMIER REAL ESTATE SERVICES
            </h2>
            <div className="w-full h-px bg-[#C8AD62]" />
          </div>

          {/* 3-Column Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Real Estate Sales */}
            <div className="bg-white p-8 rounded-sm shadow-md border-t-4 border-[#1C2B22] border-x border-b flex flex-col items-center text-center">
              {/* Circular Icon */}
              <div className="w-16 h-16 rounded-full bg-[#1C2B22] border-2 border-[#C8AD62] flex items-center justify-center mb-6 shadow-sm">
                <svg className="w-7 h-7 text-[#C8AD62]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>

              <h3 className="text-base font-serif font-bold text-[#0F1E2E] tracking-wider uppercase mb-4">
                REAL ESTATE SALES
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-bold mb-6 px-2">
                Strategic property acquisition and sales for luxury homes, commercial spaces, and high-yield investment lands.
              </p>

              {/* Bullet Points */}
              <ul className="text-xs text-slate-700 space-y-2.5 text-left w-full border-t border-slate-100 pt-6">
                <li className="flex items-center gap-2">
                  <span className="text-[#C8AD62] font-bold text-base">•</span>
                  <span className="font-bold">Prime Residential Acquisition</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C8AD62] font-bold text-base">•</span>
                  <span className="font-bold">Commercial Property Sales</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C8AD62] font-bold text-base">•</span>
                  <span className="font-bold">High-Value Land Investments</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C8AD62] font-bold text-base">•</span>
                  <span className="font-bold">Seamless Title Documentation</span>
                </li>
              </ul>
            </div>

            {/* Card 2: Premium Lettings */}
            <div className="bg-white p-8 rounded-sm shadow-md border-t-4 border-[#1C2B22] border-x border-bflex flex-col items-center text-center">
              {/* Circular Icon */}
              <div className="w-16 h-16 rounded-full bg-[#1C2B22] border-2 border-[#C8AD62] flex items-center justify-center mb-6 shadow-sm">
                <svg className="w-7 h-7 text-[#C8AD62]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>

              <h3 className="text-base font-serif font-bold text-[#0F1E2E] tracking-wider uppercase mb-4">
                PREMIUM LETTINGS
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-bold mb-6 px-2">
                Connecting discerning tenants with curated residential apartments and strategic commercial leaseholds.
              </p>

              {/* Bullet Points */}
              <ul className="text-xs text-slate-700 space-y-2.5 text-left w-full border-t border-slate-100 pt-6">
                <li className="flex items-center gap-2">
                  <span className="text-[#C8AD62] font-bold text-base">•</span>
                  <span className="font-bold">Luxury Apartment Lettings</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C8AD62] font-bold text-base">•</span>
                  <span className="font-bold">Commercial & Office Leases</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C8AD62] font-bold text-base">•</span>
                  <span className="font-bold">Rigorous Tenant Vetting</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C8AD62] font-bold text-base">•</span>
                  <span className="font-bold">Structured Lease Agreements</span>
                </li>
              </ul>
            </div>

            {/* Card 3: Property Management */}
            <div className="bg-white p-8 rounded-sm shadow-md border-t-4 border-[#1C2B22] border-x border-b flex flex-col items-center text-center">
              {/* Circular Icon */}
              <div className="w-16 h-16 rounded-full bg-[#1C2B22] border-2 border-[#C8AD62] flex items-center justify-center mb-6 shadow-sm">
                <svg className="w-7 h-7 text-[#C8AD62]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0v-4a1 1 0 011-1h2a1 1 0 011 1v4" />
                </svg>
              </div>

              <h3 className="text-base font-serif font-bold text-[#0F1E2E] tracking-wider uppercase mb-4">
                PROPERTY MANAGEMENT
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-bold mb-6 px-2">
                Turnkey facility administration, rent collection, and property maintenance ensuring maximum asset retention.
              </p>

              {/* Bullet Points */}
              <ul className="text-xs text-slate-700 space-y-2.5 text-left w-full border-t border-slate-100 pt-6">
                <li className="flex items-center gap-2">
                  <span className="text-[#C8AD62] font-bold text-base">•</span>
                  <span className="font-bold">Routine Facility Maintenance</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C8AD62] font-bold text-base">•</span>
                  <span className="font-bold">Automated Rent Collection</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C8AD62] font-bold text-base">•</span>
                  <span className="font-bold">Tenant Relations & Upkeep</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C8AD62] font-bold text-base">•</span>
                  <span className="font-bold">Maximum Asset Yield</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
      {/* FEATURED PROPERTY PORTFOLIO SECTION */}
      <section className="bg-[#FAF8F2] text-slate-800 py-16 px-6 md:px-12 border-t border-[#C8AD62]/30 relative">
        {/* Top Gold Corner Accents */}
        <div className="w-5 h-5 border-t-2 border-l-2 border-[#C8AD62] absolute top-6 left-6" />
        <div className="w-5 h-5 border-t-2 border-r-2 border-[#C8AD62] absolute top-6 right-6" />

        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0F1E2E] tracking-wider uppercase mb-3">
              FEATURED PROPERTY PORTFOLIO
            </h2>
            <div className="w-full h-px bg-[#C8AD62]" />
          </div>

          {/* 3-Column Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Property 1: Executive Villa Residence */}
            <div className="bg-white rounded-sm shadow-md border border-slate-200/80 overflow-hidden flex flex-col">
              <div className="h-56 w-full overflow-hidden">
                <img 
                  src="/images/villa.JPG" 
                  alt="Executive Villa Residence" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col grow">
                <span className="bg-[#1C2B22] text-[#C8AD62] text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-xs w-fit mb-3">
                  PRIME SALE
                </span>
                <h3 className="text-base font-serif font-bold text-[#0F1E2E] tracking-wider uppercase mb-2">
                  EXECUTIVE VILLA RESIDENCE
                </h3>
                <div className="flex items-center gap-1 text-xs text-[#C8AD62] font-medium mb-3">
                  <span>📍</span>
                  <span className="font-bold">Prime Residential District</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-bold">
                  State-of-the-art architecture with modern amenities, security, and expansive land space.
                </p>
              </div>
            </div>

            {/* Property 2: Serene Bedroom Suite */}
            <div className="bg-white rounded-sm shadow-md border border-slate-200/80 overflow-hidden flex flex-col">
              <div className="h-56 w-full overflow-hidden">
                <img 
                  src="/images/bedroom.JPG" 
                  alt="Serene Bedroom Suite" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col grow">
                <span className="bg-[#1C2B22] text-[#C8AD62] text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-xs w-fit mb-3">
                  LUXURY LETTING
                </span>
                <h3 className="text-base font-serif font-bold text-[#0F1E2E] tracking-wider uppercase mb-2">
                  SERENE BEDROOM SUITE
                </h3>
                <div className="flex items-center gap-1 text-xs text-[#C8AD62] font-medium mb-3">
                  <span>📍</span>
                  <span className="font-bold">City Center Sector</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-bold">
                  Fully furnished luxury suite tailored for high-profile tenants seeking peace and comfort.
                </p>
              </div>
            </div>

            {/* Property 3: Urban Living Complex */}
            <div className="bg-white rounded-sm shadow-md border border-slate-200/80 overflow-hidden flex flex-col">
              <div className="h-56 w-full overflow-hidden">
                <img 
                  src="/images/interior-living.JPG"
                  alt="Urban Living Complex" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col grow">
                <span className="bg-[#1C2B22] text-[#C8AD62] text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-xs w-fit mb-3">
                  MANAGED ASSET
                </span>
                <h3 className="text-base font-serif font-bold text-[#0F1E2E] tracking-wider uppercase mb-2">
                  URBAN LIVING COMPLEX
                </h3>
                <div className="flex items-center gap-1 text-xs text-[#C8AD62] font-medium mb-3">
                  <span>📍</span>
                  <span> className="font-bold"Business Hub</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-bold">
                  Fully managed multi-family complex generating sustained returns for institutional investors.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
