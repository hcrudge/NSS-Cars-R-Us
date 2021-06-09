

const data = {
    paintColor: [
        {id: 1, color: "Silver", price: 100 },
        {id: 2, color: "Midnight Blue", price: 200 },
        {id: 3, color: "Firebrick Red", price: 300 },
        {id: 4, color: "Spring Green", price: 400 }

    ],
    interiorFabric: [
        {id: 1, fabric: "Beige Fabric", price: 100 },
        {id: 2, fabric: "Charcoal Fabric", price: 200 },
        {id: 3, fabric: "White Leather", price: 300 },
        {id: 4, fabric: "Black Leather", price: 400 }

    ],
    technology: [
        {id: 1, package: "Basic Package", price: 100 },
        {id: 2, package: "Navigation Package", price: 200 },
        {id: 3, package: "Visibility Package", price: 300 },
        {id: 4, package: "Ultra Package", price: 400 }

    ],
    wheels: [
        {id: 1, wheel: "17-inch Pair Radial", price: 100 },
        {id: 2, wheel: "17-inch Pair Radial Black", price: 200 },
        {id: 3, wheel: "18-inch Pair Spoke Silver", price: 300 },
        {id: 4, wheel: "18-inch Pair Spoke Black", price: 400 }

    ],
    orderBuilder: {

    }
}



export const getPaint = () => {
    return data.paintColor.map(paint => ({...paint}))
}
export const getInterior = () => {
    return data.interiorFabric.map(interior => ({...interior}))
}
export const getTech = () => {
    return data.technology.map(tech => ({...tech}))
}
export const getWheels = () => {
    return data.wheels.map(wheel => ({...wheel}))
}


export const setPaint = (id) => {
    data.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    data.orderBuilder.interiorId = id
}

export const setTech = (id) => {
    data.orderBuilder.techId = id
}
export const setWheel = (id) => {
    data.orderBuilder.wheelId = id
}

// export const addCustomOrder = () => {
//     // Copy the current state of user choices
//     const newOrder = {...database.orderBuilder}

//     // Add a new primary key to the object
//     const lastIndex = database.customOrders.length - 1
//     newOrder.id = database.customOrders[lastIndex].id + 1

//     // Add a timestamp to the order
//     newOrder.timestamp = Date.now()

//     // Add the new order object to custom orders state
//     database.customOrders.push(newOrder)

//     // Reset the temporary state for user choices
//     database.orderBuilder = {}

//     // Broadcast a notification that permanent state has changed
//     document.dispatchEvent(new CustomEvent("stateChanged"))
// }
