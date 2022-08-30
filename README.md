# 오늘의라면 리뉴얼 프로젝트(22.04.01~22.04.11)

![project_5_mockup](https://user-images.githubusercontent.com/102039456/187327742-0e49ee70-a11a-4be0-815b-b85713f68571.jpg)

Demo : [https://dvlpdana.github.io/Onel-ramyun-renewal-project-2022/](https://dvlpdana.github.io/Onel-ramyun-renewal-project-2022/)

<br />

## 프로젝트 개발목표

<p align="justify">
-  사용자의 편의성 향상 위해 정기구독 프로세스 단순화하기 <br/ >
-  페르소나 고려한 모바일 Only 페이지 구현하기 <br/ >
</p>

<br />

## 기술 스택

|    JQuery   |    HTML   |   CSS   |
| :---------: | :------: | :------: |
|   <img src="https://user-images.githubusercontent.com/102039456/187320976-6a4d77f3-31e8-47c0-b1c6-ab0589b2bfd1.png" width="50" height="50" >    |   <img src="https://user-images.githubusercontent.com/102039456/187320974-e67dcaa0-529e-4092-956c-56f3c92c0770.png" width="35" height="50" >   |   <img src="https://user-images.githubusercontent.com/102039456/187320969-00071316-6aae-4612-9991-102a10bf055d.png" width="35" height="50" >   |

<br>

## Advandced Feature

### display, transform 활용하여 각각의 요소 배치
> 코드(subscribe.css)
```css
.sub-banner {
  background-color: white;
  width: 60%;
  padding-top: 35%;
  position: relative;
  border: 5px solid rgba(0,0,0,0.1);
  border-radius: 1rem;
  margin: 2rem 0;
  text-align: center;
  overflow: hidden;
  margin: 0 0.5rem;
}

.sub-banner > * {
  position: absolute;
  left:50%;
  transform: translateX(-50%);
}

.sub-banner_tag {
  color: white;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(-45deg);
  top: 5%;
  left: -30%;
}

.sub-banner_img {
  /* border: 1px solid red; */
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  top:55%;
  left:50%;
  transform: translate(-50%, -50%);
}
···
```

> 구현화면
<img src="https://user-images.githubusercontent.com/102039456/187328563-9f17deff-ff8f-4203-b4a7-9fc7073b2024.png">

<br />

## 개선사항

<p align="justify">
- 자바스크립트 활용하여 '라면선택' 페이지에서 더하기 및 빼기 버튼을 누를 때 숫자 증감하는 기능 구현하기<br/>
- 사용자가 '좋아요'표시한 라면을 별도로 볼 수 있는 모달창 구현하기
</p>

<br />

## 라이센스

MIT &copy; [dvlpDana](mailto:colleksql3@gmail.com)



