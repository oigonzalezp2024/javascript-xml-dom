
import { demo1Controller } from "./demo1Controller.js"

document.addEventListener("DOMContentLoaded", () => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            demo1Controller(this);
        }
    };
    xhttp.open("GET", "./data/demo1.xml", true);
    xhttp.send();
});
