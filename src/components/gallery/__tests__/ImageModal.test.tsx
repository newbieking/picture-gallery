import { render, screen, fireEvent } from '@testing-library/react';
import ImageModal from '../ImageModal';
import type { ImageType } from '@/types/gallery';

const mockImage: ImageType = {
  id: '1',
  src: '/test-image.jpg',
  alt: 'Test Image',
  width: 800,
  height: 600,
};

describe('ImageModal', () => {
  it('renders correctly when image is provided', () => {
    const handleClose = jest.fn();
    render(
      <ImageModal
        image={mockImage}
        onClose={handleClose}
        onNext={jest.fn()}
        onPrevious={jest.fn()}
        hasNext={true}
        hasPrevious={true}
      />
    );
    
    const modal = screen.getByRole('dialog');
    expect(modal).toBeInTheDocument();
    
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', mockImage.src);
    expect(image).toHaveAttribute('alt', mockImage.alt);
  });

  it('does not render when no image is provided', () => {
    const handleClose = jest.fn();
    render(
      <ImageModal
        image={null}
        onClose={handleClose}
        onNext={jest.fn()}
        onPrevious={jest.fn()}
        hasNext={true}
        hasPrevious={true}
      />
    );
    
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const handleClose = jest.fn();
    render(
      <ImageModal
        image={mockImage}
        onClose={handleClose}
        onNext={jest.fn()}
        onPrevious={jest.fn()}
        hasNext={true}
        hasPrevious={true}
      />
    );
    
    const closeButton = screen.getByLabelText('Close');
    fireEvent.click(closeButton);
    
    expect(handleClose).toHaveBeenCalled();
  });

  it('handles keyboard navigation', () => {
    const handleNext = jest.fn();
    const handlePrevious = jest.fn();
    const handleClose = jest.fn();
    
    render(
      <ImageModal
        image={mockImage}
        onClose={handleClose}
        onNext={handleNext}
        onPrevious={handlePrevious}
        hasNext={true}
        hasPrevious={true}
      />
    );
    
    // Test next image navigation
    fireEvent.keyDown(document, { key: 'ArrowRight' });
    expect(handleNext).toHaveBeenCalled();
    
    // Test previous image navigation
    fireEvent.keyDown(document, { key: 'ArrowLeft' });
    expect(handlePrevious).toHaveBeenCalled();
    
    // Test closing modal
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalled();
  });
}); 