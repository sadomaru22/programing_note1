//if構文

if (score >= 80) {
    console.log('Great!');
} else {
    console.log('OK...');
}


//===>     
 score >= 80 ? console.log('Great!') : console.log('OK...');



//★switch構文

if (signal === 'red') {
  console.log('Stop!');
} else if (signal === 'yellow') {
  console.log('Caution!');
} else if (signal === 'blue') {
  console.log('Go!');
}

//---->   
switch (signal) {
 case 'red':
   console.log('Stop!')
   break;
 case 'yellow':
   console.log('Caution!')
   break;
 case 'blue':
 case 'greeeen':
   console.log('Go!')
   break;
 default:
   console.log('Wrong signal!');
   break;
}

//★while(その間だけ)

let hp = 100;

while (hp > 0) {
   console.log('${hp} HP left!');
   hp -= 15; 
}

//for loop

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


//continue,break

for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) {
      continue;  //<-いったんストップ
  } 
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i === 4) {
      break;  //<-この地点で終わり
  } 
    console.log(i);
}


//function (関数で処理をまとめる)

function showAd(message = 'Ad') {   //messageはvarなどのいらない変数
    console.log('---------')         // = 'Ad'は初期値、何にもないときはこれが反映される
    console.log('--- ${message} ----')
    console.log('---------')
}

console.log('Tom is great!');
console.log('Bob is great!');
showAd('Header Ad');
console.log('Steve is great!');
console.log('Kenta is great!');
showAd('Footer Ad');   //....


//return

function sum(a, b, c) {
    return a + b + c;
}

const total = sum(1, 2, 3) + sum(3, 4, 5);
console.log(total);


//関数式
const sum = function sum(a, b, c) {
    return a + b + c;
};

const total = sum(1, 2, 3) + sum(3, 4, 5);
console.log(total);           //このままでOK

//アロー関数
const sum = (a, b, c) => a + b + c ;  //{}すらいらない

const double = (a) => a * 2;
console.log(double(12));  //->24

//★★★★★★★★★★★★★★★★★★★★★★★★★★★★★オブジェクト
//ブロックで囲む{}

//index.htmlの中のscriptタグでも同じ定数が示されているときなどに便利

{
    const x = 100;
    console.log(x);
}       //囲うだけでいい


//配列の要素を変更する

unshift(); //先頭に追加
shift(); //先頭の一つを削除

push(); //末尾に追加
pop(); //末尾の一つを削除

{
  const scores = [80, 90, 40, 70];
  scores.push(60, 50);
  scores.shift();    // 90, 40, 70, 60, 50
  scores.splice(1, 0, 30, 80);       //splice(変化が開始する位置、削除数,追加する要素); 
}


//スプレット構文

{
  const otherScores = [10, 20];
  const scores = [80, 90, 40, 70, ...otherScores]; 
  console.log(scores);  //→80, 90, 40, 70, 10, 20

  funtion sum(a, b) {
    console.log(a + b);
  }

  sum(...otherScores);   //使い方②変数のように代入することもできる
}


//分割代入
{
  const scores = [80, 90, 40, 70]
  const [a, b, c, d] = scores
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);   //80, 90, 40, 70
}
{
  const scores = [80, 90, 40, 70]
  const [a, b, ...others] = scores   //レスト構文
  console.log(a);
  console.log(b);
  console.log(others);

  let x = 30;
  let y = 70;
  [x, y] = [y, x];
  console.log(x);
  console.log(y);   //XとYをひっくり返せる
}


//forEach
{
  const scores = [80, 90, 40, 70]
  
  scores.forEach((score, index) => {
    console.log(`Scores ${index}: ${score}`);
  });                            //Scores(1)80, Scores(2)90, Scores(3)40, Scores(4)70              
}


//map  要素それぞれに数を足したい場合などに使える
{
  const prices = [180, 190, 200];

  const updatedPrices = prices.map((price) => {
    return price + 20;
  });   //↓もう少し簡単に
  
  const updatedPrices = prices.map(price => price + 20);
  console.log(updatedPrices);
}             //↑returnの1行の場合省略可


//filter  条件に沿って要素を抽出したいとき
{
  const numbers = [1, 4, 7, 8, 10];

  const evenNumbers = numbers.filter(number => {
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }
  });
  console.log(evenNumbers); //もう少し簡単に↓

  const evenNumbers = numbers.filter(number => number % 2 === 0);
  console.log(evenNumbers); 
}


//オブジェクト記法

{
  const point = {
    x: 100, 
    y: 180,
  };
  console.log(point.x);
  console.log(point['y']);

  point.z = 90;   //座標を追加したい場合
  delete point.y  //追加したい場合
}

//オブジェクト×スプレット構文
{
  const otherProps = {
    r: 4,
    color: 'red',
  };

  const point = {
    x: 100, 
    y: 180,
    ...otherProps,
  };

console.log(point);   //x: 100, y: 180, r: 4, color: "red"
}

//オブジェクト×レスト構文
{   //x,rを定数として扱えるようにしたい
　　const {x, r, ...others} = point;
    console.log(x);
    console.log(r);
    console.log(others);     
}


//Object.keys()   forEachしたいけどできひんときの代わりみたいなやつ*オブジェクトにはforEachが使えないこともポイント
{
  const point = {
    x: 100, 
    y: 180,
  };

  const keys = object.keys(point);
　keys.forEach(key => {
    console.log(`Key: ${key} Value: ${point.[key]}`); //文字列のため、[]の中にkey入れる
});
}

//オブジェクトで複雑なデータ構造を扱う
{
  const points = [
    {x: 30, y: 20},
    {x: 10, y: 50},
    {x: 40, y: 40},
  ]
  console.log(points[1].y);   //50取り出せる
}


//文字列の操作
{
  const str = 'hello';

  console.log(str.length);  //5
  console.log(str.substring(2, 4));   //'ll'  (開始位置、終了位置)
  console.log(str[1]);  //e
}


//join,split  (文字列に区切りを入れたり、区切りのある文字列から区切りを抜いたり)
{
  const d =[2020, 10, 13];

  console.log(d.join('/'));   //2020/10/13
  console.log(d.join(''));    //20201013

  const t = '17:08:24';
  console.log(t.split(':'));     // 17, 08, 24 (普通の文字列になる)
  
  const [hour, minute, second] = t.split(':');   //ちょっと難しい
  console.log(hour);
  console.log(minute);
  console.log(second);        //  17, 08, 24
}


//数値計算
{
  const scores = [10, 3, 9];

  let sum = 0;

  scores.forEach(score => {
    sum += score;         
  });

  const avg = sum / scores.length;   
  
  console.log(sum);                 //22
  console.log(Math.floor(avg));     //7  (小数点はマスフロアで切り捨てる)
  console.log(Math.ceil(avg));     //8  (切り上げ)
  console.log(Math.round(avg));     //7  (四捨五入)
  console.log(avg.toFixed(3));      //7.333
}　

//乱数
{
  console.log(Math.random());     //0~1未満のランダムな数字

   // 0, 1, 2
  // Math.floor(Math.random() * 3)
  // 0, ..., n
  // Math.floor(Math.random() * (n + 1))
  // min, ..., max
  // Math.floor(Math.random() * (max + 1 - min)) + min

  console.log(Math.floor(Math.random() * 6) +1);  //さいころ
}

// 現在日時
{
  const d = new Date();   //←これで取得できている
  d.getFullYear();  //2019
  d.getMonth();  //0-11
  d.getDate();  //1-31  これだけ1から
  d.getDay();  //0-6 曜日
  d.getHours();  //0-23

  console.log(`${d.getMonth() + 1} 月 ${d.getDate()} 日`);

  d.getTime();   //UTC協定世界時刻

//特定の日時
　 const d = new Date(2019, 10); // 2019/11/01 00:00:00
  d.setHours(10, 20, 30); // 2019/11/01 10:20:30
  d.setDate(31); // 2019/12/01 10:20:30
  d.setDate(d.getDate() + 3); // 2019/12/04 10:20:30
  console.log(d); 
}

//ユーザに問うやつ
{
   alert('hello');   //かなり便利、ページに移動してきたときにアラートする

  const answer = confirm('削除しますか？');　　//選択式
  if (answer) {
    console.log('削除しました');
  } else {
    console.log('キャンセルしました');
  }
}

//タイマー機能①
{
  let i = 0;　　//カウンター用の変数

  function showTime() {
    console.log(new Date());
    i++;
    if (i > 2) {
      clearInterval(intervalId);　　//clearInterval タイマー止める
    }
  }
               //↑代入用の定数
  const intervalID = setInterval(showTime, 1000);   //1000ミリ秒ごと(₌1秒ごと)増えていく
}

//タイマー機能②
{
  let i = 0;

  function showTime() {
    console.log(new Date());
    const timeoutId = setTimeout(showTime, 1000);
    i++;
    if (i > 2) {
      clearTimeout(timeoutId);
    }
  }

  showTime();
}


//例外処理
{
  // const name = 'taguchi';
  const name = 5;

  try {
    console.log(name.toUpperCase());
  } catch (e) {
    console.log(e);
  }

  console.log('Finish!');   //errorが出ても、代わりにeが表示されてプログラムが最後まで表示される
}


//クラス　オブジェクトが複数ある時に使える (クラス＝メソッドやプロパティをテンプレート(ほぼ関数)化して表したもの)
{　　　　　　　　　　　　　//またクラスから作られるオブジェクトを「インスタンス」と呼ぶ。
  const posts = [
    {
      text: 'JavaScriptの勉強中…',　　　//匿名で投稿できるSNSの作成
      likeCount: 0,
    },
    {
      text: 'プログラミング楽しい！',
      likeCount: 0,
    },                                //わかりにくいけど、複数のオブジェクト
  ];

  function show(post) {
    console.log(`${post.text} - ${post.likeCount}いいね`);
  }

  show(posts[0]);　　　　　　　　　　//JavaScriptの勉強中 - 0いいね
}
//メソッドを使ってもっと簡単に
{
  const posts = [
    {
      text: 'JavaScriptの勉強中…',
      likeCount: 0,
      // show: function() {
      //   console.log(`${this.text} - ${this.likeCount}いいね`);
      // },
      show() {                 //関数をプロパティの値にした場合、それをメソッドと呼ぶ
        console.log(`${this.text} - ${this.likeCount}いいね`);
      },
    },
    {
      text: 'プログラミング楽しい！',
      likeCount: 0,
      show() {
        console.log(`${this.text} - ${this.likeCount}いいね`);
      },
    },
  ];

  // show(posts[0]);
  posts[0].show();　　　//JavaScriptの勉強中 - 0いいね
  posts[1].show();
}

//クラスを作ってみよう
{
  class Post {
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount}いいね`);
    }

    like() {
      this.likeCount++;
    }

    static showInfo() {     //静的メソッド(＝インスタンスを介さずに直接クラスから呼び出すメソッド)
      console.log('Post class version 1.0');   //インスタンスを介さないため、thisは使えない
    }
  }

  　class SponsoredPost {　　//クラスの拡張
    constructor(text, sponsor) {
      this.text = text;
      this.likeCount = 0;
      this.sponsor = sponsor;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount} likes`);
      console.log(`... sponsored by ${this.sponsor}`);
    }

    like() {
      this.likeCount++;
      this.show();
    }
  }  

  const posts = [
    new Post('JavaScriptの勉強中…'),
    new Post('プログラミング楽しい！'),
    new SponsoredPost('3分動画でマスターしよう', 'dotinstall'),
  ];

  posts[0].like();       //こっちにlikeCount入れた方が手っ取り早いが、これが何個も複製されて、かつ名前を変更しないといけない場合に面倒なので、
　　　　　　　　　　　　　　　　　//なるべくクラスの中に入れ込んだ方がいい。
  posts[0].show();
  posts[1].show();
}

//クラスの継承
{
  class Post { // 親クラス
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount} likes`);
    }

    like() {
      this.likeCount++;
      this.show();
    }
  }

  class SponsoredPost extends Post { // 子クラス
    constructor(text, sponsor) {
      super(text);    //★★convention子クラスでthisを使うときはこれをつけるルール
      this.sponsor = sponsor;
    }

    show() {
      super.show();　　　//ここもsuperのおかげでconsole~likes'までを書かなくてよい
      console.log(`... sponsored by ${this.sponsor}`);
    }
  }

  const posts = [
    new Post('JavaScriptの勉強中…'),
    new Post('プログラミング楽しい！'),
    new SponsoredPost('3分動画でマスターしよう', 'dotinstall'),
  ];

  posts[2].show();
  posts[2].like();
}


//★★★★★★★★★★★★★★★★★★★★★★DOM編
//要素を操作する
{
  function update() {
    document.querySelector('h1').textContent = 'Changed!';   //どれでもいい
    document.querySelector('#target').textContent = 'Changed!';　//ただやっぱりid付ける場合が多い
    document.getElementById('target').textContent = 'Changed!';

    document.querySelectorAll('p')[1].textContent = 'Changed!'; //pの後に番号指定可
    document.querySelectorAll('p').forEach((p, index) => {
      p.textContent = `${index}番目のpです！`;
    });                //要素が複数の場合 forEachと組み合わせて使う
  }

  setTimeout(update, 1000);
}

//addEventListener
{ 
  document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById('target');

    targetNode.textContent = 'Changed!';
    targetNode.title = 'This is title!';
    targetNode.style.color = 'red';
    targetNode.style.backgroundColor = 'skyblue'; //html上にあるbuttonをクリックするといろいろ変わる
                   //↓より一般的
        targetNode.className = 'my-color my-border'; //html上に予めstyleタグを書いておき、その中のクラスをこの命令で呼び出す           
  });
}   

//add,remove, toggle
{ 
  document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById('target');

    targetNode.classList.add('my-color');  //classNameと違って、idにもともとクラスがついてた時でも気にせず使えるから便利
    if (targetNode.classList.contains('my-color') === true) {
       targetNode.classList.remove('my-color');
     } else {
       targetNode.classList.add('my-color');
     }
     　　//↓↓↓もっと便利
    targetNode.classList.toggle('my-color');　　//つけたり消したり
  });
}

//要素の追加
{
  document.querySelector('button').addEventListener('click', () => {
     const item2 = document.createElement('li');  //①要素を作る
     item2.textContent = 'item2';　　　　　　　　　//②中身のテキストを設定する
  
     const ul = document.querySelector('ul');　　//ulを呼び出してから、
     ul.appendChild(item2);　　　　　　　　　　   //③DOMツリーに追加する(親子の関係を結ぶ)
    });
  }
//複製して追加
{
  document.querySelector('button').addEventListener('click', () => {
    const item0 = document.querySelectorAll('li')[0];
    const copy = item0.cloneNode(true);   //trueの場合中のテキストまでコピー、falseなら空の状態でコピー

    const ul = document.querySelector('ul');
    const item2 = document.querySelectorAll('li')[2];
    ul.insertBefore(copy, item2);　　//copyを、item2の前に持ってくる
  });
}

//inputの中を操作する
{
  document.querySelector('button').addEventListener('click', () => {
      const li = document.createElement('li');
      const text = document.querySelector('input'); //要素を作成してDOMツリーに追加
      li.textContent = text.value;
      document.querySelector('ul').appendChild(li);

      text.value = '';　　　//入力してBOXの下にtextを出力後、空にして、
      text.focus();　　　　　　//すぐまた入力できるようにする
  });　　　　　　　　　　　　　//*htmlで、buttonの下に必ずからのulがいります
}

//セレクトボックスの中を操作する
{
  document.querySelector('button').addEventListener('click', () => {
      const li = document.createElement('li');
      const color = document.querySelector('select');
      li.textContent = `${color.value} - ${color.selectedIndex}`;
      document.querySelector('ul').appendChild(li);
  });　　　　　　　　　　　　　　　//value→選択された値、selectedIndex→値が何番目か、を取得できる
}

//ラジオボタンを操作する
{
  document.querySelector('button').addEventListener('click', () => {
      const colors = document.querySelectorAll('input');
      let selectedColor;

      colors.forEach(color => {
          if (color.checked === true) {   //チェックされてたら(checked),valueを入れる
              selectedColor = color.value;　　　　//という処理をappendChildをつけることによって
          }　　　　　　　　　　　　　　　　　　　　　　　//空のulで生じさせる　
      });
      const li = document.createElement('li');
      li.textContent = selectedColor;
      document.querySelector('ul').appendChild(li);
  });
}

//チェックボックスを操作する
{
  document.querySelector('button').addEventListener('click', () => {
    const colors = document.querySelectorAll('input');
    const selectedColors = [];　//チェックボックスの場合複数選択可なので、選択された値を配列で保持しておく必要がある

    colors.forEach(color => {
      if (color.checked === true) {
        selectedColors.push(color.value);
      }
    });

    const li = document.createElement('li');
    // li.textContent = selectedColors.join(',');  ←なくてもいい、カンマは自動的に間に入るから
    li.textContent = selectedColors;
    document.querySelector('ul').appendChild(li);
  });
}

//ダブルクリック
{
  document.querySelector('button').addEventListener('dblclick', () => {
      console.log('Double Clicked!');
  });
//マウスを動かしたとき
  document.addEventListener('mousemove', () => {　//全体の場合は直接イベントリスナー
     console.log('動いたよ！');
  });   
//座標の取得
  document.addEventListener('mousemove', e => {
     console.log(e.clientX, e.clientY);　
  });
//キーを表示
  document.addEventListener('keydown', e => {
       console.log(e.key);
  });
}

//textareaを操作する
{
  const text = document.querySelector('textarea');

  text.addEventListener('focus', () => {  //フォーカスした時
     console.log('focus');
  });
  text.addEventListener('blur', () => {　　//離れた時
     console.log('blur');
  });

  text.addEventListener('input', () => {　　//文字が入力されるたび
     console.log('input');
  });
  text.addEventListener('change', () => {  //文字が確定したら
     console.log('change');
  });
}

//フォームの送信
{
  document.querySelector('form').addEventListener('submit', e => {
     e.preventDefault();　　　//ページ遷移によるsubmitが消えるのを防ぐ
     console.log('submit');
  });
}