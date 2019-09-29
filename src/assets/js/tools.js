/**
 * 日期转换
 * @param {*Date} date 传入时间对象 ymd symbol 年月日连接符号
 * @param {*Boolean} ymd  是否只显示年月日
 * @param {*String} symbol  年月日连接符号
 */
var formatTime = (date, ymd, symbol, chinese) => {
  var _symbol = '-'
  if (symbol) {
    _symbol = symbol
  }
  var formatNumber = (n) => {
    n = n.toString()
    return n[1] ? n : '0' + n
  }

  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  if (ymd) {
	  if(chinese) {
		  return year + '年' + month + '月' + day + '日'
	  } else {
		  return [year, month, day].map(formatNumber).join(_symbol) 
	  }	  
  } else {
    return [year, month, day].map(formatNumber).join(_symbol) + ' ' + [hour, minute, second].map(formatNumber).join(':')
  }
}
/**
 * 日期转换英文版
 * @param {*Date} date 传入时间对象 ymd symbol 年月日连接符号
 * @param {*Boolean} ymd  是否只显示年月日
 * @param {*String} symbol  年月日连接符号
 */
var formatEnglishTime = (date) => {
	  var formatNumber = (n) => {
	    n = n.toString()
	    return n[1] ? n : '0' + n
	  }

	  var year = date.getFullYear()
	  var month = date.getMonth() + 1
	  var englishMonth;
	  switch (month) {
		case 1:
			englishMonth='Jan'
			break;
		case 2:
			englishMonth='Feb'
			break;
		case 3:
			englishMonth='Mar'
			break;
		case 4:
			englishMonth='Apr'
			break;
		case 5:
			englishMonth='May'
			break;
		case 6:
			englishMonth='June'
			break;
		case 7:
			englishMonth='July'
			break;
		case 8:
			englishMonth='Aug'
			break;
		case 9:
			englishMonth='Sep'
			break;
		case 10:
			englishMonth='Oct'
			break;
		case 11:
			englishMonth='Nov'
			break;
		case 12:
			englishMonth='Dec'
			break;
		default:
			break;
	  }
	  var day = date.getDate()
	  var week = date.getDay()
	  var englishWeek;
	  switch (week) {
	  	case 1:
		  	englishWeek='Monday'
			break;
		case 2:
			englishWeek='Tuesday'
			break;
		case 3:
			englishWeek='Wednesday'
			break;
		case 4:
			englishWeek='Thursday'
			break;
		case 5:
			englishWeek='Friday'
			break;
		case 6:
			englishWeek='Saturday'
			break;
		case 0:
			englishWeek='Sunday'
			break;
	
		default:
			break;
	  }
	  var hour = date.getHours()
	  var minute = date.getMinutes()
	  var second = date.getSeconds()
	  var englishDay;
	  if(hour>=0&&hour<=12){
		  englishDay='AM'
	  }else{
		  englishDay='PM'
	  }
	  return [hour, minute, second].map(formatNumber).join(':')+' '+englishDay+' on'+' '+englishWeek+','+' '+formatNumber(day)+' '+englishMonth+' '+year
	}
/**
 * 判断机型
 * retrue 是否加顶部适配div
 */
var getSystem = () => {
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	if (isiOS) {
		return true	
	} else {
		return false
	}
	
}
/**
 * 电话号码正则
 * @param {*String} e 传入号码
 */
var phonevalid = (e) => {
  var pattern = /^1[34578]\d{9}$/
  return pattern.test(e)
}
/**
 * 只能输入数字
 * @param {*String} value  输入
 */
var validNumber = (value) => {
  return value.replace(/[^\d]/g, '')
}
/**
 * 去空
 * @param {*String} e 输入
 */
var trimvalid = (e) => {
  return e.replace(/(^\s*)|(\s*$)/g, '')
}
/**
 * 计算2点直线距离
 * @param {*Number} lat1
 * @param {*Number} lng1
 * @param {*Number} lat2
 * @param {*Number} lng2
 */
var getDistance = (lat1, lng1, lat2, lng2) => {
  var rad1 = (lat1 * Math.PI) / 180.0
  var rad2 = (lat2 * Math.PI) / 180.0
  var a = rad1 - rad2
  var b = (lng1 * Math.PI) / 180.0 - (lng2 * Math.PI) / 180.0
  var r = 6378137
  return Math.ceil(r * 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(rad1) * Math.cos(rad2) * Math.pow(Math.sin(b / 2), 2))))
}

	/**
	 * 将金额进行千位分隔
	 * @param {num} num 金额
	 */
	var number_format= (num) => {
	    num = num.toString().replace(/\$|\,/g, '');
	    if (isNaN(num)) {
	        num = '0';
	    }
	    var sign = (num == (num = Math.abs(num)));
	    num = Math.floor(num * 100 + 0.50000000001);
	    var cents = num % 100;
	    num = Math.floor(num / 100).toString().replace(/\d+/, function (n) { // 先提取整数部分
	        return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
	            return $1 + ',';
	        });
	    });
	    if (cents < 10) {
	        cents = '0' + cents;
	    }
	    return (((sign) ? '' : '-') + num + '.' + cents);
	}
/**
 * 格式化号码
 * @param {*str} str 必须字符串，number类型太长会出问题 
 * @param {*number} length  隐藏的*号长度
 * @param {*number} fromBegin 第几位开始
 * @param {*string} mask  隐藏符号
 */
var replaceChars = (str,length,fromBegin,mask)=>{
	mask = mask ? mask : '*';
	var replacement = '';
	if(length>3){
		replacement='***'
	}else{
		for(var i=0; i<length; i++){
			 replacement += mask;
		}
	}
	if(fromBegin){
		return str1.substring(0,fromBegin) + replacement + str1.substring(length+fromBegin)
	} else {
		return str1.substring(0,3) + replacement + str1.substring(length+3)
	}
	
}
// 利用getBoundingClientRect来写一个获取html元素相对于视窗的位置集合的方法
// var getclient = (obj)=>{
// 	var xy = obj.getBoundingClientRect()
// 	var top = xy.top-document.documentElement.clientTop+document.documentElement.scrollTop
// }
export default {
  phonevalid,
  validNumber,
  trimvalid,
  getDistance,
  getSystem,
  formatTime,
  number_format,
  formatEnglishTime
}