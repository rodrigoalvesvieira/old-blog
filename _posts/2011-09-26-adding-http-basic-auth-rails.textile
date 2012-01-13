---
layout: post
title: Adding HTTP basic authentication in Rails 3
---

<span class="drops">W</span>e generally maintain at least a staging version of our web applications in order to _actually_ test them in production mode before releasing new features to the public. If you definitely want to hide your Rails app from the public, bear with me, here's how to do it, easily:

Firstly, make a copy of your _production.rb_ file and call it _staging.rb_, and of course it should be in _your_app/config/environments/_.

<div class="code">
  <script src="https://gist.github.com/1237972.js?file=staging.rb"></script>
</div>

Of course, you must now make sure your staging server knows you want it to load Rails within the staging environment.

Now implement the actual code, fortunately, Rails itself already has a method called <span class="small_code">authenticate_or_request_with_http_basic</span>:

<div class="code">
  <script src="https://gist.github.com/1237972.js?file=application_controller.rb"></script>
</div>

As you can see, here I'm assuming you have an <span class="small_code">Admin</span> model whose authentication parameters are login and password.

Now when you request the page the browser will prompt you a small window for you to login or you can just hit _login:password@example.com_.

That's all. Hope this was helpful. See you in the next post!