# Javascript - Estudio del método createElementNS()

Para este estudio detallado hemos tenido en cuenta las
lecciones notables de la W3school, sin embargo se identificó
el uso de algunas prácticas que en la actualidad están en
desuso por seguridad informática.

![alt text](./images/image.png)

El código de la W3School sobre createElementNS():

```Javascript
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
       myFunction(this);
   }
};
xhttp.open("GET", "books.xml", true);
xhttp.send();

function myFunction(xml) {
    var x, y, z, i, newel, newtext, xmlDoc, txt;
    xmlDoc = xml.responseXML;
    txt = "";
    x = xmlDoc.getElementsByTagName("book");
    // Create element nodes with namespace and text nodes
    for (i = 0; i < x.length; i++) {
        newel = xmlDoc.createElementNS("p", "edition");
        newtext = xmlDoc.createTextNode("First");
        newel.appendChild(newtext);
        x[i].appendChild(newel);
    }
    // Output all titles and editions
    y = xmlDoc.getElementsByTagName("title");
    z = xmlDoc.getElementsByTagNameNS("p","edition");
    for (i = 0; i < y.length; i++) {
        txt += y[i].childNodes[0].nodeValue +
        " - " +
        z[i].childNodes[0].nodeValue +
        " edition." +
        " Namespace: " +
        z[i].namespaceURI + "<br>";
    }
    document.getElementById("demo").innerHTML = txt;
}
```

La documentación oficial de Mozilla, que da soporte a
Javascript, recomienda dejar de usar ".innerHTML" por 
seguridad informática, dada la necesidad, aquí se documenta
una forma más adecuada de hacerlo:


<b>./js/demo1Insert.js</b>

```Javascript
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

```

Se ha usado "DOMContentLoaded" para evitar insertar código de javascript por fuera de la etiqueta head. El código de javascript en su interior se ejecutará solo después de cargado el contenido de la estructura HTML.  

```Javascript
document.addEventListener("DOMContentLoaded", () => {/*codigo*/});
```

Cualquier aporte adicional que usted como desarrollador crítico pueda aportar, será bienvenido. Muchas gracias por leer. 
