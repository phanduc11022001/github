

    const initlist = (listElement) => {
        const apiUrl = listElement.getAttribute('apiUrl')
        fetch(apiUrl)
            .then(res => {
                return res.json()
            })
            .then(items => {
                let htmlTemplate = listElement.innerHTML
                listElement.innerHTML = ''
                let html = ''
                items.forEach(item => {
                    let itemHtml = eval(" ` " +  htmlTemplate + " ` ")
                    html += itemHtml
                })
                listElement.innerHTML = html
            })
    }


    const booSystem = () => {
        var listsAsync   = document.querySelectorAll('async')
        listsAsync.forEach( asynclist => {
            initlist(asynclist)
        })
    }
    booSystem()


    // function thêm bài viết
    const initFrom = (element) => {
        const apiUrl = element.getAttribute('apiUrl')

        function posts(data , callback) {
            fetch(apiUrl, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
                }) 
                .then(res => {
                    return res.json()
                })
                .then(callback)
        }

        function getValue() {
            const createBtn = document.querySelector('#create')
            createBtn.onclick = () => {
                const valueName = document.querySelector('input[name="text"]').value
                const valueTextarea = document.querySelector('textarea[name="content"]').value
                var datafrom = {
                    title: valueName,
                    posts: valueTextarea
                }
                posts(datafrom)
                clear()
            }
        }
        getValue()
        
        function clear() {
            const valueName = document.querySelector('input[name="text"]').value = ''
            const valueTextarea = document.querySelector('textarea[name="content"]').value = ''
        }
    }


    const PostStatus = () => {
        const fromPros = document.querySelectorAll('FromPro')
        fromPros.forEach(fromPro => {
            initFrom(fromPro)
        })
    }
    PostStatus()
