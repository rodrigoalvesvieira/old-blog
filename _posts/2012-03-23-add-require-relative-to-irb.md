---
layout: post
title: Adding require_relative to IRB
---

<span class="drops">R</span>uby 1.9 brought <span class="small_code">require_relative</span> to the rubyists' life and it's a nice thing. If you like it, you probably would like to use it in the interactive console.

For some reason I don't yet know for sure, <span class="small_code">require_relative</span> does not work on IRB:

{% highlight sh %}

>> require_relative "doom"
LoadError: cannot infer basepath
	from (irb):2:in `require_relative'
	from (irb):2
	from /Users/rodrigovieira/.rbenv/versions/1.9.3-p125/bin/irb:12:in `<main>'
>>

{% endhighlight %}

So, I needed this an implemented this method and added it to the <span class="small_code">.irbrc</span> file, nothing complex, but I found it useful still:

{% highlight ruby %}

module Kernel
  def require_relative(file)
    $:.unshift Dir.pwd
    require file
  end
end

{% endhighlight %}

Hope it is as helpful to you as it is to me, I'll update this post whenever I found why this beloved method does not work in the console.