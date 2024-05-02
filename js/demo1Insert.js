
function demo1Insert(xmlDoc, x, data)
{
    let j = 0
    for (const i of data) {
        let newel = xmlDoc.createElementNS("p", "edition");
        let newtext = xmlDoc.createTextNode(i['textNode']);
        newel.appendChild(newtext);
        x[j].appendChild(newel);
        j += 1
    }
}

export { demo1Insert }
