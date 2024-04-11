export default ($old, $new) => { 
    let patch = [];
    //add attribute
    for (let [k, v] of Object.entries($new)) {
        patch.push(
            $node => {
                $node.setAttribute(k, v);
                return $node;
            }
        );
    }
    //remove attribute
    //check if attr is exist in new if not remove it
    for (const k in $old) { 
        if (!(k in $new)) { 
            patch.push(
                $node => {
                    $node.removeAttribute(k);
                    return $node;
                }
            );
        }
    }

    return $node => { 
        patch.forEach((pat) => { 
            pat($node);

        });
        return $node;
    }

}