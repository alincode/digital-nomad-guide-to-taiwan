var app = new Vue({
  el: '#app',
  data: {
    infos: []
  },
  methods: {
    init: function (event) {
      let randomNum = new Date().getTime()
      var url = location.href + 'data.json?v=' + randomNum;
      fetch(url).then(function (response) {
        return response.json()
      }).then(function (jsonData) {
        app.infos = jsonData;
        setTimeout(function(){ $('.list-group :first').click(); }, 0);
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