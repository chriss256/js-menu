function generateProductHTML() {
    const products = JSON.parse(productsJson);
    const container = document.getElementById('product-container');

    products.forEach(product => {
        let optionsHTML = '';
        product.options.forEach(option => {
            optionsHTML += `
                <tr>
                    <td>${option.size}</td>
                    <td>${option.price}</td>
                </tr>
            `;
        });

        const productHTML = `
            <div class="col-4 col-6-medium col-12-small" style="flex: 1 1 calc(33.33% - 20px); box-sizing: border-box;">
                <article class="box post">
                    <a href="#" class="image fit">
                        <img src="${product.image}" alt="${product.name}">
                    </a>
                    <h3>${product.name}</h3>
                    <div class="table-wrapper">
                        <table>
                            <tbody>
                                ${optionsHTML}
                            </tbody>
                        </table>
                    </div>
                    <form name="contact" action="https://formspree.io/f/mleqvqjn" method="POST">
                        <div class="col-6 col-12">
                            <input type="text" name="name" id="name" value="" placeholder="Name" required>
                        </div>
                        <br>
                        <div class="col-6 col-12-large">
                            <input type="email" name="email" id="email" value="" placeholder="Email or Phone" required>
                        </div>
                        <br>
                        <div class="col-6">
                            <select name="category" id="category" required>
                                <option value="">- Choose Amount -</option>
                                ${product.options.map(option => `<option value="${option.size} ${product.name}">${option.size}</option>`).join('')}
                                <option value="Custom Order ${product.name}">Different Amount (Type Below)</option>
                            </select>
                        </div>
                        <br>
                        <div class="col-6 col-12-large">
                            <input type="text" name="address" id="address" value="" placeholder="Delivery Address (If Applicable)">
                        </div>
                        <br>
                        <div class="col-12">
                            <textarea name="message" id="message" placeholder="Add a message" rows="1"></textarea>
                        </div>
                        <br>
                        <ul class="actions">
                            <li>
                                <input type="submit" value="Submit Order">
                                <input type="button" value="More Info" onclick="window.location.href='${product.moreInfoLink}';">
                            </li>
                        </ul>
                    </form>
                </article>
            </div>
        `;

        container.innerHTML += productHTML;
    });
}

// Call the function to generate the HTML on page load
window.onload = generateProductHTML;
