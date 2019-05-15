<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <graph-flow :actionList="actionList"
                :funcList="funcList"
                :accountList="accountList"
                :workflowList="workflowList"
                @saveData="saveData"></graph-flow>
  </div>
</template>

<script>
  import GraphFlow from '@/components/GraphFlow'

  export default {
    name: 'graph',
    data() {
      return {
        msg: 'G6',
        actionList: [],
        funcList: [],
        accountList: [],
        workflowList: [],
      }
    },
    methods: {
      saveData(source, type) {
        console.log(source);
        console.log(type);
      }
    },
    components: {GraphFlow}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
