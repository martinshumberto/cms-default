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
	<li class="breadcrumb-item active">Plugins</li>
	<li class="breadcrumb-item active">Anuncios</li>
</ol>


<div class="container">
	<!-- Alerts -->
	@include('cms.layouts._alerts')


	<div class="row">

		<div class="col-md-7">
			<div class="card card-accent-theme">
				<div class=" products-widget">
					<div class="header">
						<div class="heading">Anuncios</div>
					</div>
					<!-- end header -->
					<div class="table-responsive">
						<table class="table table-hover">
							<tr>
								<td class="doc-img">
									<img src="http://via.placeholder.com/100x100" alt="user" />
								</td>
								<td class="document">
									bannerbig - Agência Crown
								</td>

								<td class="status">
									<span class="badge badge-boxed badge-success">Ativo</span>
								</td>
								<td class="user">

									<div class="heading">Sem Expirar</div>
									<br/>
									<small>--/--/---- </small>

								</td>
								<td class="action">
									<button class="btn btn-theme btn-sm">
										<i class="mdi mdi-dots-vertical"></i>
									</button>
								</td>

							</tr>
						</table>
						<!-- end table -->
					</div>
					<!-- end table-responsive -->
				</div>
				<!-- end product-widget -->

			</div>
			<!-- end card -->
		</div>
		<!-- end-col -->

		<div class="col-md-5 summary-widgets">

			<div class="card card-accent-theme">

				<div class="card-body">
					<h6 class="text-theme">Summary</h6>
					<div class="row">
						<div class="col-md-6 summary-widget-1">
							<div class="card ">
								<div class="card-body">
									<div class="number">21</div>
									<small>Active Users</small>
									<div class="progress xs ">
										<div class="progress-bar bg-info" style="width: 80%; " role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="col-md-6 summary-widget-1">
							<div class="card ">
								<div class="card-body">
									<div class="number">38</div>
									<small>Over Due</small>
									<div class="progress xs ">
										<div class="progress-bar bg-danger" style="width: 60%; " role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="col-md-6 summary-widget-1">
							<div class="card">
								<div class="card-body">
									<div class="number">120</div>
									<small>Sales</small>
									<div class="progress xs ">
										<div class="progress-bar bg-success" style="width: 60%; " role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="col-md-6 summary-widget-1">
							<div class="card ">
								<div class="card-body">
									<div class="number">12</div>
									<small>expense</small>
									<div class="progress xs ">
										<div class="progress-bar bg-warning" style="width: 60%; " role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="col-md-6 summary-widget-1">
							<div class="card ">
								<div class="card-body">
									<div class="number">21</div>
									<small>Active Users</small>
									<div class="progress xs ">
										<div class="progress-bar bg-info" style="width: 10%; " role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="col-md-6 summary-widget-1">
							<div class="card ">
								<div class="card-body">
									<div class="number">10</div>
									<small>Over Due</small>
									<div class="progress xs ">
										<div class="progress-bar bg-danger" style="width: 20%; " role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
										</div>
									</div>
								</div>
							</div>
						</div>


					</div>
				</div>
			</div>
		</div>
	</div>
</div>

@endsection 