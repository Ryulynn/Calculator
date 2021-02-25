$(document).ready(function(){
  
  //最初に変数を定義
  
  var get_text = "";//ディスプレイ表示文字用変数
  var get_number = "";//計算用変数
  var term1 = "";//計算の第1項目を入れる変数。ただし、項数n=3以上の計算では、n-1個の項を格納する。
  var term2 = "";//計算の第2項目を入れる変数。ただし、項数n=3以上の計算では、最終項を格納する。
  var result = "";
  
  //以下は各ボタンが押された場合の処理(順序はHTMLの記載順)
  
  $(".button_7").click(function(){//ボタン「7」が押された時のコード。以降の数字ボタン(小数点ボタン)の構造は同じ。
    get_text = get_text + $(".button_7").text();//表示用変数get_textに「7」を加える。(文字列)
    $(".display_text").text(get_text);//ディスプレイの表示テキストを更新する。
    get_number = get_number + 7;//計算用変数get_numberに「7」を加える。(数値)
    $(".button_plus, .button_minus, .button_multiplied, .button_divided, .button_equal, .button_dot").removeClass("button_hidden");//記号系のボタンのタッチ禁止を解除する。
  });
  
  $(".button_8").click(function(){//ボタン「8」が押された時のコード。
    get_text = get_text + $(".button_8").text();
    $(".display_text").text(get_text);
    get_number = get_number + 8;
    $(".button_plus, .button_minus, .button_multiplied, .button_divided, .button_equal, .button_dot").removeClass("button_hidden");
  });
  
  $(".button_9").click(function(){//ボタン「9」が押された時のコード。
    get_text = get_text + $(".button_9").text();
    $(".display_text").text(get_text);
    get_number = get_number + 9;
    $(".button_plus, .button_minus, .button_multiplied, .button_divided, .button_equal, .button_dot").removeClass("button_hidden");
  });
  
  $(".button_plus").click(function(){//ボタン「+」が押された時のコード。「-」「×」「÷」も構造は同じ。
    if(get_number == ""){//「=」の押下後、その計算結果に対し足し算を行う場合の処理。「=」押下後は「get_number = ""」である。
      term1 = result + "+";//前回の計算結果「result」を第一項「term1」に代入
    }else if(isNaN(Number(term1))){//３項以上の計算を行う場合の処理。この場合、term1には演算記号(文字列)が含まれるため、Number(term1) -> NaNとなる。それを検知している。
      term1 = term1 + get_number + "+";//term1にn-1個の項を入れる。
      get_number = "";//get_numberをからにする。次に押された数字を格納するため。
    }else{//第１項目の処理。
      get_number = get_number + "+";//get_numberに「+」(文字列)を格納
      term1 = get_number;//それをterm1に格納
      get_number = "";//get_numberを空に
    }
    get_text = get_text + $(".button_plus").text();//表示用のget_textに「+」を加える。
    $(".display_text").text(get_text);//それをディスプレイ文字に反映。
    $(".button_plus, .button_minus, .button_multiplied, .button_divided, .button_equal, .button_dot").addClass("button_hidden");//記号系ボタンをタッチ禁止にする。
    $(".button_number").removeClass("button_hidden");
  });
  
  $(".button_4").click(function(){//ボタン「4」が押された時のコード。
    get_text = get_text + $(".button_4").text();
    $(".display_text").text(get_text);
    get_number = get_number + 4;
    $(".button_plus, .button_minus, .button_multiplied, .button_divided, .button_equal, .button_dot").removeClass("button_hidden");
  });
  
  $(".button_5").click(function(){//ボタン「5」が押された時のコード。
    get_text = get_text + $(".button_5").text();
    $(".display_text").text(get_text);
    get_number = get_number + 5;
    $(".button_plus, .button_minus, .button_multiplied, .button_divided, .button_equal, .button_dot").removeClass("button_hidden");
  });
  
  $(".button_6").click(function(){//ボタン「6」が押された時のコード。
    get_text = get_text + $(".button_6").text();
    $(".display_text").text(get_text);
    get_number = get_number + 6;
    $(".button_plus, .button_minus, .button_multiplied, .button_divided, .button_equal, .button_dot").removeClass("button_hidden");
  });
  
  $(".button_minus").click(function(){//ボタン「-」が押された時のコード。
    if(get_number == ""){
      term1 = result + "-";
    }else if(isNaN(Number(term1))){
      term1 = term1 + get_number + "-";
      get_number = "";
    }else{
      get_number = get_number + "-";
      term1 = get_number;
      get_number = "";
    }
    get_text = get_text + $(".button_minus").text();
    $(".display_text").text(get_text);
    $(".button_plus, .button_minus, .button_multiplied, .button_divided, .button_equal, .button_dot").addClass("button_hidden");
    $(".button_number").removeClass("button_hidden");
  });
  
  $(".button_1").click(function(){//ボタン「1」が押された時のコード。
    get_text = get_text + $(".button_1").text();
    $(".display_text").text(get_text);
    get_number = get_number + 1;
    $(".button_plus, .button_minus, .button_multiplied, .button_divided, .button_equal, .button_dot").removeClass("button_hidden");
  });
  
  $(".button_2").click(function(){//ボタン「2」が押された時のコード。
    get_text = get_text + $(".button_2").text();
    $(".display_text").text(get_text);
    get_number = get_number + 2;
    $(".button_plus, .button_minus, .button_multiplied, .button_divided, .button_equal, .button_dot").removeClass("button_hidden");
  });
  
  $(".button_3").click(function(){//ボタン「3」が押された時のコード。
    get_text = get_text + $(".button_3").text();
    $(".display_text").text(get_text);
    get_number = get_number + 3;
    $(".button_plus, .button_minus, .button_multiplied, .button_divided, .button_equal, .button_dot").removeClass("button_hidden");
  });
  
  $(".button_multiplied").click(function(){//ボタン「×」が押された時のコード。
    if(get_number == ""){
      term1 = result + "*";
    }else if(isNaN(Number(term1))){
      term1 = term1 + get_number + "*";
      get_number = "";
    }else{
      get_number = get_number + "*";
      term1 = get_number;
      get_number = "";
    }
    get_text = get_text + $(".button_multiplied").text();
    $(".display_text").text(get_text);
    $(".button_plus, .button_minus, .button_multiplied, .button_divided, .button_equal, .button_dot").addClass("button_hidden");
    $(".button_number").removeClass("button_hidden");
    /*get_number = get_number **/ 
  });
  
  $(".button_0").click(function(){//ボタン「0」が押された時のコード。
    get_text = get_text + $(".button_0").text();
    $(".display_text").text(get_text);
    get_number = get_number + 0;
    $(".button_plus, .button_minus, .button_multiplied, .button_divided, .button_equal, .button_dot").removeClass("button_hidden");
  });
  
  $(".button_00").click(function(){//ボタン「00」が押された時のコード。
    get_text = get_text + $(".button_00").text();
    $(".display_text").text(get_text);
    get_number = get_number + 0 + 0;
    console.log(get_number);
    $(".button_plus, .button_minus, .button_multiplied, .button_divided, .button_equal, .button_dot").removeClass("button_hidden");
  });
  
  $(".button_dot").click(function(){//ボタン「.」が押された時のコード。
    get_text = get_text + $(".button_dot").text();
    $(".display_text").text(get_text);
    get_number = get_number + ".";
    $(".button_plus, .button_minus, .button_multiplied, .button_divided, .button_equal, .button_dot").addClass("button_hidden");
  });
  
  $(".button_divided").click(function(){//ボタン「÷」が押された時のコード。
    if(get_number == ""){
      term1 = result + "/";
    }else if(isNaN(Number(term1))){
      term1 = term1 + get_number + "/";
      get_number = "";
    }else{
      get_number = get_number + "/";
      term1 = get_number;
      get_number = "";
    }
    get_text = get_text + $(".button_divided").text();
    $(".display_text").text(get_text);
    $(".button_plus, .button_minus, .button_multiplied, .button_divided, .button_equal, .button_dot").addClass("button_hidden");
    $(".button_number").removeClass("button_hidden");
  });
  
  $(".button_AC").click(function(){//ボタン「AC」が押された時のコード。全ての変数を空にする。
    get_text = "";
    get_number = "";
    term1 = "";
    term2 = "";
    result = "";
    $(".display_text").text(get_text);//ディスプレイ表示を書き換え(空表示)
    $(".button_plus, .button_minus, .button_multiplied, .button_divided, .button_equal, .button_dot").addClass("button_hidden");//記号系のボタンをタッチ禁止にする。
    $(".button_number").removeClass("button_hidden");//数字系ボタンをタッチ可能にする。
  });
  
  $(".button_equal").click(function(){//ボタン「=」が押された時のコード
    $(".button_plus, .button_minus, .button_multiplied, .button_divided").removeClass("button_hidden");//記号系ボタンのタッチを可能にする。
    $(".button_number, .button_dot, .button_equal").addClass("button_hidden");//数字系ボタンのタッチを禁止にする。
    term2 = get_number;//第２項(３項以上の場合は最終項)をterm2に格納
    get_number = "";
    result = eval(term1 + term2);//全項をまとめ、文字列であった演算子記号を数式に変換
    get_text = result;//表示用get_textに計算結果を格納
    $(".display_text").text(get_text);//ディスプレイに反映
  });
  
});
