//getting the position of Amount on the document
let result=document.getElementById("total");
let totalAmount=0;
// firstly adding 0 to the Total Amount
result.textContent=totalAmount;

let counter=1;
//function for adding product name to the list
function addNext(productAmount){
    for(let i=counter-1;i<counter;i++){
        let item=document.getElementById("oList");
        item=item.children[i];
           item.innerText=productAmount;
          
            
        } 
        counter++;
    
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
    element.value="";
    result.innerText=totalAmount; 
    
}
//function to check the List Size
function listEnded(){
    if(count===16){
        alert("Only 15 items are allowed");
    }   
}

    // check
    let button=document.getElementById("add"); 
    function checkInput(){
        let numbers = /^[0-9]+$/;
        let string = /^([a-z])$/;
        let inputValue = document.getElementById("input");
        let inputProduct = document.getElementById("input1");
        if(!(inputProduct.value.match(string)) && !(inputValue.value.match(numbers))){

            alert("Enter the Valid Product Name & The Valid Amount ");
        }
        else if(inputProduct.value===""){
            
            alert("Enter the Valid Product Name & The Valid Amount ");
        }
        else{      
            button.addEventListener('click',addTotalAmount);    
            
            button.addEventListener('click',listEnded);
                   
            button.addEventListener('click', addListProducts=(e)=>{
               let textProduct = document.getElementById("input1");
               let result=textProduct.value;
               addNext(result);
               
               
               
            });
            
            
            
    }
}

//getting the + button by id and adding the event onClick 
button.addEventListener('click',checkInput);
//logic if the user presses Enter instead of pressing to the button
    let element = document.getElementById("input");
    element.addEventListener('keypress',(e)=>{
        if(e.keyCode===13){
            addTotalAmount();
        }
    });

    