
const fileSelector = document.getElementById("file-selector");

fileSelector.addEventListener("change", (event) => {
    const fileList = event.target.files;
    console.log(fileList);
});

// const status = document.getElementById("status");
const output = document.getElementById("output");

if (window.FileList && window.File) {
  document
    .getElementById("file-selector")
    .addEventListener("change", (event) => {
      output.innerHTML = "";
      for (const file of event.target.files) {
        const li = document.createElement("li");
        const name = file.name ? file.name : "NOT SUPPORTED";
        const type = file.type ? file.type : "NOT SUPPORTED";
        const size = file.size ? file.size : "NOT SUPPORTED";
        li.textContent = `Arquivo: ${name}\n Tamanho: ${size}`;
        output.appendChild(li);
      }
    });
}

function readText(file) {
  // Check if the file is an text.
  if (file.type && !file.type.startsWith("text/")) {
    console.log("Arquivo não do tipo txt.", file.type, file);
    return;
  }

  const reader = new FileReader();
  reader.addEventListener("load", (event) => {
    txt.src = event.target.result;
  });
  reader.readAsDataURL(file);
}


function readFile(file) {
  const reader = new FileReader();
  reader.addEventListener("load", (event) => {
    const result = event.target.result;
    console.log('Resultado: ',result);
    // Do something with result
  });

  reader.addEventListener("progress", (event) => {
    if (event.loaded && event.total) {
      const percent = (event.loaded / event.total) * 100;
      console.log(`Progress: ${Math.round(percent)}`);
    }
  });
  reader.readAsDataURL(file);
}


// if (window.FileList && window.File && window.FileReader) {
//   document
//     .getElementById("file-selector")
//     .addEventListener("change", (event) => {
//       output.src = "";
//       status.textContent = "";
//       const file = event.target.files[0];
//       if (!file.type) {
//         status.textContent =
//           "Erro: O tipo de arquivo não é suportado no seu navegador.";
//         return;
//       }
//       if (!file.type.match("text.*")) {
//         status.textContent =
//           'Erro: O arquivo selecionado não parece ser um arquivo ".txt"';
//         return;
//       }
//       const reader = new FileReader();
//       reader.addEventListener("load", (event) => {
//         output.src = event.target.result;
//       });
//       reader.readAsDataURL(file);
//     });
// }