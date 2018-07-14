$(function(){
	$('#phone').keyup(function(){
		let valider = document.getElementById('phone').validity.valid
		if(valider){
			$('.getcode').attr('disabled',false).addClass('btn-primary')
		}else{
			$('.getcode').attr('disabled',true).removeClass('btn-primary')
		}
	})
})