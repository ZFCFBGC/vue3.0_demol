<template>
  <div class="hello">
    <h6>测试</h6>
    <div id="allmap"></div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data() {
    return {
      offset: 0,
      limit: 20,
      urls: "",
      fil: ""
    };
  },
  created() {
    this.getSystem();
  },
  mounted() {
    this.addressDetail();
  },
  methods: {
    addressDetail() {
      var map = new BMap.Map("allmap");
      var point = new BMap.Point(116.331398, 39.897445);
      map.centerAndZoom(point, 12);
      var geoc = new BMap.Geocoder();
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(
        function(r) {
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            console.log("您的位置：" + r.point.lng + "," + r.point.lat);
            var pt = r.point;
            geoc.getLocation(pt, function(rs) {
              console.log('rs',rs)
              // var addComp = rs.addressComponents;
              // alert(
              //   addComp.province +
              //     ", " +
              //     addComp.city +
              //     ", " +
              //     addComp.district +
              //     ", " +
              //     addComp.street +
              //     ", " +
              //     addComp.streetNumber
              // );
            });
          } else {
            alert("failed" + this.getStatus());
          }
        },
        { enableHighAccuracy: true }
      );
    },
    getSystem() {
      var u = navigator.userAgent;
      var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      if (isAndroid) {
        console.log("我是安卓系统");
      } else if (isiOS) {
        console.log("我是IOS系统");
      }
    }
  }
};
</script>
<style scoped lang="less">
.hello {
  width: 100%;
  margin: 40px;
}
#images {
  display: block;
  border: 1px solid #ccc;
  width: 40px;
  height: 40px;
}
#allmap {
  width: 100px;
  height: 100px;
}
</style>
