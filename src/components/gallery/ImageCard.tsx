import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { ImageCardProps } from '@/types/gallery';

const ImageCard = ({ image, onClick, priority = false }: ImageCardProps) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(image);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className
    >
      {/* Rest of the component code */}
    </motion.div>
  );
};

export default ImageCard;   