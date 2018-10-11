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
	<li class="breadcrumb-item active">Dashboard</li>
</ol>

<div class="container">
	<div class="row">
		<div class="col-md-12">
			<div class="row">
				<div class="col-md-4">
					<div class="card card-accent-success">
						<div class="card-body">
							<div class="clearfix">
								<div class="float-right">
									<div class="h2 text-success">1.0v</div>
								</div>
							</div>
							<div class="float-left">
								<div class="h3 ">
									<strong>Versão <i class="fa fa-code" aria-hidden="true"></i></strong>
								</div>
								<div class="h6 text-success"> ID: CL-0452 </div>
							</div>
						</div>
						<!-- end card-body -->
					</div>
					<!-- end card -->
				</div>
				<!-- end inside col -->
				<div class="col-md-4">
					<div class="card card-accent-warning">
						<div class="card-body">
							<div class="clearfix">
								<div class="float-right">
									<div class="h2 text-warning">10/10/2018</div>
								</div>
							</div>
							<div class="float-left">
								<div class="h3 ">
									<strong>Atualizado <i class="fa fa-refresh" aria-hidden="true"></i></strong>
								</div>
								<div class="h6 text-warning"> Ultima Atualização </div>
							</div>
						</div>
						<!-- end card-body -->
					</div>
					<!-- end card -->
				</div>
				<div class="col-md-4">
					<div class="card card-accent-primary">
						<div class="card-body">
							<div class="clearfix">
								<div class="float-right">
									<div class="h2 text-primary">Platina</div>
								</div>
							</div>
							<div class="float-left">
								<div class="h3 ">
									<strong>Hospedagem <i class="fa fa-database" aria-hidden="true"></i></strong>
								</div>
								<div class="h6 text-primary"> <a href="#">Fazer Upgrade <i class="fa fa-caret-right" aria-hidden="true"></i></a> </div>
							</div>
						</div>
						<!-- end card-body -->
					</div>
					<!-- end card -->
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-md-8">
			<div class="card card-accent-theme">
				<div class="card-body">
					<h4 class="text-theme">Estatísticas de Acesso</h4>
					<div id="morris-area-chart"></div>
				</div>
				<!-- end card-body -->
			</div>
			<!-- end card -->
		</div>
		<div class="col-md-4">
			
			<div class="row">
				<div class="col-md-12">
					<div class="card card-accent-primary">
						<div class="card-body">
							<div class="clearfix">
								<div class="float-right">
									<div class="h2 text-primary">Platina</div>
								</div>
							</div>
							<div class="float-left">
								<div class="h3 ">
									<strong>Hospedagem <i class="fa fa-database" aria-hidden="true"></i></strong>
								</div>
								<div class="h6 text-primary"> <a href="#">Fazer Upgrade <i class="fa fa-caret-right" aria-hidden="true"></i></a> </div>
							</div>
						</div>
						<!-- end card-body -->
					</div>
					<!-- end card -->
				</div>
			</div>
		</div>
	</div>
</div>

@endsection