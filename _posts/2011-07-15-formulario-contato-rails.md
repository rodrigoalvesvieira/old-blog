---
layout: post
title: Criando um form de contato no Rails
---

<span class="drops">U</span>mas das funcionalidades mais comuns em sites por toda a internet são os formulários de contato, aqueles que ficam geralmente numa página do seu site dedicada a receber feedback dos usuários.

Essa semana precisei pela primeira vez desenvolver um form desses em um projeto Rails e apanhei um pouco então aqui vai a maneira como eu consegui fazer:

Primeiro criei o mailer, com ActionMailer:

<div class="code">
  <script src="https://gist.github.com/1084919.js?file=contact_mailer.rb"></script>
</div>

É importante passar esses parâmetros para o método <span class="small_code">mail</span> pois eles fazem a 'cara' da mensagem, existem [outros parâmetros] disponíveis. Também é muito importante o uso do método <span class="small_code">headers</span> pois o [sendmail] em hosts, como a Locaweb(não sei nos outros), só envia emails com a presença do <span class="small_code">Return-Path</span> no cabeçalho.

Você precisa definir no controller a ação que vai despachar o email:

<div class="code">
  <script src="https://gist.github.com/1084919.js?file=pages_controller.rb"></script>
</div>

Vamos mapear a rota de envio do email:

<div class="code">
  <script src="https://gist.github.com/1084919.js?file=routes.rb"></script>
</div>

Você não quer receber spam, certo? Então adicione a seguinte linha ao _Gemfile_ do seu app:

<div class="code">
  <script src="https://gist.github.com/1084919.js?file=Gemfile"></script>
</div>

Não se esqueça de rodar o bundler:

<pre class="terminal">
  $ bundle
</pre>

Crie então o formulário na página de contato:

<div class="code">
  <script src="https://gist.github.com/1084919.js?file=contact.html.erb"></script>
</div>

Agora o template do email que vai ser enviado:

<div class="code">
  <script src="https://gist.github.com/1084919.js?file=send_email.html.erb"></script>
</div>

Você precisa ainda adicionar algumas linhas de configuração ao seu ambiente de produção(altere o host para testar em desenvolvimento):

<div class="code">
  <script src="https://gist.github.com/1084919.js?file=production.rb"></script>
</div>

Vá agora ao seu formulário submeter o email e visite sua caixa de entrada :D

Eis um formulário básico e funcional, ele não possui validações (para isso você vai ter que extender o ActiveModel ou usar um model do ActiveRecord) e logo não possui mensagens de erro, mas funciona que é uma beleza.

Eu não sei se essa abordagem está legal em Rails, mas funcionou como esperado para mim. Se você conhece uma maneira melhor de fazer isso, deixe nos comentários :D. Espero que possa ser útil para você também!

Read [this article in English].

[sendmail]: http://www.sendmail.com/sm/open_source/
[outros parâmetros]: http://api.rubyonrails.org/classes/ActionMailer/Base.html
[this article in English]: /creating-contact-form-rails-3

