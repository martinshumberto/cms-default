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

	<div class="row">
		<div class="col-lg-12">
			<div class="card ">
				<div class="card-header text-theme">
					<i class="fa fa-edit"></i> Atualizar Definições do Sistema
				</div>
				<div class="card-body">
					<form class="form-horizontal">
						<div class="form-group">
							<label class="form-control-label" for="prependedInput">Chave do Sistema</label>
							<div class="controls">
								<div class="input-prepend input-group">
									<span class="input-group-addon">$</span>
									<input id="prependedInput" class="form-control" size="16" type="text">
								</div>							
							</div>
						</div>
						<div class="form-group row">
							<div class="col-md-6">
								<label class="form-control-label" for="prependedInput">Usuário Cpanel</label>
								<div class="controls">
									<div class="input-prepend input-group">
										<span class="input-group-addon"><i class="fa fa-sign-in"></i></span>
										<input id="prependedInput" class="form-control" size="16" type="text">
									</div>							
								</div>
							</div>
							<div class="col-md-6">
								<label class="form-control-label" for="prependedInput">Senha Cpanel</label>
								<div class="controls">
									<div class="input-prepend input-group">
										<span class="input-group-addon"><i class="fa fa-unlock-alt"></i></span>
										<input id="prependedInput" class="form-control" size="16" type="text">
									</div>							
								</div>
							</div>
						</div>
						<div class="form-group row">
							<div class="col-md-6">
								<label class="form-control-label" for="appendedInput">Registro por Página</label>
								<div class="controls">
									<div class="input-group">
										<input id="appendedInput" class="form-control" size="16" type="text">									
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<label class="form-control-label" for="appendedInput">Fotos por Página</label>
								<div class="controls">
									<div class="input-group">
										<input id="appendedInput" class="form-control" size="16" type="text">
										
									</div>
								</div>
							</div>
						</div>
						<div class="form-group">
							<label class="form-control-label" for="appendedPrependedInput">Append and prepend</label>
							<div class="controls">
								<div class="input-prepend input-group">
									<span class="input-group-addon">$</span>
									<input id="appendedPrependedInput" class="form-control" size="16" type="text">
									<span class="input-group-addon">.00</span>
								</div>
							</div>
						</div>
						<div class="form-group">
							<label class="form-control-label" for="appendedInputButton">Append with button</label>
							<div class="controls">
								<div class="input-group">
									<input id="appendedInputButton" class="form-control" size="16" type="text">
									<span class="input-group-btn">
										<button class="btn btn-secondary" type="button">Go!</button>
									</span>
								</div>
							</div>
						</div>
						<div class="form-group">
							<label class="form-control-label" for="appendedInputButtons">Two-button append</label>
							<div class="controls">
								<div class="input-group">
									<input id="appendedInputButtons" size="16" class="form-control" type="text">
									<span class="input-group-btn">
										<button class="btn btn-secondary" type="button">Search</button>
										<button class="btn btn-secondary" type="button">Options</button>
									</span>
								</div>
							</div>
						</div>
						<div class="form-actions">
							<button type="submit" class="btn btn-primary">Save changes</button>
							<button type="button" class="btn btn-secondary">Cancel</button>
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