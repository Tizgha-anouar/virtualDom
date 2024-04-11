import createElement from "./vDom/createElement";
import render from "./vDom/render";
import mount from "./vDom/mount";
import diff from "./vDom/diff"

const vDom = (props) => {
    return createElement("div", {
        attrs: {
            "id": "app",
            "data_props":props
        },
        children: [
            createElement("input", { attrs: {type:"text"} }),
            String(props),
            createElement(
            "img",
            {
                attrs:
                    { "src": "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2t1c2Ztajh1a3lpNWxjMzZnNzE0c3Y2eTVuM2NoanlndXRxMW5xcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8fen5LSZcHQ5O/giphy.gif" },
            })]
    })
};

const vDomNew = (props) => {
    return createElement("div", {
        attrs: {
            "id": "app",
            "data_props": props,
            "data_class":"disactive"
        },
        children: [
            createElement("input", { attrs: {type:"text"} }),
            String(props),
            createElement(
            "img",
            {
                attrs:
                    { "src": "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2t1c2Ztajh1a3lpNWxjMzZnNzE0c3Y2eTVuM2NoanlndXRxMW5xcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8fen5LSZcHQ5O/giphy.gif" },
            })]
    })
};
let count = 0

let vApp = vDom(`univers${count}`);
let $App = render(vApp);


mount($App,"app");



setInterval(() => {
    count++;
    //render the hol page every ssecond == problem
    //mount(render(vApp(`univers${count}`)), "app")

    let $App_new = vDomNew("hello_test");
    let patch = diff(vApp, $App_new);
    let root = patch($App);
    $App = root;

},5000);


//document.body.appendChild($App);
//console.log($App);