export function Eyebrow({children}) { return <p className="mb-3 text-xs font-extrabold uppercase tracking-[.18em] text-gold">{children}</p>; }
export function Heading({as: Tag='h2', children, className=''}) { return <Tag className={`font-display text-3xl font-bold leading-tight text-ink sm:text-4xl ${className}`}>{children}</Tag>; }
