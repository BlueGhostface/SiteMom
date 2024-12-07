import FaqCard from "../domain/faq/FaqCard";

export default function faq() {
    return (
      <div className='grid justify-between grid-cols-1 m-2 sm:grid-cols-7 gap-3 h-4/6'>
        <FaqCard/>
      </div>
    );
  }