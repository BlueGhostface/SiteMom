import { ContactCard } from './domain/home/ContactCard';
import { Detailcard } from '@/app/domain/home/Detailcard';
export default function Home() {
  return (
    <div className={`grid justify-between grid-cols-7 gap-3 `}>
      <Detailcard/>
      <ContactCard/>
    </div>
  );
}
