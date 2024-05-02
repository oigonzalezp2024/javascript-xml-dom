/**
 * Estructura de datos a cargar dentro del XML
 * @returns data
 */

function getdata()
{
    let data = [
        {
            textNode: "primera"
        },
        {
            textNode: "segunda"
        },
        {
            textNode: "tercera"
        },
        {
            textNode: "Cuarta"
        }
    ]
    return data
}

/**
 * Inserta la data en el DOM de la estructura XML
 * @param {object} xmlDoc 
 * @param {object} x 
 * @param {object} data 
 */

function demoInsert(xmlDoc, x, data)
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

/**
 * Carga la data del XML como contenido en HTML
 * @param {object} demo 
 * @param {object} x
 */

function loadData(demo, x)
{
    for (const i of x)
    {
        for (let ii of i.childNodes)
        {
            if (typeof ii.localName !== 'undefined')
            {
                let br = document.createElement("br");
                let txt = document.createTextNode(ii.localName + `: `)
                demo.append(br);
                demo.append(txt);
                demo.append(ii.textContent);
            }
        }
        let br = document.createElement("br");
        demo.append(br);
    }
    console.log(x)
}

/**
 * Ejecuta todo el procesamiento de la nueva data en XML
 * y su exposición en HTML
 * @param {object} xml 
 */
function controller(xml)
{
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("book");
    const y = xmlDoc.getElementsByTagName("title");
    const z = xmlDoc.getElementsByTagNameNS("p", "edition");
    const demo = document.getElementById("demo");
    let data = getdata();
    demoInsert(xmlDoc, x, data);
    loadData(demo, x, y, z);
    console.log(z)
}

/**
 * Ejectua el código luego de cargada la estructura HTML
 */
document.addEventListener("DOMContentLoaded", () => {

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            controller(this);
        }
    };
    xhttp.open("GET", "./data/demo1.xml", true);
    xhttp.send();

});
