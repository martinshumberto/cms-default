@extends('cms.layouts._default')

@section('content')	

<!-- Breadcrumb -->
<ol class="breadcrumb bc-colored bg-theme" id="breadcrumb">
	<li class="breadcrumb-item ">
		<a href="{!!route('cms-dashboard')!!}">Home</a>
	</li>
{{-- 	<li class="breadcrumb-item">
		<a href="#">Layouts</a>
	</li> --}}
	<li class="breadcrumb-item active">Modulos</li>
</ol>



<div class="container">
	<!-- Alerts -->
	@include('cms.layouts._alerts')
	<div class="row">
		<div class="col-md-12">
			<div class="card card-accent-theme">
				<div class="card-body">
					<div class="card-body">
						{!! Form::open(['method' => 'get', 'autocomplete' => 'on', 'route' => ['cms-modules']]) !!}
						<div class="row">

							<div class="form-group col-sm-6">
								{!!Form::text('title', null, ['class' => 'form-control','placeholder' => 'Titulo']) !!}	
							</div>

							<div class="form-group col-sm-6">
								{!!Form::select('status', ['1' => 'Ativo',  '2' => 'Inativo'], null, ['class' => 'form-control', 'placeholder' => "Selecione"]) !!}	
							</div>

						</div>

						<button type="submit" class="btn btn-theme btn-sm"><i class="fa fa-search"></i> Buscar</button>
						<a href="{!!route('cms-modules-create')!!}" class="btn btn-success btn-sm"><i class="fa fa-plus"></i> Novo</a>
						{!! Form::close() !!}
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-12">
			<div class="card card-accent-theme">
				<div class="card-body">
					<h5 class="text-theme">Listagem de Modulos</h5>
					<div class="table-responsive">
						<table class="table">
							<thead>
								<tr>
									<th width="10">ID</th>
									<th>Módulo</th>
									<th width="20">Status</th>
									<th width="20">Editar</th>
									<th width="20">Excluir</th>
								</tr>
							</thead>
							<tbody>
								@foreach($modules as $value)
								<style type="text/css">
								.card .btn{
									margin: 0;
								}
							</style>
							<tr>
								<td>{!!$value->modules_id!!}</td>
								<td><h6>{!!$value->module!!}</h6></td>
								<td>
									@if($value->status == 1)
									<a href="{!!route('cms-modules-status', array($value->modules_id, "desativar"))!!}" class="btn btn-theme ">
										{!!$value->status()!!}
									</a>
									@elseif($value->status == 2)
									<a href="{!!route('cms-modules-status', array($value->modules_id, "ativar"))!!}" class="btn btn-theme ">
										{!!$value->status()!!}
									</a>
									@endif
								</td>
								<td>
									<a href="{!!route('cms-modules-update', $value->modules_id)!!}" class="btn btn-theme ">
										<i class="fa fa-pencil" aria-hidden="true"></i>
									</a>
								</td>
								<td>
									<a href="{!!route('cms-modules-delete', $value->modules_id)!!}" class="btn btn-theme ">
										<i class="fa fa-trash" aria-hidden="true"></i>
									</a>
								</td>
							</tr>
							@endforeach
						</tbody>
					</table>
				</div>
			</div>
			<!-- end card-body -->
		</div>
		<!-- end card -->
	</div>
</div>
</div>

@endsection 