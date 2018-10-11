        <div class="sidebar" id="sidebar">
            <nav class="sidebar-nav" id="sidebar-nav-scroller">
                <ul class="nav">
                    <li class="nav-item nav-dropdown  {!!(Route::currentRouteName() == 'cms-dashboard') ? 'open' : ' '!!}">
                        <a class="nav-link " href="{!!route('cms-dashboard')!!}">
                            <i class="mdi mdi-gauge"></i> Dashboard
                            {{-- <span class="badge badge-main badge-boxed badge-warning">New</span> --}}
                        </a>
                    </li>

                    <li class="nav-title">Administração</li>
                    <li class="nav-item nav-dropdown">
                        <a class="nav-link nav-dropdown-toggle" href="#">
                            <i class="mdi mdi-arrange-send-backward"></i> Páginas
                        </a>

                        <ul class="nav-dropdown-items">
                            <li class="nav-item">
                                <a class="nav-link" href="../../contents/apps/apps-calendar.html"> Página 1</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link " href="#">
                            <i class="mdi  mdi-apps"></i> Categorias
                        </a>
                    </li>

                    <li class="nav-item nav-dropdown">
                        <a class="nav-link nav-dropdown-toggle" href="#">
                            <i class="mdi mdi-developer-board"></i> Plugins</a>

                            <ul class="nav-dropdown-items">                            
                                <li class="nav-item">
                                    <a class="nav-link" href="../../contents/pages/pages-login.html"> Anuncios</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="../../contents/pages/pages-login.html"> Enquetes</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="../../contents/pages/pages-login.html"> Newsletters</a>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item nav-dropdown">
                            <a class="nav-link nav-dropdown-toggle" href="#">
                                <i class="mdi mdi-account-settings-variant"></i> Configurações</a>

                                <ul class="nav-dropdown-items">                            
                                    <li class="nav-item">
                                        <a class="nav-link" href="{!!route('cms-settings-site')!!}"> Site</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="../../contents/pages/pages-login.html"> Usuários</a>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item nav-dropdown">
                                <a class="nav-link nav-dropdown-toggle" href="#">
                                    <i class="mdi mdi-database"></i> Banco de Dados</a>

                                    <ul class="nav-dropdown-items">                            
                                        <li class="nav-item">
                                            <a class="nav-link" href="../../contents/pages/pages-login.html"> Backup</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="../../contents/pages/pages-login.html"> Limpesa</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item nav-dropdown ">
                                    <a class="nav-link " href="#">
                                        <i class="mdi mdi-ticket-account"></i> Suporte
                                        <span class="badge badge-main badge-boxed badge-warning">Novo</span>
                                    </a>
                                </li>

                                <li class="nav-title">
                                    Administração Consilio
                                </li>
                                <li class="nav-item nav-dropdown ">
                                    <a class="nav-link " href="{!!route('cms-modules')!!}">
                                        <i class="mdi mdi-application"></i> Módulos
                                    </a>
                                </li>
                                <li class="nav-item nav-dropdown ">
                                    <a class="nav-link " href="{!!route('cms-settings-system')!!}">
                                        <i class="mdi mdi-settings-box"></i> Sistema                                        
                                    </a>
                                </li>                             

                            </ul>
                        </nav>

                    </div>