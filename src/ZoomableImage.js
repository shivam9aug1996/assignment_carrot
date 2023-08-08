import ImageViewer from "react-native-image-zoom-viewer";

export const ZoomableImage = ({ imageUri }) => {
  const images = [{ url: imageUri }];
  return <ImageViewer imageUrls={images} />;
};
