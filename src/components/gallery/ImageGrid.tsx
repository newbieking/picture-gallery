import { ImageGridProps } from '@/types/gallery';
import { useState } from 'react';
import ImageCard from './ImageCard';
import ImageModal from './ImageModal';
import { cn } from '@/lib/utils';

const ImageGrid = ({ images, className }: ImageGridProps) => {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleImageClick = (image: ImageType) => {
    const index = images.findIndex(img => img.id === image.id);
    setCurrentIndex(index);
    setSelectedImage(image);
  };

  const handleClose = () => setSelectedImage(null);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(images[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(images[currentIndex - 1]);
    }
  };

  return (
    <>
      <div className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        className
      )}>
        {images.map((image, index) => (
          <ImageCard
            key={image.id}
            image={image}
            onClick={handleImageClick}
            priority={index < 4}
          />
        ))}
      </div>

      <ImageModal
        image={selectedImage}
        onClose={handleClose}
        onNext={handleNext}
        onPrevious={handlePrevious}
        hasNext={currentIndex < images.length - 1}
        hasPrevious={currentIndex > 0}
      />
    </>
  );
};

export default ImageGrid; 