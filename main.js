var _ = require('lodash')

var app = new Vue({
  el: '#app',
  data: {
    infos: []
  },
  methods: {
    init: function (event) {
      let randomNum = new Date().getTime()
      var url = 'https://alincode.github.io/digital-nomad-guide-to-taiwan/data.json?v=' + randomNum;
      // var url = 'http://127.0.0.1:8080/data.json';
      fetch(url).then(function (response) {
        return response.json()
      }).then(function (jsonData) {
        app.infos = jsonData;
      }).catch(function (err) { });
    },
    switchContent: function (event) {
      var id = event.target.id;
      // console.log(id);
      // tab
      $('.list-group .active').removeClass('active');
      $(this).addClass('active');

      // content
      $('.tab-pane').hide();
      $('[aria-labelledby=' + id + ']').show();
    }
  }
});
app.init();