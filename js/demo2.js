
import { demo2Controller } from "./demo2Controller.js"

document.addEventListener("DOMContentLoaded", () => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            demo2Controller(this);
        }
    };
    xhttp.open("GET", "./data/demo2.xml", true);
    xhttp.send();
});
