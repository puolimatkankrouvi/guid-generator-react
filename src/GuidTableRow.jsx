/* eslint react/prop-types: 0 */
import * as React from "react";

export default function GuidTableRow(props) {
    return <tr>
        <td>
            {props.guid}
        </td>
    </tr>;
}