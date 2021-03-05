# [개인 프로젝트] 블로그
[[프로젝트 열기]](http://Yuyeol.github.io/blog-react)
### 개요
* `React Hooks`의 `useContext`와 `useReducer`를 활용한 블로그 만들기
  

### 활용기술
* React : Hooks, Router
* CSS : Styled Components


### 주요기능 
* Home
  - 사이드(Left) : 프로필 정보 / 카테고리
  - 메인(Right) : 카테고리별(기본 : 전체보기) 게시글 목록 / 카테고리별 전체 게시글
* Write(글쓰기)
  - 헤더 : 나가기, 임시저장, 발행
  - 카테고리 셀렉트 박스
  - 제목 작성
  - 본문 작성 : TOAST UI Editor 사용
* Saved(임시저장함)
  - Home과 동일한 레이아웃
  - 사이드(Left) : 프로필 정보 / 카테고리
  - 메인(Right) : 임시저장글 목록 / 전체 임시저장글
* Settings(프로필 설정)
  - 프로필 정보 수정 : 사진 / 블로그명 / 별명 / 소개글


### 상세설명

* 헤더  
![blog header](https://user-images.githubusercontent.com/52055504/110081008-a16de180-7dce-11eb-81bf-fc00c27a99e2.gif)
  - Left : 로고 & 블로그명 클릭 시 홈 이동
  - Right : 프로필 클릭 시 전체 메뉴창 팝업 
  
* 게시글  
![크기변환 20210305_200832](https://user-images.githubusercontent.com/52055504/110107779-b22e4f80-7dee-11eb-8eb7-ca9cfde8dec7.png)
  - 구성
    - Top : 프로필 / 날짜 / 더보기
    - Middle : 제목 / 본문
    - Bottom : 좋아요 / 댓글
    - 파지네이션 : 페이지당 3개
  - 더보기 : 게시글 삭제, 수정 가능
  ![blog posthead](https://user-images.githubusercontent.com/52055504/110108473-95464c00-7def-11eb-948d-e66b3ce72579.gif)
  - 좋아요 & 댓글 : 좋아요, 댓글 카운팅 / 댓글작성, 삭제 가능
  ![blog postcomments](https://user-images.githubusercontent.com/52055504/110109319-988e0780-7df0-11eb-89a7-0e399d067b42.gif)

* 게시글 목록  
![blog postlist](https://user-images.githubusercontent.com/52055504/110111717-1b649180-7df4-11eb-9ffd-eb345717de7b.gif)
  - 카테고리별 게시글 목록
  - 클릭 시 해당 게시글로 이동
  - 접기 / 펼치기 가능
  - 파지네이션 적용 : 페이지당 5개

* 임시저장함
  - Home과 동일한 레이아웃
  - 저장글은 좋아요 & 댓글 없음
  - 접기 / 펼치기 가능
  - 파지네이션 적용 : 페이지당 5개



* 프로필 정보  
![크기변환 blog profile](https://user-images.githubusercontent.com/52055504/110084035-d11ee880-7dd2-11eb-9c9a-90ebcd306c7f.png)
  - 기본 프로필 정보 표시
  - Cog icon 클릭시 프로필 설정 페이지 이동
  
* 프로필 수정  
![blog profile e](https://user-images.githubusercontent.com/52055504/110087901-93708e80-7dd7-11eb-876d-1265feba7d96.gif)
  - 프로필 수정 시 State 업데이트를 통해 웹 내 모든 프로필 정보 수정

* 카테고리  
![blog category](https://user-images.githubusercontent.com/52055504/110088977-e8f96b00-7dd8-11eb-840d-6118590f78a9.gif)
  - 구성 : 전체보기 / 카테고리 / 임시저장함
  - 카테고리 클릭 시 해당 페이지로 이동
  - 카테고리 에디트 (모달)
    - 카테고리 추가 : 카테고리명 중복 및 공백 방지 알림
    - 카테고리 삭제

* 글쓰기 & 수정하기
![크기변환 write](https://user-images.githubusercontent.com/52055504/110090913-3080f680-7ddb-11eb-858a-2c774a77a9d2.png)
  - Write Header : 나가기 / 임시저장(글쓰기에서만) / 발행하기(수정하기 일 때 버튼명 변경)
  - 카테고리 셀렉트박스 : 생성된 카테고리 중 선택 (카테고리 비선택 가능)
  - 본문 : Toast UI Editor(라이브러리) 사용
  