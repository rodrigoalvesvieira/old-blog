---
layout: post_no_comments
title: Por dentro do Rails 3.1 - Novidades Gerais
---

<span class="drops">O</span> Rails 3.1 está chegando, muita coisa nova já foi anunciada, principalmente em relação ao asset pipeline. Esse é o primeiro post de uma série que eu farei abordando um assunto de cada vez, agora Mudanças Gerais, depois ActiveRecord, ActionPack até o Asset Pipeline.

Sintaxe
-------

Uma das primeiras mudanças que você nota logo após o <span class="small_code">$ rails new my_app</span> é o uso da nova sintaxe de Hashes do Ruby 1.9 no código gerado, o que eu acho muito legal porque "empurra" os devs pro uso da nova versão.

A diferença é simples e pode ser vista no código abaixo, que fala por si mesmo :D

{% highlight ruby %}

# Velha sintaxe (Ruby <= 1.8)
match "submit", to: "talks#submit_proposal", :as => "submit", method: :post

# Nova sintaxe (Ruby 1.9)
match "submit", to: "talks#submit_proposal", as: "submit", method: :post

{% endhighlight %}

Se você for old-school ainda pode gerar o código no estilo Ruby 1.8 passando <span class="small_code">--old-style-hash</span> como opção.

<pre class="terminal">
  $ rails g scaffold Post title:string body:text author_id:integer --old-style-hash
</pre>

<br/>

Resolução 'automática' de Dependências
--------------------------------------

Agora quando você cria seu app, após os geradores realizarem seu trabalho o Bundler também é executado. Eu vi alguma discussão nos Issues do Rails no GitHub sobre isso que particularmente acho desnecessário e não sei se vai pro final release.

SCSS gerado via gerador de scaffold
-----------------------------------

Quando voce gera um scaffold o Rails 3.1 já cria automaticamente um arquivo SCSS com o nome do controller em <span class="small_code">app/assets/stylesheets</span>

Além disso o gerador já cria arquivos .coffee e .scss correspondentes, se voce não quiser isso passe a opção <span class="small_code">--skip-assets</span> ao comando.

jQuery é default
----------------

Depois de muito tempo de insistência da comunidade, o framework JavaScript finalmente é padrão.

JSON no lugar de XML
--------------------

Até o Rails 3.1 os controllers gerados criavam blocos de renderização de formatos HTML e XML, agora e HTML e JSON.

Output mais bonito de testes unitários
--------------------------------------

Uma das dependências de desenvolvimento default dos apps no Rails 3.1 a a gem [turn] que colore a saída dos seus testes.

Depreciações
------------

Algumas coisas foram depreciadas no Rails 3.1 e você vai vendo as mensagens para atualizar seu código no log de sua aplicação enquanto você desenvolve, aí vai a breve lista:

* Agora é definitivo: Templates .rhtml que já nao eram habituais desde o Rails 2.1 agora não são mais válidos.
* Pra quem usa Fixtures, o formato CSV está depreciado mas só será totalmente removido no Rails 3.2.
* Não há mais suporte pra acesso de atributos via <span class="small_code">has_and_belongs_to_many</span>, esse associador tem seu uso desencorajado há muito tempo. Use o <span class="small_code">has_many :through</span>

Até o proximo post, onde eu vou abordar as novidades no ActiveRecord 3.1.

[turn]: https://github.com/TwP/turn
[assine o feed do blog]: http://www.rodrigoalvesvieira.com/atom.xml