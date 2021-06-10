import { getTech, setTech } from "./data.js"

const tech = getTech()


document.addEventListener(
    "change",
    (event) => { 
        if (event.target.name === "tech") {
            setTech(parseInt(event.target.value))
        } 
    }
)

export const Technology = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = tech.map(tech => 
        {
        return `<li>
            <input type="radio" name="tech" value="${tech.id}" /> ${tech.package}
        </li>`
        }
    )
    html += listItems.join("")

    html += "</ul>"

    return html
}

