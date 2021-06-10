import { getPaint, getFabric, getTech, getWheels, getOrders} from "./data.js"


export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

const buildOrderListItem = (order) => {
    const paints = getPaint()
    const fabrics = getFabric()
    const tech = getTech()
    const wheels = getWheels()


// Remember that the function you pass to find() must return true/false
const foundPaint = paints.find(
    (paint) => {
        return paint.id === order.paintId
    }
)
const foundFabric = fabrics.find(
    (fabric) => {
        return fabric.id === order.fabricId
    }
)
const foundTech = tech.find(
    (tech) => {
        return tech.id === order.techId
    }
)
const foundWheel = wheels.find(
    (wheel) => {
        return wheel.id === order.wheelId
    }
)
const totalCost = foundPaint.price + foundFabric.price + foundTech.price + foundWheel.price

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})
return `<li>
    Order #${order.id} cost ${costString}
</li>`
}