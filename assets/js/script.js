/*let addTask=document.querySelector(".mybtn")


addTask.addEventListener('click', ()=>{
    // console.log('btn clicked')
    const newTask=document.createElement('li')
    const taskList=document.getElementById('taskList')
    taskList.appendChild(newTask)
    newTask.textContent=document.getElementById("inputTask").value
    document.getElementById('inputTask').value=""
    deleteTask(newTask)
})

function deleteTask(newTask){
    const deleteBtn=document.createElement('button')
    deleteBtn.textContent="Delete"
    newTask.appendChild(deleteBtn)
    deleteBtn.onclick=function(){
        newTask.remove()
    }
}*/

// Function to save the diary entry
document.getElementById("saveEntry").addEventListener("click", function () {
    const diaryEntry = document.getElementById("diaryEntry").value;
    if (!diaryEntry.trim()) {
      alert("Please write something before saving!");
      return;
    }
  
    const date = new Date();
    const formattedDate = date.toLocaleString();
  
    const entriesDiv = document.getElementById("entries");
  
    // Create a new entry
    const entryDiv = document.createElement("div");
    entryDiv.className = "entry";
  
    const entryDate = document.createElement("div");
    entryDate.className = "entry-date";
    entryDate.textContent = formattedDate;
  
    const entryText = document.createElement("p");
    entryText.textContent = diaryEntry;
  
    // Append date and text to entry
    entryDiv.appendChild(entryDate);
    entryDiv.appendChild(entryText);
  
    // Append entry to the entries container
    entriesDiv.insertBefore(entryDiv, entriesDiv.firstChild);
  
    // Clear the textarea
    document.getElementById("diaryEntry").value = "";
  });



  
  