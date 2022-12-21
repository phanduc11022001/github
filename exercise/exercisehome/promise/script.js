import API from "./API.js"

var users = []

// Get user
API.get('courses')
    .then(response => {
        users = response
        renderCourse(users)
    })

async function deleteCourse(id, index) {
    await API.delete('courses/' + id)
        users.splice(index, 1)
        renderCourse(users)

}

async function getCourses(data) {
    await API.post('courses', data)
        .then(response => {
            users.push(response)
            renderCourse(users)
        })
}


function createCourses() {
    const createBtn = document.querySelector('#create')
    createBtn.onclick = () => {
        const name = document.querySelector('input[name="name"]').value
        const  fullname  = document.querySelector('input[name="fullname"]').value
        const dataFrom = {
            name: name,
            fullname: fullname,
        }
        getCourses(dataFrom)
        renderCourse(users)
        clear()
      
       
    }
}
 createCourses()

function close() {
    close = document.querySelector('#close')
    close.onclick = () => {
        const resgitorOf= document.querySelector('#resgitor')
        if(resgitorOf) {
            resgitorOf.style.display = 'none'
        }
    }
}
close()

// xử lý ẩn hiện thêm thông tin người dùng
function handleOnInfor() {
    const moreBtn = document.querySelector('.more')
    const resgitorOn= document.querySelector('#resgitor')
    moreBtn.onclick = function() {
        if(moreBtn) {
            resgitorOn.style.display = 'block'
        }
        
    }

}

handleOnInfor()


// Edit users

 async function editUser(data) {
    await API.update('courses/', data)
    .then(res => {
        console.log(res)
    })
  
}

function handleEdit(id) {
    const resgitorOn= document.querySelector('#resgitor')
    resgitorOn.style.display = 'block'
    const createBtnA = document.querySelector('#create')
    createBtnA.style.display = 'none'
   

    const dataid = document.querySelector('.list-user-' + id)
    
    const dataName = {
        name :  dataid.querySelector('h4').innerText,
        fullname :  dataid.querySelector('span').innerText
    }
    document.querySelector('input[name = "name"]').value = dataName.name
    document.querySelector('input[name = "fullname"]').value = dataName.fullname
    
    const updateBtn = document.querySelector('#update')
    updateBtn.style.display = 'block'
    updateBtn.onclick = () => {
    const dataFrom = {
        name : document.querySelector('input[name="name"]').value,
        fullname : document.querySelector('input[name="fullname"]').value
    }
    if(dataFrom === ''){
        return
    } 
    editUser(dataFrom)
    renderCourse(users)
    updateBtn.style.display = 'none'
    createBtnA.style.display = 'block'
    clear()
  }
}


// search users
function handleSearch() {
    const searchBtn = document.querySelector('#searchBtn')
    searchBtn.onclick = () => {
       const searchValue = document.querySelector('input[name="search"]').value
    API.get('courses/?q=' + searchValue)
       .then(res => {
        renderCourse(res)
        clear()
    })
   
    }
}
handleSearch()


// render in view
function renderCourse(courses){
    let root = document.querySelector('#root')
    root.innerHTML = ''
    courses.forEach((course, index) => {

        const userTr = document.createElement('tr')
        userTr.classList.add('class', 'list-user-'+course.id)

        const nameId = document.createElement('td')
        nameId.innerText = course.id
        userTr.appendChild(nameId)

        const nameSpan = document.createElement('td')
        const nameh4 = document.createElement('h4')
        nameh4.innerText = course.name
        nameSpan.appendChild(nameh4)
        userTr.appendChild(nameSpan)

        const fullnameSpan = document.createElement('td')
        const nameh1 = document.createElement('span')
        nameh1.innerText = course.fullname
        fullnameSpan.appendChild(nameh1)
        userTr.appendChild(fullnameSpan)

        const createBtn = document.createElement('td')
        createBtn.innerText = 'Edit'
        userTr.appendChild(createBtn)

        const save = document.createElement('td')
        userTr.appendChild(save)
        save.innerText = 'save'
        save.style.display = 'none'

        const deleteBtn = document.createElement('td')
        deleteBtn.innerText = 'Delete'
        userTr.appendChild(deleteBtn)

        deleteBtn.onclick = () => {
            deleteCourse(course.id, index)
        }
      
        createBtn.onclick = () => {
            handleEdit(course.id)
            
        }
        root.appendChild(userTr)
    })
}

function clear() {
    document.querySelector('input[name="name"]').value = ''
    document.querySelector('input[name="fullname"]').value = ''
}