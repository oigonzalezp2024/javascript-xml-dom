
import { demo2Getdata } from "./demo2Getdata.js"
import { demo2Insert } from "./demo2Insert.js"
import { loadData } from "./controller.js"

function demo2Controller(xml)
{
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("book");
    const y = xmlDoc.getElementsByTagName("title");
    const z = xmlDoc.getElementsByTagNameNS("p", "edition");
    const demo = document.getElementById("demo");
    let data = demo2Getdata();
    demo2Insert(xmlDoc, x, data);
    loadData(demo, x, y, z);
    console.log(z)
}

export { demo2Controller }
