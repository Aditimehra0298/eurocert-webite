export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030a16]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-3">
          <img 
            src="https://i0.wp.com/www.eurocert.asia/wp-content/uploads/2020/06/cropped-LOGO_EUROCERT_v2-2.png?fit=12691181&ssl=1" 
            alt="EUROCERT" 
            className="h-12"
          />
        </a>
        <nav className="hidden md:flex gap-8">
          <a href="#" className="text-white/80 hover:text-emerald-400 transition">Home</a>
          <a href="#capabilities" className="text-white/80 hover:text-emerald-400 transition">Capabilities</a>
          <a href="#services" className="text-white/80 hover:text-emerald-400 transition">Services</a>
          <a href="#contact" className="text-white/80 hover:text-emerald-400 transition">Contact</a>
        </nav>
        <a href="#contact" className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-500 transition">
          Get Consultation
        </a>
      </div>
    </header>
  )
}