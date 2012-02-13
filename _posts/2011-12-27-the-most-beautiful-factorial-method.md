---
layout: post
title: The Most Beautiful Ruby Factorial Method
---

<span class="drops">R</span>uby sometimes lets you write beautiful code. I think I've come to one of those moments today implementing a factorial method. As you'd expect, this method takes a number as argument and return it's factorial. Ohhh

{% highlight ruby %}


def factorial(n)
  1.upto(n).inject(:*)
end

puts factorial(3)

puts factorial(6)

{% endhighlight %}


Seriously, isn't it beautiful?
