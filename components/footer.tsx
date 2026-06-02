export default function Footer() {
  return (
    <footer className="relative px-6 pb-10 pt-32">

      <div className="max-w-7xl mx-auto">

        <div className="rounded-[40px] border border-white/40 bg-white/60 backdrop-blur-2xl p-10 md:p-16 shadow-2xl">

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

            <div>
              <h2 className="text-5xl font-black bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                TuftLabEc
              </h2>

              <p className="text-zinc-600 text-lg mt-5 max-w-xl">
                Diseños personalizados inspirados en cultura digital, gaming y creatividad moderna.
              </p>
            </div>

            <div className="flex flex-col gap-4 text-zinc-600">
              <a href="#" className="hover:text-blue-500 transition">
                Instagram
              </a>

              <a href="#" className="hover:text-blue-500 transition">
                TikTok
              </a>

             <a 
              href="https://wa.me/593983229662?text=%C2%A1Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20alfombras%20personalizadas." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-500 transition"
              >
              Contacto
              </a>
            </div>
          </div>

          <div className="border-t border-zinc-200 mt-12 pt-8 text-sm text-zinc-500 flex flex-col md:flex-row justify-between gap-4">
            <p>© 2026 TuftLabEc. All rights reserved.</p>

            <p>
              Elaborado con creatividad ✦
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}