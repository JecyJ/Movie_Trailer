
const imageConfig = {
    domains: ['image.tmdb.org'],
  };

const CustomImageComponent = ({ src, alt, width, height, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...imageConfig}
    />
  )
}

export default CustomImageComponent;