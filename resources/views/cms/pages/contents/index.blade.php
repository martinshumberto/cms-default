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
                            <label for="inputEmail3" class="col-3 text-right control-label col-form-label">Conteúdo</label> 
                            <div class="col-9 border-left p-b-10 p-t-10">
                                <textarea name="ckeditor" id="ckeditor" cols="50" rows="15" class="ckeditor">
                                    <h1><img alt="Saturn V carrying Apollo 11" class="right" src="../../assets/images/img2.jpg" height="250" /> Apollo 11</h1>
                                    <p><strong>Apollo 11</strong> was the spaceflight that landed the first humans, Americans <a href="http://en.wikipedia.org/wiki/Neil_Armstrong">Neil Armstrong</a> and <a href="http://en.wikipedia.org/wiki/Buzz_Aldrin">Buzz Aldrin</a>, on the Moon on July 20, 1969, at 20:18 UTC. Armstrong became the first to step onto the lunar surface 6 hours later on July 21 at 02:56 UTC.</p>
                                    <p>Armstrong spent about
                                        <s>three and a half</s> two and a half hours outside the spacecraft, Aldrin slightly less; and together they collected 47.5 pounds (21.5&nbsp;kg) of lunar material for return to Earth. A third member of the mission, <a href="http://en.wikipedia.org/wiki/Michael_Collins_(astronaut)">Michael Collins</a>, piloted the <a href="http://en.wikipedia.org/wiki/Apollo_Command/Service_Module">command</a> spacecraft alone in lunar orbit until Armstrong and Aldrin returned to it for the trip back to Earth.</p>
                                    <h2>Broadcasting and <em>quotes</em> <a id="quotes" name="quotes"></a></h2>
                                    <p>Broadcast on live TV to a world-wide audience, Armstrong stepped onto the lunar surface and described the event as:</p>
                                    <blockquote>
                                        <p>One small step for [a] man, one giant leap for mankind.</p>
                                    </blockquote>
                                    <p>Apollo 11 effectively ended the <a href="http://en.wikipedia.org/wiki/Space_Race">Space Race</a> and fulfilled a national goal proposed in 1961 by the late U.S. President <a href="http://en.wikipedia.org/wiki/John_F._Kennedy">John F. Kennedy</a> in a speech before the United States Congress:</p>
                                    <blockquote>
                                        <p>[...] before this decade is out, of landing a man on the Moon and returning him safely to the Earth.</p>
                                    </blockquote>
                                    <h2>Technical details <a id="tech-details" name="tech-details"></a></h2>
                                    <table align="right" border="1" bordercolor="#ccc" cellpadding="5" cellspacing="0" style="border-collapse:collapse">
                                        <caption><strong>Mission crew</strong></caption>
                                        <thead>
                                            <tr>
                                                <th scope="col">Position</th>
                                                <th scope="col">Astronaut</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Commander</td>
                                                <td>Neil A. Armstrong</td>
                                            </tr>
                                            <tr>
                                                <td>Command Module Pilot</td>
                                                <td>Michael Collins</td>
                                            </tr>
                                            <tr>
                                                <td>Lunar Module Pilot</td>
                                                <td>Edwin &quot;Buzz&quot; E. Aldrin, Jr.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p>Launched by a <strong>Saturn V</strong> rocket from <a href="http://en.wikipedia.org/wiki/Kennedy_Space_Center">Kennedy Space Center</a> in Merritt Island, Florida on July 16, Apollo 11 was the fifth manned mission of <a href="http://en.wikipedia.org/wiki/NASA">NASA</a>&#39;s Apollo program. The Apollo spacecraft had three parts:</p>
                                    <ol>
                                        <li><strong>Command Module</strong> with a cabin for the three astronauts which was the only part which landed back on Earth</li>
                                        <li><strong>Service Module</strong> which supported the Command Module with propulsion, electrical power, oxygen and water</li>
                                        <li><strong>Lunar Module</strong> for landing on the Moon.</li>
                                    </ol>
                                    <p>After being sent to the Moon by the Saturn V&#39;s upper stage, the astronauts separated the spacecraft from it and travelled for three days until they entered into lunar orbit. Armstrong and Aldrin then moved into the Lunar Module and landed in the <a href="http://en.wikipedia.org/wiki/Mare_Tranquillitatis">Sea of Tranquility</a>. They stayed a total of about 21 and a half hours on the lunar surface. After lifting off in the upper part of the Lunar Module and rejoining Collins in the Command Module, they returned to Earth and landed in the <a href="http://en.wikipedia.org/wiki/Pacific_Ocean">Pacific Ocean</a> on July 24.</p>
                                    <hr />
                                    <p><small>Source: <a href="http://en.wikipedia.org/wiki/Apollo_11">Wikipedia.org</a></small></p>
                                </textarea>
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