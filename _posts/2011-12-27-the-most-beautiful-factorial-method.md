---
layout: post
title: The most beautiful Ruby factorial method
---

<span class="drops">R</span>uby sometimes let you write beautiful code. I think I've come to one of those moments today implementing a factorial method. As you'd expect, this method takes a number as argument and return it's factorial. Ohhh

{% highlight ruby %} 

def factorial(n)
  1.upto(n).inject(:*)
end

puts factorial(3)

puts factorial(6)

{% endhighlight %}

<div class="code">
  <script src="https://gist.github.com/1522114.js?file=factorial.rb"></script>
</div>

Seriously, isn't it beautiful?
