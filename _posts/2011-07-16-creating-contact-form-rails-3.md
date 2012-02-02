---
layout: post
title: Creating a contact form in Rails 3
---

<span class="drops">O</span>ne of the more common little things present in websites all over the Internet are the contact forms, those you make available for your users to get in touch.

This week I needed for the first time to develop such form in a Rails project and had a bad time doing it, so there goes the way I had to make it to work:

h2. TL;DR

The code is this post only works when using _sendmail_ as the delivering method. It wasn't tested with _SMTP_ which is more widely adopted.

h2. Step-to-step

First you should create the mailer:

<div class="code">
  <script src="https://gist.github.com/1641448.js?file=contact_mailer.rb"></script>
</div>

It's important to pass those parameters to the <span class="small_code">mail</span> method because they will be the contents of the mail you're about to send. There are "other parameters (ActionMailer API)":http://api.rubyonrails.org/classes/ActionMailer/Base.html available. It's also very important to use the <span class="small_code">headers</span> method because "sendmail (Sendmail)":http://www.sendmail.com/sm/open_source/" in some web hosts only deliver mail when <span class="small_code">Return-Path</span> is present.

Now define the action in your controller:

<div class="code">
  <script src="https://gist.github.com/1641448.js?file=pages_controller.rb"></script>
</div>

Now open the _routes.rb_ file and map the <span class="small_code">dispatch_email</span> action:

<div class="code">
<script src="https://gist.github.com/1641448.js?file=routes.rb"></script>
</div>

I bet you don't enjoy getting spammed a lot, so add the following to your _Gemfile_:

<div class="code">
  <script src="https://gist.github.com/1641448.js?file=Gemfile"></script>
</div>

And do not forget to run Bundler:

<pre class="terminal">
  $ bundle
</pre>

Then create the contact form:

<div class="code">
  <script src="https://gist.github.com/1641448.js?file=contact.html.erb"></script>
</div>

Now, write the mail template that's going to be sent:

<div class="code">
  <script src="https://gist.github.com/1641448.js?file=send_email.html.erb"></script>
</div>

You still need to tweak some configuration lines in your production environment (and change the host to test in development mode):

<div class="code">
  <script src="https://gist.github.com/1641448.js?file=production.rb"></script>
</div>

Now submit the form and go look at your inbox!

There you have it. A basic, working contact form. It doesn't validate input (you'd have extend ActiveModel for this particular approach, or use a Model with the Mailer, or/and use JavaScript in the client side) and thus it doesn't handle error messages, for example, but it works just fine.

This is <s>certainly</s> not the best approach in Rails, but it worked as expected. If you know a better way of achieving this very goal, leave it in the comments. I hope this post was useful to you!
