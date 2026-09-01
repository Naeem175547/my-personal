import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import path from 'path';

const app = express();
app.use(express.static('public'));
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

io.on('connection', (socket) => {
    console.log('User connected ' + socket.id);
    socket.on('message',(msg)=>{
        console.log(msg)
        io.emit('message',msg)
    })
    socket.on('disconnect', () => {
        console.log('User disconnected');
        
    });
});


server.listen(3000, () => {
    console.log('Server running at port 3000');
});