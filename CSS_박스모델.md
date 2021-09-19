<h1>CSS 박스 모델</h1>

<blockquote>
  <h3>크기 단위</h3>

  <p>
    CSS에서 사용하는 크기의 단위에는 %, em, px, cm, mm, inch 등이 있음<br>
    그 중에서 가장 많이 사용되는 크기 단위는 다음과 같음<br><br>
    1. 백분율단위(%)<br>
    2. 배수 단위(em)<br>
    3. 픽셀 단위(px)<br><br>
    백분율 단위(%)는 기본 크기를 100%로 놓고, 그에 대한 상대적인 크기를 설정<br>
    배수 단위(em)는 해당 글꼴(font)의 기본 크기를 1em으로 놓고, 그에 대한 상대적인 크기를 설정<br>
    픽셀 단위(px)는 스크린의 픽셀(pixel)을 기준으로 하는 절대적인 크기를 설정<br>
  </p>

  ```css
  <style>
      #large { font-size: 200%; }
      #small { font-size: 0.7em; }
      #fixed { font-size: 20px; }
  </style>
  ```
</blockquote>

<blockquote>
  <h3>크기</h3>
  
  <p>
    CSS를 이요하면 HTML 요소의 크기를 마음대로 설정할 수 있음<br>
    CSS에서 크기 조절을 위해 사용할 수 있는 속성은 아래와 같음<br><br>
    1. height<br>
    2. width<br>
    3. max-width<br>
    4. min-width<br>
    5. max-height<br>
    6. min-height<br>
  </p>
  
  <blockquote>
    <h4>height와 width 속성</h4>
    <p>
      height와 width 속성은 HTML 요소의 높이와 너비를 각각 설정함<br>
      이 속성의 기본 설정값은 auto이며, 웹 브라우저가 각 HTML 요소에 맞게 자동으로 높이와 너비를 설정
    </p>

    <style>
      div { height: 200px; width: 500px; }
    </style>

  </blockquote>
  
  <blockquote>
    <h4>max-width 속성</h4>
    <p>
      max-width 속성은 해당 HTML 요소가 가질 수 있는 최대 너비(width)를 설정<br>
      이 속성의 기본 설정값은 none이며, 해당 HTML 요소의 너비에 제한을 두지 않겠다는 의미<br><br>
      width 속성으로 너비를 설정하면, 설정된 너비 이하로 브ㅜ라우저의 크기가 줄어들 때 해당 요소에 스크롤 바를 생성<br>
      하지만 max-width 속성으로 너비를 설정하면 줄어드는 웹 브라우저의 크기에 맞춰 해당 HTML 요소의 너비도 자동으로 줄어듦
    </p>

    <style>
        div.maxWidth { max-width: 500px; }
    </style>
    
  </blockquote>
  
  <blockquote>
    <h4>min-width 속성</h4>
    <p>
      min-width 속성은 해당 HTML 요소가 가질 수 있는 최소 너비(width)를 설정<br>
      이 속성의 기본 설정값은 0, 해당 HTML 요소의 너비에 제한을 두지 않겠다는 의미<br><br>
      min-width 속성이 설정된 요소에 width 속성값을 따로 설정하지 않으면 초기 너비(width)는 100%를 가지게 됨<br>
      이때 웹 브라우저의 크기가 줄어들면 거기에 맞춰 HTML 요소의 너비도 자동으로 줄어듦<br>
      하지만 웹 브라우저가 min-width 속성으로 설정된 너비 이하로 줄어들면, HTML 요소의 너비는 더는 줄어들지 않고 수평 스크롤 바를 생성
    </p>

    <style>
        div.minWidth { min-width: 500px; }
    </style>
    
  </blockquote>
  
  <blockquote>
    <h4>max-height 속성</h4>
    <p>
      min-width 속성은 해당 HTML 요소가 가질 수 있는 최소 너비(width)를 설정<br>
      이 속성의 기본 설정값은 0, 해당 HTML 요소의 너비에 제한을 두지 않겠다는 의미<br><br>
      min-width 속성이 설정된 요소에 width 속성값을 따로 설정하지 않으면 초기 너비(width)는 100%를 가지게 됨<br>
      이때 웹 브라우저의 크기가 줄어들면 거기에 맞춰 HTML 요소의 너비도 자동으로 줄어듦<br>
      하지만 웹 브라우저가 min-width 속성으로 설정된 너비 이하로 줄어들면, HTML 요소의 너비는 더는 줄어들지 않고 수평 스크롤 바를 생성
    </p>

    <style>
        div.minWidth { min-width: 500px; }
    </style>
    
  </blockquote>
