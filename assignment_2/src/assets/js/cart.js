const list = [
    {id: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRT1WhHfQMnMnKOYGReOE9a9Wc4tiGIfvgdfa3953fDxmMfEtc'
    , title: 'Product1', description: 'Some text that describes me lorem ipsum ipsum lorem.', amount: 20},
    {id: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRT1WhHfQMnMnKOYGReOE9a9Wc4tiGIfvgdfa3953fDxmMfEtc'
    , title: 'Product2', description: 'Some text that describes me lorem ipsum ipsum lorem.', amount: 30},
    {id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRT1WhHfQMnMnKOYGReOE9a9Wc4tiGIfvgdfa3953fDxmMfEtc'
    , title: 'Product3', description: 'Some text that describes me lorem ipsum ipsum lorem.', amount: 40},
    {id: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRT1WhHfQMnMnKOYGReOE9a9Wc4tiGIfvgdfa3953fDxmMfEtc'
    , title: 'Product4', description: 'Some text that describes me lorem ipsum ipsum lorem.', amount: 50},
    {id: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRT1WhHfQMnMnKOYGReOE9a9Wc4tiGIfvgdfa3953fDxmMfEtc'
    , title: 'Product5', description: 'Some text that describes me lorem ipsum ipsum lorem.', amount: 60},
    {id: 6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRT1WhHfQMnMnKOYGReOE9a9Wc4tiGIfvgdfa3953fDxmMfEtc'
    , title: 'Product6', description: 'Some text that describes me lorem ipsum ipsum lorem.', amount: 80},
    {id: 7, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRT1WhHfQMnMnKOYGReOE9a9Wc4tiGIfvgdfa3953fDxmMfEtc'
    , title: 'Product7', description: 'Some text that describes me lorem ipsum ipsum lorem.', amount: 10},
    {id: 8, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRT1WhHfQMnMnKOYGReOE9a9Wc4tiGIfvgdfa3953fDxmMfEtc'
    , title: 'Product8', description: 'Some text that describes me lorem ipsum ipsum lorem.', amount: 20},
    {id: 9, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRT1WhHfQMnMnKOYGReOE9a9Wc4tiGIfvgdfa3953fDxmMfEtc'
    , title: 'Product9', description: 'Some text that describes me lorem ipsum ipsum lorem.', amount: 30}
];

const addCart = [];

export function cart() {
    listing();
    const btn = document.getElementsByClassName('addtocart');
    for (const b of btn) {
        b.addEventListener('click', (e) => {
            const id = +e.target.dataset.id;
            const data = list.find( f => f.id === id);
            if(data) {
                addCart.push(data);
                // console.log(addCart);
                cartList(addCart);
            }
        });
    }

}

function listing () {
    let pro = '';
    for( const p of list) {
        pro += `
        <div class="column">
          <div class="card">
            <img src="${p.image}" alt="Jane" style="width:100%">
            <div class="container">
              <h2>${p.title}</h2>
              <h3>Price: ${p.amount} BDT</h3>    
              <p>${p.description}</p>
              <p><button class="button addtocart" data-id="${p.id}">Add to cart</button></p>
            </div>
          </div>
        </div>`;
    }
    document.querySelector('.row').innerHTML = pro;
}

function cartList (data) {
    let cart ='';
    let total = 0;
    let i = 0;
    for(const d of data) {
        total += d.amount;
        cart += `
        <p><b>${d.title}</b> <span class="price">${d.amount} BDT</span> <a class="remove" data-index="${i}">X</a></p>  
        `;
        i++;
    }
    document.querySelector('.cart-list').innerHTML = cart;
    document.querySelector('.count').innerHTML = data.length;
    document.querySelector('.total-price').innerHTML = total;

    const remove = document.getElementsByClassName('remove');
    // console.log(remove);
    for(const r of remove) {
        r.addEventListener('click', (e) => {
            const index = +e.target.dataset.index;
            const data = addCart.splice(index, 1);
            cartList(addCart);
        });
    }

}


