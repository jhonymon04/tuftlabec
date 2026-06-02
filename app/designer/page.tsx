"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
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
  MessageCircle
} from "lucide-react";
import { removeBackground } from "@imgly/background-removal";

type SizeKey = "60x60" | "80x80" | "120x120" | "90x40" | "circular_80";
type ViewMode = "realistic" | "blueprint";

export default function DesignerPage() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const [viewMode, setViewMode] = useState<ViewMode>("blueprint");
  
  const [originalImageUrl, setOriginalImageUrl] = useState<string | null>(null);
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  const [rawFile, setRawFile] = useState<File | null>(null);

  const [useBackgroundRemoval, setUseBackgroundRemoval] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const [rugColor, setRugColor] = useState("#ebdca1");
  const [scale, setScale] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [selectedSize, setSelectedSize] = useState<SizeKey>("60x60");

    //FONDOS
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
    "60x60": { label: "60x60 cm (Estándar)", width: 300, height: 300, isCircle: false },
    "80x80": { label: "80x80 cm (Mediana)", width: 400, height: 400, isCircle: false },
    "120x120": { label: "120x120 cm (Grande)", width: 500, height: 500, isCircle: false },
    "90x40": { label: "90x40 cm (Deskmat)", width: 480, height: 213, isCircle: false },
    "circular_80": { label: "Ø 80 cm (Circular)", width: 400, height: 400, isCircle: true },
  };

  const currentRug = rugSizes[selectedSize];
  const colors = ["#111111", "#ffffff", "#ebdca1", "#ff6b6b", "#bce1f1"];

  const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

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
        const imageBlob = await removeBackground(rawFile);
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

  const changeRandomBackground = () => {
    const filtered = roomBackgrounds.filter((bg) => bg !== currentBackground);
    const randomBg = filtered[Math.floor(Math.random() * filtered.length)];
    setCurrentBackground(randomBg);
  };

  const handleDownload = () => {
    if (!displayImage) return;
    const link = document.createElement("a");
    link.href = displayImage;
    link.download = `tuftlab-diseno-${selectedSize}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Mi Alfombra Personalizada',
          text: `¡Mira el diseño que creé en TuftlabEc Studio! Tamaño: ${currentRug.label}.`,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error al compartir", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("¡Enlace de la app copiado al portapapeles!");
    }
  };

  const handleWhatsAppQuote = () => {
    const phoneNumber = "593983229662"; 
    const message = `¡Hola TuftlabEc! 👋 Quiero cotizar una alfombra personalizada con las siguientes especificaciones:\n\n` +
      `📏 *Tamaño:* ${currentRug.label}\n` +
      `🎨 *Color del borde:* ${rugColor}\n` +
      `🔍 *Ajustes de simulación:* Zoom al ${scale}% y Rotación de ${rotation}°.\n\n` +
      `¿Cuáles son los siguientes pasos para enviarles mi imagen original?`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    dragging.current = true;
    dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    setPosition({
      x: clamp(e.clientX - dragStart.current.x, -400, 400),
      y: clamp(e.clientY - dragStart.current.y, -250, 250),
    });
  };

  const handleMouseUpOrLeave = () => { dragging.current = false; };

  const displayImage = (useBackgroundRemoval && processedImageUrl) ? processedImageUrl : originalImageUrl;

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="backdrop-blur-2xl bg-white/70 border border-zinc-200 rounded-3xl px-6 py-4 flex items-center justify-between shadow-xl">
            <h1
              onClick={() => { window.location.href = "/"; }}
              className="text-2xl font-black tracking-tight bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition duration-300"
            >
              TuftLabEc
            </h1> 

            <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-600">
              <a href="/#" className="hover:text-cyan-500 transition">Inicio</a>
              <a href="/#showcase" className="hover:text-cyan-500 transition">ShowCase</a>
              <a href="/#diseñador" className="hover:text-cyan-500 transition">
              Diseñador
            </a>
              <a href="/#categorias" className="hover:text-cyan-500 transition">Categorías</a>
              <a href="/#faq" className="hover:text-cyan-500 transition">FAQ</a>
            </nav>

            <Link
              href="/designer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-lg shadow-blue-500/20 hover:scale-105 transition-all duration-300"
            >
              Diseñar
            </Link>
          </div>
        </div>
      </motion.header>

      {/* CONTENEDOR PRINCIPAL*/}
      <div className="min-h-screen bg-neutral-50 text-neutral-800 p-6 pt-28 lg:pt-32 flex flex-col lg:flex-row gap-8 font-sans">
        
        {/* PANEL IZQUIERDO */}
        <div className="w-full lg:w-[400px] bg-white p-6 rounded-3xl flex flex-col gap-6 shadow-sm border border-neutral-100 h-fit z-10">
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Tuftlab Studio</span>
            <h2 className="text-3xl font-black text-neutral-900 tracking-tight mt-0.5">Rug Designer</h2>
          </div>

          {/* Subir Diseño */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-neutral-900 uppercase tracking-wider flex items-center gap-2">
              <Upload className="w-4 h-4 text-neutral-400" /> 1. Subir Diseño
            </label>
            <input type="file" ref={inputRef} onChange={handleUpload} accept="image/*" className="hidden" />
            <button
              onClick={() => inputRef.current?.click()}
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors shadow-md shadow-blue-600/10"
            >
              <ImageIcon className="w-4 h-4" />
              <span>Cargar Imagen</span>
            </button>

            {originalImageUrl && (
              <div className="flex items-center justify-between bg-neutral-50 px-4 py-3 rounded-xl border border-neutral-200 mt-1">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-neutral-800 flex items-center gap-1.5">
                    <Scissors className="w-3.5 h-3.5" /> Recortar silueta
                  </span>
                  <span className="text-[10px] text-neutral-500">
                    {isProcessing ? "Procesando recorte..." : "Activar para quitar fondo"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {isProcessing && <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />}
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={useBackgroundRemoval}
                      onChange={handleToggleBackground}
                      disabled={isProcessing}
                    />
                    <div className="w-9 h-5 bg-neutral-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600 disabled:opacity-50"></div>
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* Superficie de piso */}
          {viewMode === "realistic" && (
            <div className="flex flex-col gap-2 animate-in fade-in slide-in-from-top-2">
              <label className="text-xs font-bold text-neutral-900 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-neutral-400" /> 2. Superficie
              </label>
              <button
                onClick={changeRandomBackground}
                className="w-full py-3 border border-neutral-200 hover:bg-neutral-50 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-colors text-neutral-700"
              >
                <RefreshCw className="w-4 h-4 text-neutral-400" /> Cambiar Textura de Piso
              </button>
            </div>
          )}

          {/* Color del Borde */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-neutral-900 uppercase tracking-wider flex items-center gap-2">
              <Palette className="w-4 h-4 text-neutral-400" /> {viewMode === "realistic" ? "3" : "2"}. Color del Borde Sólido
            </label>
            <div className="flex gap-3 items-center">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setRugColor(color)}
                  style={{ backgroundColor: color }}
                  className={`w-9 h-9 rounded-full border-2 transition-all ${
                    rugColor === color ? "scale-110 border-blue-500 shadow-md shadow-blue-500/20" : "border-neutral-200"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Tamaño y Formato */}
          <div className="flex flex-col gap-3">
            <label className="text-xs font-bold text-neutral-900 uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-neutral-400" /> {viewMode === "realistic" ? "4" : "3"}. Tamaño y Formato
            </label>
            <div className="flex flex-col gap-2">
              {Object.entries(rugSizes).map(([key, data]) => (
                <button
                  key={key}
                  onClick={() => setSelectedSize(key as SizeKey)}
                  className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs border text-left flex justify-between items-center transition-all ${
                    selectedSize === key
                      ? "bg-neutral-900 border-neutral-900 text-white shadow-sm"
                      : "bg-white border-neutral-200 hover:bg-neutral-50 text-neutral-700"
                  }`}
                >
                  <span>{data.label}</span>
                  {data.isCircle && <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-md font-medium">Circular</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Controles de Escala y Rotación */}
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex flex-col gap-1">
              <div className="flex justify-between text-xs font-semibold text-neutral-500">
                <span className="flex items-center gap-1"><Maximize2 className="w-3 h-3" /> Escala / Zoom</span>
                <span>{scale}%</span>
              </div>
              <input type="range" min="50" max="200" value={scale} onChange={(e) => setScale(Number(e.target.value))} className="w-full h-1 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex justify-between text-xs font-semibold text-neutral-500">
                <span className="flex items-center gap-1"><RotateCw className="w-3 h-3" /> Rotación</span>
                <span>{rotation}°</span>
              </div>
              <input type="range" min="-180" max="180" value={rotation} onChange={(e) => setRotation(Number(e.target.value))} className="w-full h-1 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
          </div>

          {/* Botonera */}
          {originalImageUrl && (
            <div className="flex flex-col gap-2 pt-4 border-t border-neutral-100 animate-in fade-in">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleShare}
                  className="py-2.5 px-3 border border-neutral-200 hover:bg-neutral-50 rounded-xl text-xs font-bold flex items-center justify-center gap-2 text-neutral-700 transition-colors"
                >
                  <Share2 className="w-4 h-4 text-neutral-500" /> Compartir
                </button>
                <button
                  onClick={handleDownload}
                  className="py-2.5 px-3 border border-neutral-200 hover:bg-neutral-50 rounded-xl text-xs font-bold flex items-center justify-center gap-2 text-neutral-700 transition-colors"
                >
                  <Download className="w-4 h-4 text-neutral-500" /> Descargar
                </button>
              </div>
              
              <button
                onClick={handleWhatsAppQuote}
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-md shadow-emerald-600/10 mt-1"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>Cotizar por WhatsApp</span>
              </button>
            </div>
          )}
        </div>

        {/* PANEL DERECHO */}
        <div 
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className="flex-1 rounded-[32px] relative overflow-hidden min-h-[550px] lg:min-h-full shadow-inner border border-neutral-300"
          style={{
            backgroundColor: viewMode === "blueprint" ? "#f8fafc" : "#e5e5e5",
            backgroundImage: viewMode === "blueprint" 
              ? "radial-gradient(#cbd5e1 1px, transparent 1px)" 
              : `url(${currentBackground})`,
            backgroundSize: viewMode === "blueprint" ? "24px 24px" : "cover",
            backgroundPosition: "center"
          }}
        >
          {/* Selector de Modo de Vista */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md p-1.5 rounded-xl shadow-sm border border-neutral-200/60 flex items-center gap-1 z-20">
            <button
              onClick={() => setViewMode("blueprint")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                viewMode === "blueprint" ? "bg-neutral-900 text-white shadow-md" : "text-neutral-500 hover:text-neutral-800"
              }`}
            >
              <Grid className="w-3.5 h-3.5" /> Técnico
            </button>
            <button
              onClick={() => setViewMode("realistic")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                viewMode === "realistic" ? "bg-neutral-900 text-white shadow-md" : "text-neutral-500 hover:text-neutral-800"
              }`}
            >
              <ImageIconSolid className="w-3.5 h-3.5" /> Realista
            </button>
          </div>

          {/* Renderizado de la Alfombra */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              onMouseDown={handleMouseDown}
              className="pointer-events-auto relative flex items-center justify-center"
              animate={{
                x: position.x,
                y: position.y,
                scale: scale / 100,
                rotate: rotation,
              }}
              transition={{ type: "spring", stiffness: 250, damping: 25 }}
              style={{
                width: `${currentRug.width}px`,
                height: `${currentRug.height}px`,
                cursor: dragging.current ? "grabbing" : "grab",
              }}
            >
              {displayImage ? (
                <img
                  src={displayImage}
                  alt="" 
                  className={`w-full h-full object-contain pointer-events-none select-none transition-opacity duration-300 ${
                    currentRug.isCircle ? "rounded-full object-cover" : "rounded-2xl"
                  }`}
                  draggable={false}
                  style={{
                    filter: `
                      drop-shadow(2px 2px 0px ${rugColor})
                      drop-shadow(-2px -2px 0px ${rugColor})
                      drop-shadow(2px -2px 0px ${rugColor})
                      drop-shadow(-2px 2px 0px ${rugColor})
                      drop-shadow(0px 20px 25px rgba(0,0,0, ${viewMode === "blueprint" ? "0.1" : "0.4"}))
                    `
                  }}
                />
              ) : (
                <div className="text-center text-neutral-800 bg-white/70 backdrop-blur-md px-6 py-4 rounded-2xl border border-white font-medium text-sm select-none shadow-sm">
                  Sube una imagen para ver tu diseño
                </div>
              )}
            </motion.div>
          </div>
        </div>

      </div>
    </>
  );
}