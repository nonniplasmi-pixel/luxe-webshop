
const grid = document.getElementById('grid');
const cartBtn = document.getElementById('cartBtn');
const cartDrawer = document.getElementById('cartDrawer');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const checkoutBtn = document.getElementById('checkoutBtn');
const shippingHint = document.getElementById('shippingHint');

const ISK = new Intl.NumberFormat('is-IS', { style: 'currency', currency: 'ISK', maximumFractionDigits: 0 });
const FREE_SHIPPING_THRESHOLD = 7500; // kr.

let cart = JSON.parse(localStorage.getItem('luxe_cart') || '[]');

fetch('products.json').then(r => r.json()).then(products => {
  grid.innerHTML = products.map(p => `
    <article class="card">
      <img loading="lazy" src="${p.image}" alt="${p.name}" />
      <div class="content">
        <h4>${p.name}</h4>
        <div class="price">
          <strong>${ISK.format(p.price_isk)}</strong>
          ${p.compare_isk ? `<span class="compare">${ISK.format(p.compare_isk)}</span>` : ''}
        </div>
        <div class="row">
          <button class="btn-sm add" data-id="${p.id}">Bæta í körfu</button>
          <a class="btn-sm view" href="${p.url}" target="_blank" rel="noopener">Skoða á tryluxe.com</a>
        </div>
      </div>
    </article>
  `).join('');

  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('.add');
    if (!btn) return;
    const product = products.find(x => x.id === btn.dataset.id);
    addToCart(product);
  });
  renderCart();
});

function addToCart(product) {
  const existing = cart.find(x => x.id === product.id);
  if (existing) existing.qty += 1;
  else cart.push({ id: product.id, name: product.name, price_isk: product.price_isk, image: product.image, url: product.url, qty: 1 });
  persist();
}

function changeQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeItem(id);
  persist();
}

function removeItem(id) {
  cart = cart.filter(x => x.id !== id);
  persist();
}

function persist() {
  localStorage.setItem('luxe_cart', JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = cart.length ? cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" />
      <div>
        <div><strong>${item.name}</strong></div>
        <div class="qty">
          <button onclick="changeQty('${item.id}', -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty('${item.id}', 1)">+</button>
          <button class="remove" onclick="removeItem('${item.id}')">Fjarlægja</button>
        </div>
      </div>
      <div>${ISK.format(item.qty * item.price_isk)}</div>
    </div>
  `).join('') : '<p>Engar vörur í körfu.</p>';

  const total = cart.reduce((s, x) => s + x.price_isk * x.qty, 0);
  cartTotal.textContent = ISK.format(total);
  cartCount.textContent = cart.reduce((s, x) => s + x.qty, 0);

  if (shippingHint) {
    if (total >= FREE_SHIPPING_THRESHOLD) {
      shippingHint.textContent = '✅ Frí sending!';
    } else {
      const diff = FREE_SHIPPING_THRESHOLD - total;
      shippingHint.textContent = `Bætir ${ISK.format(diff)} í körfu til að fá fría sendingu.`;
    }
  }
}

cartBtn.addEventListener('click', () => cartDrawer.classList.toggle('open'));
closeCart.addEventListener('click', () => cartDrawer.classList.remove('open'));
checkoutBtn.addEventListener('click', () => {
  if (!cart.length) return alert('Karfan er tóm.');
  window.open(cart[0].url, '_blank');
});
