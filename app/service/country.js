const customCountryProperties = (req, propertiesArray, countries) => {
    let propertiesToDelete = [];
    let allProperties = Object.keys(countries[0])
    for (const property of allProperties) {
        if (!propertiesArray.includes(property)) {
            propertiesToDelete.push(property);
        }
    }
    let newArr = [];
    for (const country of countries) {
        for (const property of propertiesToDelete) {
            delete country[property];
        }
        newArr.push(country)
    }
    return newArr
}

module.exports = { customCountryProperties }