function renderGrid(gridSize=960, nPx=16) {
    pxSize = gridSize / nPx;

    const gridContainer = document.querySelector("#container");
    // appendPx(gridContainer, pxSize);
    // appendPxRow()
    const pxRow = createPxRow(pxSize, nPx);
    gridContainer.appendChild(pxRow);
}

function appendPx(parent, pxSize) {
    px = createPx(pxSize);
    parent.appendChild(pix);
}

function createPx(size) {
    pxSizeStr = `${size}px`;
    console.log(pxSizeStr)
    const px = document.createElement("div");
    px.classList.add("pixel");
    px.style.width = pxSizeStr;
    return px
}

function createPxRow(pxSize, nPx=16) {
    const pxRow = document.createElement("div");
    pxRow.classList.add("row");
    for (let i = 0; i < nPx; i++) {
        const px = createPx(pxSize);
        pxRow.appendChild(px);
    }
    return pxRow;
}

function appendPxRow(parent, pxSize, nPx) {
    pxRow = createPxRow()
}

renderGrid(320, 16);
