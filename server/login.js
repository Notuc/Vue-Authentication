const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.post('/login', (req, res) => {
    const { email, password } = req.body
    // Check if email and password match the one in db.json
    const user = db.users.find(user => user.email === email && user.password === password)
    if (user) {
        res.json(user)
    } else {
        res.status(401).json({ error: 'Invalid email or password' })
    }
})

server.use(router)

server.listen(3000, () => {
    console.log('JSON Server is running')
})
