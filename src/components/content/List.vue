<template>
  <div id="list">
    <b-container class="about">
      <div class="about-title">
        <h1>Danh sách kiểm định viên</h1>
        <p>
          Thông tin về những kiểm định viên trên hệ thống quản lý an toàn vệ
          sinh lao động lao động
        </p>
      </div>
      <div class="items" v-for="(item, key) in listItems" :key="key">
        <div class="card" >
          <div class="header-items"></div>
          <div class="text-align">
            <div
              class="b-avatar badge-secondary rounded-circle"
              style="width: 6rem; height: 6rem"
            >
              <div class="b-avatar-img">
                <img v-bind:src="item.img" alt="" class="avatar-items" />
              </div>
            </div>
            <h4 class="card-title items-title">{{ item.name }}</h4>
            <b-card-sub-title>{{ item.expr }}</b-card-sub-title>
            <img
              class="avatar-items"
              src="../../assets/icon/icon.png"
              alt=""
              width="46px"
              height="46px"
            />
            <h4 class="card-title">{{ item.number }}</h4>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    listItems: {
      type: Array,
    },
  },
  created() {
    console.log("listItems", this.listItems);
  },
};
</script>

<style>
.text-align {
  text-align: center;
}
</style>