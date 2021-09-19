<h1>HTML input type="button"으로 링크 열기</h1>
<p>
  iunput 태그에서 type="button"을 사용해서 a tag 처럼 링크시키는 방법
</p>

<h2> 1. 현재 탭으로 열기</h2>

```html
  <input type="button" value = "버튼" onclick="location.href='{{ ORDER_URL }}'">
```

<h2> 2. 새로운 탭으로 열기</h2>

```html
  <input type="button value = "버튼" onclick="window.open('{{ ORDER_URL }}'))"
```

