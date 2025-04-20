import { render, screen, fireEvent } from '@testing-library/react';
import ImageCard from '../ImageCard';
import type { ImageType } from '@/types/gallery';

const mockImage: ImageType = {
  id: '1',
  src: '/test-image.jpg',
  alt: 'Test Image',
  width: 800,
  height: 600,
};

describe('ImageCard', () => {
  it('renders correctly', () => {
    const handleClick = jest.fn();
    render(<ImageCard image={mockImage} onClick={handleClick} />);
    
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', mockImage.alt);
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<ImageCard image={mockImage} onClick={handleClick} />);
    
    const card = screen.getByRole('button');
    fireEvent.click(card);
    
    expect(handleClick).toHaveBeenCalledWith(mockImage);
  });

  it('handles keyboard navigation', () => {
    const handleClick = jest.fn();
    render(<ImageCard image={mockImage} onClick={handleClick} />);
    
    const card = screen.getByRole('button');
    fireEvent.keyDown(card, { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledWith(mockImage);
    
    fireEvent.keyDown(card, { key: ' ' });
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it('applies priority loading when specified', () => {
    const handleClick = jest.fn();
    render(<ImageCard image={mockImage} onClick={handleClick} priority />);
    
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('loading', 'eager');
  });
}); 