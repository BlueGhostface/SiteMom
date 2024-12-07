import Mapcard from '../domain/contact/MapCard';
export default function contact() {
    return (
      <div className='grid justify-between grid-cols-1 sm:grid-cols-7 gap-3 h-4/6 m-2'>
        <Mapcard/>
      </div>
    );
  }