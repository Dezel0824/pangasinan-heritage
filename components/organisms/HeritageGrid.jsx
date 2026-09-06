import HeritageCard from '../molecules/HeritageCard';
export default function HeritageGrid({sites}) { return <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{sites.map(site=><HeritageCard key={site.id} site={site}/>)}</div>; }
