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
                    <h4 class="card-title">Cadastrar</h4>
                    <h6 class="card-subtitle">Adicione conteúdo na página / módulo <code>"página 1"</code> através desse formulário abaixo.</h6>
                </div>
                <hr class="m-t-0">
                <form class="form-horizontal r-separator">
                    <div class="card-body">
                        <div class="form-group row align-items-center m-b-0">
                            <label for="titulo" class="col-3 text-right control-label col-form-label">Título</label>
                            <div class="col-9 border-left p-b-10 p-t-10">
                                <input type="text" class="form-control" id="titulo" name="titulo" placeholder="Título">
                            </div>
                        </div>
                        <div class="form-group row align-items-center m-b-0">
                            <label for="subTitulo" class="col-3 text-right control-label col-form-label">Sub-Título</label> 
                            <div class="col-9 border-left p-b-10 p-t-10">
                                <input type="text" class="form-control" id="subTitulo" name="subTitulo" placeholder="Sub-Título">
                            </div>
                        </div>
                        <div class="form-group row align-items-center m-b-0">
                            <label for="registroDestaque" class="col-3 text-right control-label col-form-label">Registro em destaque</label>
                            <div class="col-9 border-left p-b-10 p-t-10">
                                <div class="custom-control custom-checkbox mr-sm-2">
                                    <input type="checkbox" class="custom-control-input" id="registroDestaque" name="registroDestaque" value="check">
                                    <label class="custom-control-label" for="registroDestaque"> Destaque</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row align-items-center m-b-0">
                            <label for="imagemDestaque" class="col-3 text-right control-label col-form-label">Imagem em destaque</label>
                            <div class="col-9 border-left p-b-10 p-t-10">
                                <div class="fallback dropzone">
                                    <input id="imagemDestaque" name="imagemDestaque" type="file" multiple />
                                </div>
                            </div>
                        </div>
                        <div class="form-group row align-items-center m-b-0">
                            <label for="categoria" class="col-3 text-right control-label col-form-label">Categoria</label> 
                            <div class="col-9 border-left p-b-10 p-t-10">
                                <select class="form-control" id="categoria" name="categoria">
                                    <option>Selecione</option>
                                    <option>Categoria 1</option>
                                    <option>Categoria 2</option>
                                    <option>Categoria 3</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row align-items-center m-b-0">
                            <label for="resumo" class="col-3 text-right control-label col-form-label">Resumo</label> 
                            <div class="col-9 border-left p-b-10 p-t-10">
                                <textarea class="form-control" id="resumo" name="resumo" rows="3" placeholder="Resumo do conteúdo"></textarea>
                            </div>
                        </div>  
                        <div class="form-group row align-items-center m-b-0">
                            <label for="conteudo" class="col-3 text-right control-label col-form-label">Conteúdo</label> 
                            <div class="col-9 border-left p-b-10 p-t-10">
                                <textarea name="ckeditor" id="ckeditor" name="conteudo" cols="50" rows="15" class="ckeditor">
                                </textarea>
                            </div>
                        </div>
                        <div class="form-group row align-items-center m-b-0">
                            <label for="autorCredito" class="col-3 text-right control-label col-form-label">Autor / Crédito</label> 
                            <div class="col-9 border-left p-b-10 p-t-10">
                                <input type="text" class="form-control" id="autorCredito" name="autorCredito" placeholder="Autor / Crédito">
                            </div>
                        </div>
                        <div class="form-group row align-items-center m-b-0">
                            <label for="tag" class="col-3 text-right control-label col-form-label">Tags</label> 
                            <div class="col-9 border-left p-b-10 p-t-10">
                                <input type="text" class="form-control" id="tag" name="tag" placeholder="Tags">
                            </div>
                        </div>   
                        <div class="form-group row align-items-center m-b-0">
                            <label for="dataInicio" class="col-3 text-right control-label col-form-label">Data e horário ínicio</label> 
                            <div class="col-9 border-left p-b-10 p-t-10">
                                <input type="datetime-local" class="form-control" id="dataInicio" name="dataInicio" placeholder="Data e horário ínicio">
                            </div>
                        </div>     
                        <div class="form-group row align-items-center m-b-0">
                            <label for="dataFim" class="col-3 text-right control-label col-form-label">Data e horário fim</label> 
                            <div class="col-9 border-left p-b-10 p-t-10">
                                <input type="datetime-local" class="form-control" id="dataFim" name="dataFim" placeholder="Data e horário fim">
                            </div>
                        </div>   
                        <div class="form-group row align-items-center m-b-0">
                            <label for="dataPublicacao" class="col-3 text-right control-label col-form-label">Data da publicação</label> 
                            <div class="col-9 border-left p-b-10 p-t-10">
                                <input type="date" class="form-control" id="dataPublicacao" name="dataPublicacao" placeholder="Data da publicação">
                            </div>
                        </div>
                        <div class="form-group row align-items-center m-b-0">
                            <label for="valor1" class="col-3 text-right control-label col-form-label">Valor 1</label> 
                            <div class="col-9 border-left p-b-10 p-t-10">
                                <input type="text" class="form-control" id="valor1" name="valor1" placeholder="Valor 1">
                            </div>
                        </div> 
                        <div class="form-group row align-items-center m-b-0">
                            <label for="valor2" class="col-3 text-right control-label col-form-label">Valor 2</label> 
                            <div class="col-9 border-left p-b-10 p-t-10">
                                <input type="text" class="form-control" id="valor2" name="valor2" placeholder="Valor 2">
                            </div>
                        </div>
                        <div class="form-group row align-items-center m-b-0">
                            <label for="valor3" class="col-3 text-right control-label col-form-label">Valor 3</label> 
                            <div class="col-9 border-left p-b-10 p-t-10">
                                <input type="text" class="form-control" id="valor3" name="valor3" placeholder="Valor 3">
                            </div>
                        </div>
                       <div class="form-group row align-items-center m-b-0">
                            <label for="registroDestaque" class="col-3 text-right control-label col-form-label">Checkbox 1</label>
                            <div class="col-9 border-left p-b-10 p-t-10">
                                <div class="custom-control custom-checkbox mr-sm-2">
                                    <input type="checkbox" class="custom-control-input" id="checkbox1" name="checkbox1" value="check">
                                    <label class="custom-control-label" for="checkbox1"> Checkbox 1</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row align-items-center m-b-0">
                            <label for="registroDestaque" class="col-3 text-right control-label col-form-label">Checkbox 2</label>
                            <div class="col-9 border-left p-b-10 p-t-10">
                                <div class="custom-control custom-checkbox mr-sm-2">
                                    <input type="checkbox" class="custom-control-input" id="checkbox2" name="checkbox2" value="check">
                                    <label class="custom-control-label" for="checkbox2"> Checkbox 2</label>
                                </div>
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
</div>

@endsection 