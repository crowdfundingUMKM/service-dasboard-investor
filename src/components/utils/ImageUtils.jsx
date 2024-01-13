// utils/imageUtils.js
export const getImageUrl = (relativePath) => {
    
    if (relativePath == null) {
      return '/assets/img/avatar/avatar.png';
    }
    return `https://storage.googleapis.com${relativePath}`;
  };
  