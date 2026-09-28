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
                  <span className="font-bold">Business Hub</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-bold">
                  Fully managed multi-family complex generating sustained returns for institutional investors.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* WHY PARTNER WITH MISI DAVIS REALTY SECTION */}
      <section className="bg-[#FAF8F2] text-slate-800 py-16 px-6 md:px-12 border-t border-[#C8AD62]/30 relative">
        {/* Top Gold Corner Accents */}
        <div className="w-5 h-5 border-t-2 border-l-2 border-[#C8AD62] absolute top-6 left-6" />
        <div className="w-5 h-5 border-t-2 border-r-2 border-[#C8AD62] absolute top-6 right-6" />

        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0F1E2E] tracking-wider uppercase mb-3">
              WHY PARTNER WITH MISI DAVIS REALTY
            </h2>
            <div className="w-full h-px bg-[#C8AD62]" />
          </div>

          {/* Grid Layout: Left Stats Grid + Right Value Props Stack */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Side: 2x2 Dark Green Stat Cards */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              
              {/* Stat 1 */}
              <div className="bg-[#1C2B22] p-6 rounded-md border border-[#C8AD62]/20 shadow-md text-center flex flex-col items-center justify-center min-h-30">
                <span className="text-3xl font-serif font-bold text-[#C8AD62] mb-1">
                  100%
                </span>
                <span className="text-[10px] md:text-xs font-semibold text-slate-200 uppercase tracking-widest">
                  CLIENT SATISFACTION
                </span>
              </div>

              {/* Stat 2 */}
              <div className="bg-[#1C2B22] p-6 rounded-md border border-[#C8AD62]/20 shadow-md text-center flex flex-col items-center justify-center min-h-30">
                <span className="text-3xl font-serif font-bold text-[#C8AD62] mb-1">
                  03+
                </span>
                <span className="text-[10px] md:text-xs font-semibold text-slate-200 uppercase tracking-widest">
                  CORE SERVICES
                </span>
              </div>

              {/* Stat 3 */}
              <div className="bg-[#1C2B22] p-6 rounded-md border border-[#C8AD62]/20 shadow-md text-center flex flex-col items-center justify-center min-h-30">
                <span className="text-3xl font-serif font-bold text-[#C8AD62] mb-1">
                  24/7
                </span>
                <span className="text-[10px] md:text-xs font-semibold text-slate-200 uppercase tracking-widest">
                  PROPERTY SUPPORT
                </span>
              </div>

              {/* Stat 4 */}
              <div className="bg-[#1C2B22] p-6 rounded-md border border-[#C8AD62]/20 shadow-md text-center flex flex-col items-center justify-center min-h-30">
                <span className="text-3xl font-serif font-bold text-[#C8AD62] mb-1">
                  100%
                </span>
                <span className="text-[10px] md:text-xs font-semibold text-slate-200 uppercase tracking-widest">
                  VERIFIED DOCUMENTATION
                </span>
              </div>

            </div>

            {/* Right Side: White Feature Cards */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-sm shadow-sm border border-slate-200/80 flex items-start gap-4">
                <div className="p-2 text-slate-800 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-slate-700 font-light leading-relaxed">
                    <strong className="font-bold text-[#0F1E2E]">Secure & Verified Transactions</strong><span className="font-bold"> Rigorous legal verification and transparent documentation for absolute peace of mind.</span>
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-sm shadow-sm border border-slate-200/80 flex items-start gap-4">
                <div className="p-2 text-slate-800 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-slate-700 font-light leading-relaxed">
                    <strong className="font-bold text-[#0F1E2E]">High Yield Property Investments</strong><span className="font-bold"> Strategic sourcing of properties positioned for steady capital appreciation and rental yield.</span>
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-sm shadow-sm border border-slate-200/80 flex items-start gap-4">
                <div className="p-2 text-slate-800 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0v-4a1 1 0 011-1h2a1 1 0 011 1v4" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-slate-700 font-light leading-relaxed">
                    <strong className="font-bold text-[#0F1E2E]">Dedicated Asset Management</strong><span className="font-bold"> Hassle-free landlord representation, maintenance oversight, and tenant management.</span>
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
     {/* OUR COMMITMENT TO YOU SECTION */}
      <section className="bg-[#FAF8F2] text-slate-800 py-16 px-6 md:px-12 border-t border-[#C8AD62]/30 relative">
        {/* Top Gold Corner Accents */}
        <div className="w-5 h-5 border-t-2 border-l-2 border-[#C8AD62] absolute top-6 left-6" />
        <div className="w-5 h-5 border-t-2 border-r-2 border-[#C8AD62] absolute top-6 right-6" />

        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0F1E2E] tracking-wider uppercase">
                OUR COMMITMENT TO YOU
              </h2>
              <div className="w-12 h-0.5 bg-slate-900" />
            </div>
            <div className="w-full h-px bg-[#C8AD62]/40 mt-3" />
          </div>

          {/* Quote Card */}
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-sm border border-[#C8AD62] shadow-sm text-center">
            {/* Gold Quotation Marks */}
            <div className="text-4xl text-[#C8AD62] font-serif leading-none mb-4">
              ““
            </div>

            {/* Quote Text */}
            <blockquote className="text-lg md:text-xl font-serif italic text-slate-800 leading-relaxed mb-6">
              "Real estate is not just about properties; it is about building trust, protecting capital, and creating spaces where people thrive."
            </blockquote>

            {/* Attribution */}
            <cite className="text-xs md:text-sm font-semibold text-[#C8AD62] tracking-widest uppercase not-italic">
              — MISI DAVIS REALTY EXECUTIVE LEADERSHIP
            </cite>
          </div>

        </div>
      </section>
      {/* CONNECT WITH US SECTION */}
      <section className="bg-[#FAF8F2] text-slate-800 py-16 px-6 md:px-12 border-t border-[#C8AD62]/30 relative">
        {/* Top Gold Corner Accents */}
        <div className="w-5 h-5 border-t-2 border-l-2 border-[#C8AD62] absolute top-6 left-6" />
        <div className="w-5 h-5 border-t-2 border-r-2 border-[#C8AD62] absolute top-6 right-6" />

        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="mb-10">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0F1E2E] tracking-wider uppercase">
                CONNECT WITH US
              </h2>
              <div className="w-12 h-0.5 bg-slate-900" />
            </div>
            <div className="w-full h-px bg-[#C8AD62]/40 mt-3" />
          </div>

          {/* Dark Green Contact Card Container */}
          <div className="bg-[#1C2B22] p-8 md:p-12 rounded-sm border border-[#C8AD62]/40 shadow-xl">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-[#C8AD62] tracking-wider uppercase mb-3">
              MISI DAVIS REALTY
            </h3>
            <p className="text-xs md:text-sm text-slate-300 font-light mb-8 max-w-xl leading-relaxed">
              Visit our office or reach out directly to schedule a property consultation or manage your investments.
            </p>

            {/* Contact Details Stack */}
            <div className="space-y-6">
              
              {/* Office Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C8AD62] flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-5 h-5 text-[#1C2B22]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#C8AD62] uppercase tracking-widest mb-0.5">
                    OFFICE LOCATION
                  </h4>
                  <p className="text-xs md:text-sm text-slate-100 font-medium">
                    Shop D1/11 Trans Amusement Shopping Complex
                  </p>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C8AD62] flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-5 h-5 text-[#1C2B22]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#C8AD62] uppercase tracking-widest mb-0.5">
                    PHONE / WHATSAPP
                  </h4>
                  <p className="text-xs md:text-sm text-slate-100 font-medium">
                    +234 706 057 6115
                  </p>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C8AD62] flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-5 h-5 text-[#1C2B22]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#C8AD62] uppercase tracking-widest mb-0.5">
                    EMAIL ADDRESS
                  </h4>
                  <p className="text-xs md:text-sm text-slate-100 font-medium">
                    misidavisrealty@gmail.com
                  </p>
                </div>
              </div>

              {/* Services Covered */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C8AD62] flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-5 h-5 text-[#1C2B22]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#C8AD62] uppercase tracking-widest mb-0.5">
                    SERVICES COVERED
                  </h4>
                  <p className="text-xs md:text-sm text-slate-100 font-medium">
                    Real Estate Sales • Lettings • Property Management
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
