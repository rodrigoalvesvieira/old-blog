---
layout: post
title: Adding HTTP Basic Authentication in Rails 3
---

<span class="drops">W</span>e generally maintain at least a staging version of our web applications in order to _actually_ test them in production mode before releasing new features to the public. If you definitely want to hide your Rails app from the public, bear with me, here's how to do it, easily:

Firstly, make a copy of your _production.rb_ file and call it _staging.rb_, and of course it should be in _your_app/config/environments/_.

{% highlight ruby %}

MyApp::Application.configure do
  # ...
end

{% endhighlight %}


Of course, you must now make sure your staging server knows you want it to load Rails within the staging environment.

Now implement the actual code, fortunately, Rails itself already has a method called <span class="small_code">authenticate_or_request_with_http_basic</span>:

{% highlight ruby %}

class ApplicationController < ActionController::Base
  protect_from_forgery
  before_filter :require_http_basic_auth if Rails.env == "stage"
  
  def require_http_basic_auth
    authenticate_or_request_with_http_basic do |login, password|
      if user = Admin.find_by_login(login)
        user.valid_password?(password)
      else
        false
      end
    end
  end
  
  #...
end

{% endhighlight %}

As you can see, here I'm assuming you have an <span class="small_code">Admin</span> model whose authentication parameters are login and password.

Now when you request the page the browser will prompt you a small window for you to login or you can just hit _login:password@example.com_.

That's all. Hope this was helpful. See you in the next post!