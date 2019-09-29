<template>
  <div>
    添加商铺
    <van-datetime-picker
      v-model="currentDate"
      type="date"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="getDate"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2019, 10, 1),
      currentDate: new Date()
    };
  },
  methods: {
    getDate(value) {
      console.log(123, value);
      var date = value;
      var m = date.getMonth() + 1;
      var d = date.getDate();
      var y = date.getFullYear();
      console.log(234, m, d, y);
      if (m >= 1 && m <= 9) {
        m = "0" + m;
      }
      if (d >= 0 && d <= 9) {
        d = "0" + d;
      }
      var allDate = y + "-" + m + "-" + d;
      console.log(345, allDate);

    }
  }
};
</script>