@extends('cms.layouts._default')

@section('content')	


<!-- Breadcrumb -->
<div class="page-breadcrumb">
	<div class="row">
		<div class="col-5 align-self-center">
			<h4 class="page-title">Configurações do Site</h4>
		</div>
		<div class="col-7 align-self-center">
			<div class="d-flex align-items-center justify-content-end">
				<nav aria-label="breadcrumb">
					<ol class="breadcrumb">
						<li class="breadcrumb-item">
							<a href="{!!route('cms-dashboard')!!}">Dashboard</a>
						</li>
						<li class="breadcrumb-item active" aria-current="page">Configurações</li>
						<li class="breadcrumb-item active" aria-current="page">Site</li>
					</ol>
				</nav>
			</div>
		</div>
	</div>
</div>

<div class="container-fluid">
	<div class="row">		
		<div class="col-12">
			<div class="card">
				<div class="card-body">
					<h4 class="card-title">Configuraçoes do Site</h4>
					<h6 class="card-subtitle"> Todas as configurações de SEO e tags de Busca</h6>
					
					<div class="col-sm-12 col-xs-12">
						<form class="form-horizontal" method="post" autocomplete="off" action="{!!route('cms-settings-site-update')!!}">
							{{csrf_field()}}
							<div class="input-group mb-3">
								<div class="input-group-prepend">
									<span class="input-group-text" id="basic-addon1"><i class="fa fa-pencil-square-o"></i></span>
								</div>
								<input type="text" class="maxlength-input form-control" data-plugin="maxlength" data-placement="bottom-right-inside" maxlength="65" name="title" value="{!!$site->title!!}">
							</div>
							<div class="input-group mb-3">
								<textarea class="maxlength-textarea form-control" data-plugin="maxlength" data-placement="bottom-right-inside" maxlength="150"
								rows="4" name="description" >{!!$site->description!!}</textarea>
							</div>
							<div class="input-group mb-3">
								<textarea class="maxlength-textarea form-control" data-plugin="maxlength" data-placement="bottom-right-inside" maxlength="200"
								rows="4" placeholder="Palavras Chave" name="keywords">{!!$site->keywords!!}</textarea>
							</div>
							<div class="row">
								<div class="col-lg-6">
									<div class="input-group mb-3">
										<div class="input-group-prepend">
											<span class="input-group-text" id="basic-addon1"><i class="fa fa-envelope" aria-hidden="true"></i></span>
										</div>
										<input class="form-control" size="16" type="text" name="email" value="{!!$site->email!!}" placeholder="Email do Sistema">
									</div>
								</div>
								<div class="col-lg-6">
									<div class="input-group mb-3">
										<div class="input-group-prepend">
											<span class="input-group-text" id="basic-addon1"><i class="fa fa-lock" aria-hidden="true"></i></span>
										</div>
										<input class="form-control" size="16" type="text" name="password_email"  value="{!!$site->password_email!!}" placeholder="Senha do Email">
								</div>
							</div>
							
							<div class="input-group mb-3">
								<div class="input-group-prepend">
									<span class="input-group-text">$</span>
								</div>
								<input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
								<div class="input-group-append">
									<span class="input-group-text">.00</span>
								</div>
							</div>
							<div class="input-group">
								<div class="input-group-prepend">
									<span class="input-group-text">$</span>
								</div>
								<div class="input-group-prepend">
									<span class="input-group-text">0.00</span>
								</div>
								<input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
							</div>
							<!-- form-group -->
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

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
					<form class="form-horizontal" method="post" autocomplete="off" action="{!!route('cms-settings-site-update')!!}">
						{{csrf_field()}} 

						<div class="form-group row">
							<div class="col-md-12">
								<label class="form-control-label" for="prependedInput">Titulo do Site </label>
								<div class="controls">
									<div class="input-prepend input-group">
										<span class="input-group-addon"><i class="fa fa-pencil-square-o"></i></span>
										<input type="text" class="maxlength-input form-control" data-plugin="maxlength" data-placement="bottom-right-inside" maxlength="65" name="title" value="{!!$site->title!!}">
									</div>							
								</div>
							</div>
						</div>  
						<div class="form-group row">
							<div class="col-md-12">
								<label class="form-control-label" for="prependedInput">Descrição do Site </label>
								<div class="controls">
									<div class="input-prepend input-group">
										<span class="input-group-addon"><i class="fa fa-pencil-square-o"></i></span>
										<textarea class="maxlength-textarea form-control" data-plugin="maxlength" data-placement="bottom-right-inside" maxlength="150"
										rows="4" name="description" >{!!$site->description!!}</textarea>
									</div>							
								</div>
							</div>
						</div> 
						<div class="form-group row">
							<div class="col-md-12">
								<label class="form-control-label" for="prependedInput">Palavras Chaves </label>
								<div class="controls">
									<div class="input-prepend input-group">
										<span class="input-group-addon"><i class="fa fa-pencil-square-o"></i></span>
										<textarea class="maxlength-textarea form-control" data-plugin="maxlength" data-placement="bottom-right-inside" maxlength="200"
										rows="4" placeholder="Palavras Chave" name="keywords">{!!$site->keywords!!}</textarea>
									</div>							
								</div>
							</div>
						</div> 

						<hr>
						<div class="form-group row">
							<div class="col-md-6">
								<label class="form-control-label" for="prependedInput">Email </label>
								<div class="controls">
									<div class="input-prepend input-group">
										<span class="input-group-addon"><i class="fa fa-envelope-o"></i></span>
										<input class="form-control" size="16" type="text" name="email" value="{!!$site->email!!}" >
									</div>							
								</div>
							</div>
							<div class="col-md-6">
								<label class="form-control-label" for="prependedInput">Senha Email</label>
								<div class="controls">
									<div class="input-prepend input-group">
										<span class="input-group-addon"><i class="fa fa-unlock-alt"></i></span>
										<input class="form-control" size="16" type="text" name="password_email"  value="{!!$site->password_email!!}">
									</div>							
								</div>
							</div>
						</div>
						<div class="form-group row">
							<div class="col-md-3">
								<label class="form-control-label" for="prependedInput">Telefone </label>
								<div class="controls">
									<div class="input-prepend input-group">
										<span class="input-group-addon"><i class="fa fa-phone"></i></span>
										<input id="phone" class="form-control" size="16" type="text" name="phone" value="{!!$site->phone!!}" >
									</div>							
								</div>
							</div>
							<div class="col-md-5">
								<label class="form-control-label" for="prependedInput">Endereço</label>
								<div class="controls">
									<div class="input-prepend input-group">
										<span class="input-group-addon"><i class="fa fa-road"></i></span>
										<input class="form-control" size="16" type="text" name="address" value="{!!$site->address!!}" >
									</div>							
								</div>
							</div>
							<div class="col-md-4">
								<label class="form-control-label" for="prependedInput">Bairro</label>
								<div class="controls">
									<div class="input-prepend input-group">
										<span class="input-group-addon"><i class="fa fa-thumb-tack"></i></span>
										<input class="form-control" size="16" type="text" name="district" value="{!!$site->district!!}" >
									</div>							
								</div>
							</div>
						</div>
						<div class="form-group row">
							<div class="col-md-4">
								<label class="form-control-label" for="prependedInput">Cep </label>
								<div class="controls">
									<div class="input-prepend input-group">
										<span class="input-group-addon"><i class="fa fa-map-marker"></i></span>
										<input id="phone" class="form-control" size="16" type="text" name="zip_code" value="{!!$site->zip_code!!}" >
									</div>							
								</div>
							</div>
							<div class="col-md-4">
								<label class="form-control-label" for="prependedInput">Estado</label>
								<div class="controls">
									<div class="input-prepend input-group">
										<span class="input-group-addon"><i class="fa fa-home"></i></span>
										
										<select id="state_select" name="states_id" class="form-control select2" data-plugin="select2">			
											@foreach($states as $value)								
											<option value="{!!$value->states_id!!}" @if($site->states_id == $value->states_id) selected="selected" @endif >
												{!!$value->name!!}
											</option>
											@endforeach
										</select>

									</div>							
								</div>
							</div>
							<div class="col-md-4">
								<label class="form-control-label" for="prependedInput">Cidade</label>
								<div class="controls">
									<div class="input-prepend input-group">
										<span class="input-group-addon"><i class="fa fa-home"></i></span>
										@if($site->cities_id == "")
										<select id="cities_select" name="cities_id" class="form-control select2" data-plugin="select2">			
											<option selected="selected" disabled="disabled">Selecione um Estado</option>
										</select>
										@else

										<select id="cities_select" name="cities_id" class="form-control select2" data-plugin="select2">	
											@foreach($cities as $value)		
											<option value="{!!$value->cities_id!!}" @if($site->cities_id == $value->cities_id) selected="selected" @endif >
												{!!$value->name!!}
											</option>
											@endforeach
										</select>										
										@endif
									</div>							
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