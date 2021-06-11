import { getModels, setModel } from "./data.js" 

const model = getModels()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "model"){
            setModel(parseInt(event.target.value))
        }
    }
)

export const Model = () => {
    let html = "<ul>"

    const listItems = model.map(model => {
        return `<li>
        <input type="radio" name="model" value="${model.id}" /> ${model.model}
        </li>`
    })
    html += listItems.join("")

    html += "</ul>"
    return html
}

