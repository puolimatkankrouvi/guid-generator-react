import { Table } from "react-bootstrap";
import GuidTableRow from "./GuidTableRow.jsx";
import { useRecoilState } from "recoil";
import { createGuids } from "./grud";
import { guidCountSelector, guidsState } from "./store";

export default function GuidTable() {
    const [guids, setGuids] = useRecoilState(guidsState);
    const [guidCount, ] = useRecoilState(guidCountSelector);

    React.useEffect(() => setGuids(createGuids(guidCount)), [guidCount]);

    return <div className="fixedTable row">
        <Table striped bordered>
            <thead>
                <tr>
                    <th className="bg-white">Guids:</th>
                </tr>
            </thead>
            <tbody>
                {guids.map(guid => (<GuidTableRow key={guid} guid={guid} />))}
            </tbody>
        </Table>
    </div>;
}