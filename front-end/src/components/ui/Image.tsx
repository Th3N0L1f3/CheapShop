type ImageProps = {
    title: string;
    imageUrl: string;
    className?: string;
};

export default function Image({
    title,
    imageUrl,
    className,
}: ImageProps) {
  return (
    <img
        src={imageUrl}
        alt={title}
        className={className}
    />
  )
}
