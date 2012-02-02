---
layout: post
title: Wirble a small addition to IRB
---

<span class="drops">R</span>uby's Interactive Console - IRB- is the language programmer's playground, be on it's bare version or within the Rails _console_, if you're a Rubyist you probably spend a significant amount of your time inside it.

The _irb_ prompt sometimes comes clumsy and prefixed by information that you don't want to see there. 

Now install the  instale o "Wirble (Wirble)":https://rubygems.org/gems/wirble, uma gem para habilitar highlighting de sintaxe no prompt.

<pre class="terminal">
  $ gem install wirble
</pre>

Now, just open your _.irbrc_ file and type the following:

<div class="code">
  <script src="https://gist.github.com/1649311.js?file=gistfile1.rb"></script>
</div>

And that's how your _irb_ will be after a few lines of code:

!/public/images/irb_wirble.png(IRB with Wirble and a simplified prompt)!

Another set of additions to _irb_ is provided by the "IRB Utility Belt (IRB Utility Belt)":http://utilitybelt.rubyforge.org/ project, which I don't particularly like because it adds too many things, IMO. Go check this project out and find out yourself if it fits your needs

That's it. Now you've got a more friendly console to type code in!