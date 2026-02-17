import Image from 'next/image';
import clsx from 'clsx';

export function GridTileImage({
  alt,
  src,
  width,
  height,
  active,
}: {
  alt: string;
  src: string;
  width?: number;
  height?: number;
  active?: boolean;
}) {
  return (
    <div
      className={clsx(
        'relative overflow-hidden bg-neutral-100 dark:bg-neutral-900',
        {
          'ring-2 ring-blue-600': active,
        }
      )}
    >
      <Image
        alt={alt}
        src={src}
        width={width || 100}
        height={height || 100}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
