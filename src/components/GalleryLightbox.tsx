import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useEffect, useState, useRef } from "react";

interface GalleryLightboxProps {
  images: { src: string; alt: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

const GalleryLightbox = ({ 
  images, 
  currentIndex, 
  isOpen, 
  onClose, 
  onPrevious, 
  onNext 
}: GalleryLightboxProps) => {
  const currentImage = images[currentIndex];
  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrevious();
          break;
        case 'ArrowRight':
          onNext();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrevious, onNext]);

  // Handle mouse wheel zoom
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    e.preventDefault();
    const scale = e.deltaY > 0 ? 0.9 : 1.1;
    setPosition(prev => ({
      x: prev.x * scale,
      y: prev.y * scale
    }));
  };

  // Handle mouse drag for panning
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isZoomed) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !isZoomed) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
    if (!isZoomed) {
      setPosition({ x: 0, y: 0 });
    }
  };

  if (!isOpen || !currentImage) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-soft-black/90 backdrop-blur-sm"
        />
        
        {/* Lightbox Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="relative w-full h-full flex items-center justify-center p-4"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-soft-black/60 hover:bg-soft-black/80 flex items-center justify-center transition-colors"
            aria-label="Cerrar imagen"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Previous Button */}
          <button
            onClick={onPrevious}
            className="absolute left-4 z-10 w-12 h-12 rounded-full bg-soft-black/60 hover:bg-soft-black/80 flex items-center justify-center transition-colors"
            aria-label="Imagen anterior"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className={`w-6 h-6 ${currentIndex === 0 ? 'text-white/30' : 'text-white'}`} />
          </button>

          {/* Next Button */}
          <button
            onClick={onNext}
            className="absolute right-4 z-10 w-12 h-12 rounded-full bg-soft-black/60 hover:bg-soft-black/80 flex items-center justify-center transition-colors"
            aria-label="Siguiente imagen"
            disabled={currentIndex === images.length - 1}
          >
            <ChevronRight className={`w-6 h-6 ${currentIndex === images.length - 1 ? 'text-white/30' : 'text-white'}`} />
          </button>

          {/* Main Image */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Zoom Button */}
            <button
              onClick={toggleZoom}
              className="absolute top-4 left-4 z-10 w-10 h-10 rounded-full bg-soft-black/60 hover:bg-soft-black/80 flex items-center justify-center transition-colors"
              aria-label="Zoom"
            >
              <Maximize2 className="w-5 h-5 text-white" />
            </button>

            <div 
              ref={imageRef}
              className="relative w-full h-full flex items-center justify-center"
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <motion.img
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  scale: isZoomed ? 2 : 1,
                  x: isZoomed ? position.x : 0,
                  y: isZoomed ? position.y : 0
                }}
                transition={{ duration: 0.3 }}
                src={currentImage.src}
                alt={currentImage.alt}
                className={`max-w-full max-h-[70vh] object-contain rounded-lg ${isZoomed ? 'cursor-move' : 'cursor-zoom-in'}`}
                draggable={false}
                style={{ 
                  objectFit: 'contain',
                  transform: isZoomed ? `scale(2) translate(${position.x}px, ${position.y}px)` : 'none'
                }}
              />
            </div>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-soft-black/60 px-4 py-2 rounded-full">
            <p className="text-white text-sm font-body">
              {currentIndex + 1} / {images.length} {isZoomed && '(Zoom 2x)'}
            </p>
          </div>

          {/* Image Caption */}
          {currentImage.alt && !isZoomed && (
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 max-w-2xl text-center">
              <p className="text-white/90 text-sm font-body px-4">
                {currentImage.alt}
              </p>
            </div>
          )}
          
          {/* Zoom Instructions */}
          {isZoomed && (
            <div className="absolute top-16 left-1/2 -translate-x-1/2 max-w-2xl text-center">
              <p className="text-white/90 text-sm font-body px-4 bg-soft-black/60 rounded-lg py-2">
                Usa el mouse para mover • Rueda para zoom • ESC para salir
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default GalleryLightbox;
