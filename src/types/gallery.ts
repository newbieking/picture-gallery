export interface ImageType {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataUrl?: string;
}

export interface ImageCardProps {
  image: ImageType;
  onClick: (image: ImageType) => void;
  priority?: boolean;
}

export interface ImageGridProps {
  images: ImageType[];
  className?: string;
}

export interface ImageModalProps {
  image: ImageType | null;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNext?: boolean;
  hasPrevious?: boolean;
} 