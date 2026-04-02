const rows = 64;
const cols = 128;
const grid = document.getElementById('grid');
grid.style.gridTemplateColumns = `repeat(${cols}, 10px)`;
grid.style.gridTemplateRows = `repeat(${rows}, 10px)`;

let isDrawing = false;
let drawMode = null; // "on" or "off"

// create buttons
const pixels = [];
for (let y = 0; y < rows; y++) {
	pixels[y] = [];
	for (let x = 0; x < cols; x++) {
		const btn = document.createElement('button');
		btn.className = 'pixel';
		btn.dataset.x = x;
		btn.dataset.y = y;

		// click toggles
		btn.onmousedown = (e) => {
			e.preventDefault(); // prevent text select
			isDrawing = true;
			drawMode = (e.button === 2) ? "off" : "on"; // left=on, right=off
			setPixel(btn, drawMode);
		};

		btn.onmouseenter = () => {
			if (isDrawing) setPixel(btn, drawMode);
		};

		grid.appendChild(btn);
		pixels[y][x] = btn;
	}
}

// mouse release anywhere ends drawing
document.addEventListener('mouseup', () => {
	isDrawing = false;
	drawMode = null;
});

// prevent right-click menu on grid
grid.addEventListener('contextmenu', (e) => e.preventDefault());

function setPixel(btn, mode) {
	if (mode === "on") btn.classList.add('on');
	else btn.classList.remove('on');
}

// convert to 8-bit hex string
function getPixelDataHex() {
	let bits = "";
	let hex = "";

	for (let y = 0; y < rows; y++) {
		for (let x = 0; x < cols; x++) {
			bits += pixels[y][x].classList.contains('on') ? "1" : "0";
			if (bits.length === 8) {
				hex += bitsToByte(bits);
				bits = "";
			}
		}
	}

	// pad leftover bits
	if (bits.length > 0) hex += bitsToByte(bits.padEnd(8, "0"));

	return hex;
}

function bitsToByte(bits) {
	return String.fromCharCode(parseInt(bits, 2));
}

function saveBinaryFile() {
	var PicNumber = document.forms["parameters"]["uPicNumber"].value;
	if (PicNumber.length < 2) {
		PicNumberEdited = "0" + PicNumber;
	}

	// convert to ASCII hex
	const PicNumberHex = PicNumber.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0");

	const headerHex = "AA AC BD AF 90 88 9A 8D CE FF EF FF EF FF 72 FE FF FF F7 B3 FB 00 00 00 00 00 00 00 00 00 FF FE 50 49 43 54 55 52 45 20 "
		+ PicNumberHex +
		" 00 00 00 00 00 00 00 00 00 00 01 6D 61 69 6E 00 00 00 00 50 49 43 54 "
		+ PicNumberHex +
		" 00 00 00 07 00 00 08 00 00 00 00";

	const headerBytes = headerHex.split(" ").map(h => parseInt(h, 16));

	const imageData = getPixelDataHex();
	let imageBytes = new Uint8Array([...headerBytes, ...imageData.split("").map(c => c.charCodeAt(0))]);

	// pad to 2,124 bytes total
	if (imageBytes.length < 2124) {
		const padded = new Uint8Array(2124);
		padded.set(imageBytes);
		imageBytes = padded;
	}

	const blob = new Blob([imageBytes], { type: "application/octet-stream" });
	const a = document.createElement("a");
	a.href = URL.createObjectURL(blob);
	a.download = "PICT" + PicNumberEdited + ".g1m"; // Casio picture file
	a.click();
}

