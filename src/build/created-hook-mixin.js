import { mapState } from "vuex";


export default {
  beforeMount() {
    this.$store.dispatch("robots/getParts");
  },
  computed: {
    ...mapState("robots", ["parts"])
  }
};
