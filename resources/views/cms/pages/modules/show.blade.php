@extends('cms.layouts._default')

@section('content')	

<!-- Breadcrumb -->
<ol class="breadcrumb bc-colored bg-theme" id="breadcrumb">
	<li class="breadcrumb-item ">
		<a href="{!!route('cms-dashboard')!!}">Home</a>
	</li>
	<li class="breadcrumb-item">
		<a href="{!!route('cms-modules')!!}">Modulos</a>
	</li>
	<li class="breadcrumb-item active"> {!!(!isset($communicated)) ? 'Novo' : 'Editar'!!}</li>
</ol>

<div class="container">
	<!-- Alerts -->
	@include('cms.layouts._alerts')

	<div class="row">
		<div class="col-lg-12">
			<div class="card ">
				<div class="card-header text-theme">
					<i class="fa fa-edit"></i> Atualizar Configurações do Site
				</div>
				<div class="card-body">
					@if(isset($modules))
					<form class="form-horizontal" method="post" autocomplete="off" action="{!!route('cms-modules-update')!!}">
						@else
						<form class="form-horizontal" method="post" autocomplete="off" action="{!!route('cms-modules-create')!!}">
							@endif  		    
							{{csrf_field()}} 

							<div class="form-group row">
								<div class="col-md-12">
									<label class="form-control-label" for="prependedInput">Titulo do Modulo </label>
									<div class="controls">
										<div class="input-prepend input-group">
											<span class="input-group-addon"><i class="fa fa-pencil-square-o"></i></span>
											<input type="text" class="form-control"  name="module" value="">
										</div>							
									</div>
								</div>
							</div> 
							<hr>
							<div class="form-group">
								<div class="row">
									<div class="col-md-8">
										<div class="strength-container strength-shown">
											<div class="input-group">
												<span class="input-group-addon ">
													<input type="checkbox" id="cb-3">
												</span>
												<input type="text" class="password-input form-control strength-input" name="password" value="">										
											</div>
										</div>
									</div>
									<div class="col-md-4" style="padding-top: 7px;">
										<code>data-autoclose="true"</code>
									</div>
								</div>
							</div>
							<div class="form-actions">
								<button type="submit" class="btn btn-primary">Atualizar Informações</button>
							</div>
						</form>
					</div>
					<!-- end card-body -->
				</div>
				<!-- end card -->
			</div>
			<!--/.col-->
		</div>

	</div>

	@endsection