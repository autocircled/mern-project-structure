const app = require('./app')
const port = 5000 // Default posrt 3000 is used by react frontend

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})