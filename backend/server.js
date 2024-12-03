



// ATENÇÃO: devido a mundanças esse backend não é  mais usado na aplicação


const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Para permitir requisições de outros domínios

const app = express();
const PORT = 3000;

let diversos 
let animais 
let frutas_e_legumes 

// Middleware CORS para permitir requisições de qualquer origem
app.use(cors());








// Função para pegar os nomes dos arquivos da pasta "public/icons/animais"
function getAnimalFileNames() {
  const directoryPath = path.join(__dirname, 'public/icons/animais');
  let fileNamesAnimal = [];

  try {
    // Lê os arquivos dentro da pasta
    fileNamesAnimal = fs.readdirSync(directoryPath);
  } catch (err) {
    console.error('Erro ao ler a pasta:', err);
  }

  return fileNamesAnimal;
}



// Função para pegar os nomes dos arquivos da pasta "public/icons/diversos"
function getDiversosFileNames() {
  const directoryPath = path.join(__dirname, 'public/icons/diversos');
  let fileNamesDiversos = [];

  try {
    // Lê os arquivos dentro da pasta
    fileNamesDiversos = fs.readdirSync(directoryPath);
  } catch (err) {
    console.error('Erro ao ler a pasta:', err);
  }

  return fileNamesDiversos;
}



// Função para pegar os nomes dos arquivos da pasta "public/icons/frutas_e_legumes"
function getFrutas_e_legumesFileNames() {
  const directoryPath = path.join(__dirname, 'public/icons/frutas_e_legumes');
  let fileNamesFrutas_e_legumes = [];

  try {
    // Lê os arquivos dentro da pasta
    fileNamesFrutas_e_legumes = fs.readdirSync(directoryPath);
  } catch (err) {
    console.error('Erro ao ler a pasta:', err);
  }

  return fileNamesFrutas_e_legumes;
}



diversos = getDiversosFileNames()
animais = getAnimalFileNames()  
frutas_e_legumes = getFrutas_e_legumesFileNames()

const fileNames = {
  nomes_diversos:diversos,
//  nomes_animais:animais,
 // nomes_frutas_e_legumes:frutas_e_legumes

};
console.log(fileNames)





// Rota que envia os nomes dos arquivos para o frontend
app.get('/api/animais', (req,res) => {



  const fileNames = {
    nomes_diversos:diversos,
    nomes_animais:animais,
    nomes_frutas_e_legumes:frutas_e_legumes

  };
  console.log(fileNames)
  res.json(fileNames);
});

// Inicia o servidor na porta especificada
app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});


