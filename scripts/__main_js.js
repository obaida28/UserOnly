function get_cols(data){
    return Object.keys(data[0]);
}
function get_cols_show(data,hidden){
    var cols = get_cols(data);
    var result = [];
    for(let col of cols)
    if(!hidden.includes(col))
        result.push(col);
    return result;
}
function col_from_json(cols){
    var cols_str = '';
    for(let col of cols)
        cols_str += `<th>${col} </th>`;
    return `<thead> <tr>` + cols_str + `</tr> </thead>`;           
}
function row_from_json(data){
    var cols = Object.keys(data[0]);
    let out = '';
    for(let i = 0 ; i < data.length ; ++i)
    {
        let rowOut = '';
        for(let col of cols) 
            rowOut += '<td>' + data[i][col].toString()  + ' </td>';
        out += `<tr>` + rowOut +` </tr> `;
    }
    return `<tbody>` + out + `</tbody>`;
}
function row_from_json_v1(data){
    var cols = Object.keys(data[0]);
    let out = '';
    for(let i = 0 ; i < data.length ; ++i)
    {
        let rowOut = '';
        for(let col of cols) 
        {
            const isDate = col == 'date';
            let col_val = data[i][col].toString();
            let result = isDate ? toDate(col_val) : col_val;
            rowOut += '<td>' + result  + ' </td>';
        }
        out += `<tr>` + rowOut +` </tr> `;
    }
    return `<tbody>` + out + `</tbody>`;
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
            rowOut += '<td>' + result + ' </td>';
        }
        out += `<tr>` + rowOut +` </tr> `;
    }
    return `<tbody>` + out + `</tbody>`;
}
function row_from_json_v3(data,cols_show,droplist,index,button){
    var all_cols = get_cols(data);
    var cols__hidden = all_cols.filter(x => !cols_show.includes(x));
    let out = '';
    for(let i = 0 ; i < data.length ; ++i)
    {
        let rowOut = '';
        for(let col of cols_show) 
        {
            let col_index = all_cols.indexOf(col);
            let col_val = data[i][col].toString().split(",");
            let result = col_val;
            if(col_val.length > 1)
            {
                let drop = '';
                for(let obj of col_val) drop += '<p> ' + obj +  ' </p>';
                result = droplist.replace("_content_",drop);
            }
            if(index.includes(col_index)){
                result += button[index.indexOf(col_index)];
            }
            rowOut += '<td>' + result + ' </td>';
        }
        for(var _col of cols__hidden){
            let _col_val = data[i][_col].toString();
            rowOut = rowOut.replaceAll("_id_",_col_val);
        }
        out += `<tr>` + rowOut +` </tr> `;
    }
    return `<tbody>` + out + `</tbody>`;
}
export function table(data, tableName , drp , inx , buts) {  
    let show = document.querySelector("#" + tableName);
    const hidden = ["u_id"];
    var cols = get_cols_show(data,hidden);
    show.innerHTML = col_from_json(cols) + row_from_json_v3(data,cols,drp,inx,buts);
}
function toDate(date){
    return new Date(date).toLocaleDateString();
}
/**/
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
/**/
export function log(data){
    const deploymentTime = true;
    if(deploymentTime)
        console.log(data);
}
export function getByName(name){
    return document.querySelector('[name="' + name +'"]').value;
}
export function URL(){
    const local = 'https://localhost:7106'
    const online = 'http://clinichost-001-site1.ctempurl.com' 
    const URL_ = local //change here if you want other type!
    return URL_;
}
export function submit(form_id , functionAPI){
    var form = document.getElementById(form_id);
    form.addEventListener("submit", (e)=>{
        e.preventDefault()
        functionAPI();
        form.reset();
    });
}
export function get_quary_string(att){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const value = urlParams.get(att)
    return value;
}