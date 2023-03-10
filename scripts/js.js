function col_from_json(data){
    var cols = Object.keys(data[0]);
    var cols_str = '';
    for(let col of cols) cols_str += `<th>${col} </th>`;
    return `<thead> <tr>` + cols_str + `</tr> </thead>`;           
}
function row_from_json_v2(data){
    var cols = Object.keys(data[0]);
    let out = '';
    for(let i = 0 ; i < data.length ; ++i)
    {
        let rowOut = '';
        for(let col of cols) 
        {
            const isDate = col == 'date';
            let col_val = data[i][col].toString().split(",");
            let result = '';
            if(col_val.length > 1)
            {
                let drop = '';
                for(let obj of col_val) drop += '<p> ' + (isDate ? toDate(obj) : obj) +  ' </p>';
                result = 
                `<div class="dropdown">
                    <span class="span_drp">show</span>
                    <div class="dropdown-content">` 
                    + drop + 
                    `</div> 
                </div>`;     
            }
            else
                result = isDate ? toDate(col_val) : col_val;
            rowOut += '<td>' + result +  ' </td>';
        }
        out += `<tr>` + rowOut +` </tr> `;
    }
    return `<tbody>` + out + `</tbody>`;
}
function toDate(date){
    return new Date(date).toLocaleDateString();
}
export function table(data, tableName) {  
    let show = document.querySelector("#" + tableName);
    show.innerHTML = col_from_json(data) + row_from_json_v2(data);
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
export function log(data){
    const deploymentTime = true;
    if(deploymentTime)
        console.log(data);
}
export function getByName(name){
    return document.querySelector('[name="' + name +'"]').value;
}