import Image from 'next/image';

/** properties for next/image */
interface Props {
  readonly src: StaticImageData | string;
  readonly description: string;
  readonly height: number;
  readonly width: number;
  readonly aboveFold: boolean;
}

/** generic display of an images */
const ImageDisplay = ({ src, description, height, width, aboveFold }: Readonly<Props>) => (
  <Image
    alt={description}
    src={src}
    width={width}
    height={height}
    layout={'intrinsic'} /* fixed, responsive, fill */
    quality={87} /* default 75 */
    priority={aboveFold} /* true above the fold */
    loading={aboveFold ? 'eager' : 'lazy'} /* 'eager' above the fold */
  />
);

export default ImageDisplay;
