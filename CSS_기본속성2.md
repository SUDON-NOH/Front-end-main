<h1>CSS 기본속성 2</h1>
<h2>1. 링크</h2>
<p>
  링크(link)에는 color, font-family, background 속성 등 CSS의 다양한 속성들을 적용할 수 있음<br>
  또한, text-decoration 속성값을 none으로 설정하여, 링크가 연결된 텍스트의 밑줄을 제거할 수도 있음
</p>

```css
<style>
    a {
        background-color: #FFFFE0;
        color: darkslategray;
        font-size: 1.3em;
        text-decoration: none;
    }
</style>
```

<blockquote>
  <h3>링크(link)의 상태</h3>
  <p> 
    링크는 총 5가지의 상태를 가지며, 각 상태마다 다른 스타일을 적용할 수 있음<br>
    <li>link: 링크의 기본 상태, 사용자가 아직 한 번도 해당 링크를 통해 연결된 페이지를 방문하지 않은 상태</li>
    <li>visited: 사용자가 한 번이라도 해당 링크를 통해 연결된 페이지를 방문한 상태</li>
    <li>hover: 사용자의 마우스 커서가 링크 위에 올라가 있는 상태</li>
    <li>active: 사용자가 마우스로 링크를 클릭하고 있는 상태</li>
    <li>focus: 키보드나 마우스의 이벤트(event) 또는 다른 형태로 해당 요소가 포커스(focus)를 가지고 있는 상태</li>
  </p>
  
  ```css
  <style>
    a:link { color: olive; }
    a:visited { color: brown; }
    a:hover { color: coral; }
    a:active { color: khaki; }
  </style>
  ```
</blockquote>

<blockquote>
  <h3>링크를 활용한 버튼(Button)</h3>
  <p>
    CSS를 이용하면 간단하게 링크를 버튼처럼 만들 수 있음
  </P>
  
  ```CSS
  <style>
    a:link, a:visited {
        background-color: #FFA500;
        color: maroon;
        padding: 15px 25px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
    }
    a:hover, a:active { background-color: #FF4500; }
  </style>
  ```
</blockquote>


<h2>2. 리스트</h2>
<p>
  CSS에서 사용할 수 있는 list-style 속성<br>
  1. list-style-type<br>
  2. list-style-image<br>
  3. list-style-position
</p>
<blockquote>
  <h3>list-style-type 속성</h3>
  <p>
    리스트 요소의 앞에 위치하는 숫자나 기호를 마커(marker)라고 함<br>
    list-style-type 속성을 이용하면 리스트에 다양한 마커(marker)를 적용할 수 있음
  </p>
  
  ```css
  <style>
    .circle { list-style-type: circle; }
    .square { list-style-type: square; }
    .upperAlpha { list-style-type: upper-alpha; }
    .lowerRoman { list-style-type: lower-roman; }
  </style>
  ```
</blockquote>
<blockquote>
  <h3>list-style-image 속성</h3>
  <p>
    list-style-image 속성을 이용하면 마커(marker)로 자신만의 이미지를 사용할 수 있음
  </p>
  
  ```css
  <style>
    .imageMarker { list-style-image: url("/examples/images/img_list_marker.png"); }
  </style>
  ```
</blockquote>
<blockquote>
  <h3>list-style-position 속성</h3>
  <p>
    list-style-postion 속성을 이용하면 리스트 요소의 위치를 설정할 수 있음<br>
    list-style-postion 속성의 기본 속성값은 outside로 설정되어 있음
  </p>
  
  ```css
  <style>
    .outside { list-style-position: outside; }
    .inside { list-style-position: inside; }
  </style>
  ```
</blockquote>
<blockquote>
  <h3>list-style 속성 한 번에 적용</h3>
  
  ```css
  <style>
    ul { list-style: square inside url("/examples/images/img_list_marker.png"); }
  </style>
  ```
</blockquote>
<blockquote>
  <h3>리스트에 배경색 적용</h3>
  <p>
    CSS를 사용하면 리스트 전체뿐만 아니라 리스트 요소별로도 각각의 배경색을 설정할 수 있음
  </p>
  
  ```css
  <style>
    ul { background: #D2691E; padding: 15px; }
    ol { background: #6495ED; padding: 15px; }
    ul li { background: #DEB887; margin: 5px; }
    ol li { background: #00FFFF; margin-left: 15px; }
  </style>
  ```
</blockquote>

<h2>3. 테이블</h2>
<p>
  테이블에 다음 속성을 사용하여 CSS 스타일을 적용할 수 있음<br>
  <li>border: 모든 border 속성을 이용한 스타일을 한 줄에 설정</li>
  <li>border-collapse: 테이블의 테두리를 한 줄로 나타낼지를 설정</li>
  <li>border-spacing: 테이블 요소(th, td)간의 여백을 설정</li>
  <li>caption-side: 테이블의 캡션(caption)을 설정</li>
  <li>empty-cells: 테이블 내의 빈 셀(cell)들의 테두리 및 배경색을 표현할지 안 할지를 설정</li>
  <li>table-layout: 테이블에 사용되는 레이아웃 알고리즘을 설정</li>
</p>
<blockquote>
  <h3>border 속성</h3>
  <p>
    이 속성을 명시하지 않으면 해당 테이블은 기본 설정으로 빈 테두리를 가지게 됨<br>
  </p>
  
  ```css
  <style>
    table, th, td { border: 2px solid orange; }
  </style>
  ```
</blockquote>

<blockquote>
  <h3>border-collapse 속성</h3>
  <p>
    border-collapse 속성값을 collapse로 설정하면 해당 테이블의 테두리는 한 줄로 표현<br>
    이 속성을 명시하지 않으면 해당 테이블은 기본 설정으로 테이블 요소별 테두리를 모두 표현
  </p>
  
  ```css
  <style>
    table, th, td { border: 2px solid orange; }
    table { border-collapse: collapse; }
  </style>
  ```
</blockquote>

<blockquote>
  <h3>border-spacing 속성</h3>
  <p>
    border-spacing 속성은 테이블 요소(th, td)간의 여백을 설정함
  </p>
  
  ```css
  <style>
    table, th, td { border: 1px solid black; }
    table { width: 100%; border-collapse: seperate; border-spacing: 20px 30px; }
  </style>
  ```
  
</blockquote>

<blockquote>
  <h3>text-align 속성</h3>
  <p>
    text-align 속성은 테이블 요소 내부에서 텍스트의 수평 방향 정렬을 설정<br>
    &lt;th&gt;태그 내부는 가운데 정렬이, &lt;td&gt;태그 내부는 왼쪽 정렬이 기본 설정
  </p>
  
  ```css
  <style>
    table, th, td { border: 1px solid black; }
    table { border-collapse: collapse; width: 100%; }
    th { text-align: left; }
    td { text-align: center; }
  </style>
  ```
</blockquote>

<blockquote>
  <h3>vertical-align 속성</h3>
  <p>
    vertical-align 속성은 테이블 요소 내부에서 텍스트의 수직 방향 정렬을 설정<br>
    &lt;th&gt;태그와 &lt;td&g;태그 모두 가운데 정렬이 기본 설정
  </p>
  
  ```css
  <style>
    table, th, td { border: 1px solid black; }
    table { border-collapse: collapse; width: 100%; }
    th { vertical-align: top; height: 50px; }
    td { vertical-align: bottom; height: 50px; }
  </style>
  ```
</blockquote>

<blockquote>
  <h3>table 형태 예제</h3>
  
  <p>1. border-bottom 속성을 사용, 수평 나눔선만으로 만든 테이블</p>
  
  ```css
    <style>
      table { border-collapse: collapse; width: 100%; }
      th, td { padding: 10px; border-bottom: 1px solid #CD5C5C; }
    </style>
  ```
  
  <p>2. hover 선택자를 이용해 &lt;tr&gt;태그에 마우스를 올리면 행 전체가 하이라이트 되도록 만든 테이블</p>
  
  ```css
    <style>
      table { border-collapse: collapse; width: 100%; }
      th, td { padding: 10px; border-bottom: 1px solid #CD5C5C; }
      tr:hover { background-color: #F5F5F5; }
    </style>
  ```
</blockquote>


<h2>4. 이미지 스프라이트</h2>
<p>
  이미지 스트라이프(image stripe)란 여러 개의 이미지를 하나의 이미지로 합쳐서 관리하는 이미지를 의미<br><br>
  웹 페이지에 이미지가 사용될 경우 해당 이미지를 다운받기 위해 웹 브라우저는 서버에 이미지를 요청하게 됨<br>
  하지만 사용된 이미지가 많을 경우 웹 브라우저는 서버에 해당 이미지의 수만큼 요청해야만 하므로 웹 페이지의 로딩시간이 오래 걸림<br><br>
  이미지 스프라이트를 사용하면 이미지를 다운받기 위한 서버 요청을 단 몇번으로 줄일 수 있음<br>
  모바일 환경과 같이 한정된 자원을 사용하는 플랫폼에서는 웹 페이지의 로딩 시간을 단축해주는 효과가 있음<br>
  또한, 많은 이미지 파일을 관리하는 대신 몇 개의 스프라이트 이미지 파일만을 관리하면 되므로 매우 간편함<br><br>
</p>
  
```CSS
<style>
    .up, .down, .right, .left { background: url("/examples/images/img_image_sprites.png") no-repeat; }
    .up { width: 21px; height: 20px; background-position: 0 0; }
    .down { width: 21px; height: 20px; background-position: -21px 0; }
    .right { width: 22px; height: 20px; background-position: -42px 0; }
    .left { width: 22px; height: 20px; background-position: -65px 0; }
</style>
```
