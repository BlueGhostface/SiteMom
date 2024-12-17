export default function footer() {
  return (
    <div className="w-full min-h-0 max-h-30 sm:max-h-20 mt-2 p-2 
    bg-gradient-to-t from-background-footer to-background-footer-gradient flex-col sm:grid sm:grid-cols-7 
    shadow-top">
      <div className="flex-col col-start-2 ">
        <div className="text-xl font-bold">Contact</div>
        <div>GSM: (+32) 0468 12 78 75</div>
      </div>
      <div className="flex-col col-start-3">
        <div className="text-xl font-bold">Website</div>
        <div>LinkedIn: Axell Tielemans</div>
      </div>
    </div>
  );
}
