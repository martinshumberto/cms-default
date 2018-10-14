@extends('cms.layouts._default')

@section('content')	

<!-- Breadcrumb -->
<ol class="breadcrumb bc-colored bg-theme" id="breadcrumb">
	<li class="breadcrumb-item ">
		<a href="{!!route('cms-dashboard')!!}">Home</a>
	</li>
	<li class="breadcrumb-item">
		<a href="{!!route('cms-categories')!!}">Categorias</a>
	</li>
	<li class="breadcrumb-item active"> {!!(!isset($categories)) ? 'Novo' : 'Editar'!!}</li>
</ol>

<div class="container">
	<!-- Alerts -->
	@include('cms.layouts._alerts')

	<div class="row">
		<div class="col-lg-12">
			<div class="card ">
				<div class="card-header text-theme">
					<i class="fa fa-edit"></i>{!!(!isset($categories)) ? 'Novo' : 'Editar'!!} Categorias
				</div>
				<div class="card-body">
					@if(isset($categories))
					{!! Form::model($categories, ['route' => ['cms-categories-update', $categories->categories_id], 'method' => 'put']) !!}
					@else
					{!! Form::open(['method' => 'post', 'autocomplete' => 'off', 'route' => ['cms-categories-create']]) !!}
					@endif   		    
					{{csrf_field()}} 



					<div class="form-group row">
						<div class="col-md-12">
							<label class="form-control-label" for="prependedInput">Modulo/Página</label>
							<div class="controls">
								<div class="input-prepend input-group">
									<span class="input-group-addon"><i class="fa fa-th-list"></i></span>

									<select id="modules_id" name="modules_id" class="form-control select2" data-plugin="select2"  required >	
										<option value="">Selecione</option>
										@foreach ($modules as $value)
										<option value="{!! $value->modules_id !!}" @if(isset($categories)) {{   $categories->modules_id == $value->modules_id  ? "selected" : "" }} @endif >{!! $value->module!!}</option>
										@endforeach
									</select>

								</div>							
							</div>
						</div>
					</div>

					<div class="form-group row">
						<div class="col-md-12">
							<label class="form-control-label" for="prependedInput">Titulo da Categoria </label>
							<div class="controls">
								<div class="input-prepend input-group">
									<span class="input-group-addon"><i class="fa fa-pencil-square-o"></i></span>
									{!! Form::text('title', null, ['class' => 'form-control', 'placeholder' => 'Titulo da Categoria ']) !!}
								</div>							
							</div>
						</div>
					</div> 

					<div class="form-group row">
						<div class="col-md-12">
							<label class="form-control-label" for="prependedInput">Sub-Titulo da Categoria </label>
							<div class="controls">
								<div class="input-prepend input-group">
									<span class="input-group-addon"><i class="fa fa-pencil-square-o"></i></span>
									{!! Form::text('subtitle', null, ['class' => 'form-control', 'placeholder' => 'Sub-Titulo da Categoria ']) !!}
								</div>							
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