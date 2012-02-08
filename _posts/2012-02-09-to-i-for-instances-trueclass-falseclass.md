---
layout: post
title: Instances of TrueClass and FalseClass need to_i
---

<span class="drops">T</span>oday, in a Rails app, I needed to represent a boolean attribute coming from the database as either 1 or 0, then I called the <span class="small_code">to_i</span> method on this attribute and boom! <span class="small_code">NoMethodError</span>. There's the obvious implementation of these methods:

{% highlight ruby %}

class TrueClass
  def to_i
    return 1
  end
end

class FalseClass
  def to_i
    return 0
  end
end

true.to_i # => 1
false.to_i # => 0

{% endhighlight %}

That's it, I can't see - at least now - the reason why this ins't implemented in Ruby and I'm most certainly gonna ask somebody why. 
