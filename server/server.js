const express = require("express");
const router = require("./router");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + "/dist/"));

app.use('/api', router)
const onlines = []

io.on("connection", (socket) => {
  socket.on('connection', user => {
    if (!onlines.includes(user)) { 
      onlines.push(user);
    }
    io.emit('onlines' , onlines)
   })

  socket.on("chatMessage", (message) => { 
    io.emit("incomingMessage", message);
  });

  socket.on('image', img => {
    io.emit("image", img);
  })
});

let node = "development";

if (node === "production") {
  app.use(express.static(__dirname + "/dist/"));
  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/dist/index.html"));
}

// http.listen(PORT, () => {
//   console.log(`server running on ${PORT}`);
// });

//test endpoint serving...

http.listen(PORT ,'localhost', () => {
  console.log(`server running on ${PORT}`);
});
