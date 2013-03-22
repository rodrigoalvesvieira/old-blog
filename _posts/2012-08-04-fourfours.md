---
layout: post
title: The Four Fours in Ruby
---

<span class="drops">W</span>hen I was 10, I won a gift from my godfather that was a collection of mathematical puzzles and curiosities by Malba Tahan <a href="#foot-link-1">[1]</a>, a brazillian professor who spent part os his life trying to demonstrate to kids that Math is not hard and is as fundamental for humans as the ability to talk.

In the collection there was this puzzle called The Four Fours, in which the author explained that any number from 0 to 100 can be represented by four 4 numerals combined together, through many different operations like factorials and square roots.

Having nothing more urgent to do, I decided to write them down, in Ruby code:

{% highlight ruby %}

module Math
  class << self
    def factorial(n)
      1.upto(n).inject(:*)
    end

    alias :fac :factorial
  end
end

puts 4-4+4-4}
puts 44/44
puts 4/4 + 4/4
puts (4 + 4 + 4)/4
puts (4-4)/4 + 4
puts (4*4+4)/4}
puts 4 + (4+4)/4
puts 4-4/4 + 4
puts (4+4)/4 * 4
puts 4 + 4 + (4/4)
puts 10 - #{(44-4)/4
puts (Math.log2(4+4) + 4 + 4).to_i
puts (44+4)/4
puts "13 - #{(Math.fac(4)) - 44/4
puts "14 - #{(Math.fac(4)/4) + 4 + 4
puts (44/4) + 4
puts 4*4 - (4-4)
puts 4*4 + 4/4
puts 4 * 4 + 4/Math.sqrt(4).to_i
puts Math.fac(4) - 4 - 4/4
puts 4 * (4 + (4/4))
puts Math.fac(4) - 4 + 4/4
puts Math.fac(4) - (4+4)/4
puts (Math.fac(4) * 4 - 4)/4
puts 4*4 - (-4-4)
puts Math.sqrt(444).to_i + 4
puts Math.fac(4) + (4+4)/4
puts Math.fac(4) + 4 - 4/4
puts {44 - 4*4
puts Math.fac(4) + 4 + 4/4
puts (Math.fac(4) + Math.sqrt(4) + Math.sqrt(4) + Math.sqrt(4)).to_i
puts (Math.fac(4) + 4)/4 + Math.fac(4)
puts 4 * 4 + 4 * 4
puts 33
puts (4 * 4 * Math.sqrt(4) + Math.sqrt(4)).to_i
puts Math.fac(4)+44/4
puts Math.fac(4) + 4 *Math.sqrt(4).to_i + 4
puts Math.fac(4) + ((Math.fac(4) + Math.sqrt(4))/Math.sqrt(4)).to_i
puts 44 - Math.fac(4)/4
puts "39 - "
puts Math.fac(4) - 4 + Math.fac(4) - 4
puts "41 - "
puts 44 - 4 + Math.sqrt(4).to_i
puts 44 - (4/4)
puts 44 + 4 - 4
puts 44 + (4/4)
puts "46 - "
puts Math.fac(4) + Math.fac(4) - (4/4)
puts 4 * (4+4+4)
puts Math.fac(4) + Math.fac(4) + 4/4
puts Math.exp(4).to_i + 4-4-4
puts Math.exp(4).to_i + (4/4)- 4
puts (Math.fac(4) + Math.fac(4) + Math.sqrt(4) + Math.sqrt(4)).to_i
puts "53 - "
puts Math.fac(4) + Math.fac(4) + 4 + Math.sqrt(4).to_i
puts (Math.log(44, 4) ** 4).floor
puts (Math.fac(4) + Math.fac(4) + Math.sqrt(4)*4).to_i
puts Math.exp(4).to_i + 4 - (4/4)
puts Math.exp(4).to_i + 4+4-4
puts "59 - "
puts 4*4*4 - 4
puts "61 - "
puts "62 - "
puts "63 - "
puts "64 - "
puts "65 - "
puts Math.exp(4).to_i + 4+4+4
puts Math.exp(4+4).to_i / 44
puts 4*4*4 + 4
puts "69 - "
puts (Math.fac(4) + Math.fac(4) + Math.fac(4) - Math.sqrt(4)).to_i
puts "71 - "
puts "72 - "
puts "73 - "
puts (Math.fac(4) + Math.fac(4) + Math.fac(4) + Math.sqrt(4)).to_i
puts "75 - "
puts "76 - "
puts "77 - "
puts "78 - "
puts "79 - "
puts "80 - "
puts "81 - "
puts "82 - "
puts "83 - "
puts "84 - "
puts "85 - "
puts "86 - "
puts "87 - "
puts 44 + 44
puts "89 - "
puts "90 - "
puts "91 - "
puts Math.fac(4) + Math.fac(4)
puts "93 - "
puts Math.log2(4.4 ** 44).floor
puts Math.fac(4) * 4 - 4/4
puts Math.fac(4) * 4 + (4-4)
puts Math.fac(4) * 4 + 4/4
puts "98 - "
puts 99
puts Math.fac(4) * 4 + Math.sqrt(4).to_i * Math.sqrt(4).to_i

{% endhighlight %}

As you can see, my resolution is far from being complete, but I'll be pasting them here as soon as I solve them. I accept suggestions for new solutions or for making existing ones better.

<p class="foot-link" id="foot-link-1">1: <a title="Malba Tahan article on Wikipedia" href="http://en.wikipedia.org/wiki/Malba_Tahan">Malba Tahan</a>, Brazilian author and professor.</p>