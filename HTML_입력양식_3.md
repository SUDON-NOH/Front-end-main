<h1>Input 요소의 타입</h1>
<h2>HTML5에서 추가된 input 요소의 타입</h2>
<br>
<li>숫자 입력(number)</li>
<li>입력 범위 지정(range)</li>
<li>색상 입력(color)</li>
<li>날짜 입력(date)</li>
<li>시간 입력(time)</li>
<li>날짜와 시간 입력(datetime-local)</li>
<li>연도와 월 입력(month)</li>
<li>연도와 주 입력(week)</li>
<li>이메일 입력(email)</li>
<li>URL 주소 입력(URL)</li>
<li>전화번호 입력(tel)</li>
<li>검색어 입력(search)</li>
<br>
<hr>
<blockquote>
  <h3>숫자 입력(number)</h3>
  <p>
    &lt;input&gt;태그의 type 속성값을 "number"로 설정하면, input요소는 사용자가 숫자를 입력할 수 있도록 함<br><br>
    number 타입이 일반 text 타입과 다른 점은 입력 필드 우측에 숫자의 크기를 조절할 수 있는 상하 버튼이 생기는 점임<br>
    브라우저의 지원 여부에 따라 min속성과 max속성을 이용하여 숫자 선택에 제한값을 설정할 수도 있음
  </p>
  
  ```html
  <input type="number" name="favnum" min="1" max="9">
  ```
</blockquote>
<blockquote>
  <h3>입력 범위 지정(range)</h3>
  <p>
    &lt;input&gt;태그의 type 속성값을 "range"로 설정하면, input 요소는 사용자가 일정 범위 안의 값만을 입력할 수 있도록 함
  </p>
  
  ```html
  0 <input type="range" name="favnum" min="1" max="9"> 9
  ```
</blockquote>
<blockquote>
  <h3>색상 입력(color)</h3>
  <p>
    &lt;input&gt;태그의 type 속성값을 "color"로 설정하면, input요소는 사용자가 색상를 입력할 수 있도록 함<br><br>
    선택된 색상은 #을 제외한 6자리의 16진수 색상값으로 전송<br>
    브라우저 지원 여부에 따라 색상을 선택하기 위한 도구를 보여줌
  </p>
  
  ```html
  <input type="color" name="favcolor" value="#CC6600">
  ```
</blockquote>
<blockquote>
  <h3>날짜 입력(date)</h3>
  <p>
    &lt;input&gt;태그의 type 속성값을 "date"로 설정하면, input요소는 사용자가 날짜를 입력할 수 있도록 함<br><br>
    브라우저의 지원 여부에 따라 날짜를 선택하기 위한 캘린더를 보여줌
  </p>
  
  ```html
  <input type="date" name="startday">
  ```
</blockquote>
<blockquote>
  <h3>시간 입력(time)</h3>
  <p>
    &lt;input&gt;태그의 type 속성값을 "time"으로 설정하면, input요소는 사용자가 시간를 입력할 수 있도록 함<br><br>
    브라우저의 지원 여부에 따라 시간을 선택하기 위한 도구를 보여줌
  </p>
  
  ```html
  <input type="time" name="birthtime">
  ```
</blockquote>
<blockquote>
  <h3>날짜와 시간 입력(datetime-local)</h3>
  <p>
    &lt;input&gt;태그의 type 속성값을 "datetime-local"로 설정하면, input요소는 사용자가 날짜와 시간를 입력할 수 있도록 함<br><br>
    브라우저의 지원 여부에 따라 날짜을 선택하기 위한 캘린더와 시간을 선택하귀 위한도구를 보여줌
  </p>
  
  ```html
  <input type="datetime-local" name="starttime">
  ```
</blockquote>
<blockquote>
  <h3>연도와 월 입력(month)</h3>
  <p>
    &lt;input&gt;태그의 type 속성값을 "month"로 설정하면, input요소는 사용자가 연도와 월을 입력할 수 있도록 함<br><br>
    브라우저의 지원 여부에 따라 연도와 월을 선택하기 위한 캘린더를 보여줌
  </p>
  
  ```html
  <input type="month" name="birthmoon">
  ```
</blockquote>
<blockquote>
  <h3>연도와 주 입력(week)</h3>
  <p>
    &lt;input&gt;태그의 type 속성값을 "week"로 설정하면, input요소는 사용자가 연도와 몇 번째 주인지를 입력할 수 있도록 함<br><br>
    브라우저의 지원 여부에 따라 연도와 주를 선택하기 위한 캘린더를 보여줌
  </p>
  
  ```html
  <input type="week" name="nthweek">
  ```
</blockquote>
<blockquote>
  <h3>이메일 입력(email)</h3>
  <p>
    &lt;input&gt;태그의 type 속성값을 "email"로 설정하면, input요소는 사용자가 email 주소를 입력할 수 있도록 함<br><br>
    브라우저의 지원 여부에 따라 email 주소가 유효한 email 주소인지 자동으로 검사
  </p>
  
  ```html
  <input type="email" name="email">
  ```
</blockquote>
<blockquote>
  <h3>URL 주소 입력(url)</h3>
  <p>
    &lt;input&gt;태그의 type 속성값을 "url"로 설정하면, input요소는 사용자가 URL을 입력할 수 있도록 함<br><br>
    브라우저의 지원 여부에 따라 전송할 때 입력한 URL 주소가 유효한 URL 주소인지 자동으로 검사
  </p>
  
  ```html
  <input type="url" name="url">
  ```
</blockquote>
<blockquote>
  <h3>전화번호 입력(tel)</h3>
  <p>
    &lt;input&gt;태그의 type 속성값을 "tel"로 설정하면, input요소는 사용자가 전화번호를 입력할 수 있도록 함
  </p>
  
  ```html
  <input type="tel" name="tel">
  ```
</blockquote>
<blockquote>
  <h3>검색어 입력(search)</h3>
  <p>
    &lt;input&gt;태그의 type 속성값을 "search"로 설정하면, input요소는 사용자가 검색어를 입력할 수 있도록 함<br>
    이러한 검색 필드는 보통의 텍스트 필드(text field)와 동일하게 동작<br><br>
    search 타입이 일단 text 타입과 다른 점은 입력 필드에 검색어를 입력하면, 입력 필드 우측에 입력된 검색어를 바로 삭제할 수 있는 X 포시가 생기는 점
  </p>
  
  ```html
  <input type="search" name="keyword">
  ```
</blockquote>
