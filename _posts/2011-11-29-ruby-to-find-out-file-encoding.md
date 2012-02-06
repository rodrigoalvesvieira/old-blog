---
layout: post
title: Use Ruby to Find Out Some File's Encoding
---

<span class="drops">S</span>ometimes you may wanna know how a file is encoded. You can quickly accomplish that in Ruby by creating a file named, let's say, <span class="small_code">encoding.rb</span> with the following content:

{% highlight ruby %}

ARGV.each do |source_file|
  puts "#{File.basename(source_file)} encoded with #{File.open(source_file).read.encoding}"
end

{% endhighlight %}

And use it like this:

<pre class="terminal"> $ ruby encoding.rb file1.rb file2.js file3.html </pre>

If you like things the hackish way you can instead name the file without the extension and:

<pre class="terminal"> $ chmod +x encoding </pre>

and now:

<pre class="terminal"> $ ./encoding file1.rb file2.js file3.html </pre>

This may be useful. See you in the next post!

UPDATE (December 21, 2011): I released a <s>stupid</s> small gem that works as a command-line tool, [check it out].

[check it out]:https://rubygems.org/gems/encodingof
