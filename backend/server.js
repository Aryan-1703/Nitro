import jsonServer from 'json-server';
import bodyParser from 'body-parser';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(bodyParser.json());
server.use(middlewares);

// Custom authentication route
server.post('/login', (req, res) => {
    const { email, password } = req.body;
    const db = router.db; // Get the database instance
    const user = db.get('users').find({ email, password }).value(); // Find user by email and password

    if (user) {
        res.json({ token: user.token, user: user.user });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
});

// Use json-server router for other CRUD operations
server.use(router);

// Start the server
server.listen(5000, () => {
    console.log('JSON Server is running on http://localhost:5000');
});
