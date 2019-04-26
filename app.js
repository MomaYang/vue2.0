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
		//怎样拿到当前鼠标的值，在js当中有这个一样值event
		updateXY:function(event){
			// console.log(event)
			this.x = event.offsetX;
			this.y = event.offsetY;
		},
		stopMoving: function(event){
			// js阻止事件冒泡
			event.stopPropagation();
		},
		alert: function(){
			alert("hello world!")
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