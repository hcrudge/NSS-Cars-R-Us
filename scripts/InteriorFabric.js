import { getFabric, setFabric } from "./data.js"

const fabric = getFabric()


document.addEventListener(
    "change",
    (event) => { 
        if (event.target.name === "fabric") {
            setFabric(parseInt(event.target.value))
        } 
    }
)

export const InteriorFabrics = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = fabric.map(fabric => 
        {
        return `<li>
            <input type="radio" name="fabric" value="${fabric.id}" /> ${fabric.fabric}
        </li>`
        }
    )
    html += listItems.join("")

    html += "</ul>"

    return html
}

