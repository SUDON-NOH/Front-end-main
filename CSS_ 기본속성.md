<h1>CSS 기본 속성</h1>

<h2>1. 색</h2>
<p>
  CSS에서 색을 표현하는 방법
  <br><br>
  1. 색상 이름으로 표현<br>
  2. RGB 색상값으로 표현<br>
  3. 16진수 색상값으로 표현<br><br>
</p>
<blockquote>
  <h3>색상 이름으로 표현</h3>
  
  ```css
  <style>
    .blue { color: blue; }
    .green { color: green; }
    .silver { color: silver; }
  </style>
  ```
</blockquote>

<blockquote>
  <h3>RGB 색상값으로 표현</h3>
  
  ```css
  <style>
    .blue { color: rgb(0,0,255); }
    .green { color: rgb(0,128,0); }
    .silver { color: rgb(192,192,192); }
  </style>
  ```
</blockquote>

<blockquote>
  <h3>16진수 색상값으로 표현</h3>
  
  ```css
  <style>
    .blue { color: #0000FF; }
    .green { color: #008000; }
    .silver { color: #C0C0C0; }
  </style>
  ```
</blockquote>

<h2>2. 배경</h2>
<p>
  CSS에서 사용할 수 있는 background 속성은 다음과 같음
</p>
<table>
  <tr>
    <th>속성</th>
    <th>설명</th>
  </tr>
  
  <tr>
    <td>background</td>
    <td>모든 background 속성을 이용한 스타일을 한 줄에 설정할 수 있음</td>
  </tr>
  
  <tr>
    <td>background-color</td>
    <td>HTML 요소의 배경색을 설정</td>
  </tr>
  
  <tr>
    <td>background-image</td>
    <td>HTML 요소의 배경 이미지를 설정</td>
  </tr>
  
  <tr>
    <td>background-repeat</td>
    <td>설정된 배경 이미지의 반복 유무를 설정</td>
  </tr>
  
  <tr>
    <td>background-position</td>
    <td>반복되지 않는 배경 이미지의 상대 위치를 설정</td>
  </tr>
  
  <tr>
    <td>background-attachment</td>
    <td>배경 이미지를 스크롤과는 무관하게 해당 위치에 고정</td>
  </tr>
</table>

```css
<style>
    body {
        background-image: url("/examples/images/img_man.png");
        background-repeat: no-repeat;
        background-position: left bottom;
        /* 스크롤과 무관하게 이미지를 고정 */
        background-attachment: fixed;
    }
</style>
```

<h4>background 속성을 한 번에 적용하기</h4>

```css
<style>
    body { background: #FFCCCC url("/examples/images/img_man.png") no-repeat left bottom fixed; }
</style>
```

<h2>3. 텍스트</h2>

<table>
  <tr>
    <th>속성</th>
    <th>설명</th>
    <th>예시</th>
  </tr>
  
  <tr>
    <td>color</td>
    <td>텍스트의 색상 설정</td>
    <td>
      <style><br>
        &nbsp;&nbsp;&nbsp;&nbsp;body { color: red; }<br>
        &nbsp;&nbsp;&nbsp;&nbsp;p { color: maroon; }<br>
      </style>
    </td>
  </tr>
  
  <tr>
    <td>direction</td>
    <td>
      텍스트가 쓰이는 방향을 설정<br>
      left to right (ltr) - 기본<br>
      right to left (trl)
    </td>
    <td>
      <style><br>
        &nbsp;&nbsp;&nbsp;&nbsp;rightToLeft { direction: rtl; }<br>
      </style>
    </td>
  </tr>
  
  <tr>
    <td>letter-spacing</td>
    <td>텍스트 내에서 문자 사이의 간격을 설정</td>
    <td>
      <style><br>
        &nbsp;&nbsp;&nbsp;&nbsp;.decLetterSpacing { letter-spacing: -3px; }<br>
        &nbsp;&nbsp;&nbsp;&nbsp;.incLetterSpacing { letter-spacing: 10px; }<br>
      </style>
    </td>
  </tr>
  
  <tr>
    <td>word-spacing</td>
    <td>단어 사이의 간격을 설정</td>
    <td>
      <style><br>
        &nbsp;&nbsp;&nbsp;&nbsp;.decWordSpacing { word-spacing: -3px; }<br>
        &nbsp;&nbsp;&nbsp;&nbsp;.incWordSpacing { word-spacing: 10px; }<br>
      </style>
    </td>
  </tr>
  
  <tr>
    <td>letter-spacing</td>
    <td>텍스트 내에서 문자 사이의 간격을 설정</td>
    <td>
      <style><br>
        &nbsp;&nbsp;&nbsp;&nbsp;.decLetterSpacing { letter-spacing: -3px; }<br>
        &nbsp;&nbsp;&nbsp;&nbsp;.incLetterSpacing { letter-spacing: 10px; }<br>
      </style>
    </td>
  </tr>
  
  <tr>
    <td>text-indent</td>
    <td>단락의 첫 줄에 들여쓰기 여부를 설정</td>
    <td>
      <style><br>
        &nbsp;&nbsp;&nbsp;&nbsp;.paraIndent { text-indent: 30px; }<br>
      </style>
    </td>
  </tr>
  
  <tr>
    <td>text-align</td>
    <td>
      텍스트의 수평 방향 정렬을 설정<br>
      text-align으로 설정된 정렬 방향은<br>
      text-direction 속성과는 상관없이 우선적으로 적용
    </td>
    <td>
      <style><br>
          &nbsp;&nbsp;&nbsp;&nbsp;h2 { text-align: left; }<br>
          &nbsp;&nbsp;&nbsp;&nbsp;h3 { text-align: right; }<br>
          &nbsp;&nbsp;&nbsp;&nbsp;h4 { text-align: center; }<br>
      </style>
    </td>
  </tr>
  
  <tr>
    <td>text-decoration</td>
    <td>
      텍스트에 여러 가지 효과를 설정하거나 제거하는데 사용<br>
    </td>
    <td>
      <style><br>
          &nbsp;&nbsp;&nbsp;&nbsp;h2 { text-decoration: overline; }<br>
          &nbsp;&nbsp;&nbsp;&nbsp;h3 { text-decoration: line-through; }<br>
          &nbsp;&nbsp;&nbsp;&nbsp;h4 { text-decoration: underline; }<br>
          &nbsp;&nbsp;&nbsp;&nbsp;a { text-decoration: none; }<br>
      </style>
    </td>
  </tr>
  
  <tr>
    <td>text-transform</td>
    <td>
      텍스트에 포함된 영문자에 대한 대소문자를 설정<br>
      첫 문자만을 대문자로 변경도 가능
    </td>
    <td>
      <style><br>
        &nbsp;&nbsp;&nbsp;&nbsp;h2 { text-transform: uppercase; }<br>
        &nbsp;&nbsp;&nbsp;&nbsp;h3 { text-transform: lowercase; }<br>
        &nbsp;&nbsp;&nbsp;&nbsp;h4 { text-transform: capitalize; }<br>
      </style>
    </td>
  </tr>
  
  <tr>
    <td>line-height</td>
    <td>
      line-height 속성은 텍스트의 줄 간격을 설정<br>
    </td>
    <td>
      <style><br>
        &nbsp;&nbsp;&nbsp;&nbsp;.narrowLineHeight { line-height: 0.8; }<br>
        &nbsp;&nbsp;&nbsp;&nbsp;.wideLineHeight { line-height: 1.8; }<br>
      </style>
    </td>
  </tr>
  
  <tr>
    <td>text-shadow</td>
    <td>
      텍스트에 간단한 그림자 효과를 설정<br>
    </td>
    <td>
      <style><br>
         &nbsp;&nbsp;&nbsp;&nbsp;h2 { text-shadow: 2px 1px #3399CC; }<br>
      </style>
    </td>
  </tr>
</table>
  
  
<h2>4. 글꼴</h2>
<li>font-family</li>
<li>font-style</li>
<li>font-variant</li>
<li>font-weight</li>
<li>font-size</li>
<h3>CSS 글꼴 집합(font-family)</h3>
<p>
  CSS에는 두 가지의 글꼴 집합(font-family)이 존재<br>
  <br>
  - generic family: 비슷한 모양을 가지는 글꼴 집합("Serif", "Monospcae"  등)<br>
  - font family: 특정 글꼴 집합("Times", "Courier" 등)<br>
</p>
<blockquote>
  <h3>font-family 속성</h3>
  <p>
    font-family 속성은 하나의 글꼴 설정도 가능하고, <b>여러 개의 글꼴을 같이 설정도 가능</b><br>
    font-family 속성값이 여러 개의 글꼴로 설정되어 있으면, 웹 브라우저는 위에서부터 <b>순서대로 글꼴을 읽어 들임</b><br>
    만약 사용자의 컴퓨터에서 첫 번째로 읽어 들인 글꼴이 없으면 다음 글꼴을 확인<br>
    여러 개의 글꼴을 나열할 때는 <b>쉼표( , )</b>로 구분
  </p>
  
  ```css
    <style>
      .serif { font-family: "Times New Roman", Times, serif; }
     .sansserif { font-family: Arial, Helvetica, sans-serif; }
     </style>
  ```
</blockquote>

<blockquote>
  <h3>font-style 속성</h3>
  <p>
    font-style 속성은 주로 이탤릭체를 사용하기 위해 사용<br>
    <li>normal: 텍스트에 어떠한 스타일도 적용하지 않음</li>
    <li>italic: 텍스트를 이탤릭체로 나타냄</li>
  </p>
  
  ```css
    <style>
      .normal { font-style: normal; }
      .italic { font-style: italic; }
      .oblique { font-style: oblique; }
    </style>
  ```
</blockquote>

<blockquote>
  <h3>font-variant 속성</h3>
  <p>
    font-variant 속성은 속성값이 small-caps로 설정되면, 텍스트에 포함된 영문자 중 모든 소문자를 작은 대문자(samll-caps) 글꼴로 변경<br>
    이때 영문자 중 대문자는 기존 크기 그대로 출력<br>
    작은 대문자(small-caps) 글꼴이란 텍스트의 기존 대문자보다는 약간 작은 크기의 대문자를 의미
  </p>
  
  ```css
  <style>
    .normal { font-variant: normal; }
    .smallCaps { font-variant: small-caps; }
  </style>
  ```
</blockquote>

<blockquote>
  <h3>font-weight 속성</h3>
  <p>
    font-weight 속성은 텍스트를 얼마나 두껍게 표현할지를 설정<br>
    사용할 수 있는 속성값에는 lighter, normal, bold, bolder 등이 있음<br>
    또한, 100, 200, 300, ..., 900 등과 같이 숫자로 텍스트의 두꼐를 설정할 수도 있음
  </p>
  
  ```css
    <style>
      .normal { font-weight: normal; }
      .bold { font-weight: 600; }
      .bolder { font-weight: bolder; }
    </style>
  ```
</blockquote>

<blockquote>
  <h3>font-size 속성</h3>
  <p>
    font-size 속성은 텍스트의 크기를 설정<br>
    웹 디자인에서 텍스트의 크기는 매우 중요한 표현 요소<br>
    하지만 제목을 표현하기 위해서 텍스트의 크기만을 크게 해서는 안됨<br>
    이때에는 제목을 위한 HTML 요소인 &lt;h1&gt; 태그부터 &lt;h6&gt; 태그를 사용해야 함
  </p>
  
  <blockquote>
    <h3>font-size 속성값</h3>
    <p> 
      font-size 속성값은 다음과 같이 두 가지 방식으로 표현이 가능<br><br>
      1. 절대적 크기<br>
      2. 상대적 크기<br><br>
      절대적 크기는 텍스트의 크기를 명시된 크기 그대로 설정하고자 할 때 사용<br>
      절대적 크기로 설정된 텍스트는 모든 웹 브라우저에서 같은 크기로 표현<br><br>
      상대적 크기는 텍스트를 둘러싸고 있는 HTML 요소들의 크기에 따라 텍스트의 크기도 같이 변하는 방식<br>
      또한, 사용자가 웹 브라우저를 통해 텍스트의 크기를 직접 변경할 수도 있음
    </p>
  </blockquote>
  
  <blockquote>
    <h3>font-size의 크기 단위</h3>
    <p>
      font-size 속성값에 자주 사용되는 대표적인 크기 단위는 다음과 같음<br><br>
      백분율 단위(%)는 기본 크기를 100%로 놓고, 그에 대한 상대적인 크기를 설정<br>
      배수 단위(em)는 해당 글꼴(font)의 기본 크기를 1em으로 놓고, 그에 대한 상대적인 크기를 설정<br>
      픽셀 단위(px)는 스크린의 픽셀(pixel)을 기준으로 하는 절대적인 크기를 설정
    </p>
  </blockquote>
  
  ```css
    <style>
        body { font-size: 100%; }
        #large { font-size: 2.5em; }
        #small { font-size: 0.7em; }
        #fixed { font-size: 20px; }
    </style>
  ```
  
</blockquote>

