    
    //Function that will work when Sign-up link is clicked since the user does'nt have an account
        function signup()
    {
        document.getElementById('reg').style.display="block";
        document.getElementById('log').style.display="none";
        document.getElementById('third').style.display="block";
        document.getElementById('first').style.display="none";
        document.getElementById('second').style.display="none";
        document.getElementById('no').style.display="none"; 
        document.getElementById('or').style.display="none"; 
        document.getElementById('info1').style.display="none";
        document.getElementById('info2').style.display="block";  
        document.getElementById('phn').style.display="none"; 
        document.getElementById('or').style.position='fixed';  
    }

    //When the Login link is clicked if the user already has an account
    function login()
{
    document.getElementById('reg').style.display="none";
    document.getElementById('log').style.display="block";
    document.getElementById('first').style.display="block";
    document.getElementById('third').style.display="none";
    document.getElementById('info1').style.display="block";
    document.getElementById('info2').style.display="none";  
    document.getElementById('phn').style.display="block";  
    document.getElementById('check').checked = false;


    

}

// Function to display input via phone when the checkbox of phone number is ticked
function phone()
{
    
    if(document.getElementById('check').checked===false){
        document.getElementById('no').style.display="none";
        document.getElementById('second').style.display="none";
        document.getElementById('or').style.display="none";

    }
    else{
    document.getElementById('no').style.display="block";
    document.getElementById('second').style.display="block";
    document.getElementById('or').style.display="block";

    }
}
// JS code to drag and drop the element and interchange the places of the divs
const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging')
  })

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
  })
})

containers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault()
    const afterElement = getDragAfterElement(container, e.clientY)
    const draggable = document.querySelector('.dragging')
    if (afterElement == null) {
      container.appendChild(draggable)
    } else {
      container.insertBefore(draggable, afterElement)
    }
  })
})

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }
    } else {
      return closest
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
}

