//getting the position of Amount on the document
let result=document.getElementById("total");
let totalAmount=0;
// firstly adding 0 to the Total Amount
result.textContent=totalAmount;


//function to check the List Size
function listEnded(){
    if(count===16 ||  counter===16){
        alert("Only 15 items are allowed");
    }   
}


let button=document.getElementById("add"); 
// check this out :( not functioning properly) not checking input  1st entry onwards
    function checkInput(){
        let numbers = /^[0-9]+$/;
        let string = /^[a-z]\s+$/;
        let inputValue = document.getElementById("input");
        let inputProduct = document.getElementById("input1");
        if(inputProduct.value==="" || inputValue.value===null){
            alert("Enter the Valid Product Name & The Valid Amount ");
            return;
        }

        else if(inputProduct.value==="" && inputValue.textContent===""){
            
            alert("Enter the Valid Product Name & The Valid Amount");
            return;
        }
        else if(!(inputProduct.value.match(string)) && !(inputValue.value.match(numbers))){

            alert("Enter the Valid Product Name & The Valid Amount");
            return;
        }
       
               else{   
            //getting the + button by id and adding the event onClick 
            button.addEventListener('click',listEnded);
            button.addEventListener('click',addTotalAmount);    
            button.addEventListener('click',addProductList);
            
            
            
            
            
        }
        
    }


let counter=1;
//function for adding product name to the list
function addNext(productName){
    for(let i=counter-1;i<counter;i++){
        let item=document.getElementById("oList");
        item=item.children[i]; 
        item.innerText=productName;
        
        
    } 
    
    counter++;
}

//Adding product name to the list
function addProductList(){
    let textProduct = document.getElementById("input1");
    let result=textProduct.value;
    addNext(result);
    
    
    
    
}

let count=1
// function for adding amount to the list
function addAmountNext(result){
        for(let i=count-1;i<count;i++){
    let item=document.getElementById("uList");
            item=item.children[i];
           item.innerText=result;
         
               } 
    count++;
    
}
// function for adding the amount entered by user and saving the record in the Total Amount section
function addTotalAmount(){
    let element = document.getElementById("input");
    
    let amount=element.value; 
    let intAmount=parseInt(amount,10);
    totalAmount+=intAmount;
    addAmountNext(intAmount);
    element.value=null;
   
    result.innerText=totalAmount; 
    
}
    button.addEventListener('click',checkInput);
    
    //logic if the user presses Enter instead of pressing to the button
    let element = document.getElementById("input");
    element.addEventListener('keypress',(e)=>{
        if(e.keyCode===13){
            addTotalAmount();
        }
    });
    