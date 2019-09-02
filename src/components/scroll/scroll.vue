<template>
  <div class="layout">
    <!-- S tab -->
    <div class="tab">
      <div v-for="(item, index) in tabList" :class="['tab-item']">
        <router-link to :class="{'link':index == pageNum}">{{item}}</router-link>
      </div>
    </div>
    <!-- E tab -->

    <!-- S 内容区域 -->
    <div class="content1">
      <!-- S 左侧边栏 -->
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li
            v-for="(item, index) in goodList"
            class="menu-item"
            :class="{'current':currentIndex === index}"
            @click="selectMenu(index, $event)"
            :key="index"
          >
            <span class="text">
              <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>
              {{item.name}}
            </span>
          </li>
        </ul>
      </div>
      <!-- E 左侧边栏 -->

      <!-- S 右侧边栏 -->
      <div class="foods-wrapper" ref="foodWrapper">
        <ul>
          <li v-for="(item,call) in goodList" class="food-list food-list-hook" :key="call">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li
                v-for="(food,inl) in item.foods"
                class="food-item"
                @click="selectFood(food, $event)"
                :key="inl"
              >
                <div class="icon">
                  <img :src="food.icon" alt width="57" />
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}</span>
                    <span class="count">好评{{food.rating}}</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <div class="cartControl-wrapper">
                    <!-- <cartControl :food="food" @increment="incrementTotal"></cartControl> -->
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- E 右侧边栏 -->
    </div>
    <!-- E 内容区域 -->
  </div>
</template>
<script>
import BScroll from "better-scroll";
import arr from "./dom.js";
export default {
  name: "Goods",
  data() {
    return {
      tabList: ["列表", "详情"],
      pageNum: 0,
      listHeight: [],
      scrolly: 0 ,// 滚动处始值
      goodList:[]
    };
  },
  created() {
    console.log("数据有引入吗", arr);
    this.goodList = arr
    // this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染
    this.$nextTick(() => {
      this._initScroll();
      this._calculateHeight();
    });
    this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"];
  },
  computed: {
    currentIndex() {
      //计算到达哪个区域的区间的时候的对应的索引值
      for (let i = 0; i < this.listHeight.length; i++) {
        let height = this.listHeight[i]; //当前menu子块的高度
        let height2 = this.listHeight[i + 1]; //下一个menu子块的高度
        //滚动到底部的时候,height2为undefined,需要考虑这种情况
        //需要确定是在两个menu子块的高度区间
        if (!height2 || (this.scrolly >= height && this.scrolly < height2)) {
          return i; //返回这个menu子块的索引
        }
      }
      return 0;
    }
  },
  methods: {
    //初始化scroll区域
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true //结合BScroll的接口使用,是否将click事件传递,默认被拦截了
      });
      this.foodScroll = new BScroll(this.$refs.foodWrapper, {
        probeType: 3, //结合BScroll的接口使用,3实时派发scroll事件，探针的作用
        click: true
      });
      //结合BScroll的接口使用,监听scroll事件(实时派发的),并获取鼠标坐标，当滚动时能实时暴露出scroll
      this.foodScroll.on("scroll", pos => {
        this.scrolly = Math.abs(Math.round(pos.y)); //滚动坐标会出现负的,并且是小数,所以需要处理一下，实时取得scrollY
      });
    },
    _calculateHeight() {
      let foodList = this.$refs.foodWrapper.getElementsByClassName(
        "food-list-hook"
      ); //获取每一个food的dom对象
      let height = 0;
      this.listHeight.push(height); //初始化第一个高度为0
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i]; //每一个item都是刚才获取的food的每一个dom
        height += item.clientHeight; //主要是为了获取每一个foods内部块的高度
        this.listHeight.push(height);
      }
    },
    selectFood(food, event){
      console.log('1234')
    },
    selectMenu(index, event) {
      if (!event._constructed) {
        //去掉自带的click事件点击，即pc端直接返回
        return;
      }
      // debugger;
      let foodList = this.$refs.foodWrapper.getElementsByClassName(
        "food-list-hook"
      );
      let el = foodList[index];
      //类似jump to的功能,通过这个方法,跳转到指定的dom
      this.foodScroll.scrollToElement(el, 300);
    }
  }
};
</script>
<style lang="less" scoped>
.layout {
  width: 100%;
  .tab {
    width: 100%;
    height: 40px;
    display: flex;
    background-color: skyblue;
    .tab-item {
      flex: 1;
      align-self: center; // 弹性子元素剧中
      text-align: center;
      a {
        color: black;
        text-decoration: none;
        -webkit-tap-highlight-color: rgba(0,0,0,0); 
        &.link {
          color: red;
        }
      }
    }
  }
  .content1 {
    display: flex;
    position: absolute;
    top: 44px;
    bottom: 46px;
    width: 100%;
    overflow: hidden;
    .menu-wrapper {
      width: 120px;
      background: #f3f5f7;
      .menu-item{
        box-sizing: border-box;
        width:120px;
        font-size:14px;
        height: 54px;
        line-height: 54px;
        text-align: center;
      }
      .current{
        position: relative;
        z-index: 10;
        margin-top: -1px;
        background: #fff;
        font-weight: 700;
        color:#f40;
      }
      .icon {
        width: 12px;
          display: inline-block;
          height: 12px;
          vertical-align: center;
          margin-right: 6px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
          &.decrease {
            background-image: url(https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=594559231,2167829292&fm=27&gp=0.jpg);
          }
          &.discount {
            background-image: url(https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3044191397,2911599132&fm=27&gp=0.jpg);
          }
          &.guarantee {
            background-image: url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1944805937,3724010146&fm=27&gp=0.jpg);
          }
          &.invoice {
            background-image: url(https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=147015573,3182587356&fm=27&gp=0.jpg);
          }
          &.special {
            background-image: url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1046983545,2051560208&fm=27&gp=0.jpg);
          }
        }
      
    }
    .foods-wrapper {
      flex: 1;
      .food-list {
        .title {
          padding-left: 14px;
          height: 54px;
          line-height: 54px;
          border-left: 2px solid #d9dde1;
          font-size: 14px;
          color: rgb(147, 153, 159);
          background: #f3f5f7;
        }
        .food-item {
          display: flex;
          margin: 18px;
          padding-bottom: 18px;
          &:after {
            display: block;
            position: absolute;
            left: 0;
            bottom: 0;
            border-top: 1px solid red;
            width: 100%;
            content: "";
          }
          &:last-child {
            &:after {
              display: none;
            }
          }
          .icon {
            flex: 0 0 57px;
            margin-right: 10px;
          }
          .content {
            flex: 1;
            .name {
              margin: 2px 0 8px 0;
              font-size: 14px;
              line-height: 14px;
              height: 14px;
              color: rgb(7, 17, 27);
            }
            .desc,
            .extra {
              font-size: 10px;
              line-height: 10px;
              color: rgb(147, 153, 159);
            }
            .desc {
              margin-bottom: 8px;
              line-height: 12px;
            }
            .extra {
              .count {
                margin-right: 12px;
              }
            }
            .price {
              font-weight: 700px;
              line-height: 24px;
              .now {
                margin-right: 8px;
                font-size: 14px;
                color: rgb(240, 20, 20);
              }
              .old {
                font-size: 10px;
                color: rgb(147, 153, 159);
                text-decoration: line-through;
              }
            }
            .cartControl-wrapper {
              position: absolute;
              right: 0;
              bottom: 12px;
            }
          }
        }
      }
    }
  }
}
</style>