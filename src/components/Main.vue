
<template>
<div>
    <vueper-slides autoplay :duration="duration">
        <vueper-slide 
        v-for="(slide, i) in slides" 
        :key="i"
        :image="require('../assets/' + slide.img)"
        :title="slide.title" 
        :content="slide.content"
      />
    </vueper-slides>
    <div class="wrap-welc">
    <div class="welc">
      <h1>Welcome to main page</h1>
      <router-link to="/services" class="link">services</router-link>
    </div>
  </div> 
</div>

</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: 'Main',
  props: {
    msg: String
  },
  components: {
    'vueper-slides': VueperSlides,
    'vueper-slide': VueperSlide
  },
    data() {
      return {
        duration: 2000,
        slides: [
            {
            id: 'slide-1',
            img: 'img.jpg',
            title: 'Slide <b style="font-size: 1.3em;color: yellow">#1</b>',
            content: 'Slide title can be HTML.<br>And so d'
            },
            {
            id: 'slide-2',
            img: 'img-2.jpg',
            title: 'Slide <b style="font-size: 1.3em;color: yellow">#2</b>',
            content: 'Slide title can be HTML.<br>And so does the slide content, <span style="font-size: 1.2em;">why not?</span>'
            },
            {
            id: 'slide-3',
            img: 'img-3.jpg',
            title: 'Slide <b style="font-size: 1.3em;color: yellow">#3</b>',
            content: 'Slide title can be HTML.<br>And so does the slide content, <span style="font-size: 1.2em;">why not?</span>'
            },
            // Other slides...
        ]
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
.wrap-welc {
  display: flex;
  height: 300px;
}
.welc{
  width: 600px;
  text-align: center;
  margin: auto;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);

}

.link {
  border: 1px solid #ccc;
  padding: 10px;
  text-decoration: none;
  color: #ccc;
  border-radius: 4px ;
}

.link:hover {
  border: 1px solid green;
  color: green;
}

.vueperslide__title {
    color: #fff;
    font-size: 32px;
    text-shadow: 1px 1px 2px black, 0 0 1em #706565;

}
 .vueperslide__content {
     color: #fff;
     font-size: 28px;
     text-shadow: 1px 1px 2px black, 0 0 1em #706565;
 }

 .vueperslides__bullet .default {
  background-color: transparent;
  border: 1px solid #fff!important;
  border: none;
  box-shadow: none;
  transition: 0.3s;
  width: 16px;
  height: 16px;
}

.vueperslides__bullet--active .default {background-color: #fff;}

.vueperslides__bullet span {
  display: block;
  color: #fff;
  font-size: 10px;
  opacity: 0.8;
}
</style>
