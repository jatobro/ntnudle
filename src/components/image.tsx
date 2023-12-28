import Image, { type ImageProps } from "next/image";

import { AspectRatio } from "./ui/aspect-ratio";

type ImageComponentProps = {
  ratio: number;
} & ImageProps;

export const ImageComponent = (
  { ratio, src, alt, width = 450 }: ImageComponentProps,
) => {
  return (
    <div style={{ width: width }}>
      <AspectRatio ratio={ratio}>
        <Image
          src={src}
          alt={alt}
          fill
          priority
          className="rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  );
};
