import React, { useEffect, useState } from 'react'
import { Image as ChakraImage } from "@chakra-ui/react";
import { getImageFileType } from '@/util';
import Resizer from "react-image-file-resizer";
import { PredLoading } from '../PredLoading/PredLoading';

export const ImageOptimize = ( {imagePath , resizeFactor = 10 , qualityPercent = 100}:{imagePath:string , resizeFactor:number, qualityPercent:number}) => {

    const [resizedImage, setResizedImage] = useState<string | Blob | ProgressEvent<FileReader>>();

    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);

    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const img = new Image();
        img.src = imagePath;
    
        img.onload = () => {
          setWidth(img.naturalWidth);
          setHeight(img.naturalHeight);
        };
    
        // Cleanup function to remove event listener and avoid memory leaks
        return () => {
          img.onload = null;
        };
      }, [imagePath]); 

      const resizeImage = (imageFile: Blob) => {
        Resizer.imageFileResizer(
          imageFile,
          width/resizeFactor, // Width
          height/resizeFactor, // Height
          'WEBP', // Format
          qualityPercent, // Quality
          0, // Rotation
          (resizedImage) => {
            setResizedImage(resizedImage);
            setIsLoading(false);
          },
          'base64', // Type
          200, // Min width
          200 // Min height
        );
      };

    useEffect(() => {
      setIsLoading(true);
        (async () => {
          const imageFile = await getImageFileType(imagePath);
          resizeImage(imageFile as Blob); // Call the resizeImage function here
        })();
      }, [width,height]);

  return (
    <div>
      {isLoading ? <PredLoading/> : <ChakraImage src={resizedImage} maxW={500} minH={400} objectFit='cover' alt={`preview-${imagePath}`}/>}
      
    </div>
  )
}
