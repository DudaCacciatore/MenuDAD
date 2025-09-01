const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector(".section-center");

function createPopup() {
  // Cria o elemento popup com a estrutura HTML desejada 
  const popup = document.createElement("div");
  popup.id = "popup";
  popup.className = "popup";
  popup.style.display = "none"; 
  popup.innerHTML = `
    <div class="popup-content">
      <span class="close">&times;</span>
      <img id="popup-img" src="" alt="">
      <h4 id="popup-title"></h4>
      <p id="popup-desc"></p>
      <h4 id="popup-price"></h4>
      <button class="btn-comprar">Comprar</button>

      <div id="mensagem-sucesso" style="display: none; padding: 20px; background-color: #4CAF50; color: white; text-align: center; border-radius: 5px; margin-top: 20px;">
          Compra realizada com sucesso!
      </div>
    </div>
  `;
  document.body.appendChild(popup); // Adiciona o popup ao corpo do documento

  // Fecha o popup
  popup.querySelector(".close").addEventListener("click", () => {
    popup.style.display = "none";
  });

  return popup; 
}

const popup = createPopup(); // Chama a função e cria o popup

// Função principal para exibir os itens do menu
window.addEventListener("DOMContentLoaded", function () {
  let displayMenu = menu.map(function (item, index) {
    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
             <button class="btn" data-index="${index}">Comprar</button>
          </div>
        </article>`;
  }).join("");

  // Insere os itens do menu no container
  sectionCenter.innerHTML = displayMenu;

  // Adiciona evento de clique a todos os botões "Comprar"
  const buttons = sectionCenter.querySelectorAll(".btn"); 
  buttons.forEach(btn => {
    btn.addEventListener("click", function() {
      const index = this.dataset.index;
      buyProduct(index);
    });
  });
});

// Função para exibir o popup com os detalhes do produto
function buyProduct(index){
  const item = menu[index]; 
  document.getElementById("popup-img").src = item.img;
  document.getElementById("popup-img").alt = item.title;
  document.getElementById("popup-title").textContent = item.title;
  document.getElementById("popup-desc").textContent = item.desc;
  document.getElementById("popup-price").textContent = `$${item.price}`;
  document.querySelector(".btn-comprar").onclick = function() {
    popup.style.display = "none"; 
    document.getElementById("mensagem-sucesso").style.display = "block";  
  };
}


