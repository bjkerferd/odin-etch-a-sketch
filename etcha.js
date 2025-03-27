const GRID_DIMENSION = 960;
const updateGridBtn = document.querySelector("#updateGrid");

updateGridBtn.addEventListener("click", getGridSize);

function renderGrid(gridSize=960, nPx=16) {
    pxSize = gridSize / nPx;
    const gridContainer = document.querySelector("#container");
    gridContainer.classList.add("grid");
    gridContainer.addEventListener("mousedown", (e) => {
        e.preventDefault(); // Without this the click event tries to drag a filled div
        painting = true
    });

    for (let i = 0; i < nPx; i++) {
        const pxRow = createPxRow(pxSize, nPx);
        gridContainer.appendChild(pxRow);
    }
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
    px.addEventListener("mousemove", (e) => {
        if (e.buttons === 1) px.classList.add("filled");
    })

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

function getGridSize() {
    let gridSize = prompt("How big would you like the pixel grid (max 100x100)?");
    if (gridSize > 100) gridSize = 100;
    removeGrid()
    renderGrid(GRID_DIMENSION, gridSize);    
}

function removeGrid() {
    const gridContainer = document.querySelector("#container");
    gridContainer.innerHTML = "";
}

getGridSize();
