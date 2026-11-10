import Image from "next/image";

type ScreenshotProps = {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export function Screenshot({
  src,
  alt,
  caption,
  width = 1536,
  height = 1024,
  priority = false,
}: ScreenshotProps) {
  return (
    <figure className="not-prose my-10 sm:my-12">
      <div className="overflow-hidden rounded-xl border border-line bg-card">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 768px) 100vw, 720px"
          priority={priority}
          className="h-auto w-full"
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-center text-xs leading-5 text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
