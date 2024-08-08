const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const bodyParser = require('body-parser');

server.use(bodyParser.json());
server.use(middlewares);

// Custom authentication route
server.post('/login', (req, res) => {
    const { email, password } = req.body;
    const db = router.db;
    const user = db.get('users').find({ email, password }).value();

    if (user) {
        res.json({ token: user.token, user: user.user });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
});

server.use(router);
server.listen(5000, () => {
    console.log('JSON Server is running');
});
