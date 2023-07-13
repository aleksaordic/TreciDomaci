import axios from "axios";

export async function generateStructure(structure, total) {
    const params = {
        _quantity: total
    }
    for (const element of structure) {
        params[element.name] = element.value;
    }
    const res = await axios.get('https://fakerapi.it/api/v1/custom', {
        params
    })
    return res.data.data;
}