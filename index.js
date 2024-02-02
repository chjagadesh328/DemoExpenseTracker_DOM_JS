
    function saveToLocalStorage(event){
   event.preventDefault();
    const amount = event.target.amount.value;
    const desc = event.target.desc.value;
    const category = event.target.category.value;
    console.log(desc);
    // const amount = document.querySelector("#amount").Value;
    // const desc = document.querySelector("#desc").Value;
    // const category =document.querySelector("#category").value;
    console.log(amount+'-'+desc+'-'+category);

    const obj={
        amount,
        desc,
        category
    };

    let obj_ser=JSON.stringify(obj);
    console.log(obj_ser);

    localStorage.setItem(obj.desc,obj_ser);
    ShowOnScreen(obj);
}



function ShowOnScreen(obj){
    const parentElem= document.getElementById('listofitems')
    const childElem= document.createElement('li');
    childElem.textContent= obj.amount + " - " + obj.desc + "  -  " + obj.category;


    const deleteButton = document.createElement('input');
    deleteButton.type='button';
    deleteButton.value='Delete Expenses';
    deleteButton.id='delbtn' ;//edit del btn using css
 
    deleteButton.onclick=()=>{
        localStorage.removeItem(obj.desc); //Here might be mis
        parentElem.removeChild(childElem);

    }
    const editBtn=document.createElement('input');
    editBtn.type='button';
    editBtn.value='Edit Expenses';
    editBtn.id='editbtn';

    editBtn.onclick=() =>{
        localStorage.removeItem(obj.desc);
        parentElem.removeChild(childElem);

        document.getElementById('amount').value = obj.amount;
        document.getElementById('desc').value = obj.desc;
        document.getElementById('category').value = obj.category;
    }

    childElem.appendChild(deleteButton);
    childElem.appendChild(editBtn);
    parentElem.appendChild(childElem);
}









// function ShowOnScreen(desc , amount ,category){
//     const ele=document.createElement("li");
//     ele.textContent = desc;
//     const ele1= document.createElement("li");
//     ele1.textContent =`---${amount}---${desc}--- ${category}`;

//     const del=document.createElement("button");
//     del.textContent = "Delete Expenses ";

//     const edit=document.createElement("button");
//     edit.textContent = "EditExpense";

//     ele1.appendChild(del);
//     ele1.appendChild(edit);
//     ele1.style.display ="inline-block";

//     ele.appendChild(ele1);
//     form.appendChild(ele);

//     del.addEventListener("click", ()=>{
//         const d=edit.parentElement.parentElement;
//         const val =d.firstChild.textContent;
//         const newobj=JSON.parse(localStorage.getItem(desc));
//         localStorage.removeItem(desc);
//         d.remove();

//         document.querySelector("#amount").value = newobj.amount;
//         document.querySelector("#desc").value = desc;
//         document.querySelector("#category").value = newobj.category;
//     });


// }


// // Load and display data when the page is loaded
// window.addEventListener("load", () => {
//     for (let i = 0; i < localStorage.length; i++) {
//       const key = localStorage.key(i);
//       const value = JSON.parse(localStorage.getItem(key));
//       ShowOnScreen(key, value.amount, value.category);
//     }
//   });