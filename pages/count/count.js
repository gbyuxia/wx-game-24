
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

//生成随机数字
var appInstance = getApp();
function createRandomNum(){
    return Math.ceil(Math.random()*appInstance.globalData.maxNum);    
}
var newUnitNums = [];

Page({
    data:{
         disabled:[false,false,false,false,false,false],
         countLine:[{firstNum:'',operator:'',nextNum:'',result:'',isCounted:false}],
         result:[],
         isFinised:false,
         isSuccessed:false,
         modalHidden:true,
         grade:'简单',
         score:{gameIndex:0,successNum:0,skipNum:0,failNum:0}
    },
    onLoad:function(options){
        this.setData({grade:options.grade})
        this.creatUnit(options.grade);
    },
    creatUnit(g){
           //穷举计算。
           let newArr = [],answer = [];
           function count(){
                var str = [createRandomNum(),createRandomNum(),createRandomNum(),createRandomNum()], countStr = arrayList(str),resultArr = [];
                for(var i =0; i<countStr.length ; i++){
                    var x=countStr[i].a;
                    var y=countStr[i].b;
                    var z=countStr[i].c;
                    var w=countStr[i].d;
                    if (x+y+z+w==24){ var aResult = x+"+"+y+"+"+z+"+"+w;resultArr.push(aResult);}
                    else if (x+y+z-w==24){ var aResult = x+"+"+y+"+"+z+"-"+w;resultArr.push(aResult);}
                    else if ((x+y)*(z+w)==24){ var aResult = "("+x+"+"+y+")*("+z+"+"+w+")";resultArr.push(aResult);}
                    else if ((x-y)*(z+w)==24){ var aResult = "("+x+"-"+y+")*("+z+"+"+w+")";resultArr.push(aResult);}
                    else if ((x-y)*(z-w)==24){ var aResult = "("+x+"-"+y+")*("+z+"-"+w+")";resultArr.push(aResult);}
                    else if ((x+y+z)*w==24){ var aResult = "("+x+"+"+y+"+"+z+")*"+w;resultArr.push(aResult);}
                    else if ((x-y-z)*w==24){ var aResult = "("+x+"-"+y+"-"+z+")*"+w;resultArr.push(aResult);}
                    else if ((x+y-z)*w==24){ var aResult = "("+x+"+"+y+"-"+z+")*"+w;resultArr.push(aResult);}
                    else if ((x*y*z)/w==24){ var aResult = "("+x+"*"+y+"*"+z+")/"+w;resultArr.push(aResult);}
                    else if (x*y*(z+w)==24){ var aResult = "("+x+"*"+y+")*("+z+"+"+w+")";resultArr.push(aResult);}
                    else if (x*y*(z-w)==24){ var aResult = "("+x+"*"+y+")*("+z+"-"+w+")";resultArr.push(aResult);}
                    else if (x*y*z-w==24){ var aResult = "("+x+"*"+y+")*("+z+")-"+w;resultArr.push(aResult);}
                    else if (x*y*z+w==24){ var aResult = "("+x+"*"+y+")*("+z+")+"+w;resultArr.push(aResult);}
                    else if (x*y*z*w==24){ var aResult = x+"*"+y+"*"+z+"*"+w;resultArr.push(aResult);}
                    else if ((x+y)+(z/w)==24){ var aResult = "("+x+"+"+y+")+("+z+"/"+w+")";resultArr.push(aResult);}
                    else if ((x+y)*(z/w)==24){ var aResult = "("+x+"+"+y+")*("+z+"/"+w+")";resultArr.push(aResult);}
                    else if (x*y+z+w==24){ var aResult = "("+x+"*"+y+")+"+z+"+"+w;resultArr.push(aResult);}
                    else if (x*y+z-w==24){ var aResult = "("+x+"*"+y+")+"+z+"-"+w;resultArr.push(aResult);}
                    else if (x*y-(z/w)==24){ var aResult = "("+x+"*"+y+")-("+z+"/"+w+")";resultArr.push(aResult);}
                    else if (x*y+(z/w)==24){ var aResult = "("+x+"*"+y+")-("+z+"/"+w+")";resultArr.push(aResult);}
                    else if (x*y-z-w==24){ var aResult = "("+x+"*"+y+")-"+z+"-"+w;resultArr.push(aResult);}
                    else if (x*y+(z*w)==24){ var aResult = "("+x+"*"+y+")+("+z+"*"+w+")";resultArr.push(aResult);}
                    else if (x*y-(z*w)==24){ var aResult = "("+x+"*"+y+")-("+z+"*"+w+")";resultArr.push(aResult);}
                    else if (x*y/(z*w)==24){ var aResult = "("+x+"*"+y+")/("+z+"*"+w+")";resultArr.push(aResult);}
                    else if (x*y/(z-w)==24){ var aResult = "("+x+"*"+y+")/("+z+"-"+w+")";resultArr.push(aResult);}
                    else if (x*y/(z+w)==24){ var aResult = "("+x+"*"+y+")/("+z+"+"+w+")";resultArr.push(aResult);}
                }
                answer = unique(resultArr);
                if ((g=='简单' && answer.length >2) ||(g == '中等' && answer.length==2) || (g == '难' && answer.length==1) ){                                      
                    newArr = Array.from(str, x => String(x));
                }else{
                    count();
                }      
            }
            count(); 
            this.setData({
                numbers: newArr,
                answer:answer,
                disabled:[false,false,false,false,false,false],
                countLine:[{firstNum:'',operator:'',nextNum:'',result:'',isCounted:false}],               
                isFinised:false,
                isSuccessed:false,
                modalHidden:true,
                'score.gameIndex':Number(this.data.score.gameIndex) +1
            })
       },
    
    usetoCount(e){        
        var num ,index = Number(e.target.dataset.index),disStatus=[],line = this.data.countLine.length - 1,newCountLine = this.data.countLine;
        let thisLine = this.data.countLine[line];
        if (index<4){
            num = this.data.numbers[index];
        }else{
            num =this.data.countLine[index - 4].result
        }

        if (thisLine.firstNum && thisLine.nextNum){
            return false;
        }else{
            if (!empty(thisLine.firstNum)){
                newCountLine[line].firstNum = num;
            }else{
                newCountLine[line].nextNum = num;
            }
             for (var i in this.data.disabled){
                disStatus[i] = i==index?true : this.data.disabled[i];           
            } 
            this.setData({           
                countLine:newCountLine,
                disabled:disStatus
            });
        }       
    },
    useOperator(e){
        var o = e.target.dataset.operator,line = this.data.countLine.length - 1 ,newCountLine = this.data.countLine;
        newCountLine[line].operator = o;
        this.setData({
            countLine:newCountLine
        });
    },
    toCount(){
        var line = this.data.countLine.length - 1,thisLine =this.data.countLine[line], num1 = Number( thisLine.firstNum),num2 = Number(thisLine.nextNum),o = thisLine.operator,r=Number( thisLine.result);
        var newCountLine = this.data.countLine;       

        if (!empty(num1) || !empty(num2) || o =='' ){
            return false;
        }else{
            if (o=='+'){
                r=num1 + num2;
            }else if(o == '-'){
                r=num1 - num2;
            }else if(o == '*'){
                r= num1 * num2;
            }else{
                r= num1/num2;
            }
           
            newCountLine[line].result = String(r);
            newCountLine[line].isCounted = true; //当行计算完成
            
            if (this.data.disabled.indexOf(false)<0){
                //已经用完可用数字
                 this.setData({
                    countLine : newCountLine,
                    isFinished:true,
                    modalHidden:false
                })
                 
                if (Number(r) == 24){
                    //结果正确
                   this.setData({
                       isSuccessed:true,
                       'score.successNum':Number(this.data.score.successNum) +1
                    })
                }else{
                    //结果错误
                    this.setData({
                        isSuccessed:false,
                        'score.failNum':Number(this.data.score.failNum) +1
                    })
                }
            }else{
                //计算未完成，生成新一行空的算式列式
                 newCountLine.push({firstNum:'',nextNum:'',isCounted:false});
                 this.setData({isFinished:false,countLine : newCountLine});
            }
        }
    },
    getNextUnit(){        
        this.creatUnit(this.data.grade);
    },
    reCount(){
        this.setData(
            {
                disabled:[false,false,false,false,false,false],
                countLine:[{firstNum:'',operator:'',nextNum:'',result:'',isCounted:false}],
                isFinised:false,
                isSuccessed:false,
                modalHidden:true
            }
        )
    },
    toSkip(){
        this.setData({'score.skipNum':Number(this.data.score.skipNum) +1});
        this.creatUnit(this.data.grade);
    }

});