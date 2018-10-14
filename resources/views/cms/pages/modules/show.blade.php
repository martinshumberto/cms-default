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
	<li class="breadcrumb-item active"> {!!(!isset($modules)) ? 'Novo' : 'Editar'!!}</li>
</ol>

<div class="container">
	<!-- Alerts -->
	@include('cms.layouts._alerts')

	<div class="row">
		<div class="col-lg-12">
			<div class="card ">
				<div class="card-header text-theme">
					<i class="fa fa-edit"></i>{!!(!isset($modules)) ? 'Novo' : 'Editar'!!} Modulos
				</div>
				<div class="card-body">
					@if(isset($modules))
					{!! Form::model($modules, ['route' => ['cms-modules-update', $modules->modules_id], 'method' => 'put']) !!}
					@else
					{!! Form::open(['method' => 'post', 'autocomplete' => 'off', 'route' => ['cms-modules-create']]) !!}
					@endif   		    
					{{csrf_field()}} 



					<div class="form-group row">
						<div class="col-md-12">
							<label class="form-control-label" for="prependedInput">Titulo do Modulo </label>
							<div class="controls">
								<div class="input-prepend input-group">
									<span class="input-group-addon"><i class="fa fa-pencil-square-o"></i></span>
									{!! Form::text('module', null, ['class' => 'form-control', 'placeholder' => 'Titulo do Modulo ']) !!}
								</div>							
							</div>
						</div>
					</div> 
					<hr>
					<h5 class="text-theme">Elementos do Módulo</h5>
					<div class="form-group">
						<div class="row">
							<div class="col-md-8">
								<div class="strength-container strength-shown">
									<div class="input-group">
										<span class="input-group-addon ">
											{!! Form::checkbox('title-checkbox', '1', isset($modules->title) ? true : false, ['class' => 'ckt']) !!}
										</span>
										{!! Form::text('title', null, ['class' => 'form-control', 'placeholder' => 'Titulo']) !!}
									</div>
								</div>
							</div>
							<div class="col-md-4" style="padding-top: 10px;">
								<code>Text: Título do Registro</code>
							</div>
						</div>
					</div>
					<div class="form-group">								
						<div class="row">
							<div class="col-md-8">
								<div class="strength-container strength-shown">
									<div class="input-group">
										<span class="input-group-addon ">
											{!! Form::checkbox('subtitle-checkbox', '1', isset($modules->subtitle) ? true : false, ['class' => 'ckt']) !!}
										</span>
										{!! Form::text('subtitle', null,  ['class' => 'form-control', 'placeholder' => 'Sub-Titulo' ]) !!}
									</div>
								</div>
							</div>
							<div class="col-md-4" style="padding-top: 10px;">
								<code>Text: Sub-Título do Registro</code>
							</div>
						</div>
					</div>
					<div class="form-group">								
						<div class="row">
							<div class="col-md-8">
								<div class="strength-container strength-shown">
									<div class="input-group">
										<span class="input-group-addon ">
											{!! Form::checkbox('featured-checkbox', '1', isset($modules->featured) ? true : false, ['class' => 'ckt']) !!}
										</span>
										{!! Form::text('featured', null,  ['class' => 'form-control', 'placeholder' => 'Destaque' ]) !!}
									</div>
								</div>
							</div>
							<div class="col-md-4" style="padding-top: 10px;">
								<code>Checkbox: Registro em destaque</code>
							</div>
						</div>
					</div>
					<div class="form-group">								
						<div class="row">
							<div class="col-md-8">
								<div class="strength-container strength-shown">
									<div class="input-group">
										<span class="input-group-addon ">
											{!! Form::checkbox('category-checkbox', '1', isset($modules->category) ? true : false, ['class' => 'ckt']) !!}
										</span>
										{!! Form::text('category', null, ['class' => 'form-control' , 'placeholder' => 'Categoria']) !!}
									</div>
								</div>
							</div>
							<div class="col-md-4" style="padding-top: 10px;">
								<code>Select: Categoria</code>
							</div>
						</div>
					</div>
					<div class="form-group">								
						<div class="row">
							<div class="col-md-8">
								<div class="strength-container strength-shown">
									<div class="input-group">
										<span class="input-group-addon ">
											{!! Form::checkbox('featured_image-checkbox', '1', isset($modules->featured_image) ? true : false, ['class' => 'ckt']) !!}
										</span>
										{!! Form::text('featured_image', null,  ['class' => 'form-control', 'placeholder' => 'Imagem Registro' ]) !!}
									</div>
								</div>
							</div>
							<div class="col-md-4" style="padding-top: 10px;">
								<code>File: Imagem fixa do registro</code>
							</div>
						</div>
					</div>
					<div class="form-group">								
						<div class="row">
							<div class="col-md-8">
								<div class="strength-container strength-shown">
									<div class="input-group">
										<span class="input-group-addon ">
											{!! Form::checkbox('summary-checkbox', '1', isset($modules->summary) ? true : false, ['class' => 'ckt']) !!}
										</span>
										{!! Form::text('summary', null,  ['class' => 'form-control', 'placeholder' => 'Resumo' ]) !!}
									</div>
								</div>
							</div>
							<div class="col-md-4" style="padding-top: 10px;">
								<code>Textarea: Resumo </code>
							</div>
						</div>
					</div>
					<div class="form-group">								
						<div class="row">
							<div class="col-md-8">
								<div class="strength-container strength-shown">
									<div class="input-group">
										<span class="input-group-addon ">
											{!! Form::checkbox('content-checkbox', '1', isset($modules->content) ? true : false, ['class' => 'ckt']) !!}
										</span>
										{!! Form::text('content', null,  ['class' => 'form-control' , 'placeholder' => 'Conteudo']) !!}
									</div>
								</div>
							</div>
							<div class="col-md-4" style="padding-top: 10px;">
								<code>Editor Texto: Conteudo </code>
							</div>
						</div>
					</div>
					<div class="form-group">								
						<div class="row">
							<div class="col-md-8">
								<div class="strength-container strength-shown">
									<div class="input-group">
										<span class="input-group-addon ">
											{!! Form::checkbox('credit_author-checkbox', '1', isset($modules->credit_author) ? true : false, ['class' => 'ckt']) !!}
										</span>
										{!! Form::text('credit_author', null,  ['class' => 'form-control', 'placeholder' => 'Autor/Credito' ]) !!}
									</div>
								</div>
							</div>
							<div class="col-md-4" style="padding-top: 10px;">
								<code>Text: Autor / Crédito</code>
							</div>
						</div>
					</div>
					<div class="form-group">								
						<div class="row">
							<div class="col-md-8">
								<div class="strength-container strength-shown">
									<div class="input-group">
										<span class="input-group-addon ">
											{!! Form::checkbox('tags-checkbox', '1', isset($modules->tags) ? true : false, ['class' => 'ckt']) !!}
										</span>
										{!! Form::text('tags', null,  ['class' => 'form-control', 'placeholder' => 'Tags de Busca' ]) !!}
									</div>
								</div>
							</div>
							<div class="col-md-4" style="padding-top: 10px;">
								<code>Text: Tags de Busca</code>
							</div>
						</div>
					</div>
					<div class="form-group">								
						<div class="row">
							<div class="col-md-8">
								<div class="strength-container strength-shown">
									<div class="input-group">
										<span class="input-group-addon ">
											{!! Form::checkbox('initial_date-checkbox', '1', isset($modules->initial_date) ? true : false, ['class' => 'ckt']) !!}
										</span>
										{!! Form::text('initial_date', null,  ['class' => 'form-control' , 'placeholder' => 'Data Inicio']) !!}
									</div>
								</div>
							</div>
							<div class="col-md-4" style="padding-top: 10px;">
								<code>Date: Data início</code>
							</div>
						</div>
					</div>
					<div class="form-group">								
						<div class="row">
							<div class="col-md-8">
								<div class="strength-container strength-shown">
									<div class="input-group">
										<span class="input-group-addon ">
											{!! Form::checkbox('end_date-checkbox', '1', isset($modules->end_date) ? true : false, ['class' => 'ckt']) !!}
										</span>
										{!! Form::text('end_date', null,  ['class' => 'form-control', 'placeholder' => 'Data Fim' ]) !!}
									</div>
								</div>
							</div>
							<div class="col-md-4" style="padding-top: 10px;">
								<code>Date: Data Fim</code>
							</div>
						</div>
					</div>
					<div class="form-group">								
						<div class="row">
							<div class="col-md-8">
								<div class="strength-container strength-shown">
									<div class="input-group">
										<span class="input-group-addon ">
											{!! Form::checkbox('starting_time-checkbox', '1', isset($modules->starting_time) ? true : false, ['class' => 'ckt']) !!}
										</span>
										{!! Form::text('starting_time', null,  ['class' => 'form-control', 'placeholder' => 'Hora Inicio' ]) !!}
									</div>
								</div>
							</div>
							<div class="col-md-4" style="padding-top: 10px;">
								<code>Time: Hora Início</code>
							</div>
						</div>
					</div>
					<div class="form-group">								
						<div class="row">
							<div class="col-md-8">
								<div class="strength-container strength-shown">
									<div class="input-group">
										<span class="input-group-addon ">
											{!! Form::checkbox('end_time-checkbox', '1', isset($modules->end_time) ? true : false, ['class' => 'ckt']) !!}
										</span>
										{!! Form::text('end_time', null,  ['class' => 'form-control', 'placeholder' => 'Hora Fim' ]) !!}
									</div>
								</div>
							</div>
							<div class="col-md-4" style="padding-top: 10px;">
								<code>Time: Hora Fim</code>
							</div>
						</div>
					</div>
					<div class="form-group">								
						<div class="row">
							<div class="col-md-8">
								<div class="strength-container strength-shown">
									<div class="input-group">
										<span class="input-group-addon ">
											{!! Form::checkbox('publication_date-checkbox', '1', isset($modules->publication_date) ? true : false, ['class' => 'ckt']) !!}
										</span>
										{!! Form::text('publication_date', null,  ['class' => 'form-control', 'placeholder' => 'Data de Publicação' ]) !!}
									</div>
								</div>
							</div>
							<div class="col-md-4" style="padding-top: 10px;">
								<code>Datetime: Data de publicação</code>
							</div>
						</div>
					</div>
					<div class="form-group">								
						<div class="row">
							<div class="col-md-8">
								<div class="strength-container strength-shown">
									<div class="input-group">
										<span class="input-group-addon ">
											{!! Form::checkbox('amount_1-checkbox', '1', isset($modules->amount_1) ? true : false, ['class' => 'ckt']) !!}
										</span>
										{!! Form::text('amount_1', null, ['class' => 'form-control', 'placeholder' => 'Valor 1' ]) !!}
									</div>
								</div>
							</div>
							<div class="col-md-4" style="padding-top: 10px;">
								<code>Text: Valor 1</code>
							</div>
						</div>
					</div>
					<div class="form-group">								
						<div class="row">
							<div class="col-md-8">
								<div class="strength-container strength-shown">
									<div class="input-group">
										<span class="input-group-addon ">
											{!! Form::checkbox('amount_2-checkbox', '1', isset($modules->amount_2) ? true : false, ['class' => 'ckt']) !!}
										</span>
										{!! Form::text('amount_2', null,  ['class' => 'form-control' , 'placeholder' => 'Valor 2']) !!}
									</div>
								</div>
							</div>
							<div class="col-md-4" style="padding-top: 10px;">
								<code>Text: Valor 2</code>
							</div>
						</div>
					</div>
					<div class="form-group">								
						<div class="row">
							<div class="col-md-8">
								<div class="strength-container strength-shown">
									<div class="input-group">
										<span class="input-group-addon ">
											{!! Form::checkbox('amount_3-checkbox', '1', isset($modules->amount_3) ? true : false, ['class' => 'ckt']) !!}
										</span>
										{!! Form::text('amount_3', null,  ['class' => 'form-control' , 'placeholder' => 'Valor 3']) !!}
									</div>
								</div>
							</div>
							<div class="col-md-4" style="padding-top: 10px;">
								<code>Text: Valor 3</code>
							</div>
						</div>
					</div>
					<div class="form-group">								
						<div class="row">
							<div class="col-md-8">
								<div class="strength-container strength-shown">
									<div class="input-group">
										<span class="input-group-addon ">
											{!! Form::checkbox('check_1-checkbox', '1', isset($modules->check_1) ? true : false, ['class' => 'ckt']) !!}
										</span>
										{!! Form::text('check_1', null,  ['class' => 'form-control', 'placeholder' => 'Checkbox 1' ]) !!}
									</div>
								</div>
							</div>
							<div class="col-md-4" style="padding-top: 10px;">
								<code>Checkbox: Checkbox 1</code>
							</div>
						</div>
					</div>
					<div class="form-group">								
						<div class="row">
							<div class="col-md-8">
								<div class="strength-container strength-shown">
									<div class="input-group">
										<span class="input-group-addon ">
											{!! Form::checkbox('check_2-checkbox', '1', isset($modules->check_2) ? true : false, ['class' => 'ckt']) !!}
										</span>
										{!! Form::text('check_2', null,  ['class' => 'form-control' , 'placeholder' => 'Checkbox 2']) !!}
									</div>
								</div>
							</div>
							<div class="col-md-4" style="padding-top: 10px;">
								<code>Checkbox: Checkbox 2</code>
							</div>
						</div>
					</div>
					<div class="form-group">								
						<div class="row">
							<div class="col-md-8">
								<div class="strength-container strength-shown">
									<div class="input-group">
										<span class="input-group-addon ">
											{!! Form::checkbox('check_3-checkbox', '1', isset($modules->check_3) ? true : false, ['class' => 'ckt']) !!}
										</span>
										{!! Form::text('check_3',null,  ['class' => 'form-control', 'placeholder' => 'Checkbox 3']) !!}
									</div>
								</div>
							</div>
							<div class="col-md-4" style="padding-top: 10px;">
								<code>Checkbox: Checkbox 3</code>
							</div>
						</div>
					</div>
					<hr>
					<h5 class="text-theme">Elementos Complementares e Externos</h5>
					<div class="form-group">	
						<div class="row">
							<div class="col-md-12">
								{!! Form::checkbox('external_link', '1', isset($modules->external_link) ? true : false) !!}
								{!!Form::label('external_link', 'Link Externo')!!}
							</div>
						</div>	
						<div class="row">
							<div class="col-md-12">
								{!! Form::checkbox('optimization_seo', '1', isset($modules->optimization_seo) ? true : false) !!}
								{!!Form::label('optimization_seo', 'Otimização SEO')!!}
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								{!! Form::checkbox('image_gallery', '1', isset($modules->image_gallery) ? true : false) !!}
								{!!Form::label('image_gallery', 'Galeria de Imagem')!!}
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								{!! Form::checkbox('video_gallery', '1', isset($modules->video_gallery) ? true : false) !!}
								{!!Form::label('video_gallery', 'Galeria de Video')!!}
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								{!! Form::checkbox('file_gallery', '1', isset($modules->file_gallery) ? true : false) !!}	
								{!!Form::label('file_gallery', 'Galeria de Arquivos')!!}
							</div>
						</div>
					</div>
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