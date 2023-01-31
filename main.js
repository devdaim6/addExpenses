let result=document.getElementById("total");
let totalAmount=0;
result.textContent=totalAmount;

let counter=1;
function addNext(productAmount){
    for(let i=counter-1;i<counter;i++){
        let item=document.getElementById("oList");
        item=item.children[i];
           item.innerText=productAmount;
          
            
        } 
        counter++;
    
}
let count=1
function addAmountNext(result){
        for(let i=count-1;i<count;i++){
    let item=document.getElementById("uList");
            item=item.children[i];
           item.innerText=result;
          
            
        } 
    count++;
    
}
    function addTotalAmount(){
        let element = document.getElementById("input");

        let amount=element.value; 
        let intAmount=parseInt(amount,10);
        totalAmount+=intAmount;
       addAmountNext(intAmount);
        element.value="";
        result.innerText=totalAmount; 

    }
    
    let button=document.getElementById("add");
    
    button.addEventListener('click',addTotalAmount);
    button.addEventListener('click', addListProducts=(e)=>{
        let textProduct = document.getElementById("input1");
        let result=textProduct.value;
        addNext(result);
       
        

    });

   
    let element = document.getElementById("input");
    element.addEventListener('keypress',(e)=>{
        if(e.keyCode===13){
            addTotalAmount();
        }
    });