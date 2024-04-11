import render from "../render"
import diff from "../diff"


export default (oldChildren, newChilren) => {

    let patchs = [];

   oldChildren.forEach(( item,i) => {
       patchs.push(diff(item,newChilren[i]));
   });

    let addingPatchs = [];

    for (const child in newChilren.slice(oldChildren.length)) { 
        addingPatchs.push(
            $node => { $node.appendChild(render(child)); return $node }
        );
    }

    return $node => { 
        $node.childNodes.forEach((item,i) => {
            //patchs.forEach(patch => patch(item));
            patchs[i](item);
        });
        
        addingPatchs.forEach((item) => {
            item($node);
        });
        return $node;
    }
    
}