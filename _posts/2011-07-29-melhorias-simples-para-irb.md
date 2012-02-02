---
layout: post
title: Melhorias simples para o IRB #1
---

<span class="drops">O</span> console interativo do Ruby - IRB - é o playground do programador Ruby, seja nele puro ou no console do Rails, se você desenvolve nessa plataforma provavelmente passa uma parte do seu dia de trabalho escrevendo código nele. Não seria legal se algumas configurações básicas o deixassem mais parecido com seu editor de texto?

Uma simples linha de configuração do próprio IRB já deixa o prompt mais enxuto (especialmente útil se você usa a RVM).

Agora instale o [Wirble], uma gem para habilitar highlighting de sintaxe no prompt.

<pre class="terminal">
  $ gem install wirble
</pre>

Você precisa agora abrir o arquivo .irbrc na home do seu usuário e inserir o código seguinte:

<div class="code">
  <script src="https://gist.github.com/1108134.js?file=gistfile1.rb"></script>
</div>

Eis como fica o seu _irb_ com essas poucas linhas de código:

![IRB com prompt simplificado e Wirble](/public/images/irb_wirble.png "IRB com prompt simplificado e Wirble")

Outro set de melhorias pro IRB são oferecidas pelo projeto [IRB Utility Belt] que eu particularmente não uso mais sei que adiciona ainda mais funcionalidades ao console e já foi amplamente abordado num [post do Fábio Akita].

Pronto, já dá pra você ir programar num console mais amigável :D

Isso é tudo, pessoal!

Read [this post in English].

[IRB Utility Belt]: http://utilitybelt.rubyforge.org/
[post do Fábio Akita]: http://akitaonrails.com/2008/09/21/ruby-irb-utility-belt
[this post in English]: /wirble-a-small-addition-to-irb
[Wirble]: https://rubygems.org/gems/wirble
