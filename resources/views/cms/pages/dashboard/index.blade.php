@extends('cms.layouts._default')

@section('content')	

<div class="page-breadcrumb">
	<div class="row">
		<div class="col-5 align-self-center">
			<h4 class="page-title">Dashboard</h4>
		</div>
		<div class="col-7 align-self-center">
			<div class="d-flex align-items-center justify-content-end">
				<nav aria-label="breadcrumb">
					<ol class="breadcrumb">
						<li class="breadcrumb-item">
							<a href="#">Home</a>
						</li>
						<li class="breadcrumb-item active" aria-current="page">Dashboard</li>
					</ol>
				</nav>
			</div>
		</div>
	</div>
</div>
<div class="container-fluid">

	<div class="card-group">
		<div class="card bg-gradient-purple">
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="d-flex no-block align-items-center">
							<div>
								<i class="fa fa-code font-20"></i>
								<p class="font-16 m-b-5">Versão</p>
							</div>
							<div class="ml-auto">
								<h1 class="font-light text-right">2.0</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="card bg-gradient-green">
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="d-flex no-block align-items-center">
							<div>
								<i class="fa fa-refresh font-20"></i>
								<p class="font-16 m-b-5">Última atualização</p>
							</div>
							<div class="ml-auto">
								<h1 class="font-light text-right">15/10/2018</h1>
							</div>
						</div>
					</div>
					<div class="col-12">
					</div>
				</div>
			</div>
		</div>
		<div class="card bg-gradient-orange">
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="d-flex no-block align-items-center">
							<div>
								<i class="fa fa-database font-20"></i>
								<p class="font-16 m-b-5">Hospedagem</p>
							</div>
							<div class="ml-auto">
								<h1 class="font-light text-right">Ilimitada</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="card bg-gradient-blue">
			<div class="card-body">
				<div class="row">
					<div class="col-md-12">
						<div class="d-flex no-block align-items-center">
							<div>
								<i class="fa fa-cog font-20"></i>
								<p class="font-16 m-b-5">Próximo vencimento</p>
							</div>
							<div class="ml-auto">
								<h1 class="font-light text-right">10/11/2018</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-3 col-md-6">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-8"><span class="display-6">6 <i class="ti-angle-down font-14 text-danger"></i></span>
                            <h6>Vísitas hoje</h6></div>
                        <div class="col-4 align-self-center text-right  p-l-0">
                            <div id="sparklinedash3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		<div class="col-lg-3 col-md-6">
            <div class="card">
                <div class="card-body">
                    <!-- Row -->
                    <div class="row">
                        <div class="col-8"><span class="display-6">56 <i class="ti-angle-up font-14 text-success"></i></span>
                            <h6>Vísitas essa semana</h6></div>
                        <div class="col-4 align-self-center text-right p-l-0">
                            <div id="sparklinedash"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		<div class="col-lg-3 col-md-6">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-8"><span class="display-6">250 <i class="ti-angle-up font-14 text-success"></i></span>
                            <h6>Vísitas esse mês</h6></div>
                        <div class="col-4 align-self-center text-right p-l-0">
                            <div id="sparklinedash2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		<div class="col-lg-3 col-md-6">
            <div class="card">
                <div class="card-body">
					<div class="row">
                        <div class="col-8">
                        	<span class="display-6">1205 <i class="ti-angle-up font-14 text-success"></i></span>
                            <h6>Total de vísitas</h6>
                        </div>
                        <div class="col-4 align-self-center text-right p-l-0">
                            <h6>Desde</h6>
                            <h6>15/10/2018</h6>
                        </div>
                    </div> 
                </div>
            </div>
        </div>        

	</div>

	<div class="row">
		<div class="col-12">
			<div class="card">
				<div class="card-body">
					<div class="row">
                        <div class="col-12">
                            <ul class="list-inline float-right">
                                <li class="list-inline-item">
                                    <h6 class="text-muted"><i class="fa fa-circle m-r-5 text-success"></i>Product A</h6> </li>
                                <li class="list-inline-item">
                                    <h6 class="text-muted"><i class="fa fa-circle m-r-5 text-info"></i>Product B</h6> </li>
                            </ul>
                            <h4 class="card-title">Revenue Statistics</h4>
                            <h5 class="card-subtitle">January 2017</h5>
                        </div>
                        <div class="col-12 m-t-20 revenue">
                            <div class="total-revenue4" style="height: 350px;"></div>
                        </div>
                        <div class="col-lg-3 col-md-6 m-b-30 m-t-20 text-center">
                            <h1 class="m-b-0 font-light">$54578</h1>
                            <h6 class="text-muted">Total Revenue</h6>
                        </div>
                        <div class="col-lg-3 col-md-6 m-b-30 m-t-20 text-center">
                            <h1 class="m-b-0 font-light">$43451</h1>
                            <h6 class="text-muted">Online Revenue</h6>
                        </div>
                        <div class="col-lg-3 col-md-6 m-b-30 m-t-20 text-center">
                            <h1 class="m-b-0 font-light">$44578</h1>
                            <h6 class="text-muted">Product A</h6>
                        </div>
                        <div class="col-lg-3 col-md-6 m-b-30 m-t-20 text-center">
                            <h1 class="m-b-0 font-light">$12578</h1>
                            <h6 class="text-muted">Product B</h6>
                        </div>
                    </div>
				</div>
			</div>
		</div>
	</div>
</div>

@endsection