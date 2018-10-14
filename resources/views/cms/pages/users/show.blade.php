@extends('cms.layouts._default')

@section('content')	

<!-- Breadcrumb -->
<ol class="breadcrumb bc-colored bg-theme" id="breadcrumb">
	<li class="breadcrumb-item ">
		<a href="{!!route('cms-dashboard')!!}">Home</a>
	</li>
	<li class="breadcrumb-item">
		<a href="{!!route('cms-users')!!}">Usuários</a>
	</li>
	<li class="breadcrumb-item active"> {!!(!isset($users)) ? 'Novo' : 'Editar'!!}</li>
</ol>

<div class="container">
	<!-- Alerts -->
	@include('cms.layouts._alerts')

	<div class="row">
		<div class="col-lg-12">
			<div class="card ">
				<div class="card-header text-theme">
					<i class="fa fa-edit"></i>{!!(!isset($users)) ? 'Novo' : 'Editar'!!} Usuário
				</div>
				<div class="card-body">
					@if(isset($users))
					{!! Form::model($users, ['route' => ['cms-users-update', $users->users_id], 'method' => 'put', 'files' => true]) !!}
					@else
					{!! Form::open(['method' => 'post', 'autocomplete' => 'off', 'route' => ['cms-users-create'], 'files' => true]) !!}
					@endif   		    
					{{csrf_field()}} 


					<div class="form-group row">
						<div class="col-md-6">
							<label class="form-control-label" for="prependedInput">Nome </label>
							<div class="controls">
								<div class="input-prepend input-group">
									<span class="input-group-addon"><i class="fa fa-pencil-square-o"></i></span>
									{!! Form::text('first_name', null, ['class' => 'form-control', 'placeholder' => 'Primeiro Nome ']) !!}
								</div>							
							</div>
						</div>
						<div class="col-md-6">
							<label class="form-control-label" for="prependedInput">Sobrenome </label>
							<div class="controls">
								<div class="input-prepend input-group">
									<span class="input-group-addon"><i class="fa fa-pencil-square-o"></i></span>
									{!! Form::text('last_name', null, ['class' => 'form-control', 'placeholder' => 'Sobrenome ']) !!}
								</div>							
							</div>
						</div>
					</div> 

					<div class="form-group row">
						<div class="col-md-6">
							<label class="form-control-label" for="prependedInput">Email </label>
							<div class="controls">
								<div class="input-prepend input-group">
									<span class="input-group-addon"><i class="fa fa-envelope-o"></i></span>
									{!! Form::text('email', null, ['class' => 'form-control', 'placeholder' => 'Email ', 'autocomplete' => 'off ']) !!}
								</div>							
							</div>
						</div>
						<div class="col-md-6">
							<label class="form-control-label" for="prependedInput">Senha </label>
							<div class="controls">
								<div class="input-prepend input-group">
									{!! Form::password('password_input', ['class' => 'form-control password-input', 'placeholder' => 'Senha ', 'autocomplete' => 'off ']) !!}
								</div>							
							</div>
						</div>
					</div> 

					<div class="form-group row">
						<div class="col-md-6">
							<label class="form-control-label" for="prependedInput">Data de Nascimento</label>
							<div class="controls">
								<div class="input-prepend input-group">									
									<div class="input-group " >
										{!! Form::text('birth', null, ['class' => 'form-control datepicker']) !!}
										<div class="input-group-addon">
											<span class="mdi mdi-calendar"></span>
										</div>
									</div>
								</div>							
							</div>
						</div>
						<div class="col-md-6">
							<label class="form-control-label" for="prependedInput">Nivel </label>
							<div class="controls">
								<div class="input-prepend input-group">
									<span class="input-group-addon"><i class="fa fa-check"></i></span>
									{!!Form::select('type', ['1' => 'Administrador do Sitema',  '2' => 'Adminsitrador do Site',  '3' => 'Usuário do Site'], null, ['placeholder' => "Selecione", 'class' => 'form-control select2', "required" => "required"]) !!}	
								</div>							
							</div>
						</div>
					</div> 

					<div class="form-group row">						
						<div class="col-md-12">
							<label class="form-control-label" for="prependedInput">Foto de Perfil </label>
							<div class="controls">
								<div class="input-prepend input-group">
									<span class="input-group-addon"><i class="fa  fa-file-image-o"></i></span>
									{!! Form::file('photo_profile', ['class' => 'form-control ', 'id' => 'FileUpload']) !!} 
								</div>							
							</div>
						</div>
						<div class="col-md-12">
							<div class="controls tumbs-preview">
								<div id="PreviewPicture" style="display: none;"></div>
								@if(!empty($users->photo))
								{!!img($users->photo, 350, 200, true, true, array("class" => "cover"))!!}
								@endif
							</div>
						</div>
					</div>					
					<hr>
					<div class="form-actions">
						<button type="submit" class="btn btn-primary">Salvar</button>
					</div>
					{!! Form::close() !!}
				</div>
				<!-- end card-body -->
			</div>
			<!-- end card -->
		</div>
		<!--/.col-->
	</div>

</div>

@endsection