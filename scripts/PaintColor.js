import { getPaint, setPaint } from "./data.js"

const paint = getPaint()

document.addEventListener(
    "change",
    (event) => { 
        if (event.target.name === "paint") {
            setPaint(parseInt(event.target.value))
        } 
    }
)

export const PaintColors = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = paint.map(paint => 
        {
        return `<li>
            <input type="radio" name="paint" value="${paint.id}" /> ${paint.color}
        </li>`
        }
    )
    html += listItems.join("")

    html += "</ul>"

    return html
}
