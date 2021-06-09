
import { PaintColors } from "./PaintColor"
import { InteriorFabrics } from "./InteriorFabric"
import { Technology } from "./Technology.js"
import { Wheels } from "./Wheels"
// import { addCustomOrder } from "./database.js"


// document.addEventListener(
//     "click",
//     (event) => {
//         if (event.target.id === "orderButton"){
//            addCustomOrder() 

//         }
//     }
// )

export const CarsRUs = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__paint options">
                <h2>Paint Colors</h2>
                ${PaintColors()}
            </section>
            <section class="choices__interior options">
                <h2>Interior Fabrics</h2>
                ${InteriorFabrics()}
            </section>
            <section class="choices__technology options">
                <h2>Technology</h2>
                ${Technology()}
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${Wheels()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}
