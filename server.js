const express = require("express");
const myApp = express();

myApp.use(
  express.urlencoded({
    extended: false,
  })
);

myApp.get("/", function (req, res) {
  res.send(`
    <h1>Node server runnning.</h1>
    <li> <a href="/user">/user</a>: Get fake user object </li>
    <li> <a href="/costlist">/costlist</a>: Get fake expenses list  </li>
    `);
});
myApp.get("/user", function (req, res) {
  res.send({
    0: {
      owner: "Lily",
      color: "#D6D6D6",
      thumbnail: "img1",
      id: 0,
      people: {
        0: { name: "Lily", thumbnail: "img1", id: 0, owner: true },
        1: { name: "媽咪", thumbnail: "img6", id: 1 },
        2: { name: "爸比", thumbnail: "img2", id: 2 },
        3: { name: "妹咪", thumbnail: "img3", id: 3 },
        4: { name: "男友", thumbnail: "img4", id: 4 },
        5: { name: "妹妹的男友", thumbnail: "img5", id: 5 },
      },
    },
    10: {
      owner: "Mimi",
      color: "#FF7C59",
      thumbnail: "img6",
      id: 10,
      people: {
        10: { name: "Mimi", thumbnail: "img6", id: 10, owner: true },
        11: { name: "爸", thumbnail: "img2", id: 11 },
        12: { name: "媽", thumbnail: "img3", id: 12 },
        13: { name: "哥", thumbnail: "img4", id: 13 },
        14: { name: "男友", thumbnail: "img5", id: 14 },
      },
    },
    20: {
      owner: "舅舅",
      color: "#2B7FA5",
      thumbnail: "img2",
      id: 20,
      people: {
        20: { name: "舅舅", thumbnail: "img2", id: 20, owner: true },
        21: { name: "舅媽", thumbnail: "img3", id: 21 },
        22: { name: "表姐", thumbnail: "img6", id: 22 },
        23: { name: "表姐老公", thumbnail: "img5", id: 23 },
        24: { name: "表妹", thumbnail: "img4", id: 24 },
        25: { name: "表妹朋友", thumbnail: "img1", id: 25 },
      },
    },
  });
});
myApp.get("/costlist", function (req, res) {
  res.send([
    {
      homeid: 20,
      userid: 24,
      home: "舅舅",
      name: "表妹",
      type: 0,
      cost: 6000,
      detail: "烤肉的肉",
      unit: 1,
      timeStamp: 196824,
    },
    {
      homeid: null,
      userid: null,
      home: "",
      name: "",
      type: 1,
      cost: 6000,
      detail: "門票",
      unit: 2,
      timeStamp: 242411,
    },
  ]);
});

myApp.listen(3000, () => console.log(`Node server listening on port ${3000}!`));
