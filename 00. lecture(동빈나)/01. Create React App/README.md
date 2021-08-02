# README

[toc]

- node js 다운로드

  https://nodejs.org/ko/download/

- CRA(create-react-app)

  (https://chanyeong.com/blog/post/42)

  > 리액트 프로젝트의 기본적인 프로젝트 셋팅을 위한 프로젝트 빌드 명령어

  - React, JSX, ES6, TypeScript 설정 및 지원
  - CSS에 `-webkit`과 같은 접두사를 자동으로 적용
  - 경고 검사 라이브 개발 서버 제공
  - 프로덕션용 JS, CSS 및 이미지 번들링 스크립트 제공

  ```
  npx create-react-app project-name # javascript react
  npx create-react-app project-name --template typescript # typescript react
  ```

  

## 기본 명령어

```
node -v # node.js 버전 확인
create-react-app "name" # name이란 이름의 프로젝트 생성
cd "name" # name이란 이름의 프로젝트로 접근
yarn start # react 실행, react는 기본 3000번 port 사용
```



## 구조

![image-20210803020802204](..\assets\01. management systems\image-20210803020802204.png)

- App.js : 화면 출력을 담당하는 부분

![image-20210803021323068](..\assets\01. management systems\image-20210803021323068.png)

- public/index.html의 id="root"인 div에 App.js가 출력

![image-20210803021616388](..\assets\01. management systems\image-20210803021616388.png)
