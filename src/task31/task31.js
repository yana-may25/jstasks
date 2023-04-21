function contentNegotiation() {
    let url = 'https://eloquentjavascript.net/author';
    let mediaTypes = [
        'text/plain',
        'text/html',
        'application/json',
        'application/rainbow+unicorns'
    ];

    async function getResponsesForMediaType(url, type) {
        let res = await fetch(url, { headers: { 'accept': type } });
        res = await res.text();
        console.log(`\n type: ${type}\n\n`, res);
    };

    mediaTypes.forEach(type => getResponsesForMediaType(url, type));
}