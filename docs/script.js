const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const numLines = 20; // Number of lines
const lineSpacing = canvas.height / numLines; // Spacing between lines

function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop(0, "#2f6899");
  gradient.addColorStop(Math.random() * 0.25 + 0.25, "#0c3558");
  gradient.addColorStop(1, "#2f6899");

  ctx.strokeStyle = gradient;

  ctx.lineWidth = 2;

  // Draw horizontal lines
  for (let i = 0; i <= numLines; i++) {
    const y = i * lineSpacing;
    ctx.beginPath();
    let offset = Math.random() * canvas.width/2;
    let mag = Math.random() * 5 + 1;
    let fase = Math.random()*Math.PI - Math.PI;
    let fase2 = Math.random()*Math.PI - Math.PI;
    freq_linea = Math.random()/500;
    for (let x = 0; x <= canvas.width; x += lineSpacing / 20) {
      let freq = Math.cos(x * freq_linea + fase2) * 0.08; //frecuencia base
      const distortion = Math.cos(((freq * (x + offset)) + fase)) * mag;
      if (x === 0) {
        ctx.moveTo(x, y + distortion);
      } else {
        ctx.lineTo(x, y + distortion);
      }
    }
    ctx.stroke();
  }

  // Draw vertical lines
  for (let i = 0; i <= canvas.width / lineSpacing; i++) {
    const x = i * lineSpacing;
    ctx.beginPath();
    let mag = Math.random() * 5 + 1;
    let fase = Math.random()*Math.PI - Math.PI;
    let fase2 = Math.random()*Math.PI - Math.PI;
    freq_linea = Math.random()/200;
    for (let y = 0; y <= canvas.height; y += lineSpacing / 20) {
      let freq = Math.sin(y * freq_linea + fase2) * 0.1;
      const distortion = Math.sin(((freq * y) + fase)) * mag;
      if (y === 0) {
        ctx.moveTo(x + distortion, y);
      } else {
        ctx.lineTo(x + distortion, y);
      }
    }
    ctx.stroke();
  }
}

ctx.shadowBlur = Math.random() * 72 + 1;

drawGrid();



//   // Draw horizontal lines
//   for (let i = 0; i <= numLines; i++) {
//     const y = i * lineSpacing;
//     ctx.beginPath();
//     let mag = Math.random() * 5 + 1;
//     let fase = Math.random()*Math.PI - Math.PI;
//     let fase2 = Math.random()*Math.PI - Math.PI;
//     freq_linea = Math.random()/300;
//     for (let x = 0; x <= canvas.width; x += lineSpacing / 20) {
//       let freq = Math.sin(x * freq_linea + fase2) * 0.15;
//       const distortion = Math.sin(((freq * x) + fase)) * mag;
//       if (x === 0) {
//         ctx.moveTo(x, y + distortion);
//       } else {
//         ctx.lineTo(x, y + distortion);
//       }
//     }
//     ctx.stroke();
//   }

//   // Draw vertical lines
//   for (let i = 0; i <= canvas.width / lineSpacing; i++) {
//     const x = i * lineSpacing;
//     ctx.beginPath();
//     let mag = Math.random() * 5 + 1;
//     let fase = Math.random()*Math.PI - Math.PI;
//     let fase2 = Math.random()*Math.PI - Math.PI;
//     freq_linea = Math.random()/200;
//     for (let y = 0; y <= canvas.height; y += lineSpacing / 20) {
//       let freq = Math.sin(y * freq_linea + fase2) * 0.1;
//       const distortion = Math.sin(((freq * y) + fase)) * mag;
//       if (y === 0) {
//         ctx.moveTo(x + distortion, y);
//       } else {
//         ctx.lineTo(x + distortion, y);
//       }
//     }
//     ctx.stroke();
//   }
// }