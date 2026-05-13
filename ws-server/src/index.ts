import http from 'http'
import { WebSocketServer, WebSocket } from 'ws';

const server = http.createServer(function(request: any, response: any){
    console.log((new Date()) + 'Received request for ' + request.url)
    response.end('hi there');
});

const wss = new WebSocketServer({server});

let users: number = 0
wss.on('connection', function connection(ws: any){
    console.log("user ", users+1, " connected")
    ws.on('message', function message(data : any, isBinary: any ){
        wss.clients.forEach(function each(client){
            if (client.readyState === WebSocket.OPEN && client != ws) {
                client.send(data, {binary: isBinary})
            }
        })
    })
    ws.send('connected to the server')
    
})


server.listen(8080, function(){
    console.log(new Date() + 'server is listening on port 8080')
})