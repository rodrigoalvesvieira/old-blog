---
layout: post
title: Criando um form de contato no Rails
---

<span class="drops">U</span>mas das funcionalidades mais comuns em sites por toda a internet são os formulários de contato, aqueles que ficam geralmente numa página do seu site dedicada a receber feedback dos usuários.

Essa semana precisei pela primeira vez desenvolver um form desses em um projeto Rails e apanhei um pouco então aqui vai a maneira como eu consegui fazer:

Primeiro criei o mailer, com ActionMailer:

{% highlight ruby %}

# coding: utf-8
class ContactMailer < ActionMailer::Base

  attr_accessor :name, :email, :message

  default to: "nome@dominio.com",
          from: "contato@dominio.com"

  headers = {'Return-Path' => 'contato@dominio.com'}

  def send_email(user_info)
    @user_info = user_info

    mail(
      to: "nome@dominio.com",
      subject: "Formulário de Contato da Minha Aplicação",
      from: "Aplicação <contato@dominio.com>",
      return_path: "contato@dominio.com",
      date: Time.now,
      content_type: "text/html"
    )
  end
end

{% endhighlight %}

É importante passar esses parâmetros para o método <span class="small_code">mail</span> pois eles fazem a 'cara' da mensagem, existem [outros parâmetros] disponíveis. Também é muito importante o uso do método <span class="small_code">headers</span> pois o [sendmail] em hosts, como a Locaweb(não sei nos outros), só envia emails com a presença do <span class="small_code">Return-Path</span> no cabeçalho.

Você precisa definir no controller a ação que vai despachar o email:

{% highlight ruby %}

class PagesController < ApplicationController

  def contact
  end

  def dispatch_email
    user_info = params[:user_info]
    if ContactMailer.send_email(user_info).deliver
      flash[:notice] = "Mensagem enviada."
    else
      flash[:notice] = "Oops. Houve algum problema, sua mensagem não pôde ser enviada."
    end
    redirect_to contact_url
  end

end

{% endhighlight %}

Vamos mapear a rota de envio do email:

{% highlight ruby %}

MyApp::Application.routes.draw do
  match "contact", to: "pages#contact", as: "contact"
  match "dispatch_email", to: "pages#dispatch_email", as: "dispatch_email", method: :post
end

{% endhighlight %}

Você não quer receber spam, certo? Então adicione a seguinte linha ao _Gemfile_ do seu app:

{% highlight ruby %}

gem "recaptcha", require: "recaptcha/rails"

{% endhighlight %}

Não se esqueça de rodar o bundler:

<pre class="terminal">
  $ bundle
</pre>

Crie então o formulário na página de contato:

{% highlight erb %}

<h1>Entre em Contato</h1>
<p>Mande sua mensagem para nós através do formulário abaixo</p>

<%= form_tag dispatch_email_path, method: :post do %>
  <%= label_tag "user_info[name]", "Nome" %><br/>
  <%= text_field_tag "user_info[name]" %><br />
  <%= label_tag "user_info[email]", "Email" %><br/>
  <%= text_field_tag "user_info[email]" %><br />
  <%= label_tag "user_info[message]", "Mensagem" %><br/>
  <%= text_area_tag "user_info[message]", "", size: "60x10" %><br/>
  <%= recaptcha_tags %><br/>
  <%= submit_tag "Enviar" %>
<% end %>

{% endhighlight %}

Agora o template do email que vai ser enviado:

{% highlight erb %}

<h1>Formulário da Minha Aplicação</h1>

<p>Nome: <%= @user_info["name"] %></p>
<p>Email: <%= @user_info["email"] %></p>
<p>Mensagem: <%= @user_info["message"] %></p>

{% endhighlight %}

Você precisa ainda adicionar algumas linhas de configuração ao seu ambiente de produção(altere o host para testar em desenvolvimento):

{% highlight ruby %}

MyApp::Application.configure do
  config.action_mailer.default_url_options = {host: 'www.dominio.com' }
  config.action_mailer.perform_deliveries = true
  config.action_mailer.delivery_method = :sendmail
  config.action_mailer.sendmail_settings = {
    location: '/usr/sbin/sendmail',
    arguments: "-i -t -f contato@dominio.com"
  }
end

{% endhighlight %}

Vá agora ao seu formulário submeter o email e visite sua caixa de entrada :D

Eis um formulário básico e funcional, ele não possui validações (para isso você vai ter que extender o ActiveModel ou usar um model do ActiveRecord) e logo não possui mensagens de erro, mas funciona que é uma beleza.

Eu não sei se essa abordagem está legal em Rails, mas funcionou como esperado para mim. Se você conhece uma maneira melhor de fazer isso, deixe nos comentários :D. Espero que possa ser útil para você também!

Read [this article in English].

[sendmail]: http://www.sendmail.com/sm/open_source/
[outros parâmetros]: http://api.rubyonrails.org/classes/ActionMailer/Base.html
[this article in English]: /creating-contact-form-rails-3

