<template>
  <div class="table" id="table">
    <el-table :data="tableData" style="width: 100%" :default-sort="{order: 'descending'}">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column :render-header="renderHeader" width="300">
        <template slot-scope="scope">
          <div class="goods">
            <div class="images">
              <!-- 展示图片 -->
            </div>
            <div class="title">
              <div class="title_top">{{ scope.row.name}}</div>
              <div class="title_bottom">{{ scope.row.size}}</div>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="商品分类" width="100">
        <template slot-scope="scope">
          <div class="classify">{{ scope.row.classify}}</div>
        </template>
      </el-table-column>
      <el-table-column label="商品价格" width="100" sortable prop="price">
        <template slot-scope="scope">
          <div class="price">￥{{ number_format(scope.row.price)}}</div>
        </template>
      </el-table-column>
      <el-table-column label="销售量" width="100" sortable prop="sales">
        <template slot-scope="scope">
          <div class="sales">{{ scope.row.sales}}</div>
        </template>
      </el-table-column>
      <el-table-column label="状态" width="100" sortable>
        <template slot-scope="scope">
          <div :class="scope.row.status=='上架'?'statusActive':'statusNo'">{{ scope.row.status}}</div>
        </template>
      </el-table-column>
      <el-table-column label="审核状态" width="100">
        <template slot-scope="scope">
          <div class="statusCode">{{ scope.row.statusCode}}</div>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="140">
        <template slot-scope="scope">
          <div class="icon">
            <span class="outline" @click="handleEdit">
              <i class="el-icon-edit-outline"></i>
            </span>
            <span class="printer" @click="handlePrinter">
              <i class="el-icon-printer"></i>
            </span>
            <span class="download" @click="handleDownload">
              <i class="el-icon-download"></i>
            </span>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "iPhone XS apple iPhone XR",
          size: "128G 黑色 4G手机",
          classify: "手机数码",
          price: 8000,
          sales: "3000000",
          status: "上架",
          statusCode: "审核通过"
        },
        {
          name: "iPhone XS apple iPhone XR",
          size: "128G 黑色 4G手机",
          classify: "手机数码",
          price: 6000,
          sales: "4000000",
          status: "未上架",
          statusCode: "审核通过"
        }
      ]
    };
  },
  created() {
    console.log("金额格式化", this.number_format(21));
  },
  mounted(){
    var gqg = document.getElementById('table')
    gqg.onclick = function (event) {
        event = event || window.event;
        var target = event.target;
        // 获取目标元素
        if (target.className == 'gqg_title1') {
            console.log('国企更')
        }else if(target.className == 'gqg_title2'){
          console.log('国企更1')
        }else{
           console.log('国企更2')
        }
    }
    console.log('DOM',gqg)
  },
  methods: {
    handleEdit() {
      console.log("编辑");
    },
    handlePrinter() {
      console.log("打印");
    },
    handleDownload() {
      console.log("下载");
    },
    renderHeader(h, { column, $index }) {
      return (
        <div id="gqg">
          <span class="gqg_title1" style="margin-right:12px;">商品推荐</span>
          <span class="gqg_title2" style="margin-right:12px;">橱窗推荐</span>
          <span class="gqg_title3" style="margin-right:12px;">取消推荐</span>
        </div>
      );
    },
    handleChange(){
      console.log(123)
    },
    number_format(num) {
      num = num.toString().replace(/\$|\,/g, "");
      if (isNaN(num)) {
        num = "0";
      }
      var sign = num == (num = Math.abs(num));
      num = Math.floor(num * 100 + 0.50000000001);
      var cents = num % 100;
      num = Math.floor(num / 100)
        .toString()
        .replace(/\d+/, function(n) {
          // 先提取整数部分
          return n.replace(/(\d)(?=(\d{3})+$)/g, function($1) {
            return $1 + ",";
          });
        });
      if (cents < 10) {
        cents = "0" + cents;
      }
      return (sign ? "" : "-") + num + "." + cents;
    }
  }
};
</script>
<style lang="less" scoped>
.table {
  margin: 2%;
  .goods {
    display: flex;
    .images {
      width: 88px;
      height: 88px;
      background: #f40;
    }
    .title {
      flex: 1;
      margin-left: 16px;
    }
  }
  .statusCode {
    background: #6ad895;
    border-radius: 12.5px;
    width: 68px;
    height: 24px;
    color: #fff;
    line-height: 24px;
    text-align: center;
    font-size: 12px;
  }
  .statusActive {
    color: #868686;
  }
  .statusNo {
    color: #d97979;
  }
  .price {
    color: #ec7151;
  }
  .outline {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin-right: 6px;
  }
  .printer {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin-right: 6px;
  }
  .download {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin-right: 6px;
  }
}
</style>