var data = {
    title: 'The vue js instance',
    showParagraph: false
}



var vm1 = new Vue({
    
    data: data,
    methods: {
      show: function() {
        this.showParagraph = true;
        this.updateTitle('The VueJS Instance (Updated)');
        this.$refs.myButton.innerText = 'Test'
      },
      updateTitle: function(title) {
        this.title = title;
      }
    },
    computed: {
      lowercaseTitle: function() {
        return this.title.toLowerCase();
      }
    },
    watch: {
      title: function(value) {
        alert('Title changed, new value: ' + value);
      }
    }
  });

vm1.$mount('#app1');
  


console.log(vm1.$data === data)
vm1.$refs.heading.innerText = 'Something else'
setTimeout(function() {
    vm1.title = 'change by title',
    vm1.show();
    });
   


var vm2 = new Vue({
 	el:'#app2',
    data: {
      title: 'The VueJS Instance number 2'
    },
    methods: {
		onChange: function() {
		vm1.title = 'Changed'
        }
    }
 })

var vm3 = new Vue({
    template: '<h1>Hello</h1>'
})

vm3.$mount();

document.getElementById('app3').appendChild(vm3.$el)