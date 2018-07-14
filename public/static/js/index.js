$(function(){
  $(".news").bootstrapNews({
		newsPerPage: 1,
		autoplay: true,
		pauseOnHover: true,
		navigation: false,
		direction: 'up',
		newsTickerInterval: 2500,
		onToDo: function () {
		}
	})
})