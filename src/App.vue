<template>
  <div id="app">
    <h3>Container</h3>
    <controls
      :controls="container"
      :configs="containerProps"
      @change="changeContainer"/>
    <h3>Items</h3>
    <controls
      :controls="item"
      :configs="itemProps"
      @change="changeItem"/>
    <p>Container</p>
    <app-container v-bind="container">
      <item
        v-for="(index, value) in 5"
        :key="value"
        v-bind="item"
        >
        <p>Item {{value}}</p>
      </item>
    </app-container>
  </div>
</template>

<script>
export default {
	name: 'app',
	data: () => ({
		containerProps: {
			flexWrap: [null,'nowrap', 'wrap', 'wrap-reverse'],
			flexDirection: [null,'row', 'row-reverse', 'column', 'column-reverse'],
			justifyContent: [null,'flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
			alignItems: [null,'stretch', 'flex-start', 'flex-end', 'flex-center', 'baseline'],
			alignContent: [null,'stretch', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
    },
		container: {
			flexWrap: 'nowrap',
			flexDirection: 'row',
			justifyContent: 'flex-start',
			alignItems: 'stretch',
			alignContent: 'stretch',
    },
    itemProps: {
      flex: [0,1,2],
      flexGrow: [0,1,2],
      flexBasis: ['auto', 0, '10px', '5%'],
      flexShrink: [0,1,2,3, '300px', ],
      alignSelf: ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch']
    },
    item: {
      flex: 1, 
      flexGrow: 0,
      flexBasis: 'auto',
      flexShrink: 1,
      alignSelf: 'auto'
    }
	}),
	components: {
		appContainer: () => import('./components/container.js'),
		item: () => import('./components/item.js'),
		controls: () => import('./components/controls.js'),
  },
  methods: {
    changeContainer(configName, e) {
      this.container[configName] = e.target.value
    },
    changeItem(configName, e) {
      this.item[configName] = e.target.value
    }
  },
};
</script>

<style lang="scss">
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
  .controls {
    display: flex;
    flex-wrap: wrap;
    .control {
      padding: 5px;
    }
  }
	.container {
    margin: 0 auto;
		background-color: #dedede;
		border-radius: 3px;
    display: flex;
    height: 200px;
		.item {
			background-color: aquamarine;
			border-radius: 5px;
			text-align: center;
			font-size: 1.5em;
			margin: 5px;
      flex: 1;
      height: 50px;
      padding: 10px;
		}
	}
}
</style>
