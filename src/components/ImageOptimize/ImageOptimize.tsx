import React, { useEffect, useState } from 'react';
import { Image as ChakraImage } from "@chakra-ui/react";
import { getImageFileType } from '@/util';
import Resizer from "react-image-file-resizer";

type ImageOptimizeProps = {
  imagePath : string, 
  resizeFactor :number, 
  qualityPercent :number
  preloadRender? :React.ReactNode
}

export const ImageOptimize = ({ imagePath, resizeFactor = 10, qualityPercent = 100 ,preloadRender }:ImageOptimizeProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [resizedImage, setResizedImage] = useState<Blob | null>(null);



    const getImageSize = (imageFile:Blob) => {
      return new Promise<{width:number,height:number}>((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
          img.onerror = reject;
          img.src = URL.createObjectURL(imageFile);
      });
  };

    const resizeImage = (imageFile:any, width:number, height:number, quality:number) => {
      return new Promise<Blob>((resolve, reject) => {
          Resizer.imageFileResizer(
              imageFile,
              width,
              height,
              'WEBP',
              quality,
              0,
              (resizedImage) => resolve(resizedImage),
              'base64',
              200,
              200,
              () => reject("Error resizing image")
          );
      });
  };
    
    useEffect(() => {
        const preloadImage = async () => {
            try {
                const imageFile = await getImageFileType(imagePath);
                const { width, height } = await getImageSize(imageFile as Blob);
                const resized = await resizeImage(imageFile, width / resizeFactor, height / resizeFactor, qualityPercent);
                setResizedImage(resized);
            } catch (error) {
                console.error("Error preloading image:", error);
            } finally {
                setIsLoading(false);
            }
        };

        preloadImage();
    }, [imagePath, resizeFactor, qualityPercent]);

    const preloadRenderImage = () =>{
      if(preloadRender)
      {
       return <>{preloadRender}</> 
      }
      else{
        return 'isloding'
      }
      return
    }

    return (
        <div>
            {isLoading ? preloadRenderImage() : <ChakraImage src={resizedImage} maxW={500} minH={400} objectFit='cover' alt={`preview-${imagePath}`} />}
        </div>
    );
};
