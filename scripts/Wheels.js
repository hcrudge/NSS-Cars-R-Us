import { getWheels, setWheel} from "./data.js"

const wheel = getWheels()


document.addEventListener(
    "change",
    (event) => { 
        if (event.target.name === "wheel") {
            setWheel(parseInt(event.target.value))
        } 
    }
)

export const Wheels = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = wheel.map(wheel => 
        {
        return `<li>
            <input type="radio" name="wheel" value="${wheel.id}" /> ${wheel.wheel}
        </li>`
        }
    )
    html += listItems.join("")

    html += "</ul>"

    return html
}

