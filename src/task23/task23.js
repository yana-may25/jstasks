function byTagName(node, string) {
    string = string.toUpperCase();
    let res = [];
    if (node.nodeType == Node.ELEMENT_NODE) {
        for (let child of node.childNodes) {
            if (child.nodeName == string) {
                res.push(child);
            }
            res = res.concat(byTagName(child, string));
        }
    }
    return res;
}
