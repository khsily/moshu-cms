# 모슈 CMS

### 시작하기
1. git clone https://github.com/khsily/moshu-cms.git [folder 이름]
2. npm run initialize
3. npm start

### 명령어
- initialize - moshu-cms로의 git연결을 끊고 git설정을 초기화합니다. 
  (moshu-cms repo를 upstream으로 설정하여 update 멍령어를 사용할 수 있게 됩니다.)
- update - moshu-cms로부터 업데이트된 코드를 pull해옵니다.
- build-css - sass -> css 변환
- watch-css - sass -> css 변환 with watch option

### 컴퍼넌트
현재 사용가능한 컴퍼넌트 목록은 npm start후
http://localhost:3000/test-doc 에서 확인 가능합니다.