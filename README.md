# WebSocket TypeScript Demo

## Run

Install dependencies in both apps:

```sh
cd ws-server && npm install
cd ../ws-client && npm install
```

Start the server:

```sh
cd ws-server
npm run build
npm start
```

Start the client in another terminal:

```sh
cd ws-client
npm run dev
```

The server runs on `http://localhost:8080`, and the client connects to `ws://localhost:8080`.
