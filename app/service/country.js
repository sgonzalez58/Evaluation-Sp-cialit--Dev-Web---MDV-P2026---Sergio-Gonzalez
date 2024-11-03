const customCountryProperties = (req, propertiesArray, countries) => {
    let propertiesToDelete = [];
    const allProperties = [
        "name",
        "tld",
        "cca2",
        "ccn3",
        "cca3",
        "cioc",
        "independent",
        "status",
        "unMember",
        "currencies",
        "idd",
        "capital",
        "altSpellings",
        "region",
        "subregion",
        "languages",
        "translations",
        "latlng",
        "landlocked",
        "borders",
        "area",
        "demonyms",
        "flag",
        "maps",
        "population",
        "gini",
        "fifa",
        "car",
        "timezones",
        "continents",
        "flags",
        "coatOfArms",
        "startOfWeek",
        "capitalInfo",
        "postalCode"
    ]
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