---
layout: post_no_comments
title: Ruby Method Visibility Alternative Notation
---

<span class="drops">P</span>rogrammers have the recurrent necessity to control access to methods and variables in their code. In Ruby we generally do it all by declaring the keywords <span class="small_code">public</span>(not often, though), <span class="small_code">protected</span> and <span class="small_code">private</span> before method definitions. The file below illustrates what I'm talking about:

{% highlight ruby %}

class GreekAlphabet
  def alpha
  end

  protected

  def beta
  end

  def gamma
  end

  private

  def delta
  end

  def epsilon
  end

end

{% endhighlight %}

Here the second and third methods are made protected and the last two ones, private. The first method is public, we don't need to specify that because it's not preceded by any access declarator and defaults to public.

There is nothing wrong with the approach taken in the <span class="small_code">GreekAlphabet</span> class, however there is another notation for access declaration in Ruby that sometimes may be easier to read:

{% highlight ruby %}

class GreekAlphabet

  def alpha
  end

  def beta
  end

  def gamma
  end

  def delta
  end

  def epsilon
  end

  protected :beta, :gamma
  private :delta, :epsilon

end

{% endhighlight %}

Notice that we did not pass the <span class="small_code">alpha</span> method to neither <span class="small_code">protected</span> nor <span class="small_code">private</span> and so it's public.

A final note
------------

Actually, the two notations aren't two different things. In fact, these three functions work by setting their visibility state to all the subsequently defined methods, *or* to those passed directly to it as symbols. A similar behavior may be observed in the method <span class="small_code">Module#module_function</span>.