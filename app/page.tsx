import { ContactCard } from './domain/home/ContactCard';
export default function Home() {
  return (
    <div className={`grid justify-between grid-cols-7 `}>
      <div className="col-span-4 col-start-2">home</div>
      <ContactCard/>
    </div>
  );
}
