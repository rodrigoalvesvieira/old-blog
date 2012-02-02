---
layout: post
title: Creating a contact form in Rails 3
---

<span class="drops">O</span>ne of the more common little things present in websites all over the Internet are the contact forms, those you make available for your users to get in touch.

This week I needed for the first time to develop such form in a Rails project and had a bad time doing it, so there goes the way I had to make it to work:

TL;DR
-----

The code is this post only works when using _sendmail_ as the delivering method. It wasn't tested with _SMTP_ which is more widely adopted.

Step-to-step
------------

First you should create the mailer:

{% highlight ruby %}

# coding: utf-8
class ContactMailer < ActionMailer::Base

  attr_accessor :name, :email, :message

  default to: "name@myapp.com",
          from: "contact@myapp.com"

  headers = {'Return-Path' => 'contact@myapp.com'}

  def send_email(user_info)
    @user_info = user_info

    mail(
      to: "name@myapp.com",
      subject: "MyApp's Contact Form",
      from: "MyApp <contact@myapp.com>",
      return_path: "contact@myapp.com",
      date: Time.now,
      content_type: "text/html"
    )
  end
end

{% endhighlight %}

It's important to pass those parameters to the <span class="small_code">mail</span> method because they will be the contents of the mail you're about to send. There are [other parameters] available. It's also very important to use the <span class="small_code">headers</span> method because [sendmail] in some web hosts only deliver mail when <span class="small_code">Return-Path</span> is present.

Now define the action in your controller:

{% highlight ruby %}

class PagesController < ApplicationController

  def contact
  end

  def dispatch_email
    user_info = params[:user_info]
    if ContactMailer.send_email(user_info).deliver
      flash[:notice] = "Message sent!"
    else
      flash[:notice] = "Oops. Something bad happened and your message could not be sent."
    end
    redirect_to contact_url
  end

end

{% endhighlight %}

Now open the _routes.rb_ file and map the <span class="small_code">dispatch_email</span> action:

{% highlight ruby %}

MyApp::Application.routes.draw do
  match "contact", to: "pages#contact", as: "contact"
  match "dispatch_email", to: "pages#dispatch_email", as: "dispatch_email", method: :post
end

{% endhighlight %}

I bet you don't enjoy getting spammed a lot, so add the following to your _Gemfile_:

{% highlight ruby %}

gem "recaptcha", require: "recaptcha/rails"

{% endhighlight %}

And do not forget to run _Bundler_:

<pre class="terminal">
  $ bundle
</pre>

Then create the contact form, <span class="small_code">contact.html.erb</span>:

{% highlight erb %}

<h1>Get in touch!</h1>
<p>Send us your message through the following form</p>

<%= form_tag dispatch_email_path, method: :post do %>
  <%= label_tag "user_info[name]", "Name" %><br/>
  <%= text_field_tag "user_info[name]" %><br />
  <%= label_tag "user_info[email]", "Email" %><br/>
  <%= text_field_tag "user_info[email]" %><br />
  <%= label_tag "user_info[message]", "Message" %><br/>
  <%= text_area_tag "user_info[message]", "", size: "60x10" %><br/>
  <%= recaptcha_tags %><br/>
  <%= submit_tag "Send" %>
<% end %>

{% endhighlight %}


Now, write the mail template that's going to be sent:

{% highlight erb %}

MyApp's contact form

Name: <%= @user_info["name"] %>
Email: <%= @user_info["email"] %>
Message: <%= @user_info["message"] %>

{% endhighlight %}

Name it <span class="small_code">send_email.html.erb</span>. 

You still need to tweak some configuration lines in your production environment (and change the host to test in development mode):

{% highlight ruby %}

MyApp::Application.configure do
  config.action_mailer.default_url_options = {host: 'www.myapp.com' }
  config.action_mailer.perform_deliveries = true
  config.action_mailer.delivery_method = :sendmail
  config.action_mailer.sendmail_settings = {
    location: '/usr/sbin/sendmail',
    arguments: "-i -t -f contact@myapp.com"
  }
end

{% endhighlight %}

Now submit the form and go look at your inbox!

There you have it. A basic, working contact form. It doesn't validate input (you'd have extend ActiveModel for this particular approach, or use a Model with the Mailer, or/and use JavaScript in the client side) and thus it doesn't handle error messages, for example, but it works just fine.

This is <s>certainly</s> not the best approach in Rails, but it worked as expected. If you know a better way of achieving this very goal, leave it in the comments. I hope this post was useful to you!

[sendmail]:http://www.sendmail.com/sm/open_source/
[other parameters]: http://api.rubyonrails.org/classes/ActionMailer/Base.html
