import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const testdata = [
  {
    id: 1,
    behandeling: "pedicure",
    duurtijd: "5,",
    inclusive: true,
  },{
    id: 1,
    behandeling: "manicure",
    duurtijd: "10,",
    inclusive: true,
  },
  {
    id: 1,
    behandeling: "behandelen van likdoorn",
    duurtijd: "5,",
    inclusive: false,
  },
];

export default function PriceBox() {
  return (
    <div className="row-start-2 col-span-3 mb-2 sm:m-0 sm:row-start-1 sm:col-start-3 p-2 bg-background-contact rounded-lg" >
      <title>prices per person</title>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/3">Type Behandeling</TableHead>
            <TableHead className="w-1/3">Ca. duur</TableHead>
            <TableHead className="w-1/3">Inclusive *</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {testdata.map((data) => (
            <TableRow key={data.id}>
              <TableCell className="w-1/3">{data.behandeling}</TableCell>
              <TableCell className="w-1/3">{data.duurtijd} minuten</TableCell>
              <TableCell className="w-1/3">{(data.inclusive) ? "inclusief" : "niet inbegrepen"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
            <TableRow>
                <TableCell colSpan={3} className="text-right">
                    * deze behandeling zit mee ingegrepen in de standaard behandelingspakket
                </TableCell>
            </TableRow>
        </TableFooter>
      </Table>

    
    </div>
  );
}
