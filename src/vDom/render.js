const renderElem = ({ tagName,attrs,children}) => {

    //createElement
    let el = document.createElement(tagName);
    //setAttribute
    for (let [a, v] of Object.entries(attrs)) {
        el.setAttribute(a, v);
    }
    //render child
    for (let child of children) { 
        const childElement = render(child);
        el.appendChild(childElement);
    }
    return el;
}
const render = (node) => {
    if (typeof (node) === "string") { 
        return document.createTextNode(node);
    }
    return renderElem(node);
 }

export default render;