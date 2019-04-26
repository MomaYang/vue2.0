//实例化vue对象  new Vue({});

new Vue({
	el: "#vue-app",
	data: {
		name: "摹码",
		age: 30,
		x: 0,
		y: 0
	},
	methods: {
		add: function(time){
			this.age += time;
		},
		subtract: function(time){
			this.age -= time;
		},
		updateXY:function(event){
			// console.log(event)
			this.x = event.offsetX;
			this.y = event.offsetY;
		}
	}
});


/*
	el: element 需要获取的元素，一定是html中的根容器元素
	data: 用于数据的存储，对象，数组，字符串，nuber等
	methods: 用于存储各种方法
	data-binding: 给属性绑定对应的值

	this: 指的是实例化vue对象
*/