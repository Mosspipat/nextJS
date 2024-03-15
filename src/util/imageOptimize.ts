

export const getImageFileType = async (src: string) => {
  try {
    const response = await fetch(src);
    const blob = await response.blob();
    return blob;
  } catch (error) {
    console.error("Error fetching image:", error);
    return null;
  }
};
