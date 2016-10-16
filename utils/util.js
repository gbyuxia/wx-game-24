function formatTime(date,t) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  if (t=='hms'){
      return [hour, minute, second].map(formatNumber).join(':');
  }else{
     return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
  }
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}


//遍历数组顺序；
function arrayList(str) {
    var mathStr = [];
    for(var i=0;i<str.length;i++){
        var num1 = str[i];
        var numid1  = i;
        //console.log("i1:"+i);
        for(var i2=0;i2<str.length;i2++){
            if(i2 != numid1){
                //console.log("i2:"+i2);
                var num2 = str[i2];
                var numid2  = i2;
                for(var i3=0;i3<str.length;i3++){
                    if(i3 != numid1 && i3 != numid2){
                        //console.log("i3:"+i3);
                        var num3 = str[i3];
                        var numid3  = i3;
                        for(var i4=0;i4<str.length;i4++){
                            if(i4 != numid1 && i4 != numid2 && i4 != numid3){
                                //console.log("i4:"+i4);
                                var num4 = str[i4];
                                var aMathStr = {
                                    a:num1,
                                    b:num2,
                                    c:num3,
                                    d:num4};
                                if(isInAry(mathStr,aMathStr)){
                                    mathStr.push(aMathStr);
                                }
                            }
                        }
                    }
                }
            }
        }


    }
    return mathStr;
}
//检测重复；
function isInAry(arr,content){
    var w = '';
    for(var i; i<=arr.length;i++){
        if(content==arr[i]){
            w = i;
        }
    }
    return (w=='')? true:false;
}
//检测空值
function empty(a){
    if( a || String(a)=='0'){
        return true;
    }else{
        return false;
    }
}
//数组去重
function unique(arr) {
    var result = [], hash = {};
    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
}

module.exports = {
  formatTime: formatTime,
  arrayList:arrayList,
  empty:empty,
  unique:unique
}
