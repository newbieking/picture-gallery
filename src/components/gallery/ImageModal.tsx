import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { ImageModalProps } from "@/types/gallery";
import { useEffect } from "react";

const ImageModal = ({
  image,
  onClose,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious
}: ImageModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        onNext?.();
      } else if (e.key === 'ArrowLeft') {
        onPrevious?.();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onNext, onPrevious]);

  return (
    <Dialog open={image !== null} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[80vw] md:max-w-[60vw] lg:max-w-[50vw]">
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <div
            role="button"
            tabIndex={0}
            className="absolute inset-0 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            onClick={onClose}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClose();
              }
            }}
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </div>
          <Image
            src={image?.src || ''}
            alt={image?.alt || ''}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={true}
            placeholder={image?.blurDataUrl ? "blur" : "empty"}
            blurDataURL={image?.blurDataUrl}
          />
        </div>
        <div className="flex justify-between mt-4">
          <Button
            variant="outline"
            size="icon"
            onClick={onPrevious}
            disabled={!hasPrevious}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={onNext}
            disabled={!hasNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal; 