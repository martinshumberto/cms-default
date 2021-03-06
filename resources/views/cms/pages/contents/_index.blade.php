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
	<li class="breadcrumb-item active">Página {!!$module->module!!}</li>
</ol>



<div class="container">
	<!-- Alerts -->
	@include('cms.layouts._alerts')
	<div class="row">
		<div class="col-md-12">
			<div class="card card-accent-theme">
				<div class="card-body">
					<div class="card-body">
						{!! Form::open(['method' => 'get', 'autocomplete' => 'on', 'route' => ['cms-contents', $module->modules_id]]) !!}
						<div class="row">

							<div class="form-group col-sm-6">
								{!!Form::text('title', null, ['class' => 'form-control','placeholder' => 'Titulo']) !!}	
							</div>

							<div class="form-group col-sm-6">
								{!!Form::select('status', ['1' => 'Ativo',  '2' => 'Inativo'], null, ['class' => 'form-control', 'placeholder' => "Selecione"]) !!}	
							</div>

						</div>

						<button type="submit" class="btn btn-theme btn-sm"><i class="fa fa-search"></i> Buscar</button>
						<a href="{!!route('cms-contents-create', $module->modules_id)!!}" class="btn btn-success btn-sm"><i class="fa fa-plus"></i> Novo</a>
						{!! Form::close() !!}
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-12">
			<div class="card card-accent-theme">
				<div class="card-body">
					<h5 class="text-theme">Listagem de Conteudo</h5>
					<div class="table-responsive">
						<table class="table">
							<thead>
								<tr>
									<th width="10">ID</th>

									@if(!empty($module->title))
									<th>{!!$module->title!!}</th>
									@endif

									@if(!empty($module->category))
									<th>{!!$module->category!!}</th>
									@endif

									<th>Cadastrado em</th>
									
									@if(!empty($module->image_gallery))
									<th>Fotos</th>
									@endif

									@if(!empty($module->file_gallery))
									<th>Arquivos</th>
									@endif

									<th width="20">Status</th>
									<th width="20">Editar</th>
									<th width="20">Excluir</th>
								</tr>
							</thead>
							<tbody>
								@foreach($contents as $value)
								<style type="text/css">
								.card .btn{
									margin: 0;
								}
							</style>
							<tr>
								<td>{!!$value->contents_id!!}</td>

								@if(!empty($module->title))
								<td>{!!limita_caracteres($value->title, 60)!!}</td>
								@endif

								@if(!empty($module->category))
								<td>{!!$value->categorie->title!!}</td>
								@endif

								<td>
									<i class="fa fa-calendar-o" aria-hidden="true"></i> {!!extractDate($value->created_at)!!} às 
									<i class="fa fa-clock-o" aria-hidden="true"></i> {!!extrateHour($value->created_at)!!}
								</td>	

								@if(!empty($module->image_gallery))							
								<td>
									<a href="{!!route('cms-gallery',  array($module->modules_id, $value->contents_id))!!}" class="btn btn-theme ">
										<i class="fa fa-photo" aria-hidden="true"></i>
									</a>
								</td>
								@endif

								@if(!empty($module->file_gallery))									
								<td>
									<a href="{!!route('cms-contents-update',  array($module->modules_id, $value->contents_id))!!}" class="btn btn-theme ">
										<i class="fa fa-file-o" aria-hidden="true"></i>
									</a>
								</td>
								@endif

								<td>
									@if($value->status == 1)
									<a href="{!!route('cms-contents-status', array($module->modules_id , $value->contents_id, "desativar"))!!}" class="btn btn-theme ">
										{!!$value->status()!!}
									</a>
									@elseif($value->status == 2)
									<a href="{!!route('cms-contents-status', array($module->modules_id , $value->contents_id, "ativar"))!!}" class="btn btn-theme ">
										{!!$value->status()!!}
									</a>
									@endif
								</td>
								<td>
									<a href="{!!route('cms-contents-update',  array($module->modules_id, $value->contents_id))!!}" class="btn btn-theme ">
										<i class="fa fa-pencil" aria-hidden="true"></i>
									</a>
								</td>
								<td>
									<a href="{!!route('cms-contents-delete', array($module->modules_id, $value->contents_id))!!}" class="btn btn-theme ">
										<i class="fa fa-trash" aria-hidden="true"></i>
									</a>
								</td>
							</tr>
							@endforeach
						</tbody>
					</table>
				</div>
				{!!$contents->appends(Request::input())->render()!!}
				
			</div>
			<!-- end card-body -->
		</div>
		<!-- end card -->
	</div>
</div>
</div>

@endsection 