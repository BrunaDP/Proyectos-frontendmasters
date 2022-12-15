const ElementToChange = document.querySelector(".js-target");
for (let i = 0; i < ElementToChange.length; i++) {
    const currentElement = ElementToChange[i];
    currentElement.innerText = "Modified by Javascript!";
}