<template>
  <div>
    <div class="wrap-content">
      <h1>Page:{{card.title }}</h1>
      <button @click="pushHandler">click me</button>
      <button @click="isOpen">Open modal</button>
    </div>
    <Modal :isOpen="isOpen" :show="show" title="service">
      <h1>{{card.title }}</h1>
      <p>{{card.description }}</p>
    </Modal>
    <Posts></Posts>
  </div>
</template>


<script>
import Modal from "../../components/UI/Modal";
import Posts from "../../components/Posts/Posts";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "ServicesPage",
  methods: {
    pushHandler() {
      this.$router.push("/services");
    },
    ...mapGetters(["getCard"]),
    ...mapMutations(["setVisited"]),
    isOpen() {
      this.show = !this.show;
    },
    loadCard() {
      this.card = this.getCard()(this.$route.params.id);
    }
  },
  data() {
    return {
      show: false,
      card: {}
    };
  },
  components: {
    Modal,
    Posts
  },
  mounted() {
    this.loadCard();
    this.setVisited(this.$route.params.id);
  }
};
</script>

<style>
.wrap-content {
  width: 500px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
}
</style>