import config from "./config.js"
const API = {
    async send(url, method, data) {
        const response = await fetch(
            config.API_URL + url,
            {
                method,
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: data ? JSON.stringify(data) : null
            }
        )
        const responseData = await response.json()
        return responseData
    },

    async get(url) {
        return this.send(url, 'GET')
    },

    async post(url, data) {
        return this.send(url, 'POST', data)
    },

    async update(url, data) {
        return this.send(url, 'PUT', data)
    },

    async delete(url) {
        return this.send(url, 'DELETE')
    }
}
export default API