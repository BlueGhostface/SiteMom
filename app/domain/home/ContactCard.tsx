
export default function ContactCard() {

    return (
        <div className="col-span-1 col-start-6 p-2 bg-background-contact rounded-lg">
        <h3 className="font-bold text-lg">Contact gegevens</h3>
        <div>
          <h4 className="font-bold">{`Pauwels 'Tine'`}</h4>
          <div className="my-2">
            <div>Berthoutstraat 14</div>
            <div>2570, Duffel</div>
          </div>
          <div>
            <div>GSM: (+32) 0468 12 78 75</div>
            <div>BTW: BE 0708.905.001</div>
          </div>
        </div>
        <div className="w-full rounded-full">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.1179989802276!2d4.513703200000001!3d51.087829799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3e4cc2ff45cf3%3A0xd080940f468c20c5!2sBerthoutstraat%2014%2C%202570%20Duffel!5e0!3m2!1snl!2sbe!4v1731701788843!5m2!1snl!2sbe" width="100%" height="250" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        </div>
      </div>
    )
}