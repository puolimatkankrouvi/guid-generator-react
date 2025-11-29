import { Form } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { guidCountInputState, maxGuidCountState } from "./store";

export default function GuidForm() {
    const [guidCountInputVal, setGuidCountInputVal] = useRecoilState(guidCountInputState);
    const [maxGuidCount, ] = useRecoilState(maxGuidCountState);

    const onCountChanged = (event) => {
        setGuidCountInputVal(event.target.value);
    }

    return <Form>
        <div className="row mt-3">
            <div className="col-6 col-sm-4">           
                <Form.Group controlId="count">
                    <Form.Label>Number of guids:</Form.Label>
                    <Form.Control type="text" value={guidCountInputVal} onChange={onCountChanged} />
                    <Form.Text muted >1-{maxGuidCount}</Form.Text>
                </Form.Group>
            </div>
        </div>
    </Form>;
}