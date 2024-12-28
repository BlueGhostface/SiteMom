import Mapcard from '../domain/contact/MapCard';
export default function contact() {
    return (
      <div className='grid grow h-full justify-between grid-cols-1 sm:grid-cols-7 gap-3 m-2'>
        <Mapcard/>
      </div>
    );
  }