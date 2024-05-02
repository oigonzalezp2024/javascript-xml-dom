
import { demo1Getdata } from "./demo1Getdata.js"
import { demo1Insert } from "./demo1Insert.js"
import { loadData } from "./controller.js"

function demo1Controller(xml)
{
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("book");
    const y = xmlDoc.getElementsByTagName("title");
    const z = xmlDoc.getElementsByTagNameNS("p", "edition");
    const demo = document.getElementById("demo");
    let data = demo1Getdata();
    demo1Insert(xmlDoc, x, data);
    loadData(demo, x, y, z);
    console.log(z)
}

export { demo1Controller }
