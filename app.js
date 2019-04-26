//实例化vue对象  new Vue({});

new Vue({
	el: "#vue-app",
	data: {
		name: "",
		age: '',
		name2: "",
		age2: ''
	},
	methods: {
		logName: function(){
			// console.log(this.$refs.name.value)
			this.name = this.$refs.name.value;
		},
		logAge: function(){
			// console.log("你正在输入年龄")
			this.age = this.$refs.age.value;
		}
	}
})