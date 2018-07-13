console.log("Starting Loom verticle")

vertx.createHttpServer()
  .requestHandler(function (req) {
    req.response()
      .putHeader("content-type", "text/plain")
      .end("Hello World!");
}).listen(8080);
