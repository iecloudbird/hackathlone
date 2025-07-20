import Image from "next/image";
import { type FC, useCallback, useState, useRef, useEffect } from "react";
import { type GalleryImage } from "@/data/homepage/gallery";
import { CarouselArrow } from "./CarouselArrow";

interface DualCarouselProps {
  carousels: {
    id: string;
    title: string;
    images: GalleryImage[];
  }[];
}

const containerClass = "relative w-full px-12";
const wrapperClass =
  "relative overflow-visible rounded-3xl bg-gradient-to-br from-white/5 to-white/10 p-8 backdrop-blur-sm";
const gridClass = "grid grid-cols-1 gap-8 lg:grid-cols-2";
const imageContainerClass = "group relative overflow-hidden rounded-2xl";
const imageClass =
  "h-64 w-full object-cover transition-all duration-700 ease-out group-hover:scale-105 lg:h-80";
const overlayClass =
  "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100";
const dotsContainerClass = "mt-8 flex justify-center space-x-3";
const dotBaseClass =
  "size-2 rounded-full transition-all duration-300 hover:scale-125";
const dotActiveClass = "bg-brightYellow shadow-lg shadow-brightYellow/50";
const dotInactiveClass = "bg-white/40 hover:bg-white/60";

export const DualCarousel: FC<DualCarouselProps> = ({ carousels }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Calculate the maximum number of slides based on the longest carousel
  const maxSlides = Math.max(
    ...carousels.map((carousel) => carousel.images.length)
  );

  const handlePrevious = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? maxSlides - 1 : prev - 1));
  }, [maxSlides]);

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev === maxSlides - 1 ? 0 : prev + 1));
  }, [maxSlides]);

  const handleSlideSelect = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        handlePrevious();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrevious, handleNext]);

  // Touch/Swipe handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }

    // Reset touch positions
    touchStartX.current = 0;
    touchEndX.current = 0;
  }, [handleNext, handlePrevious]);

  // Mouse drag handlers for desktop
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    touchStartX.current = e.clientX;
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (touchStartX.current === 0) return;
    touchEndX.current = e.clientX;
  }, []);

  const handleMouseUp = useCallback(() => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftDrag = distance > 50;
    const isRightDrag = distance < -50;

    if (isLeftDrag) {
      handleNext();
    } else if (isRightDrag) {
      handlePrevious();
    }

    // Reset mouse positions
    touchStartX.current = 0;
    touchEndX.current = 0;
  }, [handleNext, handlePrevious]);

  if (carousels.length !== 2) {
    return <div>Error: DualCarousel requires exactly 2 carousels</div>;
  }

  const leftImage =
    carousels[0].images[currentSlide % carousels[0].images.length];
  const rightImage =
    carousels[1].images[currentSlide % carousels[1].images.length];

  return (
    <div className={containerClass}>
      <div className={wrapperClass}>
        <CarouselArrow direction="prev" onClick={handlePrevious} />
        <CarouselArrow direction="next" onClick={handleNext} />

        {/* Two Column Layout */}
        <div
          className={gridClass}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          style={{ cursor: "grab" }}
          role="presentation"
        >
          {/* Left Column - Moments to Relive */}
          <div className={imageContainerClass}>
            <Image
              key={`left-${currentSlide}`}
              src={leftImage.src}
              alt={leftImage.alt}
              width={600}
              height={400}
              className={imageClass}
              loading={currentSlide === 0 ? "eager" : "lazy"}
              quality={85}
            />
            <div className={overlayClass} />
          </div>

          {/* Right Column - Photo Wall Highlights */}
          <div className={imageContainerClass}>
            <Image
              key={`right-${currentSlide}`}
              src={rightImage.src}
              alt={rightImage.alt}
              width={600}
              height={400}
              className={imageClass}
              loading={currentSlide === 0 ? "eager" : "lazy"}
              quality={85}
            />
            <div className={overlayClass} />
          </div>
        </div>

        {/* Dots Indicator */}
        <div className={dotsContainerClass}>
          {Array.from({ length: maxSlides }).map((_, index) => (
            <button
              key={index}
              className={`${dotBaseClass} ${
                index === currentSlide ? dotActiveClass : dotInactiveClass
              }`}
              onClick={() => handleSlideSelect(index)}
              aria-label={`Go to slide ${index + 1}`}
              type="button"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
