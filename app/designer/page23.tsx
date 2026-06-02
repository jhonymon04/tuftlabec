"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Upload,
  Palette,
  Move,
  RotateCw,
  ImageIcon,
  RefreshCw,
  Maximize2,
} from "lucide-react";

export default function DesignerPage() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const dragging = useRef(false);

  const dragStart = useRef({
    x: 0,
    y: 0,
  });

  const [uploadedImage, setUploadedImage] = useState<string | null>(
    null
  );

  const [rugColor, setRugColor] = useState("#3f81f8");

  const [scale, setScale] = useState(100);

  const [rotation, setRotation] = useState(0);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [selectedSize, setSelectedSize] =
    useState("80x80");

  const rugSizes = {
    "60x60": {
      dimension: 320,
      price: 45,
    },

    "80x80": {
      dimension: 420,
      price: 70,
    },

    "120x120": {
      dimension: 520,
      price: 120,
    },
  };

  const currentRug =
    rugSizes[selectedSize as keyof typeof rugSizes];

  const colors = [
    "#3f81f8",
    "#31ab51",
    "#111111",
    "#ffffff",
    "#ff6b6b",
  ];

  const clamp = (
    value: number,
    min: number,
    max: number
  ) => {
    return Math.min(Math.max(value, min), max);
  };

  const handleUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setUploadedImage(imageUrl);
  };

  const handleMouseDown = (
    e: React.MouseEvent<HTMLImageElement>
  ) => {
    dragging.current = true;

    dragStart.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!dragging.current) return;

    const limit = currentRug.dimension * 0.35;

    const nextX =
      e.clientX - dragStart.current.x;

    const nextY =
      e.clientY - dragStart.current.y;

    setPosition({
      x: clamp(nextX, -limit, limit),
      y: clamp(nextY, -limit, limit),
    });
  };

  const handleMouseUp = () => {
    dragging.current = false;
  };

  const handleWheel = (
    e: React.WheelEvent<HTMLDivElement>
  ) => {
    e.preventDefault();

    const delta = e.deltaY * -0.05;

    setScale((prev) =>
      clamp(prev + delta, 50, 220)
    );
  };

  const resetDesign = () => {
    setScale(100);

    setRotation(0);

    setPosition({
      x: 0,
      y: 0,
    });
  };

  const centerDesign = () => {
    setPosition({
      x: 0,
      y: 0,
    });
  };

  useEffect(() => {
    const handleKeyDown = (
      e: KeyboardEvent
    ) => {
      if (e.key === "r") {
        resetDesign();
      }

      if (e.key === "c") {
        centerDesign();
      }

      if (e.key === "ArrowLeft") {
        setRotation((prev) => prev - 2);
      }

      if (e.key === "ArrowRight") {
        setRotation((prev) => prev + 2);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f7fb]">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            backgroundColor: `${rugColor}20`,
          }}
          className="absolute left-[-100px] top-[-200px] h-[500px] w-[500px] rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            backgroundColor: `${rugColor}10`,
          }}
          className="absolute bottom-[-200px] right-[-100px] h-[500px] w-[500px] rounded-full blur-3xl"
        />
      </div>

      {/* Main */}
      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col gap-6 px-6 py-8 lg:flex-row">
        {/* Sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-[360px]"
        >
          <div className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
            {/* Header */}
            <div className="mb-8">
              <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-[#3f81f8]">
                TUFTLAB
              </p>

              <h1 className="text-3xl font-bold text-[#111111]">
                Rug Designer
              </h1>

              <p className="mt-3 text-sm leading-relaxed text-[#666]">
                Interactive custom rug creation experience.
              </p>
            </div>

            {/* Upload */}
            <div className="mb-5 rounded-2xl border border-black/5 bg-white/80 p-4">
              <div className="mb-3 flex items-center gap-2">
                <Upload
                  size={18}
                  className="text-[#3f81f8]"
                />

                <h2 className="font-semibold text-[#111]">
                  Upload Design
                </h2>
              </div>

              <input
                ref={inputRef}
                type="file"
                accept="image/png,image/jpeg,image/svg+xml"
                onChange={handleUpload}
                className="hidden"
              />

              <button
                onClick={() =>
                  inputRef.current?.click()
                }
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#3f81f8] px-4 py-3 font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                <ImageIcon size={18} />

                Upload Image
              </button>

              <p className="mt-3 text-xs text-[#777]">
                PNG, JPG & SVG supported
              </p>
            </div>

            {/* Colors */}
            <div className="mb-5 rounded-2xl border border-black/5 bg-white/80 p-4">
              <div className="mb-4 flex items-center gap-2">
                <Palette
                  size={18}
                  className="text-[#3f81f8]"
                />

                <h2 className="font-semibold text-[#111]">
                  Rug Colors
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() =>
                      setRugColor(color)
                    }
                    style={{
                      backgroundColor: color,
                    }}
                    className={`h-10 w-10 rounded-full transition-all duration-300 ${
                      rugColor === color
                        ? "scale-110 ring-2 ring-black/20 ring-offset-2"
                        : ""
                    } ${
                      color === "#ffffff"
                        ? "border border-black/10"
                        : ""
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-5 rounded-2xl border border-black/5 bg-white/80 p-4">
              <h2 className="mb-4 font-semibold text-[#111]">
                Rug Size
              </h2>

              <div className="grid grid-cols-3 gap-3">
                {Object.keys(rugSizes).map(
                  (size) => (
                    <button
                      key={size}
                      onClick={() =>
                        setSelectedSize(size)
                      }
                      className={`rounded-xl px-3 py-3 text-sm font-medium transition-all duration-300 ${
                        selectedSize === size
                          ? "border border-[#3f81f8] bg-[#3f81f8] text-white shadow-lg"
                          : "border border-black/10 bg-white text-[#111] hover:border-[#3f81f8]"
                      }`}
                    >
                      {size}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Transform */}
            <div className="mb-5 rounded-2xl border border-black/5 bg-white/80 p-4">
              <div className="mb-4 flex items-center gap-2">
                <Move
                  size={18}
                  className="text-[#3f81f8]"
                />

                <h2 className="font-semibold text-[#111]">
                  Transform
                </h2>
              </div>

              <div className="space-y-4">
                {/* Scale */}
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span>Scale</span>

                    <span>
                      {Math.round(scale)}%
                    </span>
                  </div>

                  <input
                    type="range"
                    min="50"
                    max="220"
                    value={scale}
                    onChange={(e) =>
                      setScale(
                        Number(e.target.value)
                      )
                    }
                    className="w-full accent-[#3f81f8]"
                  />
                </div>

                {/* Rotation */}
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span>Rotation</span>

                    <span>{rotation}°</span>
                  </div>

                  <input
                    type="range"
                    min="-180"
                    max="180"
                    value={rotation}
                    onChange={(e) =>
                      setRotation(
                        Number(e.target.value)
                      )
                    }
                    className="w-full accent-[#3f81f8]"
                  />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mb-5 grid grid-cols-2 gap-3">
              <button
                onClick={resetDesign}
                className="flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-[#111] transition hover:shadow-md"
              >
                <RefreshCw size={16} />

                Reset
              </button>

              <button
                onClick={centerDesign}
                className="flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-[#111] transition hover:shadow-md"
              >
                <Maximize2 size={16} />

                Center
              </button>
            </div>

            {/* Pricing */}
            <motion.div
              layout
              className="rounded-2xl bg-[#111111] p-5 text-white shadow-2xl"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-white/60">
                Estimated Price
              </p>

              <div className="mt-3 flex items-end gap-2">
                <h2 className="text-4xl font-bold">
                  ${currentRug.price}
                </h2>

                <span className="pb-1 text-white/60">
                  USD
                </span>
              </div>

              <div className="mt-4 space-y-1 text-xs text-white/50">
                <p>R → Reset Design</p>

                <p>C → Center Design</p>

                <p>← → Rotate</p>

                <p>Mouse Wheel → Zoom</p>
              </div>
            </motion.div>
          </div>
        </motion.aside>

        {/* Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <div
            onWheel={handleWheel}
            className="relative flex min-h-[700px] items-center justify-center overflow-hidden rounded-[40px] border border-white/50 bg-white/40 shadow-[0_20px_100px_rgba(0,0,0,0.08)] backdrop-blur-2xl"
          >
            {/* Glow */}
            <motion.div
              animate={{
                backgroundColor: `${rugColor}30`,
              }}
              className="absolute h-[500px] w-[500px] rounded-full blur-3xl"
            />

            {/* Rug */}
            <motion.div
              whileHover={{
                scale: 1.02,
                rotate: -1,
              }}
              transition={{
                duration: 0.4,
              }}
              className="relative z-10"
            >
              {/* Shadows */}
              <div className="absolute inset-0 translate-y-12 scale-95 rounded-[60px] bg-black/25 blur-3xl" />

              <div className="absolute inset-0 translate-y-6 scale-[0.98] rounded-[60px] bg-black/10 blur-2xl" />

              {/* Rug */}
              <motion.div
                animate={{
                  backgroundColor: rugColor,
                  width:
                    currentRug.dimension,
                  height:
                    currentRug.dimension,
                }}
                onMouseMove={
                  handleMouseMove
                }
                onMouseUp={handleMouseUp}
                onMouseLeave={
                  handleMouseUp
                }
                className="relative flex items-center justify-center overflow-hidden rounded-[60px] transition-all duration-500"
                style={{
                  boxShadow: `
                    0 30px 80px rgba(0,0,0,0.18),
                    inset 0 2px 8px rgba(255,255,255,0.18),
                    inset 0 -8px 20px rgba(0,0,0,0.12)
                  `,
                }}
              >
                {/* Fabric */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `
                      radial-gradient(
                        circle at top left,
                        rgba(255,255,255,0.18),
                        transparent 35%
                      )
                    `,
                  }}
                />

                {/* Texture */}
                <div className="absolute inset-0 opacity-[0.18] mix-blend-overlay">
                  <div className="h-full w-full bg-[url('https://www.transparenttextures.com/patterns/fabric-of-squares.png')]" />
                </div>

                {/* Noise */}
                <div className="absolute inset-0 opacity-[0.07] mix-blend-soft-light">
                  <div className="h-full w-full bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />
                </div>

                {/* Border */}
                <div className="absolute inset-0 rounded-[60px] border border-white/10" />

                {/* Image */}
                {uploadedImage ? (
                  <motion.img
                    key={uploadedImage}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    src={uploadedImage}
                    alt="Uploaded design"
                    draggable={false}
                    onMouseDown={
                      handleMouseDown
                    }
                    style={{
                      transform: `
                        translate(${position.x}px, ${position.y}px)
                        scale(${scale / 100})
                        rotate(${rotation}deg)
                      `,
                      filter: `
                        drop-shadow(
                          0 10px 20px rgba(0,0,0,0.18)
                        )
                      `,
                    }}
                    className="
                      relative
                      z-20
                      max-h-[75%]
                      max-w-[75%]
                      cursor-grab
                      object-contain
                      select-none
                      transition-transform
                      duration-75
                      active:cursor-grabbing
                    "
                  />
                ) : (
                  <div className="relative z-20 text-center">
                    <p className="text-sm uppercase tracking-[0.3em] text-white/70">
                      TUFTLAB
                    </p>

                    <h2 className="mt-3 text-5xl font-black text-white">
                      Your
                    </h2>

                    <h2 className="text-5xl font-black text-white">
                      Design
                    </h2>
                  </div>
                )}

                {/* Top Light */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-[60px]"
                  style={{
                    background: `
                      linear-gradient(
                        135deg,
                        rgba(255,255,255,0.25),
                        transparent 40%
                      )
                    `,
                  }}
                />

                {/* Bottom Depth */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-[60px]"
                  style={{
                    background: `
                      linear-gradient(
                        to top,
                        rgba(0,0,0,0.12),
                        transparent 30%
                      )
                    `,
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Floating Badge */}
            <div className="absolute bottom-8 right-8 rounded-2xl border border-white/30 bg-white/70 px-5 py-3 backdrop-blur-xl">
              <div className="flex items-center gap-2 text-sm font-medium text-[#111]">
                <RotateCw
                  size={16}
                  className="text-[#3f81f8]"
                />

                Advanced Interactive Canvas
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}