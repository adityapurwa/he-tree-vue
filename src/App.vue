<!-- this is an example -->
<template lang="pug">
#app
    FourthCase.mr
</template>

<script>
import BaseTree from '@/examples/Base'
import NodeBackTree from '@/examples/NodeBack'
import ThirdCase from '@/examples/ThirdCase.vue'
import DragTransition from '@/examples/DragTransition.vue'
import InScrollBox from '@/examples/InScrollBox.vue'
import CustomTrigger from '@/examples/CustomTrigger.vue'
import RTLTree from '@/examples/RTLTree.vue'
import FourthCase from "@/examples/FourthCase";

export default {
  components: {
    FourthCase, BaseTree, NodeBackTree, ThirdCase, DragTransition, InScrollBox, CustomTrigger, RTLTree,
    // DraggableProTree: () => import('@/examples/DraggablePro'),
  },
  // data() {
  //   return {}
  // },
  // computed: {},
  // watch: {},
  // methods: {},
  // created() {},
  // mounted() {},
}
</script>

<style>

</style>
