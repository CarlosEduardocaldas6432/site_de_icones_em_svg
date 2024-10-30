
// erros pode acontecer por causa de adblock

let nomes_dos_arquivos 
let diversos_nomes
let animais_nomes
let frutas_legumes_nomes
let mostrando_sobre = false;
const sobre_o_projeto = document.getElementsByClassName("sobre_projeto_div")[0]; 

function mostra_escoder_sobre() {
  if (mostrando_sobre) {
    sobre_o_projeto.style.display = "none";
    mostrando_sobre = false;
  } else {
    sobre_o_projeto.style.display = "block";
    mostrando_sobre = true;
  }
}








// Fazendo uma requisição para a API no backend
fetch('https://icones-gratis-em-svg.onrender.com/api/animais')
  .then(response => response.json())
  .then(fileNames => {
    nomes_dos_arquivos = fileNames
    diversos_nomes = fileNames.nomes_diversos
    animais_nomes = fileNames.nomes_animais
    frutas_legumes_nomes = fileNames.nomes_frutas_e_legumes



    })
      .catch(error => console.error('Erro ao buscar arquivos:', error));




      function filtrarPorLetra(array, letra) {
        return array.filter(function(palavra) {
          return palavra.charAt(0).toLowerCase() === letra.toLowerCase();
        });
      }










let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}




  function baixar_img () {




  }






  // Função para gerar os cards
function generateCards(imageFiles, containerName) {
  // Seleciona o container onde os cards serão adicionados, baseado no atributo name
  const panel = document.querySelector(`div[name="${containerName}"]`);

  if (!panel) {
      console.error('O container especificado não foi encontrado.');
      return;
  }

  // Limpa o container antes de adicionar novos cards
  panel.innerHTML = '';


  // Cria a div com a classe "cards"
const cardsContainer = document.createElement('div');
cardsContainer.className = 'cards';






// Itera sobre cada arquivo de imagem
imageFiles.forEach(file => {
  // Cria o elemento do card
  const card = document.createElement('div');
  card.className = 'card';

  // Cria a imagem do card
  const img = document.createElement('img');
  img.className = 'card-image';


  if (containerName[10] === "D") {

    img.src = `icons/diversos/${file}`;

  }

  if (containerName[10] === "A") {

    img.src = `icons/animais/${file}`;

  }

  if (containerName[10] === "F") {

    img.src = `icons/frutas_e_legumes/${file}`;

  }


  img.alt = file.split('.')[0]; // Define o texto alternativo como o nome do arquivo sem a extensão

  // Cria a categoria
  const category = document.createElement('div');
  category.className = 'category';
  category.textContent = 'Animais';

  // Cria a heading
  const heading = document.createElement('div');
  heading.className = 'heading';
  heading.textContent = file.split('.')[0]; // Define o texto da heading como o nome do arquivo sem a extensão

  // Cria o botão de download
  const button = document.createElement('button');
  button.className = 'pushable';
  button.innerHTML = `
      <span class="shadow"></span>
      <span class="edge"></span>
      <span class="front">Download</span>
  `;

  // Adiciona a imagem, a categoria, a heading e o botão ao card
  card.appendChild(img);
  card.appendChild(category);
  card.appendChild(heading);
  card.appendChild(button);

  // Adiciona o card à div "cards"
  cardsContainer.appendChild(card);


  
});

// Adiciona a div "cards" ao painel
panel.appendChild(cardsContainer);



document.querySelectorAll('.pushable').forEach(button => {
  button.addEventListener('click', function() {
      // Seleciona a imagem anterior ao botão
      const card = this.closest('.card');
      const img = card.querySelector('.card-image');
      
      // Obtém o caminho da imagem (src)
      const filePath = img.getAttribute('src');
      
      // Cria o link de download
      const link = document.createElement('a');
      link.href = filePath;
      link.download = filePath.split('/').pop();  // Usa o nome do arquivo como nome de download
      link.click();
  });
});







}

// Lista de arquivos de imagem (substitua com os arquivos corretos de cada letra)
const imageFiles_A = ['aveztrus_4.svg', 'aranha_2.svg', 'alce_1.svg'];
const imageFiles_B = ['baleia_1.svg', 'bicho-preguica_2.svg']; // Exemplo para "B"
// Adicione mais listas de arquivos conforme necessário...

// Função para detectar qual botão foi clicado
document.addEventListener('click', function(event) {
  // Verifica se o botão clicado tem a classe 'accordion_letras'
  if (event.target.matches('.accordion_letras')) {
      // Pega o valor do atributo name do botão clicado
      const containerName = `conteiner_${event.target.name}`;

      // Verifica qual letra foi clicada e gera os cards correspondentes
      switch (event.target.name) {
          case 'Diversos_A':
            
              generateCards(filtrarPorLetra(diversos_nomes,"a"), containerName);
              break;

          case 'Diversos_B':
            generateCards(filtrarPorLetra(diversos_nomes,"b"), containerName);
              break; 

          case 'Diversos_C':
            generateCards(filtrarPorLetra(diversos_nomes,"c"), containerName);
              break;
          case 'Diversos_D':
            generateCards(filtrarPorLetra(diversos_nomes,"d"), containerName);
              break;
          case 'Diversos_E':
            generateCards(filtrarPorLetra(diversos_nomes,"e"), containerName);
              break;
          case 'Diversos_F':
            generateCards(filtrarPorLetra(diversos_nomes,"f"), containerName);
              break;
          case 'Diversos_G':
            generateCards(filtrarPorLetra(diversos_nomes,"g"), containerName);
              break;
          case 'Diversos_H':
            generateCards(filtrarPorLetra(diversos_nomes,"h"), containerName);
              break;
          case 'Diversos_I':
            generateCards(filtrarPorLetra(diversos_nomes,"i"), containerName);
              break;
          case 'Diversos_J':
            generateCards(filtrarPorLetra(diversos_nomes,"j"), containerName);
              break;
          case 'Diversos_K':
            generateCards(filtrarPorLetra(diversos_nomes,"k"), containerName);
              break;
          case 'Diversos_L':
            generateCards(filtrarPorLetra(diversos_nomes,"l"), containerName);
              break;
          case 'Diversos_M':
            generateCards(filtrarPorLetra(diversos_nomes,"m"), containerName);
              break;
          case 'Diversos_N':
            generateCards(filtrarPorLetra(diversos_nomes,"n"), containerName);
              break;
          case 'Diversos_O':
            generateCards(filtrarPorLetra(diversos_nomes,"o"), containerName);
              break;
          case 'Diversos_P':
            generateCards(filtrarPorLetra(diversos_nomes,"p"), containerName);
              break;
          case 'Diversos_Q':
            generateCards(filtrarPorLetra(diversos_nomes,"q"), containerName);
              break;
          case 'Diversos_R':
            generateCards(filtrarPorLetra(diversos_nomes,"r"), containerName);
              break;
          case 'Diversos_S':
            generateCards(filtrarPorLetra(diversos_nomes,"s"), containerName);
              break;
          case 'Diversos_T':
            generateCards(filtrarPorLetra(diversos_nomes,"t"), containerName);
              break;
          case 'Diversos_U':
            generateCards(filtrarPorLetra(diversos_nomes,"u"), containerName);
              break;
          case 'Diversos_V':
            generateCards(filtrarPorLetra(diversos_nomes,"v"), containerName);
              break;
          case 'Diversos_W':
            generateCards(filtrarPorLetra(diversos_nomes,"w"), containerName);
              break;
          case 'Diversos_X':
            generateCards(filtrarPorLetra(diversos_nomes,"x"), containerName);
              break;
          case 'Diversos_Y':
            generateCards(filtrarPorLetra(diversos_nomes,"y"), containerName);
              break;
          case 'Diversos_Z':
            generateCards(filtrarPorLetra(diversos_nomes,"z"), containerName);
              break;
        
              

              case 'Animais_A':
                generateCards(filtrarPorLetra(animais_nomes, "a"), containerName);
                break;
      
            case 'Animais_B':
                generateCards(filtrarPorLetra(animais_nomes, "b"), containerName);
                break;
      
            case 'Animais_C':
                generateCards(filtrarPorLetra(animais_nomes, "c"), containerName);
                break;
      
            case 'Animais_D':
                generateCards(filtrarPorLetra(animais_nomes, "d"), containerName);
                break;
      
            case 'Animais_E':
                generateCards(filtrarPorLetra(animais_nomes, "e"), containerName);
                break;
      
            case 'Animais_F':
                generateCards(filtrarPorLetra(animais_nomes, "f"), containerName);
                break;
      
            case 'Animais_G':
                generateCards(filtrarPorLetra(animais_nomes, "g"), containerName);
                break;
      
            case 'Animais_H':
                generateCards(filtrarPorLetra(animais_nomes, "h"), containerName);
                break;
      
            case 'Animais_I':
                generateCards(filtrarPorLetra(animais_nomes, "i"), containerName);
                break;
      
            case 'Animais_J':
                generateCards(filtrarPorLetra(animais_nomes, "j"), containerName);
                break;
      
            case 'Animais_K':
                generateCards(filtrarPorLetra(animais_nomes, "k"), containerName);
                break;
      
            case 'Animais_L':
                generateCards(filtrarPorLetra(animais_nomes, "l"), containerName);
                break;
      
            case 'Animais_M':
                generateCards(filtrarPorLetra(animais_nomes, "m"), containerName);
                break;
      
            case 'Animais_N':
                generateCards(filtrarPorLetra(animais_nomes, "n"), containerName);
                break;
      
            case 'Animais_O':
                generateCards(filtrarPorLetra(animais_nomes, "o"), containerName);
                break;
      
            case 'Animais_P':
                generateCards(filtrarPorLetra(animais_nomes, "p"), containerName);
                break;
      
            case 'Animais_Q':
                generateCards(filtrarPorLetra(animais_nomes, "q"), containerName);
                break;
      
            case 'Animais_R':
                generateCards(filtrarPorLetra(animais_nomes, "r"), containerName);
                break;
      
            case 'Animais_S':
                generateCards(filtrarPorLetra(animais_nomes, "s"), containerName);
                break;
      
            case 'Animais_T':
                generateCards(filtrarPorLetra(animais_nomes, "t"), containerName);
                break;
      
            case 'Animais_U':
                generateCards(filtrarPorLetra(animais_nomes, "u"), containerName);
                break;
      
            case 'Animais_V':
                generateCards(filtrarPorLetra(animais_nomes, "v"), containerName);
                break;
      
            case 'Animais_W':
                generateCards(filtrarPorLetra(animais_nomes, "w"), containerName);
                break;
      
            case 'Animais_X':
                generateCards(filtrarPorLetra(animais_nomes, "x"), containerName);
                break;
      
            case 'Animais_Y':
                generateCards(filtrarPorLetra(animais_nomes, "y"), containerName);
                break;
      
            case 'Animais_Z':
                generateCards(filtrarPorLetra(animais_nomes, "z"), containerName);
                break;
        
              



                case 'Frutas_Legumes_A':
                  generateCards(filtrarPorLetra(frutas_legumes_nomes, "a"), containerName);
                  break;
        
              case 'Frutas_Legumes_B':
                  generateCards(filtrarPorLetra(frutas_legumes_nomes, "b"), containerName);
                  break;
        
              case 'Frutas_Legumes_C':
                  generateCards(filtrarPorLetra(frutas_legumes_nomes, "c"), containerName);
                  break;
        
              case 'Frutas_Legumes_D':
                  generateCards(filtrarPorLetra(frutas_legumes_nomes, "d"), containerName);
                  break;
        
              case 'Frutas_Legumes_E':
                  generateCards(filtrarPorLetra(frutas_legumes_nomes, "e"), containerName);
                  break;
        
              case 'Frutas_Legumes_F':
                  generateCards(filtrarPorLetra(frutas_legumes_nomes, "f"), containerName);
                  break;
        
              case 'Frutas_Legumes_G':
                  generateCards(filtrarPorLetra(frutas_legumes_nomes, "g"), containerName);
                  break;
        
              case 'Frutas_Legumes_H':
                  generateCards(filtrarPorLetra(frutas_legumes_nomes, "h"), containerName);
                  break;
        
              case 'Frutas_Legumes_I':
                  generateCards(filtrarPorLetra(frutas_legumes_nomes, "i"), containerName);
                  break;
        
              case 'Frutas_Legumes_J':
                  generateCards(filtrarPorLetra(frutas_legumes_nomes, "j"), containerName);
                  break;
        
              case 'Frutas_Legumes_K':
                  generateCards(filtrarPorLetra(frutas_legumes_nomes, "k"), containerName);
                  break;
        
              case 'Frutas_Legumes_L':
                  generateCards(filtrarPorLetra(frutas_legumes_nomes, "l"), containerName);
                  break;
        
              case 'Frutas_Legumes_M':
                  generateCards(filtrarPorLetra(frutas_legumes_nomes, "m"), containerName);
                  break;
        
              case 'Frutas_Legumes_N':
                  generateCards(filtrarPorLetra(frutas_legumes_nomes, "n"), containerName);
                  break;
        
              case 'Frutas_Legumes_O':
                  generateCards(filtrarPorLetra(frutas_legumes_nomes, "o"), containerName);
                  break;
        
              case 'Frutas_Legumes_P':
                  generateCards(filtrarPorLetra(frutas_legumes_nomes, "p"), containerName);
                  break;
        
              case 'Frutas_Legumes_Q':
                  generateCards(filtrarPorLetra(frutas_legumes_nomes, "q"), containerName);
                  break;
        
              case 'Frutas_Legumes_R':
                  generateCards(filtrarPorLetra(frutas_legumes_nomes, "r"), containerName);
                  break;
        
              case 'Frutas_Legumes_S':
                  generateCards(filtrarPorLetra(frutas_legumes_nomes, "s"), containerName);
                  break;
        
              case 'Frutas_Legumes_T':
                  generateCards(filtrarPorLetra(frutas_legumes_nomes, "t"), containerName);
                  break;
        
              case 'Frutas_Legumes_U':
                  generateCards(filtrarPorLetra(frutas_legumes_nomes, "u"), containerName);
                  break;
        
              case 'Frutas_Legumes_V':
                  generateCards(filtrarPorLetra(frutas_legumes_nomes, "v"), containerName);
                  break;
        
              case 'Frutas_Legumes_W':
                  generateCards(filtrarPorLetra(frutas_legumes_nomes, "w"), containerName);
                  break;
        
              case 'Frutas_Legumes_X':
                  generateCards(filtrarPorLetra(frutas_legumes_nomes, "x"), containerName);
                  break;
        
              case 'Frutas_Legumes_Y':
                  generateCards(filtrarPorLetra(frutas_legumes_nomes, "y"), containerName);
                  break;
        
              case 'Frutas_Legumes_Z':
                  generateCards(filtrarPorLetra(frutas_legumes_nomes, "z"), containerName);
                  break;
            

          default:
              console.error('Nenhuma lista de imagens disponível para esta letra.');
      }
  }
});


  