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
	<li class="breadcrumb-item active">{!!(!isset($contents)) ? 'Novo' : 'Editar'!!}</li>
</ol>

<div class="container">
	<!-- Alerts -->
	@include('cms.layouts._alerts')

	<div class="row">
		<div class="col-lg-12">
			<div class="card ">
				<div class="card-header text-theme">
					<i class="fa fa-edit"></i>	{!!(!isset($contents)) ? 'Cadastrar' : 'Editar'!!} {!!$module->module!!}
				</div>
				<div class="card-body">
					@if(isset($contents))
					{!! Form::model($contents, ['route' => ['cms-contents-update', $module->modules_id, $contents->contents_id], 'method' => 'put', "id" => "validation", "class" => "was-validated ", 'files' => true]) !!}
					@else
					{!! Form::open(['method' => 'post', 'autocomplete' => 'off', 'route' => ['cms-contents-create', $module->modules_id] , "id" => "validation", "class" => "was-validated", 'files' => true]) !!}
					@endif   		    
					{{csrf_field()}} 


					@if(!empty($module->check_1))
					<div class="form-group row">
						<div class="col-md-12">
							<div class="checkbox abc-checkbox">
								
								{!! Form::checkbox('check_1', '1', isset($contents->check_1) ? true : false, ['class' => 'styled', 'id' => 'check_1']) !!}
								<label for="check_1">
									{!!$module->check_1!!}
								</label>
							</div>
						</div>
					</div> 
					@endif
					@if(!empty($module->featured))
					<div class="form-group row">
						<div class="col-md-12">
							<div class="checkbox abc-checkbox">
								
								{!! Form::checkbox('featured', '1', isset($contents->featured) ? true : false, ['class' => 'styled', 'id' => 'featured']) !!}
								<label for="featured">
									{!!$module->featured!!}
								</label>
							</div>
						</div>
					</div> 
					@endif

					@if(!empty($module->category))
					<div class="form-group row">
						<div class="col-md-12">
							<label class="form-control-label" for="prependedInput">{!!$module->category!!} </label>
							<div class="controls">
								<div class="input-prepend input-group">
									<span class="input-group-addon"><i class="fa fa-th-list"></i></span>

									<select id="categories_id" name="categories_id" class="form-control select2" data-plugin="select2"  required >	
										<option value="">Selecione</option>
										@foreach ($categories as $key => $value)
										<option value="{!! $value->categories_id !!}" @if(isset($contents)) {{   $contents->categories_id == $value->categories_id  ? "selected" : "" }} @endif >{!! $value->title!!}</option>
										@endforeach
									</select>

								</div>							
							</div>
						</div>
					</div>
					@endif
					@if(!empty($module->title))
					<div class="form-group row">
						<div class="col-md-12">
							<label class="form-control-label" for="prependedInput">{!!$module->title!!} </label>
							<div class="controls">
								<div class="input-prepend input-group">
									<span class="input-group-addon"><i class="fa fa-font"></i></span>
									{!! Form::text('title', null, ['class' => 'form-control', 'placeholder' => $module->title, 'required' => 'required']) !!}
								</div>							
							</div>
						</div>
					</div> 
					@endif
					@if(!empty($module->subtitle))
					<div class="form-group row">
						<div class="col-md-12">
							<label class="form-control-label" for="prependedInput">{!!$module->subtitle!!} </label>
							<div class="controls">
								<div class="input-prepend input-group">
									<span class="input-group-addon"><i class="fa fa-font"></i></span>
									{!! Form::text('subtitle', null, ['class' => 'form-control', 'placeholder' => $module->subtitle, 'required' => 'required']) !!}
								</div>							
							</div>
						</div>
					</div>

					@endif
					@if(!empty($module->featured_image))
					<div class="form-group row">						
						<div class="col-md-12">
							<label class="form-control-label" for="prependedInput">{!!$module->featured_image!!} </label>
							<div class="controls">
								<div class="input-prepend input-group">
									<span class="input-group-addon"><i class="fa  fa-file-image-o"></i></span>
									{!! Form::file('image', ['class' => 'form-control ', 'id' => 'FileUpload']) !!} 
								</div>							
							</div>
						</div>
						<div class="col-md-12">
							<div class="controls tumbs-preview">
								<div id="PreviewPicture" style="display: none;"></div>
								@if(!empty($contents->featured_image))
								<div class="btn-thumb">
									<a href="{!!route('cms-contents-delete-photo',  array($module->modules_id, $contents->contents_id))!!}">
										<i class="fa fa-times"></i> Apagar Imagem
									</a>
								</div>
								{!!img($contents->featured_image, 350, 200, true, true, array("class" => "cover"))!!}
								@endif
							</div>
						</div>
					</div>
					@endif
					@if(!empty($module->summary))
					<div class="form-group row">
						<div class="col-md-12">
							<label class="form-control-label" for="prependedInput">{!!$module->summary!!} </label>
							<div class="controls">
								<div class="input-prepend input-group">
									<span class="input-group-addon"><i class="fa  fa-file-text-o"></i></span>
									{!! Form::textarea('summary', null, ['class' => 'form-control', 'rows' => '3']) !!} 
								</div>							
							</div>
						</div>
					</div>
					@endif
					@if(!empty($module->content))
					<div class="form-group row">
						<div class="col-md-12">
							<label class="form-control-label" for="prependedInput">{!!$module->content!!} </label>
							<div class="controls">
								<div class="input-prepend input-group">
									<span class="input-group-addon"><i class="fa  fa-file-text-o"></i></span>					
									{!! Form::textarea('content', null, ['class' => 'form-control', 'id' => 'summernote']) !!} 
								</div>							
							</div>
						</div>
					</div>
					@endif
					@if(!empty($module->credit_author))
					<div class="form-group row">
						<div class="col-md-12">
							<label class="form-control-label" for="prependedInput">{!!$module->credit_author!!} </label>
							<div class="controls">
								<div class="input-prepend input-group">
									<span class="input-group-addon"><i class="fa fa-font"></i></span>
									{!! Form::text('credit_author', null, ['class' => 'form-control', 'placeholder' => $module->credit_author]) !!}
								</div>							
							</div>
						</div>
					</div> 
					@endif
					@if(!empty($module->tags))					
					<div class="form-group row">
						<div class="col-md-12">
							<label class="form-control-label" for="prependedInput">{!!$module->tags!!} </label>
							<div class="controls">
								<div class="input-prepend input-group">
									<span class="input-group-addon"><i class="fa fa-tags"></i></span>
									{!! Form::text('tags', null, ['data-role' => 'tagsinput', 'class' => 'form-control', 'placeholder' => $module->tags]) !!}
								</div>							
							</div>
						</div>
					</div> 	
					@endif
					@if(!empty(($module->initial_date) OR ($module->end_date)))			
					<div class="form-group row">
						@if(!empty($module->initial_date))
						<div class="col-md-6">
							<label class="form-control-label" for="prependedInput">{!!$module->initial_date!!} </label>
							<div class="controls">
								<div class="input-prepend input-group">									
									<div class="input-group " >
										{!! Form::text('initial_date', null, ['class' => 'form-control datepicker', 'placeholder' => $module->initial_date]) !!}
										<div class="input-group-addon">
											<span class="mdi mdi-calendar"></span>
										</div>
									</div>
								</div>							
							</div>
						</div>
						@endif
						@if(!empty($module->end_date))
						<div class="col-md-6">
							<label class="form-control-label" for="prependedInput">{!!$module->end_date!!} </label>
							<div class="controls">
								<div class="input-prepend input-group">						
									<div class="input-group">
										{!! Form::text('end_date', null, ['class' => 'form-control datepicker', 'placeholder' => $module->end_date]) !!}
										<div class="input-group-addon">
											<span class="mdi mdi-calendar"></span>
										</div>
									</div>
								</div>							
							</div>
						</div>
						@endif
					</div> 	
					@endif
					@if(!empty(($module->starting_time) OR ($module->starting_time)))			
					<div class="form-group row">

						@if(!empty($module->starting_time))
						<div class="col-md-6">
							<label class="form-control-label" for="prependedInput">{!!$module->starting_time!!} </label>
							<div class="controls">
								<div class="input-prepend input-group">									
									<div class="input-group " >
										{!! Form::text('starting_time', null, ['class' => 'form-control clockpicker', 'placeholder' => $module->starting_time]) !!}
										<div class="input-group-addon">
											<span class="mdi mdi-timer"></span>
										</div>
									</div>
								</div>							
							</div>
						</div>
						@endif

						@if(!empty($module->end_time))
						<div class="col-md-6">
							<label class="form-control-label" for="prependedInput">{!!$module->end_time!!} </label>
							<div class="controls">
								<div class="input-prepend input-group">						
									<div class="input-group">
										{!! Form::text('end_time', null, ['class' => 'form-control clockpicker', 'placeholder' => $module->end_time]) !!}
										<div class="input-group-addon">
											<span class="mdi mdi-timer"></span>
										</div>
									</div>
								</div>							
							</div>
						</div>
						@endif
					</div> 
					@endif
					@if(!empty($module->publication_date))

					<div class="form-group row">
						<div class="col-md-12">
							<label class="form-control-label" for="prependedInput">{!!$module->publication_date!!} </label>
							<div class="controls">
								<div class="input-prepend input-group">									
									<div class="input-group " >
										<div class="input-group-addon">
											<span class="mdi mdi-calendar"></span>
										</div>
										{!! Form::text('publication_date', null, ['class' => 'form-control datepicker', 'placeholder' => $module->publication_date]) !!}
										
									</div>
								</div>							
							</div>
						</div>
					</div> 

					@endif
					@if(!empty($module->amount_1))
					<div class="form-group row">
						<div class="col-md-12">
							<label class="form-control-label" for="prependedInput">{!!$module->amount_1!!} </label>
							<div class="controls">
								<div class="input-prepend input-group">
									<span class="input-group-addon"><i class="fa fa-file-o"></i></span>
									{!! Form::number('amount_1', null, ['class' => 'form-control', 'placeholder' => $module->amount_1]) !!}
								</div>							
							</div>
						</div>
					</div> 	
					@endif
					@if(!empty($module->amount_2))
					<div class="form-group row">
						<div class="col-md-12">
							<label class="form-control-label" for="prependedInput">{!!$module->amount_2!!} </label>
							<div class="controls">
								<div class="input-prepend input-group">
									<span class="input-group-addon"><i class="fa fa-file-o"></i></span>
									{!! Form::number('amount_2', null, ['class' => 'form-control', 'placeholder' => $module->amount_2]) !!}
								</div>							
							</div>
						</div>
					</div> 	
					@endif
					@if(!empty($module->amount_3))
					<div class="form-group row">
						<div class="col-md-12">
							<label class="form-control-label" for="prependedInput">{!!$module->amount_3!!} </label>
							<div class="controls">
								<div class="input-prepend input-group">
									<span class="input-group-addon"><i class="fa fa-file-o"></i></span>
									{!! Form::number('amount_3', null, ['class' => 'form-control', 'placeholder' => $module->amount_3]) !!}
								</div>							
							</div>
						</div>
					</div> 

					@endif
					@if(!empty($module->check_3))

					<div class="form-group row" style="padding-top: 32px;">
						<div class="col-md-12">
							<div class="checkbox abc-checkbox">
								
								{!! Form::checkbox('check_3', '1', isset($contents->check_3) ? true : false, ['class' => 'styled', 'id' => 'check_3']) !!}
								<label for="check_3">
									{!!$module->check_3!!}
								</label>
							</div>
						</div>
					</div>
					@endif
					<div class="form-group row">
						<div class="col-md-12">
							<label class="form-control-label" for="prependedInput">Status </label>
							<div class="controls">
								<div class="input-prepend input-group">
									<span class="input-group-addon"><i class="fa fa-check"></i></span>
									{!!Form::select('status', ['1' => 'Ativo',  '2' => 'Inativo'], null, ['placeholder' => "Selecione", 'class' => 'form-control select2', "required" => "required"]) !!}	
								</div>							
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