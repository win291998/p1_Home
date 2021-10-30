<template>
  <div>
    <about :course="todos" />
    <list :listItems="items"/>
  </div>
</template>

<script>
import About from "./content/About.vue";
import List from "./content/List.vue";

export default {
  components: {
    About,
    List,
  },
  data() {
    return {
      todos: [
        {
          title: "Trường đại học công nghệ giao thông vận tải ",
          expr: "Doanh nghiệp tư nhân",
          img: require("../assets/img/anh1.png"),
          city: "Hà Nội",
          phone: "0332768723",
        },
        {
          title: "Trường đại học công nghệ giao thông vận tải",
          expr: "Doanh nghiệp tư nhân",
          img: require("../assets/img/anh2.png"),
          city: "Hà Nội",
          phone: "0332768723",
        },
        {
          title: "Trường đại học công nghệ giao thông vận tải",
          expr: "Doanh nghiệp tư nhân",
          img: require("../assets/img/anh3.png"),
          city: "Hải Phong",
          phone: "0332768723",
        },
        {
          title: "Trường đại học công nghệ giao thông vận tải",
          expr: "Doanh nghiệp tư nhân",
          img: require("../assets/img/anh4.png"),
          city: "Tp HCM",
          phone: "0332768723",
        },
        {
          title: "Trường đại học công nghệ giao thông vận tải",
          expr: "Doanh nghiệp tư nhân",
          img: require("../assets/img/anh5.png"),
          city: "Quảng Nam",
          phone: "0332768723",
        },
        {
          title: "Trường đại học công nghệ giao thông vận tải ",
          expr: "Doanh nghiệp tư nhân",
          img: require("../assets/img/anh6.png"),
          city: "Đà Nẵng",
          phone: "0332768723",
        },
        {
          title: "Trường đại học công nghệ giao thông vận tải",
          expr: "Doanh nghiệp tư nhân",
          img: require("../assets/img/anh5.png"),
          city: "Quảng Nam",
          phone: "0332768723",
        },
        {
          title: "Trường đại học công nghệ giao thông vận tải ",
          expr: "Doanh nghiệp tư nhân",
          img: require("../assets/img/anh6.png"),
          city: "Đà Nẵng",
          phone: "0332768723",
        },
        {
          title: "Trường đại học công nghệ giao thông vận tải",
          expr: "Doanh nghiệp tư nhân",
          img: require("../assets/img/anh5.png"),
          city: "Quảng Nam",
          phone: "0332768723",
        },
        {
          title: "Trường đại học công nghệ giao thông vận tải ",
          expr: "Doanh nghiệp tư nhân",
          img: require("../assets/img/anh6.png"),
          city: "Đà Nẵng",
          phone: "0332768723",
        },
        
      ],
      items: [
        {
          name: "Nguyễn Văn An",
          img:require("../assets/img/avatar.png"),
          expr: "Công ty bất động sản ABC",
          number: "00435",
        },
        {
          name: "Nguyễn Văn An",
          img:require("../assets/img/avatar.png"),
          expr: "Công ty bất động sản ABC",
          number: "00435",
        },
        {
          name: "Nguyễn Văn An",
          img:require("../assets/img/avatar.png"),
          expr: "Công ty bất động sản ABC",
          number: "00435",
        },
        {
          name: "Nguyễn Văn An",
          img:require("../assets/img/avatar.png"),
          expr: "Công ty bất động sản ABC",
          number: "00435",
        },
      ],
    };
  },
};
</script>

<style>
</style>