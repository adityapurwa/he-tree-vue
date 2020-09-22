<!-- this is an example -->
<template lang="pug">
div.fourth-case
  h2 Fourth Case
  Tree(:value="treeData" ref="tree" :rootNode="{$droppable: true}" :cloneWhenDrag="true" :allowOutOfBounds="false")
    div(slot-scope="{node, index, path, tree}")
      b(v-if="node.children && node.children.length > 0" @click="tree.toggleFold(node, path)") {{node.$folded ? '+' : '-'}}&nbsp;
      input(type="checkbox" :checked="node.$checked" @change="tree.toggleCheck(node, path)")
      | &nbsp;
      span {{node.text}}

</template>

<script>
import * as hp from 'helper-js'
import Tree from '@/components/Tree.vue'
import fold from '@/plugins/fold.js'
import check from '@/plugins/check.js'
import Draggable from '@/plugins/draggable/Draggable.vue'

const MixedTree = Tree.mixPlugins([fold, check, Draggable])

export default {
  components: {Tree: MixedTree},
  data() {
    return {
      treeData: [
        {text: 'node A', $droppable: false},
        {text: 'node B', $droppable: true},
        {text: 'node C', $droppable: true},
        {text: 'node D', $droppable: true},
        {text: 'node E', $droppable: true},
      ],
    }
  },
  // computed: {},
  // watch: {},
  methods: {},
  // created() {},
  mounted() {
  },
}
</script>
<style>
.fourth-case{
  width: auto;
}
.he-tree .tree-node {
  border: none;
  padding: 12px 10px;
  border-radius: 8px;
}
.he-tree .tree-node:hover{
  background: #eee;
}
.remnant .tree-node{
  background: #f335;
}
</style>
