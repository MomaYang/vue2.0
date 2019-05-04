//实例化vue对象  new Vue({});

new Vue({
	el: "#vue-app",
	data: {
		a: 0,
		b: 0,
		age: 20
	},
	methods: {
		// addToA: function(){
		// 	console.log("add to a");
		// 	return this.a + this.age;
		// },
		// addToB: function(){
		// 	console.log("add to b");
		// 	return this.b + this.age;
		// }
	},
	computed: {
		addToA: function(){
            console.log('addToA');
            return this.a + this.age;
        },
        addToB: function(){
            console.log('addToB');
            return this.b + this.age;
        }
	}
})