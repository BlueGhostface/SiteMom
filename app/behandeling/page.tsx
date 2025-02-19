import PriceBox from '../domain/behandeling/PriceBox';
export default function Behandeling(){  
    return (
      <div className={`grid justify-between grid-cols-1 m-2 sm:grid-cols-7 gap-3 h-4/6`}>
            <PriceBox/>
          </div>
        );
}