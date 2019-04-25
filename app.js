//实例化vue对象  new Vue({});

new Vue({
	el: "#vue-app",
	data: {
		name: "摹码",
		job: "web开发"
	},
	methods: {
		greet: function(time){
			return 'Good'+time+' '+this.name+'!';
		}
	}
});


/*
	el: element 需要获取的元素，一定是html中的根容器元素
	data: 用于数据的存储，对象，数组，字符串，nuber等
	

	this: 指的是实例化vue对象
*/