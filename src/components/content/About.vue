<template>
  <b-container fluid="xl" class="about">
    <div class="about-title">
      <h1>Doanh nghiệp</h1>
      <p>
        Thông tin về những doanh nghiệp trên hệ thống quản lý an toàn vệ sinh
        lao động
      </p>
    </div>
    <div class="course" v-for="(todo, index) in courseRender" :key="index" >
      <div class="card course-items">
        <img class="card-img-top" v-bind:src="todo.img" width="350px" alt="" />
        <div class="card-body">
          <h4 class="card-title">
            {{todo.title}}
          </h4>
          <b-card-sub-title> {{ todo.expr }} </b-card-sub-title>
          <b-card-text>
            <div class="d-flex">
              <img src="../../assets/icon/map-pin.png" class="icon-20" alt="" />
              <p>{{ todo.city }}</p>
            </div>
            <div class="d-flex">
              <img
                src="../../assets/icon/phone-black.png"
                class="icon-20"
                alt=""
              />
              <p>{{ todo.phone }}</p>
            </div>
          </b-card-text>
        </div>
      </div>
    </div>
    <div class="button-them">
      <button v-on:click="showAll()" class="btn btn-warning">{{ this.numberRenderCourse === this.course.lenght ?"Ẩn bớt" : "Xem thêm" }}</button>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "About",
  props: {
    course: {
      type: Array,
      
    },
    
  },
  data() {
    return{
      numberRenderCourse: 6,
    }
  },
  methods: {
    showAll(){
      if (this.numberRenderCourse === this.course.lenght){
        this.numberRenderCourse = 6;
      } else {
        this.numberRenderCourse = this.course.lenght
      }
    },
  },
  computed:{
    courseRender(){
      return this.course.slice(0 , this.numberRenderCourse);
    },
  },
};
</script>

<style>
</style>