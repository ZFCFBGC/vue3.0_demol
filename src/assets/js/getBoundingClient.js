const getBoundingClientRect=(ele) => {
  // 该方法是计算当前元素距离当前视口的距离，所以需要得到页面的滚动距离
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
 // 如果浏览器支持该方法
      if (ele.getBoundingClientRect) {
          if (typeof arguments.callee.offset !== 'number') {
         //不同浏览器中，元素的默认位置不同。为了统一起见，需要新创建一个元素
              var temp = document.createElement('div');
              temp.style.cssText = "position:absolute;top:0;left:0";
              document.body.appendChild(temp);
              arguments.callee.offset = -temp.getBoundingClientRect().top - scrollTop;
              document.body.removeChild(temp);
              temp = null;
              console.log(arguments.callee.offset);
          }
          var rect = ele.getBoundingClientRect();
          var offset = arguments.callee.offset;
          console.log(offset,rect.top);
          return {
              left: rect.left + offset,
              right: rect.right + offset,
              top: rect.top + offset,
              bottom: rect.bottom + offset
          }
      } else {
      //当前浏览器不支持该方法
          var actualLeft = getElementLeft(ele);
          var actualTop = getElementTop(ele);

          return {
              left: actualLeft - scrollLeft,
              right: actualLeft + offsetWidth - scrollLeft,
              top: actualTop - scrollTop,
              bottom: actualTop + offsetHeight - scrollTop
          }
      }
  }
//需要使用offsetLeft，offsetTop方法。需要明确的是这两个方法都是当前元素相对于其父元素的位置，所以要得到相对于页面的距离需要循环计算。
  function getElementLeft(ele) {
      var actualLeft = ele.offsetLeft;
      var current = ele.offsetParent;
      // 如果当前元素不是根元素
      while (current !== null) {
          actualLeft += current.offsetLeft;
          current = current.offsetParent;
      }
      return actualLeft;
  }

  function getElementTop(ele) {
      var actualTop = ele.offsetTop;
      var current = ele.offsetParent;
      while (current !== null) {
          actualTop += current.offsetTop;
          current = current.offsetParent;
      }
      return actualTop;
  }
export default getBoundingClientRect