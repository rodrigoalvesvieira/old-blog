---
layout: post
title: Mutate method visibility on the go in Ruby
---

<span class="drops">R</span>uby is extremely flexible - for programmer´s joy or madness - it lets you change almost anything at will. Well, method visibility too.

Look at the following code snippet:

<div class="code">
  <script src="https://gist.github.com/1593901.js?file=father_and_son.rb"></script>
</div>

In the <span class="small_code">ShamelessSon</span> class, we told Ruby to mark the <span class="small_code">bank_account</span> method as public, making it available to this class' instances to use, in this case, <span class="small_code">dillinger</span>.

Needless to say, this technique is dangerous. Use it wisely, only redefining visibility of the methods from the classes that you *know* and *trust*. 
