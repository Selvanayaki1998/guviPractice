document.addEventListener("DOMContentLoaded", function () {
  // Your code here
  // You can safely access and manipulate DOM elements in this block

  const http1 = {
    version: "HTTP/1.1",
    features: [
      "HTTP/1.1 :",
      "It works in textual format.",
      "There is head-of-line blocking, which can block all requests behind a slow one until it receives all its resources.",
      "It uses request resource inlining for getting multiple pages.",
      "It compresses data by itself.",
    ],
  };

  const http2 = {
    version: "HTTP/2",
    features: [
      "HTTP/2 :",
      "It works on the binary protocol.",
      "It allows multiplexing so one TCP connection is required for multiple requests.",
      "It uses HPACK for data compression.",
    ],
  };

  let text = {
    object:
      "Object : In JavaScript, an object is a collection of key-value pairs, where each key is a string (or Symbol) and each value can be any data type, including other objects. Objects are used to represent and organize data in a structured manner, making them an essential part of the language.",
  };

  document.getElementById("http1").innerText = http1.features.join("\n");
  document.getElementById("http2").innerText = http2.features.join("\n");
  document.getElementById("object").innerText = text.object;
});
