# Portfolio2

A modern portfolio website built with Next.js, featuring a beautiful image gallery with full-screen viewing capabilities.

## Features

- 🖼️ Modern Image Gallery
- 🔍 Full-screen Image Viewing
- 🎨 Material Design UI
- 📱 Responsive Design
- ⚡ Next.js 14 with App Router
- 🎯 TypeScript Support
- 🎨 Tailwind CSS Integration

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [Material UI](https://mui.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/newbieking/picture-gallery.git
cd picture-gallery
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio2/
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # React components
│   │   └── gallery/      # Gallery-related components
│   └── lib/             # Utility functions
├── public/              # Static assets
└── ...config files
```

## Gallery Features

- **Responsive Grid Layout**: Adapts to different screen sizes
- **Category Filtering**: Filter images by category
- **Full-screen View**: Click any image to view in full-screen mode
- **Material Design**: Clean and modern UI components
- **Smooth Transitions**: Elegant animations and transitions

## Customization

### Adding New Images

To add new images to the gallery, modify the `galleryItems` array in `src/app/page.tsx`:

```typescript
const galleryItems: GalleryItem[] = [
  {
    id: "unique-id",
    title: "Image Title",
    description: "Image Description",
    imageUrl: "path/to/image.jpg",
    category: "Category"
  },
  // ... more items
]
```

### Styling

The project uses Material UI's theming system. You can customize the theme by modifying the theme configuration in your app.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Material UI](https://mui.com/) for the beautiful components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework 