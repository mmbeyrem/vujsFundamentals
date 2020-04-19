<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>{{ part.description }}</div>
  </div>
</template>
<script>
import createdHookMixin from "../build/created-hook-mixin";

export default {
  name: "PartInfo",
  props: {
    id: {
      type: [Number, String],
      validator(v) {
        return Number.isInteger(Number(v));
      },
      required: true
    },
    partType: {
      type: String,
      required: true
    }
  },
  mixins: [createdHookMixin],

  computed: {
    part() {
      const part = {
        title: this.parts[this.partType].find(p => p.id === this.id).title,
        description: this.parts[this.partType].find(p => p.id === this.id)
          .description
      };
      return {
        title: part.title,
        description: part.description
      };
    }
  }
};
</script>
