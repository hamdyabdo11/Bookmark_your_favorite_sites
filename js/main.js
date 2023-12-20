var webNameItem=document.getElementById("webName");
var webUrlItem=document.getElementById("webUrl");
var closeBtn = document.getElementById("closeBtn");
var boxModal = document.querySelector(".box-info");
var regexName=/^[a-z0-9_-]{3,16}$/;
var regexUrl=/^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
 var allwebs=[]

if(localStorage.getItem("allwebs") !=null){
    allwebs=JSON.parse(localStorage.getItem("allwebs"))
    display(allwebs);
}
// ------------------check date while writing---------------
webNameItem.addEventListener("input", function () {
    check(webNameItem,regexName);
});
webUrlItem.addEventListener("input", function () {
    check(webUrlItem,regexUrl);
});
function check(element,regex){
    if(regex.test(element.value)==true){
        element.style.border="1px solid green"
    }else{
        element.style.border="1px solid red"
    }  
}

function addBookMaker(){
    var website={
        name:webNameItem.value,
        url:webUrlItem.value
    };
    
    
// var user="hamdy";
// var website="https://www.google.com"
    if(regexName.test(webNameItem.value)===true && regexUrl.test(webUrlItem.value)===true){
        
        console.log("done");
        allwebs.push(website); 
        localStorage.setItem("allwebs",JSON.stringify(allwebs));
        display();
        clearWeb()   
    }
    else{
        boxModal.classList.remove("d-none");
        console.log("please write correct date");
    }    
}
//close model Alert
function closeModal(){
    boxModal.classList.add("d-none");
}
// closeBtn.addEventListener("click", closeModal);

function display(){
   var cartoona=``;
    for(var i=0 ; i< allwebs.length;i++){
        cartoona+=`<tr>
        <td>${i+1}</td>
        <td>${allwebs[i].name}</td>
        <td><button class="btn btn-visit" onclick="window.open('${allwebs[i].url}')"><i class="fa-solid fa-eye pe-2"></i>Visit</button></td>

        <td class="d-none"> <a href="${allwebs[i].url}" target="_blank" class="btn">Visite</a></td>

        <td><button class="btn btn-delete pe-2" onclick="deleteWebRow(${i})"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
    </tr>`;
    }
    document.getElementById("tBody").innerHTML=cartoona;  
}
function clearWeb(){
    webNameItem.value="";
    webUrlItem.value="";
}
function deleteWebRow(idx){
    allwebs.splice(idx,1);
    localStorage.setItem("allwebs",JSON.stringify(allwebs));
    display(allwebs);
}
// function deleteproduct(idx) {
//     allproduct.splice(idx, 1);
//     localStorage.setItem("allproduct",JSON.stringify(allproduct));
//     display(allproduct);
// }


// console.log(webNameItem,webUrlItem)

// var productNameItem = document.getElementById("productname");
// var productpriceItem = document.getElementById("productprice");
// var productcatagoryItem = document.getElementById("productcatg");
// var productdescItem = document.getElementById("productdesc");
// var mainbtnitem = document.getElementById("main-btn");
// var allproduct = [];
// if(localStorage.getItem("allproduct") !=null){
//     allproduct=JSON.parse(localStorage.getItem("allproduct"))
//     display(allproduct);
// }
// function addProduct() {
//     // alert('hello from addproduct function');

//     var product = {
//         name: productNameItem.value,
//         price: productpriceItem.value,
//         desc: productdescItem.value,
//         catagory: productcatagoryItem.value
//     };
//     // if(main-btn.innerHTML==="createProduct"){
        
//     //     allproduct.push(product);
//     // }
//     // else{
        
//     // }
//     allproduct.push(product);
//     localStorage.setItem("allproduct",JSON.stringify(allproduct));
    
//     display(allproduct);
//     clearProduct();
// }
// function display(arr) {
//     var cartoona = ``;
//     for (var i = 0; i < arr.length; i++) {
//         cartoona += `      
//         <tr>
//         <td>${arr[i].name}</td>
//         <td>${arr[i].price}</td>
//         <td>${arr[i].desc}</td>
//         <td>${arr[i].catagory}</td>
//         <td><button onclick="updateProduct(${i})" class="btn btn-warning">Update</button></td>
//         <td><button onclick="deleteproduct(${i})" class="btn btn-danger">Delete</button></td>

//     </tr>`;
//     }
//     // document.getElementById("tbody").innerHTML=cartoona;



//     document.getElementById("tBody").innerHTML = cartoona;
// }


// function searchfun(term){
//     var newArr=[];
//     for(var i=0;i<allproduct.length;i++){
//         if(allproduct[i].name.toLowerCase().includes(term.toLowerCase()) ==true){
//             newArr.push(allproduct[i]);
//         }
//     }
//     display(newArr);
// }

