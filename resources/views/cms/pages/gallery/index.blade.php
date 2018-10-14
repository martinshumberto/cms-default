@extends('cms.layouts._default')

@section('content')	

<!-- Breadcrumb -->
<ol class="breadcrumb bc-colored bg-theme" id="breadcrumb">
	<li class="breadcrumb-item ">
		<a href="{!!route('cms-dashboard')!!}">Home</a>
	</li>
	<li class="breadcrumb-item">
		<a href="{!!route('cms-contents', $module->modules_id)!!}">Página {!!$module->module!!}</a>
	</li>
	<li class="breadcrumb-item active">Galeria - {!!limita_caracteres($content->title, 20)!!}</li>
</ol>


<div class="container">
	<!-- Alerts -->
	@include('cms.layouts._alerts')

	<div class="row">
		<div class="col-md-12">
			<div class="card">
				<div class="card-body">
					<div class="clearfix">
						<div class="float-left">
							<div class="h5 text-dark"><strong>Galeria</strong></div>
						</div>

						<div class="float-right">
							<div class="h3 text-dark"><strong>{!!$total!!}</strong></div>
							<small>Arquivos</small>
						</div>
					</div>
					<!-- end clearfix -->
					<div class="row">

						{!! Form::open(['method' => 'post', 'autocomplete' => 'off', 'route' => ['cms-gallery-upload', $module->modules_id, $content->contents_id] , "id" => "validation", "class" => "was-validated", 'files' => true]) !!}

						<div class="col-md-12">
							<div class="row">
								<div class="col-md-8">
									<div class="controls">
										<div class="input-prepend input-group">
											<span class="input-group-addon"><i class="fa  fa-file-image-o"></i></span>
											{!! Form::file('images[]', ['class' => 'form-control ', 'id' => 'FileUpload', 'multiple' => 'multiple', 'required' => 'required']) !!} 
										</div>							
									</div>
								</div>
								<div class="col-md-4">
									<button class="btn btn-primary" type="submit" style=" margin: 0;">Enviar Arquivos</button>
								</div>
							</div>
						</div>
						{!! Form::close() !!}
					</div>

				</div>
				<!-- end inside row  -->
			</div>
			<div class="gallery">
				
				<div class="col-md-12">
					@foreach($gallery as $value)
					<div class="col-md-3" style="float: left;">

						@php
						if($value->status == 1){
							$color = "success";
						}else{
							$color = "danger";
						}
						@endphp

						<div class="card card-accent-left-{!!$color!!}">
							<div class="card-body">
								{!!img($value->file, 170, 100, true, true, array("class" => "cover"))!!}
								<small class="text-muted">
								<a href="{!!route('cms-gallery-status', array($module->modules_id, $value->contents_id, $value->gallery_id))!!}" title="Desativar"><span class="fa fa-eye fs12 text-{!!$color!!}"></span></a>
								<a href="{!!route('cms-gallery-delete', array($module->modules_id, $value->contents_id, $value->gallery_id))!!}" title="Apagar"><span class="fa fa-trash fs12 text-muted ml10"></span></a>
								</small>
							</div>
						</div>
					</div>
					@endforeach
				</div>
			</div>
			<!-- end card-body -->
		</div>
		<!-- end card -->
	</div>
	<!-- end col -->
</div>
<!-- end row -->
</div>

@endsection 