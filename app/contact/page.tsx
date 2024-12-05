import Mapcard from '../domain/contact/MapCard';
export default function contact() {
    return (
      <div className='grid justify-between grid-cols-7 gap-3 h-4/6'>
        <Mapcard/>
      </div>
    );
  }