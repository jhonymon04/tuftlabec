"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Upload,
  Palette,
  RotateCw,
  ImageIcon,
  RefreshCw,
  Layers,
  Maximize2,
  Grid,
  Image as ImageIconSolid,
  Scissors,
  Loader2,
  Share2,
  Download,
  MessageCircle,
  Menu,
  Minus,
} from "lucide-react";

type SizeKey =
  | "60x60"
  | "80x80"
  | "120x120"
  | "90x40"
  | "circular_80";

type ViewMode = "realistic" | "blueprint";

export default function DesignerPage() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const canvasRef = useRef<HTMLDivElement | null>(null);

  const [mobileMenu, setMobileMenu] = useState(false);

  const [viewMode, setViewMode] = useState<ViewMode>("blueprint");

  const [originalImageUrl, setOriginalImageUrl] = useState<string | null>(null);
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  const [rawFile, setRawFile] = useState<File | null>(null);

  const [useBackgroundRemoval, setUseBackgroundRemoval] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const [rugColor, setRugColor] = useState("#ebdca1");
  const [scale, setScale] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [selectedSize, setSelectedSize] = useState<SizeKey>("60x60");

  /* BACKGROUNDS */
  const roomBackgrounds = [
    "https://i5.walmartimages.com/asr/f5afcdf8-03bd-4f79-9642-ac52b8586dcc.44e199d5d1e570182c802d9f7775d8f9.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    "https://www.dbestfloors.com/wp-content/uploads/2024/02/XCC-PARFOROAK_PROFILE.jpg",
    "https://cdn.keope.com/website/thumbnail/00e/00e8b196193e3784839c336d32475ca1.webp",
    "https://www.floorcity.com/cdn/shop/products/33574_04_00.jpg?v=1663616795&width=1080",
    "https://www.architectandinteriorsindia.com/cloud/2021/11/15/PGVT-ONYX-ICE_800X800-MM.jpg",
    "https://dellaroccapanama.com/wp-content/uploads/2024/05/piso-de-bamboo-mexico.jpg",
  ];

  const [currentBackground, setCurrentBackground] = useState(roomBackgrounds[0]);

  const rugSizes = {
    "60x60": { label: "60x60 cm", width: 300, height: 300, isCircle: false },
    "80x80": { label: "80x80 cm", width: 400, height: 400, isCircle: false },
    "120x120": { label: "120x120 cm", width: 500, height: 500, isCircle: false },
    "90x40": { label: "90x40 cm", width: 480, height: 213, isCircle: false },
    circular_80: { label: "Ø 80 cm", width: 400, height: 400, isCircle: true },
  };

  const currentRug = rugSizes[selectedSize];
  const colors = ["#111111", "#ffffff", "#ebdca1", "#ff6b6b", "#bce1f1"];

  /* UPLOAD */
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (originalImageUrl) URL.revokeObjectURL(originalImageUrl);
    if (processedImageUrl) URL.revokeObjectURL(processedImageUrl);

    setRawFile(file);
    const url = URL.createObjectURL(file);

    setOriginalImageUrl(url);
    setProcessedImageUrl(null);
    setUseBackgroundRemoval(false);
  };


  const handleToggleBackground = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setUseBackgroundRemoval(isChecked);

    if (isChecked && !processedImageUrl && rawFile) {
      setIsProcessing(true);

      try {
      
        const imgly = await import("@imgly/background-removal");
        
        const imageBlob = await imgly.removeBackground(rawFile);
        const processedUrl = URL.createObjectURL(imageBlob);
        setProcessedImageUrl(processedUrl);
      } catch (error) {
        console.error("Error al remover fondo:", error);
        setUseBackgroundRemoval(false);
      } finally {
        setIsProcessing(false);
      }
    }
  };

  /* RANDOM FLOOR */
  const changeRandomBackground = () => {
    const filtered = roomBackgrounds.filter((bg) => bg !== currentBackground);
    const randomBg = filtered[Math.floor(Math.random() * filtered.length)];
    setCurrentBackground(randomBg);
  };

  /* DOWNLOAD */
  const handleDownload = () => {
    if (!displayImage) return;
    const link = document.createElement("a");
    link.href = displayImage;
    link.download = `tuftlab-${selectedSize}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  /* SHARE */
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Mi Rug Personalizado",
          text: "Mira mi diseño en TuftLabEc",
          url: window.location.href,
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Enlace copiado al portapapeles");
    }
  };

  /* WHATSAPP */
  const handleWhatsAppQuote = () => {
    const phoneNumber = "593983229662";
    const message =
      `¡Hola TuftLabEc! 👋\n\n` +
      `Quiero cotizar una alfombra personalizada.\n\n` +
      `📏 Tamaño: ${currentRug.label}\n` +
      `🎨 Color borde: ${rugColor}\n` +
      `🔍 Zoom: ${scale}%\n` +
      `🌀 Rotación: ${rotation}°`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const displayImage = useBackgroundRemoval && processedImageUrl ? processedImageUrl : originalImageUrl;

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="backdrop-blur-2xl bg-white/70 border border-zinc-200 rounded-[24px] sm:rounded-3xl px-4 sm:px-6 py-3 shadow-xl">
            {/* TOP BAR */}
            <div className="flex items-center justify-between gap-4">
              {/* LOGO */}
              <Link href="/">
                <h1 className="text-xl sm:text-2xl font-black tracking-tight bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent cursor-pointer shrink-0">
                  TuftLabEc
                </h1>
              </Link>

              {/* DESKTOP NAV */}
              <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
                <Link href="/" className="hover:text-cyan-500 transition">Inicio</Link>
                <Link href="/showroom" className="hover:text-cyan-500 transition">ShowCase</Link>
                <Link href="/#diseñador" className="hover:text-cyan-500 transition">Diseñador</Link>
                <Link href="/#faq" className="hover:text-cyan-500 transition">FAQ</Link>
              </nav>

              {/* RIGHT */}
              <div className="flex items-center gap-3">
                <Link
                  href="/designer"
                  className="hidden sm:flex items-center justify-center px-5 md:px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm md:text-base font-semibold shadow-lg shadow-blue-500/20 hover:scale-105 transition-all duration-300"
                >
                  Diseñar
                </Link>

                {/* MOBILE BUTTON */}
                <button
                  onClick={() => setMobileMenu(!mobileMenu)}
                  className="md:hidden flex items-center justify-center w-11 h-11 rounded-full bg-zinc-100 border border-zinc-200"
                >
                  {mobileMenu ? <Minus size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
              {mobileMenu && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden overflow-hidden"
                >
                  <div className="flex flex-col gap-3 pt-5">
                    <Link href="/" onClick={() => setMobileMenu(false)} className="px-4 py-3 rounded-2xl bg-zinc-50 text-zinc-700 font-medium">Inicio</Link>
                    <Link href="/showroom" onClick={() => setMobileMenu(false)} className="px-4 py-3 rounded-2xl bg-zinc-50 text-zinc-700 font-medium">ShowCase</Link>
                    <Link href="/#diseñador" onClick={() => setMobileMenu(false)} className="px-4 py-3 rounded-2xl bg-zinc-50 text-zinc-700 font-medium">Diseñador</Link>
                    <Link href="/#faq" onClick={() => setMobileMenu(false)} className="px-4 py-3 rounded-2xl bg-zinc-50 text-zinc-700 font-medium">FAQ</Link>
                    <Link href="/designer" onClick={() => setMobileMenu(false)} className="mt-2 flex items-center justify-center px-5 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-lg">
                      Diseñar
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.header>

      {/* MAIN */}
      <div className="min-h-screen bg-neutral-50 text-neutral-800 px-4 md:px-6 pt-28 lg:pt-32 pb-6 flex flex-col xl:flex-row gap-6">
        
        {/* LEFT PANEL */}
        <div className="w-full xl:w-[400px] bg-white p-5 md:p-6 rounded-3xl border border-neutral-200 shadow-sm flex flex-col gap-6 h-fit xl:sticky xl:top-32 z-10">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">TuftLab Studio</span>
            <h2 className="text-3xl font-black mt-1">Rug Designer</h2>
          </div>

          {/* UPLOAD */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <Upload className="w-4 h-4 text-neutral-400" /> Subir diseño
            </label>
            <input type="file" ref={inputRef} onChange={handleUpload} accept="image/*" className="hidden" />
            <button
              onClick={() => inputRef.current?.click()}
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition"
            >
              <ImageIcon className="w-4 h-4" /> Cargar Imagen
            </button>

            {originalImageUrl && (
              <div className="flex items-center justify-between gap-3 bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3">
                <div className="flex flex-col">
                  <span className="text-xs font-bold flex items-center gap-1">
                    <Scissors className="w-3.5 h-3.5" /> Quitar fondo IA
                  </span>
                  <span className="text-[10px] text-neutral-500">
                    {isProcessing ? "Descargando IA..." : "Activar IA"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {isProcessing && <Loader2 className="w-4 h-4 animate-spin text-blue-600" />}
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={useBackgroundRemoval} onChange={handleToggleBackground} />
                    <div className="w-10 h-5 bg-neutral-300 rounded-full peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:w-4 after:h-4 after:rounded-full after:transition-all peer-checked:after:translate-x-5" />
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* VIEW MODE */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setViewMode("blueprint")}
              className={`py-3 rounded-xl text-sm font-bold transition ${viewMode === "blueprint" ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-600"}`}
            >
              Técnico
            </button>
            <button
              onClick={() => setViewMode("realistic")}
              className={`py-3 rounded-xl text-sm font-bold transition ${viewMode === "realistic" ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-600"}`}
            >
              Realista
            </button>
          </div>

          {/* FLOOR */}
          {viewMode === "realistic" && (
            <button onClick={changeRandomBackground} className="w-full py-3 border border-neutral-200 rounded-xl text-sm font-semibold flex items-center justify-center gap-2">
              <RefreshCw className="w-4 h-4" /> Cambiar piso
            </button>
          )}

          {/* COLORS */}
          <div className="flex flex-col gap-3">
            <label className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <Palette className="w-4 h-4 text-neutral-400" /> Color borde
            </label>
            <div className="flex gap-3 overflow-x-auto pb-1">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setRugColor(color)}
                  style={{ backgroundColor: color }}
                  className={`w-10 h-10 rounded-full border-2 shrink-0 transition ${rugColor === color ? "scale-110 border-blue-500 shadow-md" : "border-neutral-200"}`}
                />
              ))}
            </div>
          </div>

          {/* SIZES */}
          <div className="flex flex-col gap-3">
            <label className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-neutral-400" /> Tamaño
            </label>
            <div className="flex flex-col gap-2">
              {Object.entries(rugSizes).map(([key, data]) => (
                <button
                  key={key}
                  onClick={() => setSelectedSize(key as SizeKey)}
                  className={`w-full px-4 py-3 rounded-xl border text-left text-sm font-bold transition ${selectedSize === key ? "bg-neutral-900 text-white border-neutral-900" : "bg-white border-neutral-200"}`}
                >
                  {data.label}
                </button>
              ))}
            </div>
          </div>

          {/* RANGE */}
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex justify-between text-xs font-semibold mb-2">
                <span className="flex items-center gap-1"><Maximize2 className="w-3 h-3" /> Zoom</span>
                <span>{scale}%</span>
              </div>
              <input type="range" min="30" max="180" value={scale} onChange={(e) => setScale(Number(e.target.value))} className="w-full accent-blue-600" />
            </div>
            <div>
              <div className="flex justify-between text-xs font-semibold mb-2">
                <span className="flex items-center gap-1"><RotateCw className="w-3 h-3" /> Rotación</span>
                <span>{rotation}°</span>
              </div>
              <input type="range" min="-180" max="180" value={rotation} onChange={(e) => setRotation(Number(e.target.value))} className="w-full accent-blue-600" />
            </div>
          </div>

          {/* ACTIONS */}
          {originalImageUrl && (
            <div className="flex flex-col gap-3 pt-4 border-t border-neutral-100">
              <div className="grid grid-cols-2 gap-2">
                <button onClick={handleShare} className="py-3 rounded-xl border border-neutral-200 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-neutral-50 transition">
                  <Share2 className="w-4 h-4" /> Compartir
                </button>
                <button onClick={handleDownload} className="py-3 rounded-xl border border-neutral-200 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-neutral-50 transition">
                  <Download className="w-4 h-4" /> Descargar
                </button>
              </div>
              <button onClick={handleWhatsAppQuote} className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition">
                <MessageCircle className="w-5 h-5" /> Cotizar por WhatsApp
              </button>
            </div>
          )}
        </div>

        {/* RIGHT PANEL (CANVAS) */}
        <div
          ref={canvasRef}
          className="flex-1 relative overflow-hidden rounded-[32px] border border-neutral-300 min-h-[450px] md:min-h-[700px] shadow-inner touch-none"
          style={{
            backgroundColor: viewMode === "blueprint" ? "#f8fafc" : "#e5e5e5",
            backgroundImage: viewMode === "blueprint" ? "radial-gradient(#cbd5e1 1px, transparent 1px)" : `url(${currentBackground})`,
            backgroundSize: viewMode === "blueprint" ? "24px 24px" : "cover",
            backgroundPosition: "center",
          }}
        >
          {/* TOP SWITCH */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md rounded-xl border border-neutral-200 p-1.5 flex items-center gap-1 z-20">
            <button onClick={() => setViewMode("blueprint")} className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition ${viewMode === "blueprint" ? "bg-neutral-900 text-white" : "text-neutral-500"}`}>
              <Grid className="w-3.5 h-3.5" /> Técnico
            </button>
            <button onClick={() => setViewMode("realistic")} className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition ${viewMode === "realistic" ? "bg-neutral-900 text-white" : "text-neutral-500"}`}>
              <ImageIconSolid className="w-3.5 h-3.5" /> Realista
            </button>
          </div>

          {/* RUG */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            {displayImage ? (
              <motion.div
                drag
                dragConstraints={canvasRef}
                dragElastic={0.05}
                dragMomentum={false}
                className="relative flex items-center justify-center cursor-grab active:cursor-grabbing z-10"
                animate={{ scale: scale / 100, rotate: rotation }}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                style={{
                  /* SOLUCIÓN AL BUG EN MÓVILES: Altura en automático para no colapsar el Aspect Ratio */
                  width: "100%",
                  height: "auto",
                  maxWidth: `${currentRug.width}px`,
                  maxHeight: `${currentRug.height}px`,
                  aspectRatio: `${currentRug.width} / ${currentRug.height}`,
                }}
              >
                <img
                  src={displayImage}
                  alt="TuftLab Rug"
                  draggable={false}
                  className={`w-full h-full object-contain pointer-events-none select-none ${currentRug.isCircle ? "rounded-full object-cover" : "rounded-2xl"}`}
                  style={{
                    filter: `
                      drop-shadow(2px 2px 0px ${rugColor})
                      drop-shadow(-2px -2px 0px ${rugColor})
                      drop-shadow(2px -2px 0px ${rugColor})
                      drop-shadow(-2px 2px 0px ${rugColor})
                      drop-shadow(0px 15px 25px rgba(0,0,0,${viewMode === "blueprint" ? "0.08" : "0.35"}))
                    `,
                  }}
                />
              </motion.div>
            ) : (
              <div className="bg-white/80 backdrop-blur-md border border-neutral-200 rounded-2xl px-6 py-4 text-sm font-medium text-neutral-500 shadow-sm">
                Sube una imagen para comenzar
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}