function copyText(elementId) {
    const textToCopy = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Copied to clipboard!");
    }).catch(err => {
        console.error("Copy failed!", err);
    });
}
