const element = document.getElementById("myBtn");
element.addEventListener("click", btn_click);
let list = document.getElementById('details')

// adding details to local storage and display on console
function btn_click(e){
    e.preventDefault();
    // getting the value and adding to local storage
    let money=document.getElementById("expense").value;
    let category = document.querySelector("select").value;
    let discription = document.getElementById("discription").value
    let arr = {expense :  money, category :  category , details :  discription} 
    let jsonArr = JSON.stringify(arr)
    localStorage.setItem("eval" , jsonArr)

    // creating list of expenses and adding delete and edit button
    let li=document.createElement('list')
    li.className="list" 
    list.append(li)
    li.innerHTML="*"+money + "-"+category +"-"+discription;
    
    // delete button
    let btn1 = document.createElement('button')
    btn1.innerText='Delete'
    btn1.className="btn btn-danger btn-sm delete float-right"
    li.append(btn1)
    
    // edit button
    let btn2 = document.createElement('button')
    btn2.innerText='Edit'
    btn2.className="btn btn-success btn-sm edit float-right"
    li.append(btn2)    
}

// delete event
var d_btn = document.getElementsByClassName('list')
list.addEventListener("click",delete_fun)

// delete function
function delete_fun (e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        if(confirm("are you sure?")){
           localStorage.removeItem('eval')
            e.target.parentElement.remove();
        }
        
    }
}
// edit event
list.addEventListener("click",edit_fun)
// edit function
function edit_fun (e){
    e.preventDefault();
    
    if(e.target.classList.contains('edit')){
        if(confirm("press yes if editing is completed")){
        e.target.parentElement.remove();
        btn_click(e);}

    }
}

// style of select list
const element2 = document.getElementById("myBtn");
element.addEventListener("click", btn_click);
