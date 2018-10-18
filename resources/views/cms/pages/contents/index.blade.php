@extends('cms.layouts._default')

@section('content') 

<div class="page-breadcrumb">
    <div class="row">
        <div class="col-5 align-self-center">
            <h4 class="page-title">Cadastrar - Página 1</h4>
        </div>
        <div class="col-7 align-self-center">
            <div class="d-flex align-items-center justify-content-end">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li class="breadcrumb-item">
                            <a href="#">Páginas</a>
                        </li>       
                        <li class="breadcrumb-item">
                            <a href="#">Página 1</a>
                        </li>                                            
                        <li class="breadcrumb-item active" aria-current="page">Cadastrar</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
</div>


<div class="container-fluid">
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Project Assinging</h4>
                    <h6 class="card-subtitle">To use add <code>.r-separator</code> class in the form with form styling.</h6>
                </div>
                <hr class="m-t-0">
                <form class="form-horizontal r-separator">
                    <div class="card-body">
                        <div class="form-group row align-items-center m-b-0">
                            <label for="inputEmail3" class="col-3 text-right control-label col-form-label">Título</label>
                            <div class="col-9 border-left p-b-10 p-t-10">
                                <input type="text" class="form-control" id="inputEmail3" placeholder="Título">
                            </div>
                        </div>
                        <div class="form-group row align-items-center m-b-0">
                            <label for="inputEmail3" class="col-3 text-right control-label col-form-label">Sub-Título</label> 
                            <div class="col-9 border-left p-b-10 p-t-10">
                                <input type="text" class="form-control" id="inputEmail3" placeholder="Sub-Título">
                            </div>
                        </div>
                        <div class="form-group row align-items-center m-b-0">
                            <label for="inputEmail3" class="col-3 text-right control-label col-form-label">Registro em destaque</label>
                            <div class="col-9 border-left p-b-10 p-t-10">
                                <div class="custom-control custom-checkbox mr-sm-2">
                                    <input type="checkbox" class="custom-control-input" id="checkbox2" value="check">
                                    <label class="custom-control-label" for="checkbox2"> Destaque</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row align-items-center m-b-0">
                            <label for="inputEmail3" class="col-3 text-right control-label col-form-label">Imagem em destaque</label>
                            <div class="col-9 border-left p-b-10 p-t-10">
                                <div class="fallback dropzone">
                                    <input name="file" type="file" multiple />
                                </div>
                            </div>
                        </div>
                        <div class="form-group row align-items-center m-b-0">
                            <label for="inputEmail3" class="col-3 text-right control-label col-form-label">Categoria</label> 
                            <div class="col-9 border-left p-b-10 p-t-10">
                                <select class="form-control">
                                    <option>Selecione</option>
                                    <option>Categoria 1</option>
                                    <option>Categoria 2</option>
                                    <option>Categoria 3</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row align-items-center m-b-0">
                            <label for="inputEmail3" class="col-3 text-right control-label col-form-label">Resumo</label> 
                            <div class="col-9 border-left p-b-10 p-t-10">
                                <textarea class="form-control" rows="3" placeholder="Resumo do conteúdo"></textarea>
                            </div>
                        </div>  
                        <div class="form-group row align-items-center m-b-0">
                            <label for="inputEmail3" class="col-3 text-right control-label col-form-label">Sub-Título</label> 
                            <div class="col-9 border-left p-b-10 p-t-10">
                                <input type="text" class="form-control" id="inputEmail3" placeholder="Sub-Título">
                            </div>
                        </div>                                                
                    </div>
                    <div class="card-body">
                        <div class="form-group m-b-0 text-right">
                            <button type="submit" class="btn btn-info waves-effect waves-light">Cadastrar</button>
                            <button type="submit" class="btn btn-dark waves-effect waves-light">Cancelar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Employee Timing</h4>
                    <h6 class="card-subtitle">To use add <code>.r-separator</code> class in the form with form styling.</h6>
                </div>
                <hr class="m-t-0">
                <form class="form-horizontal r-separator">
                    <div class="card-body">
                        <div class="form-group row align-items-center m-b-0">
                            <label for="inputEmail3" class="col-3 text-right control-label col-form-label">Employee Name</label>
                            <div class="col-9 border-left p-b-10 p-t-10">
                                <input type="text" class="form-control" id="inputEmail3" placeholder="Employee Name Here">
                            </div>
                        </div>
                        <div class="form-group row align-items-center m-b-0">
                            <label for="inputEmail3" class="col-3 text-right control-label col-form-label">Project Name</label>
                            <div class="col-9 border-left p-b-10 p-t-10">
                                <input type="text" class="form-control" id="inputEmail3" placeholder="Project Name Here">
                            </div>
                        </div>
                        <div class="form-group row align-items-center m-b-0">
                            <label for="inputEmail3" class="col-3 text-right control-label col-form-label">Date</label>
                            <div class="col-9 border-left p-b-10 p-t-10">
                                <input type="date" class="form-control" id="inputEmail3" placeholder="Date Here">
                            </div>
                        </div>
                        <div class="form-group row align-items-center m-b-0">
                            <label for="inputEmail3" class="col-3 text-right control-label col-form-label">Rate Per Hour</label>
                            <div class="col-9 border-left p-b-10 p-t-10">
                                <input type="text" class="form-control" id="inputEmail3" placeholder="Rate Per Hour Here">
                            </div>
                        </div>
                        <div class="form-group row align-items-center m-b-0">
                            <label for="inputEmail3" class="col-3 text-right control-label col-form-label">Start Time</label>
                            <div class="col-9 border-left p-b-10 p-t-10">
                                <input type="time" class="form-control" id="inputEmail3" placeholder="Start Time Here">
                            </div>
                        </div>
                        <div class="form-group row align-items-center m-b-0">
                            <label for="inputEmail3" class="col-3 text-right control-label col-form-label">End Time</label>
                            <div class="col-9 border-left p-b-10 p-t-10">
                                <input type="time" class="form-control" id="inputEmail3" placeholder="End Time Here">
                            </div>
                        </div>
                        <div class="form-group row align-items-center m-b-0">
                            <label for="inputEmail3" class="col-3 text-right control-label col-form-label">Notes</label>
                            <div class="col-9 border-left p-b-10 p-t-10">
                                <input type="text" class="form-control" id="inputEmail3" placeholder="Notes Here">
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="card-body">
                        <div class="form-group m-b-0 text-right">
                            <button type="submit" class="btn btn-info waves-effect waves-light">Cadastrar</button>
                            <button type="submit" class="btn btn-dark waves-effect waves-light">Cancelar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

@endsection 