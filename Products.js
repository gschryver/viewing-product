import { getProducts } from "./database.js"



document.addEventListener(
    "click",  
    (clickEvent) => {
        
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("product")) {


            const [,productId] = itemClicked.id.split("--")


            for (const productPrimaryKey of products) {

                if (productPrimaryKey.id === parseInt(productId)) {
                    window.alert(`${productPrimaryKey.name} costs $${productPrimaryKey.price}`)
                }
            }
        }
    }
)


const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

