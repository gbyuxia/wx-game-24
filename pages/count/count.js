var util = require('../../utils/util.js');
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
        this.creatUnit();
    },
    creatUnit(){
            let g = this.data.grade, newData = util.count(g), beginDate = new Date().getTime();
            if(newData){
                this.setData({
                    numbers: newData.nums,
                    answer:newData.answer,
                    disabled:[false,false,false,false,false,false],
                    countLine:[{firstNum:'',operator:'',nextNum:'',result:'',isCounted:false}],               
                    isFinised:false,
                    isSuccessed:false,
                    modalHidden:true,
                    'score.gameIndex':this.data.score.gameIndex +1,
                    beginT:beginDate
                })
            }else{
                this.creatUnit();
            }            
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
            if (!util.empty(thisLine.firstNum)){
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

        if (!util.empty(num1) || !util.empty(num2) || o =='' ){
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
                let useTime = Math.floor((new Date().getTime() - this.data.beginT)/1000),useTimeTxt='';
                if (useTime >=60){
                    useTimeTxt +=parseInt(useTime/60) + '分'+ (useTime % 60) +'秒'
                }else{
                    useTimeTxt = useTime +'秒';
                }          
                if (Number(r) == 24){
                    //结果正确
                   this.setData({
                       countLine : newCountLine,
                       isFinished:true,
                       modalHidden:false,
                       isSuccessed:true,
                       'score.successNum':Number(this.data.score.successNum) +1,
                       thisUnitTime:useTimeTxt
                    })
                }else{
                    //结果错误
                    this.setData({
                        countLine : newCountLine,
                        isFinished:true,
                        modalHidden:false,
                        isSuccessed:false,
                        'score.failNum':Number(this.data.score.failNum) +1,
                        thisUnitTime:useTimeTxt
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
        this.creatUnit();
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
        this.creatUnit();
    }

});