
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
         countLine:[{firstNum:'',operator:'',nextNum:''}],
         result:[],
         isFinised:false,
         isSuccessed:false,
         modalHidden:true
    },
    onLoad:function(){
       this.creatUnit();
    },
    creatUnit(){
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
                if (resultArr.length == 0){
                   count();
                }else{  
                    answer = unique(resultArr);
                    newArr = str;
                   // return;
                }              
            }
            count(); 
             this.setData({
                numbers: newArr,
                answer:answer,
                disabled:[false,false,false,false,false,false],
                countLine:[{firstNum:'',operator:'',nextNum:''}],
                result:[],
                isFinised:false,
                isSuccessed:false,
                modalHidden:true
            })
            
    },
    
    usetoCount(e){        
        var num = e.target.dataset.num,index = Number(e.target.dataset.index),disStatus=[],line = this.data.countLine.length - 1,newCountLine = this.data.countLine;
        let thisLine = this.data.countLine[line];
        if (thisLine.firstNum && thisLine.nextNum){
            return false;
        }else{
            if (thisLine.firstNum == ""){
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
        var line = this.data.countLine.length - 1,num1 = Number( this.data.countLine[line].firstNum),num2 = Number( this.data.countLine[line].nextNum),o = this.data.countLine[line].operator,r=this.data.result;
        var newCountLine = this.data.countLine;
        

        if (num1 =='' || num2 == '' || o =='' ){
            return false;
        }else{
            if (o=='+'){
                r.push(num1 + num2);
            }else if(o == '-'){
                r.push(num1 - num2);
            }else if(o == '*'){
                r.push( num1 * num2);
            }else{
                r.push( num1/num2);
            }
            newCountLine.push({firstNum:'',operator:'',nextNum:''});   

            this.setData({
                result:r,
                countLine : newCountLine
            })
            
            if (this.data.disabled.indexOf(false)<0){
                this.setData({isFinished:true,modalHidden:false});                        
                if (this.data.result[this.data.result.length-1] == 24){
                   this.setData({isSuccessed:true})
                }else{
                    this.setData({isSuccessed:false})
                }
            }else{
                this.setData({isFinished:false})
            }
        }
    },
    getNextUnit(){        
        this.creatUnit();
    },
    reCount(){
        this.setData(
            {
                disabled:[false,false,false,false,false,false],
                countLine:[{firstNum:'',operator:'',nextNum:''}],
                result:[],
                isFinised:false,
                isSuccessed:false,
                modalHidden:true
            }
        )
    },
    toSkip(){
        this.creatUnit();
    }

});