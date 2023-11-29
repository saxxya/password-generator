// パスワードを生成するために必要な配列を作る
const passwordTexts = [];
// 英小文字
for (let i = 0; i < 26; i++) {
  passwordTexts.push(String.fromCharCode('a'.charCodeAt(0) + i))
}
// 英大文字
for (let i = 0; i < 26; i++) {
  passwordTexts.push(String.fromCharCode('A'.charCodeAt(0) + i))
}
// 数字
for (let i = 0; i < 10; i++) {
  passwordTexts.push(i)
}

const passwordListElement = document.getElementById('passwordList');

// 生成ボタンをクリックしたときの処理
document.getElementById('generateButton').addEventListener('click', e => {
  e.preventDefault();

  passwordListElement.innerHTML = '';

    // 選択された生成する文字数の取得
    const passwordLength = [];

    let radio = document.getElementsByName('generateLength');
    let generateLength = radio.length;
    for(let i = 0; i < generateLength; i++) {
      if (radio.item(i).checked) {
        passwordLength.push(radio.item(i).value)
      }
    }

    // パスワードをランダムに生成
    let passwords = '';
    for (let i = 0; i < passwordLength; i++) {
      passwords += passwordTexts[Math.floor(Math.random() * passwordTexts.length)]
    }
    
    // 生成されたパスワードの表示
    const li = document.createElement('li'),
          input = document.createElement('input');
    input.value = passwords;
    // 表示されたパスワードをクリックしてフォームの中身を全選択
    input.setAttribute('onclick', 'this.select()');
    
    li.appendChild(input);
    passwordListElement.appendChild(li);
});