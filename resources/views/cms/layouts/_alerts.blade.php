@if (Session::has('alert'))
<div class="row">
	<div class="col-md-12">
		<div class="alert alert-{!!session('alert.code')!!}" role="alert">
			{!! session('alert.text') !!}
		</div>
	</div>
</div>
@endif	