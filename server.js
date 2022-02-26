//서버 모듈을 위한 기능 선언
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000; //서버 포트 5000번으로 설정

app.use(bodyParser.json()); //json 형식으로 데이터를 주고받는다.
app.use(bodyParser.urlencoded({ extended: true }));

//고객 목록 조회 api 명시
app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/1",
      name: "박모모",
      birthday: "930909",
      gender: "여자",
      job: "개발자",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/2",
      name: "김모모",
      birthday: "930909",
      gender: "남자",
      job: "디자이너",
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/3",
      name: "이모모",
      birthday: "930909",
      gender: "여자",
      job: "퍼블리셔",
    },
  ]);
});

// 5000번 포트로 앱을 동작 시키고, 동작시 로그 출력.
app.listen(port, () => console.log(`Listening on port ${port}`));
