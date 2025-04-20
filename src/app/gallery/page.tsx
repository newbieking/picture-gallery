import { Metadata } from 'next';
import ImageGrid from '@/components/gallery/ImageGrid';

export const metadata: Metadata = {
  title: 'Image Gallery',
  description: 'Browse through our collection of images',
};

// This would typically come from an API or database
const sampleImages = [
  {
    id: '1',
    src: '/images/sample1.jpg',
    alt: 'Sample image 1',
    width: 1920,
    height: 1080,
  },
  // Add more sample images here
];

export default function GalleryPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Image Gallery</h1>
      <ImageGrid images={sampleImages} />
    </main>
  );
} 