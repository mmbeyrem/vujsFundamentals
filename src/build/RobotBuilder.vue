<template>
  <div>
    <div class="content">
      <div v-if="selectedRobot && selectedRobot.head" class="preview">
        <CollapsibleSection>
          <div class="preview-content">
            <div class="top-row">
              <img :src="selectedRobot.head.src" />
            </div>
            <div class="middle-row">
              <img :src="selectedRobot.leftArm.src" class="rotate-left" />
              <img :src="selectedRobot.torso.src" />
              <img :src="selectedRobot.rightArm.src" class="rotate-right" />
            </div>
            <div class="bottom-row">
              <img :src="selectedRobot.base.src" />
            </div>
          </div>
          <button class="add-to-cart" @click="AddToCart">Add to cart</button>
        </CollapsibleSection>
      </div>

      <!--:class="SaleClass" -->
    </div>
    <div class="top-row">
      <!--   <div class="top part" :style="HeadBorderStyle">
         <div class="robot-name">
        {{selectedRobot.name}}
        <span class="sale" v-show="selectedRobot.onsale">sale!</span>
      </div>
      </div>-->
      <partSelector
        v-if="parts.heads"
        :parts="parts.heads"
        position="top"
        @partSelected="p => (selectedRobot.head = p)"
      />
    </div>
    <div class="middle-row">
      <partSelector
        v-if="parts.arms"
        :parts="parts.arms"
        position="left"
        @partSelected="p => (selectedRobot.leftArm = p)"
      />
      <partSelector
        v-if="parts.torsos"
        :parts="parts.torsos"
        position="center"
        @partSelected="p => (selectedRobot.torso = p)"
      />
      <partSelector
        v-if="parts.arms"
        :parts="parts.arms"
        position="right"
        @partSelected="p => (selectedRobot.rightArm = p)"
      />
    </div>
    <div class="bottom-row">
      <partSelector
        :parts="parts.bases"
        position="bottom"
        @partSelected="p => (selectedRobot.base = p)"
      />
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import createdHookMixin from "./created-hook-mixin";
import partSelector from "./PartSelector.vue";
import CollapsibleSection from "../shared/CollapsibleSection.vue";

let firstTimeexit = false;
export default {
  name: "RobotBuilder",
  components: { partSelector, CollapsibleSection },
  beforeRouteLeave(to, from, next) {
    debugger;
    if (this.isAddedToCart) next(true);
    if (firstTimeexit) {
      next(true);
    } else {
      next(true);
      firstTimeexit = true;
    }
  },
  mixins: [createdHookMixin],

  data() {
    return {
      cart: [],
      isAddedToCart: false,
      selectedRobot: {
        head: {},
        leftArm: {},
        rightArm: {},
        torso: {},
        base: {}
      }
    };
  },
  computed: {
    SaleClass() {
      return {
        "sale-border": this.parts.heads[this.selectHeadIndex].onSale
      };
    },
    HeadBorderStyle() {
      return {
        border: this.parts.heads[this.selectHeadIndex].onSale
          ? "3px solid red"
          : "3px solid yellow"
      };
    }
  },
  methods: {
    ...mapActions("robots", ["addRobotToCart"]),
    AddToCart() {
      this.isAddedToCart = true;
      let cost = 0;
      cost += this.selectedRobot.head.cost;
      cost += this.selectedRobot.leftArm.cost;
      cost += this.selectedRobot.rightArm.cost;
      cost += this.selectedRobot.torso.cost;
      cost += this.selectedRobot.base.cost;
      this.addRobotToCart({
        ...this.selectedRobot,
        cost
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
}
.part img {
  width: 165px;
}
.top-row {
  display: flex;
  justify-content: space-around;
}
.middle-row {
  display: flex;
  justify-content: center;
}
.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name {
  position: absolute;
  top: -20px;
  align-content: center;
  width: 100%;
}
.sale {
  float: right;
  color: red;
}
.content {
  position: relative;
}
.add-to-cart {
  position: absolute;
  width: 210px;
}
.sale-border {
  border: 8px solid red;
}
.preview {
  position: absolute;
  top: -20px;
  right: 0;
  width: 210px;
  height: 210px;
  padding: 5px;
}
.preview-content {
  border: 1px solid #999;
}
.preview img {
  width: 50px;
  height: 50px;
}
.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
  transform: rotate(-90deg);
}
</style>
