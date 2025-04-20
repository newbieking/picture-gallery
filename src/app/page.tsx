"use client"

import { useState } from "react"
import { 
  Box, 
  Button, 
  Card, 
  CardContent, 
  CardMedia, 
  Dialog, 
  DialogContent, 
  DialogTitle, 
  Grid, 
  Typography, 
  ToggleButtonGroup,
  ToggleButton,
  Container,
  IconButton,
  useTheme,
  useMediaQuery
} from "@mui/material"
import { styled } from "@mui/material/styles"
import CloseIcon from '@mui/icons-material/Close'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit'

interface GalleryItem {
  id: string
  title: string
  description: string
  imageUrl: string
  category: string
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Mountain Landscape",
    description: "A breathtaking view of mountain ranges at sunset",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    category: "Landscape"
  },
  {
    id: "2",
    title: "Urban Architecture",
    description: "Modern cityscape with unique architectural elements",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    category: "Architecture"
  },
  {
    id: "3",
    title: "Ocean Waves",
    description: "Powerful waves crashing against the shore",
    imageUrl: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0",
    category: "Nature"
  },
  {
    id: "4",
    title: "Street Photography",
    description: "Candid moments in urban environments",
    imageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390",
    category: "Street"
  }
]

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8],
  },
}))

const StyledCardMedia = styled(CardMedia)({
  height: 200,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  cursor: 'pointer',
})

const FullScreenImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  cursor: 'pointer',
  maxWidth: '100vw',
  maxHeight: '100vh',
})

export default function GalleryPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [isFullScreen, setIsFullScreen] = useState(false)

  const handleCategoryChange = (
    event: React.MouseEvent<HTMLElement>,
    newCategory: string,
  ) => {
    setSelectedCategory(newCategory)
  }

  const handleOpenDialog = (item: GalleryItem) => {
    setSelectedItem(item)
    setIsFullScreen(false)
  }

  const handleCloseDialog = () => {
    setSelectedItem(null)
    setIsFullScreen(false)
  }

  const handleToggleFullScreen = () => {
    setIsFullScreen(!isFullScreen)
  }

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" component="h1" gutterBottom>
          Portfolio Gallery
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Explore our collection of stunning visual works
        </Typography>
      </Box>

      <Box display="flex" justifyContent="center" mb={6}>
        <ToggleButtonGroup
          value={selectedCategory}
          exclusive
          onChange={handleCategoryChange}
          aria-label="gallery category"
        >
          <ToggleButton value="all" aria-label="all">
            All
          </ToggleButton>
          <ToggleButton value="Landscape" aria-label="landscape">
            Landscape
          </ToggleButton>
          <ToggleButton value="Architecture" aria-label="architecture">
            Architecture
          </ToggleButton>
          <ToggleButton value="Nature" aria-label="nature">
            Nature
          </ToggleButton>
          <ToggleButton value="Street" aria-label="street">
            Street
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Grid container spacing={4}>
        {filteredItems.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <StyledCard>
              <StyledCardMedia
                image={item.imageUrl}
                title={item.title}
                onClick={() => handleOpenDialog(item)}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.category}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>

      <Dialog 
        open={!!selectedItem} 
        onClose={handleCloseDialog}
        maxWidth="lg"
        fullWidth
        fullScreen={isFullScreen}
        PaperProps={{
          sx: {
            ...(isFullScreen && {
              background: 'black',
              boxShadow: 'none',
            })
          }
        }}
      >
        {selectedItem && (
          <>
            {!isFullScreen && (
              <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {selectedItem.title}
                <Box>
                  <IconButton
                    aria-label="toggle fullscreen"
                    onClick={handleToggleFullScreen}
                    sx={{ mr: 1 }}
                  >
                    <FullscreenIcon />
                  </IconButton>
                  <IconButton
                    aria-label="close"
                    onClick={handleCloseDialog}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
              </DialogTitle>
            )}
            <DialogContent 
              dividers={!isFullScreen}
              sx={{ 
                p: 0, 
                position: 'relative',
                overflow: 'hidden',
                ...(isFullScreen && {
                  height: '100vh',
                  margin: 0,
                  padding: 0,
                  '& .MuiDialogContent-root': {
                    padding: 0,
                  }
                })
              }}
            >
              <Box 
                sx={{ 
                  width: '100%', 
                  height: isFullScreen ? '100vh' : '60vh',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  bgcolor: 'black',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <FullScreenImage
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  onClick={handleToggleFullScreen}
                  sx={{
                    maxWidth: isFullScreen ? '100vw' : '100%',
                    maxHeight: isFullScreen ? '100vh' : '100%',
                  }}
                />
                {isFullScreen && (
                  <IconButton
                    aria-label="exit fullscreen"
                    onClick={handleToggleFullScreen}
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      color: 'white',
                      bgcolor: 'rgba(0, 0, 0, 0.5)',
                      '&:hover': {
                        bgcolor: 'rgba(0, 0, 0, 0.7)',
                      }
                    }}
                  >
                    <FullscreenExitIcon />
                  </IconButton>
                )}
              </Box>
              {!isFullScreen && (
                <Box sx={{ p: 2 }}>
                  <Typography variant="body1">
                    {selectedItem.description}
                  </Typography>
                </Box>
              )}
            </DialogContent>
          </>
        )}
      </Dialog>
    </Container>
  )
} 