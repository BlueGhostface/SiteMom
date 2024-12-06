import ContactCard from './domain/home/ContactCard';
import InfoCard from './domain/home/InfoCard';
export default function Home() {
  return (
    <div className={`grid justify-between grid-cols-1 m-2 sm:grid-cols-7 gap-3`}>
      <InfoCard/>
      <ContactCard/>
    </div>
  );
}
