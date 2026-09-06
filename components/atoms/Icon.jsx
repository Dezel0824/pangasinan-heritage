/** A small, consistent wrapper for any icon component. */
export default function Icon({ icon: Glyph, label, className='h-5 w-5', ...props }) { return <Glyph aria-hidden={label ? undefined : true} aria-label={label} className={className} {...props} />; }
