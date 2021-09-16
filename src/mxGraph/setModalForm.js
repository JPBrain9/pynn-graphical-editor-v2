import { mxUtils, mxEvent, mxForm } from "mxgraph-js";

export default function setModalForm(graph, setSelected) {
    graph.getSelectionModel().addListener(mxEvent.CHANGE, function (sender, evt) {
        selectionChanged(graph, setSelected);
    });

    selectionChanged(graph, setSelected);
}

function selectionChanged(graph, setSelected) {
    var cell = graph.getSelectionCell();
    console.log(cell)

    if (cell === undefined) {
        setSelected(null);
    }
    else {
        setSelected(cell);
    }
}