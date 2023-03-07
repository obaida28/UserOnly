function col_from_json(data , tableName){
    var cols = Object.keys(data[0]);
    var cols_str = '';
    for(let col of cols) cols_str += `<th>${col} </th>`;
    return `<thead> <tr>` + cols_str + `</tr> </thead>`;           
}
function row_from_json(data, tableName){
    var cols = Object.keys(data[0]);
    let out = '';
    for(let i = 0 ; i < data.length ; ++i){
        out += `<tr>`;
        for(let col of cols) {
            var col_val = data[i][col];
            if(col != 'date')
                out += '<td> ' + col_val +  ' </td>';
            else
                out += '<td> ' + new Date(col_val).toLocaleDateString() +  ' </td>'; 
        }
        out += ` </tr> `;
    }
    return `<tbody>` + out + `</tbody>`;
}

export function table(data, tableName) {  
    let show = document.querySelector("#" + tableName);
    show.innerHTML += col_from_json(data, tableName) + row_from_json(data, tableName);
}
const connect = async(FullURL , option) => {
    let data = await fetch(FullURL,option)
    .then((response) => response.json())
    .then(data => {
        return data;
    })
    return data;
}
export const get = async (FullURL) => {
    const option = {
        'method':'GET',
        headers:{
            "Content-Type": "application/json"
        }
    }
    return await connect(FullURL,option)
}
export const post = async(FullURL,body) =>{
    const option = {
        'method':'POST',
        body: JSON.stringify(body),
        headers:{
            "Content-Type": "application/json"
        }
    }
    return await connect(FullURL,option);
}