import { Image } from "@imagekit/react";

const Img = ({ src, className, w, h, alt }) => {
  return (
    <Image
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      src={src}
      alt={alt}
      className={className}
      width={w}
      height={h}
      lqip={{ active: true, quality: 20 }}
      loading="lazy"
      transformation={[
        {
          width: w,
          height: h,
        }
      ]}
    />
  );
};

export default Img;
