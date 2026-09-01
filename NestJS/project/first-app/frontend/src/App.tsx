import { useEffect } from 'react';
import { io } from 'socket.io-client';

function App() {

  useEffect(() => {
    const socketA = io('http://localhost:3000');
    const socketB = io('http://localhost:3000');

    socketA.on('connect', () => {
      console.log('Client A connected:', socketA.id);

      // socketA.emit('message', 'ClientA', (response: any) => {
      //   console.log('Client A response:', response);
      // });
    });

    // // Client B
    socketB.on('connect', () => {
      console.log('Client B connected:', socketB.id);

      // socketB.emit('message', 'ClientB', (response: any) => {
      //   console.log('Client B response:', response);
      // });
    });

    // // Client A receives message
    // socketA.on('message', (data) => {
    //   console.log('Client A received:', data);
    // });

    // // Client B receives message
    // socketB.on('message', (data) => {
    //   console.log('Client B received:', data);
    // });

    socketA.emit('joinRoom', 'room1')
    socketB.emit('joinRoom', 'room1')

    socketA.emit('sendMessage', {
      message: "hi client B",
      room: "room1"
    })
    socketB.emit('sendMessage', {
      message: "hi client a",
      room: "room1"
    })
    socketA.on('receiveMessage', (res) => {
      console.log(res)
    })

    socketB.on('receiveMessage', (res) => {
      console.log(res)
    })



    // Cleanup
    return () => {
      socketA.disconnect();
      socketB.disconnect();
    };

  }, []);

  return <>hello</>;
}

export default App;