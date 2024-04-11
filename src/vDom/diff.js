import render from "./render"
import diffAttrs from "./diff/diffAttrs";
import diffChildren from "./diff/diffChildren";
const diff = (oldNode, newNode) => { 

    if (newNode === undefined) { 
        
        return $node => {
                $node.remove();
                return undefined;
        }
    }

    if (typeof(oldNode) === 'string' || typeof(newNode) === 'string') { 

        if(oldNode != newNode){ 
            return $node => { 
                $node.replaceWith(render(newNode));
                return $node;
            }            
        } else {
            return $node => $node;
        }

    }

    if (oldNode.tagName != newNode.tagName) {

        return $node => {
            $node.replaceWith(render(newNode));
            return $node;
        }
    }

    const patchAttrs = diffAttrs(oldNode.attrs,newNode.attrs);
    const patchChildren = diffChildren(oldNode.children,newNode.children);

    return $node => {
        patchAttrs($node);
        patchChildren($node);
        return $node;
    };
}


export default diff;