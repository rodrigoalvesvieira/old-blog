---
layout: post_no_comments
title: Turning a File Into an Array of Lines in Ruby
---

<span class="drops">G</span>etting lines of a file stored in an array might be something very useful. In Ruby you can do this with admirable ease with the basic <span class="small_code">IO</span> class:
<br/>

{% highlight ruby %}

lines_array = IO.readlines("/usr/share/dict/words")

lines_array.length # => 235886

puts lines_array.first # => "A\n"

puts lines_array[1000] # => "accordantly\n"

puts lines_array.last # => "Zyzzogeton\n"

# The lines are print with an ending newline (\n)
# Use the String#chomp method to remove it.

puts lines_array[2000].chomp # => actinomeric

{% endhighlight %}

That's it. Simple, beautiful and yet, powerful.