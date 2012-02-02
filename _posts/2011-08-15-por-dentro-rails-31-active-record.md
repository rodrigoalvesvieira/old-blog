---
layout: post
title: Por dentro do Rails 3.1 - ActiveRecord
---

<span class="drops">H</span>á duas semanas comecei uma série de posts explicando as novidades no Ruby on Rails com "um post sobre mudanças gerais (Por dentro do Rails 3.1 - Novidades Gerais)":/por-dentro-rails-31-gerais/. Nesse novo post estarei mergulhando no que há de novo com o ActiveRecord 3.1.  

h2. Pluralizacão de nome do Model

Um (railer) sabe que, por exemplo, para um model chamado Page o Rails por padrão pluraliza esse nome para a tabela no BD, ficando assim, pages.

Você pode desabilitar isso de maneira bem fácil no novo AR, com:

<div class="code">
  <script src="https://gist.github.com/1085241.js?file=page.rb"></script>
</div>

h2. Visualização da query SQL no console

Sempre foi possível visualizar as consultas ao banco feitas pelo Rails no log do seu projeto e agora você visualiza essas consultas no console do Rails também:

!/public/images/rails_console.png(Visualização da query SQL no console)!

h2. update_collumn

Esse novo método toma dois argumentos: o primeiro o nome do campo (referente a tabela da classe onde ele é chamado) e o valor a ser salvo. 

<div class="code">
  <script src="https://gist.github.com/1085241.js?file=car.rb"></script>
</div>

Importante: esse método ignora todos os callbacks, incluindo validacões. Tome cuidado!


h2. Default scope

Escopos (<span class="small_code">scope</span>) são uma mão na roda para o programador no Rails, a versão 3.1 traz* uma funcionalidade chamada <span class="small_code">default_scope</span>, demonstrada a seguir: 

<div class="code">
  <script src="https://gist.github.com/1085241.js?file=user.rb"></script>
</code>

A partir de agora o <span class="small_code">User.all</span> já retorna os dados "scopados".

P.S: Esse método já havia sido incorporado ao Rails em outros tempos mas foi removido e agora está de volta.

h2. Depreciações

Segue a lista de coisas que se aposentaram no Rails 3.1:

* Fixtures no formato CSV. (Eu nunca vi ninguém fazer isso de qualquer forma, mas agora você não pode mais. YAML é o único formato aceito.)

* Não se pode mais interpolar strings SQL em associacões e condicões, agora você tem que usar um <span class="small_code">proc</span>, exemplo:

<div class="code">
  <script src="https://gist.github.com/1085241.js?file=house.rb"></script>
</div>

* Passar hash de opcões contendo <span class="small_code">conditions</span>, <span class="small_code">group</span>, <span class="small_code">include</span>, <span class="small_code">joins</span>, <span class="small_code">offset</span>, <span class="small_code">limit</span>, <span class="small_code">order</span>, <span class="small_code">lock</span>, <span class="small_code">select</span>, <span class="small_code">from</span>, <span class="small_code">having</span>, <span class="small_code">readonly</span>, enfim, toda essa API de consulta que "um dia foi nova":http://m.onkey.org/active-record-query-interface está depreciada no novo AR onde tudo isso foi minimizado e simplificado, toda a responsabilidade de filtragem por hash dos opções passa para o método <span class="small_code">where</span>:

<div class="code">
  <script src="https://gist.github.com/1085241.js?file=gallery.rb"></script>
</div>

Essas parecem ter sido as maiores mudanças no ActiveRecord 3.1 até agora, sabendo que mais coisas podem vir até a final release, pensada pro final desse mês de Agosto. 

De qualquer forma, atualizarei esse post se descobrir mais algo importante. "Me siga no Twitter (siga Rodrigo Vieira (@_rodrigoavieira) no Twitter)":http://twitter.com/#!/_rodrigoavieira e assine o "feed do blog (Assine o feed do blog)":http://www.rodrigoalvesvieira.com/atom.xml para ficar por dentro.