/**
 * Estructura de datos a cargar dentro del XML
 * @returns data
 */
function getdata()
{
    let data = [
        {
            title : "Everyday Italian",
            author : "Giada De Laurentiis",
            year : "2005",
            price : "30.00",
            edition : "novena"
        },
        {
            title : "Harry Potter",
            author : "J K. Rowling",
            year : "2005",
            price : "29.99",
            edition: "decima"
        },
        {
            title : "XQuery Kick Start",
            author : "James McGovern",
            year : "2003",
            price : "49.99",
            edition: "primera"
        },
        {
            title : "Learning XML",
            author : "Erik T. Ray",
            year : "2003",
            price : "39.95",
            edition: "segunda"
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
        let title = xmlDoc.createElementNS("p", "title");
        let titleText = xmlDoc.createTextNode(i['title']);
        let author = xmlDoc.createElementNS("s", "author");
        let authorText = xmlDoc.createTextNode(i['author']);
        let newel = xmlDoc.createElementNS("p", "edition");
        let newtext = xmlDoc.createTextNode(i['edition']);
        let year = xmlDoc.createElementNS("t", "year");
        let yearText = xmlDoc.createTextNode(i['year']);
        let price = xmlDoc.createElementNS("r", "price");
        let priceText = xmlDoc.createTextNode(i['price']);
        title.appendChild(titleText);
        x[j].appendChild(title);
        author.appendChild(authorText);
        x[j].appendChild(author);
        year.appendChild(yearText);
        x[j].appendChild(year);
        price.appendChild(priceText);
        x[j].appendChild(price);
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
    xhttp.open("GET", "./data/demo3.xml", true);
    xhttp.send();

});
