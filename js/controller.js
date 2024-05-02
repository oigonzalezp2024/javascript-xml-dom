
function insertData(xmlDoc, x, data)
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

function loadData(demo, x, y)
{
    for (const i of x) {
        for (let ii of i.childNodes) {
            if (typeof ii.localName !== 'undefined') {
                console.log(ii.localName);
                let br = document.createElement("br");
                demo.append(br);
                demo.append(document.createTextNode(ii.localName + `: `));
                demo.append(ii.textContent);
            }
        }
        let br = document.createElement("br");
        demo.append(br);
    }
    console.log(x)
}

export { insertData, loadData }
