import { render, screen, fireEvent } from '@testing-library/react';
import ImageGrid from '../ImageGrid';
import type { ImageType } from '@/types/gallery';

const mockImages: ImageType[] = [
  {
    id: '1',
    src: '/test-image1.jpg',
    alt: 'Test Image 1',
    width: 800,
    height: 600,
  },
  {
    id: '2',
    src: '/test-image2.jpg',
    alt: 'Test Image 2',
    width: 800,
    height: 600,
  },
];

describe('ImageGrid', () => {
  it('renders all images', () => {
    render(<ImageGrid images={mockImages} />);
    
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(mockImages.length);
  });

  it('opens modal when an image is clicked', () => {
    render(<ImageGrid images={mockImages} />);
    
    const firstImage = screen.getAllByRole('button')[0];
    fireEvent.click(firstImage);
    
    const modal = screen.getByRole('dialog');
    expect(modal).toBeInTheDocument();
  });

  it('navigates between images in modal', () => {
    render(<ImageGrid images={mockImages} />);
    
    // Click first image to open modal
    const firstImage = screen.getAllByRole('button')[0];
    fireEvent.click(firstImage);
    
    // Check if modal is open with first image
    const modal = screen.getByRole('dialog');
    expect(modal).toBeInTheDocument();
    
    // Click next button
    const nextButton = screen.getByLabelText('Next image');
    fireEvent.click(nextButton);
    
    // Modal should still be open
    expect(modal).toBeInTheDocument();
  });

  it('closes modal when close button is clicked', () => {
    render(<ImageGrid images={mockImages} />);
    
    // Open modal
    const firstImage = screen.getAllByRole('button')[0];
    fireEvent.click(firstImage);
    
    // Close modal
    const closeButton = screen.getByLabelText('Close');
    fireEvent.click(closeButton);
    
    // Modal should be closed
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
}); 