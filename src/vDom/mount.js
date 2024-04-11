export default (component, element_id) => { 
    let target = document.getElementById("app");
    target.replaceWith(component);
    return component;
}