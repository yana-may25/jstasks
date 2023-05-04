function contentNegotiation() {
    let url = 'https://eloquentjavascript.net/author';
    let mediaTypes = [
        'text/plain',
        'text/html',
        'application/json',
        'application/rainbow+unicorns'
    ];
    const box = document.getElementById('box');

    async function getResponsesForMediaType(url, type) {
        let res = await fetch(url, { headers: { 'accept': type } });
        res = await res.text();
        r = `\n type: ${type}\n${r}\n`;
        box.insertAdjacentText('beforeend', r);
        console.log(r);
    };
    mediaTypes.forEach(type => getResponsesForMediaType(url, type));
}