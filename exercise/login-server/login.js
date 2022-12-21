
 // validate from
// let password = document.getElementById('password')
// password.oninput = () => {
//     let point = 0
//     let valuepasword = password.value
//     if(valuepasword.length >= 6) {
//         let arrayTest = [
//             /[a-z]/,
//             /[A-Z]/,
//             /[0-9]/,
//             /[^0-9a-zA-Z]/
//         ]
//       arrayTest.forEach(item => {
//         if(item.test(valuepasword)) {
//             point += 1
//         }
//       })
//     }
//     console.log(point)s
// }

// call API đăng nhập và đăng ký
let userAPI = 'http://localhost:3000/user'


// lấy ra dữ liệu va cho phép người dùng đàng nhập
function start() {
    getUser(handleSignIn)
    clear()
}

async function getUser(callback) {
   await fetch(userAPI)
        .then(res => {
            return res.json()
        })
        .then(callback)
}


function handleSignIn() {
    let userName = document.querySelector('input[name="name"]').value
    let password = document.querySelector('input[name="password"]').value
    console.log(userName, password)
}
// function đăng ký
function signup() {
    handleSignUp()
    clear()
}

async function createUser(data) {
   await fetch(userAPI, {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(res => {
            return res.json()
        })
        if(data) {
            alert("Đăng ký thành công!")
        }
}

function handleSignUp() {
    let userName = document.querySelector('input[name="name"]').value
    let password = document.querySelector('input[name="password"]').value
console.log(userName, password)
    let user = {
        username : userName,
        password : password
    }
    createUser(user)
  
}
function clear() {
    let userName = document.querySelector('input[name="name"]').value = ''
    let password = document.querySelector('input[name="password"]').value = ''

}