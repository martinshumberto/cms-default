@extends('cms.layouts._default')

@section('content')	

<!-- Breadcrumb -->
<ol class="breadcrumb bc-colored bg-theme" id="breadcrumb">
	<li class="breadcrumb-item ">
		<a href="">Home</a>
	</li>
{{-- 	<li class="breadcrumb-item">
		<a href="#">Layouts</a>
	</li> --}}
	<li class="breadcrumb-item active">Modulos do Site</li>
</ol>

<div class="container">
	<div class="row">
		<div class="col-md-12">
			<div class="card card-accent-theme">
				<div class="card-body">
					<div class="card-body">

						<div class="row">

							<div class="form-group col-sm-6">
								<input type="text" class="form-control" id="city" placeholder="Titulo">
							</div>

							<div class="form-group col-sm-6">
								<select id="select" name="select" class="form-control">
									<option value="0">Status</option>
									<option value="1">Ativo</option>
									<option value="2">Inativo</option>
								</select>
							</div>

						</div>

						<button type="submit" class="btn btn-theme btn-sm"><i class="fa fa-search"></i> Buscar</button>
						<button type="submit" class="btn btn-success btn-sm"><i class="fa fa-plus"></i> Novo</button>
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
									<th>ID</th>
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