---
layout: post
title: Use Ruby to find out some file's encoding
---

<span class="drops">S</span>ometimes you may wanna know how a file is encoded. You can quickly accomplish that in Ruby by creating a file named, let's say, <span class="small_code">encoding.rb</span> with the following content:

<div class="code">
  <script src="https://gist.github.com/1377242.js?file=encoding.rb"></script>
</div>

And use it like this:

<pre class="terminal"> $ ruby encoding.rb file1.rb file2.js file3.html </pre>

If you like things the hackish way you can instead name the file without the extension and:

<pre class="terminal"> $ chmod +x encoding </pre>

and now:

<pre class="terminal"> $ ./encoding file1.rb file2.js file3.html </pre>

This may be useful. See you in the next post!

UPDATE (December 21, 2011): I released a <s>stupid</s> small gem that works as a command-line tool, [check it out].

[check it out]:https://rubygems.org/gems/encodingof
