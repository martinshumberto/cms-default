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
	<li class="breadcrumb-item active">Configurações do Sistema</li>
</ol>

<div class="container">
	<!-- Alerts -->
	@include('cms.layouts._alerts')
	<div class="row">
		<div class="col-lg-12">
			<div class="card ">
				<div class="card-header text-theme">
					<i class="fa fa-edit"></i> Atualizar Definições do Sistema
				</div>
				<div class="card-body">
					<form class="form-horizontal" method="post" autocomplete="off" action="{!!route('cms-settings-system-update')!!}">
						{{csrf_field()}}    
						<div class="form-group">
							<label class="form-control-label" for="prependedInput">Chave do Sistema</label>
							<div class="controls">
								<div class="input-prepend input-group">
									<span class="input-group-addon">$</span>
									<input class="form-control" size="16" type="text" name="key" value="{!!$definitions->key!!}">
								</div>							
							</div>
						</div>
						<div class="form-group row">
							<div class="col-md-6">
								<label class="form-control-label" for="prependedInput">Usuário Cpanel</label>
								<div class="controls">
									<div class="input-prepend input-group">
										<span class="input-group-addon"><i class="fa fa-sign-in"></i></span>
										<input class="form-control" size="16" type="text" name="user_cpanel" value="{!!$definitions->user_cpanel!!}">
									</div>							
								</div>
							</div>
							<div class="col-md-6">
								<label class="form-control-label" for="prependedInput">Senha Cpanel</label>
								<div class="controls">
									<div class="input-prepend input-group">
										<span class="input-group-addon"><i class="fa fa-unlock-alt"></i></span>
										<input class="form-control" size="16" type="text" name="password_cpanel" value="{!!$definitions->password_cpanel!!}">
									</div>							
								</div>
							</div>
						</div>
						<div class="form-group row">
							<div class="col-md-6">
								<div class="card-body">
									<h6 class="text-theme">Registro por Página</h6>
									<div class="register-for-page" data-value="{!!$definitions->register_for_page!!}" ></div>
									<input type="hidden" name="register_for_page" id="register_for_page" value="{!!$definitions->register_for_page!!}">
								</div>
								<!-- end inside card-body -->
							</div>
							<div class="col-md-6">									
								<div class="card-body">
									<h6 class="text-theme">Fotos por Página</h6>
									<div class="photos-for-page"  data-value="{!!$definitions->photos_for_page!!}"></div>
									<input type="hidden" name="photos_for_page" id="photos_for_page" value="{!!$definitions->photos_for_page!!}">
								</div>
							</div>
						</div>
						<div class="form-group">
							<div class="row">
								<div class="col-md-6">								
									<label class="form-control-label" for="prependedInput">Pasta de Arquivos Públicos</label>
									<div class="controls">
										<div class="input-prepend input-group">
											<span class="input-group-addon"><i class="fa fa-folder-open-o" aria-hidden="true"></i></span>
											<input class="form-control" size="16" type="text" name="folder_files" value="{!!$definitions->folder_files!!}">
										</div>							
									</div>
								</div>
								<div class="col-md-6">								
									<label class="form-control-label" for="prependedInput">Time Zone (Horário local)</label>
									<div class="controls">
										<div class="input-prepend input-group">
											<span class="input-group-addon"><i class="fa fa-clock-o" aria-hidden="true"></i></span>
											<input class="form-control" size="16" type="text" name="timezone" value="{!!$definitions->timezone!!}">
										</div>							
									</div>
								</div>
							</div>
						</div>
						<div class="form-group">
							<div class="row">
								<div class="col-md-6">								
									<label class="form-control-label" for="prependedInput">Extenções de Fotos</label>
									<div class="controls">
										<div class="input-prepend input-group">
											<span class="input-group-addon"><i class="fa fa-file-image-o" aria-hidden="true"></i></span>
											<input class="form-control" size="16" type="text" name="ext_photos" value="{!!$definitions->ext_photos!!}">
										</div>							
									</div>
								</div>
								<div class="col-md-6">								
									<label class="form-control-label" for="prependedInput">Extenções de Arquivos</label>
									<div class="controls">
										<div class="input-prepend input-group">
											<span class="input-group-addon"><i class="fa fa-files-o" aria-hidden="true"></i></span>
											<input class="form-control" size="16" type="text" name="ext_files" value="{!!$definitions->ext_files!!}">
										</div>							
									</div>
								</div>
							</div>
						</div>
						<div class="form-group">
							<div class="row">

								<div class="col-md-6">

									<div class="card-body">
										<h6 class="text-theme">Plugins do Sistema</h6>

										<div class="checkbox abc-checkbox-success abc-checkbox">
											<input name="adverts" type="checkbox" id="cb-1" {!!($definitions->adverts == 1) ? 'checked' : ''!!} >
											<label for="cb-1">Anúncios</label>
										</div>
										<div class="checkbox abc-checkbox-success abc-checkbox">
											<input name="polls" type="checkbox" id="cb-2" {!!($definitions->polls == 1) ? 'checked' : ''!!} >
											<label for="cb-2">Enquetes</label>
										</div>
										<div class="checkbox abc-checkbox-primary abc-checkbox">
											<input name="newsletter" type="checkbox" id="cb-3" {!!($definitions->newsletter == 1) ? 'checked' : ''!!} >
											<label for="cb-3">Newsletter</label>
										</div>

									</div>
									<!-- end inside card-body -->
								</div>
								<div class="col-md-6">
									<div class="card-body">
										<h6 class="text-theme"> Status do Site </h6>
										<p>

											<div class="radio abc-radio abc-radio-success radio-inline">
												<input type="radio" id="Online"  name="status_site" value="1" {!!($definitions->status_site == 1) ? 'checked' : ''!!}>
												<label for="Online"> Online </label>
											</div>
											<div class="radio abc-radio abc-radio-danger  radio-inline">
												<input type="radio" id="manutencie" name="status_site"  value="2" {!!($definitions->status_site == 2) ? 'checked' : ''!!}>
												<label for="manutencie"> Manutenção </label>
											</div>

										</div>
										<!-- end inside card-body -->
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