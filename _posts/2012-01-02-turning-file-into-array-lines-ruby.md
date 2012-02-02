---
layout: post
title: Turning a file into an array of lines in Ruby
---

<span class="drops">G</span>etting lines of a file stored in an array might be something very useful. In Ruby you can do this with admirable ease with the basic <span class="small_code">IO</span> class:

{% highlight ruby %}

lines_array = IO.readlines("names.txt")

lines_array.length

puts lines_array.first

puts lines_array[5]

puts lines_array.last

# The lines are print with an ending newline (\n)
# Use the String#chomp method to remove it.

puts lines_array[3].chomp

{% endhighlight %}

That's it. So simple and beautiful, yet powerful.
