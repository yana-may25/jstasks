function asTabs(node) {
    var tabs = [];
    for (var i = 0; i < node.childNodes.length; i++) {
        var child = node.childNodes[i];
        if (child.nodeType == document.ELEMENT_NODE) {
            tabs.push(child);
        }
    }
    var tabList = document.createElement("div");
    tabs.forEach(function (tab, i) {
        var button = document.createElement("button");
        button.textContent = tab.getAttribute("data-tabname");
        button.addEventListener("click", function () { selectTab(i); });
        tabList.appendChild(button);
    });
    node.insertBefore(tabList, node.firstChild);
    function selectTab(n) {
        tabs.forEach(function (tab, i) {
            if (i == n)
                tab.style.display = "";
            else
                tab.style.display = "none";
        });

    }
    selectTab(0);
}