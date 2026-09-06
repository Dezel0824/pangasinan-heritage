import Image from 'next/image';
export default function ResponsiveImage({src, alt, className='', priority=false}) { return <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority={priority} className={`object-cover ${className}`} />; }
