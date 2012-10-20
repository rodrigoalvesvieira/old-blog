---
layout: post
title: The Four Fours in Ruby
---

<span class="drops">W</span>hen I was 10, I won a gift from my godfather that was a collection of mathematical puzzles and curiosities by Malba Tahan <a href="#foot-link-1">[1]</a>, a brazillian Math professor who spent part os his life trying to demonstrate to kids that math is not hard and is as fundamental for humans as the ability to talk.

In the collection there was this puzzle called The Four Fours, in which the author explained that any number from 0 to 100 can be represented by four 4 numerals combined together, through many different operations.

Having nothing more urgent to do, I decided to write them down, in Ruby code:

{% highlight ruby %}

module Math
  def self.factorial(n)
    1.upto(n).inject(:*)
  end
end

puts "0  - #{4-4+4-4}"
puts "1  - #{44/44}"
puts "2  - #{4/4 + 4/4}"
puts "3  - #{(4 + 4 + 4)/4}"
puts "4  - #{(4-4)/4 + 4}"
puts "5  - #{(4*4+4)/4}"
puts "6  - #{4 + (4+4)/4}"
puts "7  - #{4-4/4 + 4}"
puts "8  - #{(4+4)/4 * 4}"
puts "9  - #{4 + 4 + (4/4)}"
puts "10 - #{(44-4)/4}"
puts "11 - #{(Math.log2(4+4) + 4 + 4).to_i}"
puts "12 - #{(44+4)/4}"
puts "13 - #{(Math.factorial(4)) - 44/4}"
puts "14 - #{(Math.factorial(4)/4) + 4 + 4}"
puts "15 - #{(44/4) + 4}"
puts "16 - #{4*4 - (4-4)}"
puts "17 - #{4*4 + 4/4}"
puts "18 - #{4 * 4 + 4/Math.sqrt(4).to_i}"
puts "19 - #{Math.factorial(4) - 4 - 4/4}"
puts "20 - #{4 * (4 + (4/4))}"
puts "21 - #{Math.factorial(4) - 4 + 4/4}"
puts "22 - #{Math.factorial(4) - (4+4)/4}"
puts "23 - #{(Math.factorial(4) * 4 - 4)/4}"
puts "24 - #{4*4 - (-4-4)}"
puts "25 - #{Math.sqrt(444).to_i + 4 }"
puts "26 - #{Math.factorial(4) + (4+4)/4}"
puts "27 - #{Math.factorial(4) + 4 - 4/4}"
puts "28 - #{44 - 4*4}"
puts "29 - #{Math.factorial(4) + 4 + 4/4}"
puts "30 - #{(Math.factorial(4) + Math.sqrt(4) + Math.sqrt(4) + Math.sqrt(4)).to_i}"
puts "31 - #{(Math.factorial(4) + 4)/4 + Math.factorial(4)}"
puts "32 - #{4 * 4 + 4 * 4}"
puts "33 - "
puts "34 - #{(4 * 4 * Math.sqrt(4) + Math.sqrt(4)).to_i}"
puts "35 - #{Math.factorial(4)+44/4}"
puts "36 - #{Math.factorial(4) + 4 *Math.sqrt(4).to_i + 4}"
puts "37 - "
puts "38 - "
puts "39 - "
puts "40 - "
puts "41 - "
puts "42 - "
puts "43 - #{44 - (4/4)}"
puts "44 - #{44 + 4 - 4}"
puts "45 - #{44 + (4/4)}"
puts "46 - "
puts "47 - #{Math.factorial(4) + Math.factorial(4) - (4/4)}"
puts "48 - #{4 * (4+4+4)}"
puts "49 - #{Math.factorial(4) + Math.factorial(4) + 4/4}"
puts "50 - #{Math.exp(4).to_i + 4-4-4}"
puts "51 - #{Math.exp(4).to_i + (4/4)- 4}"
puts "52 - #{(Math.factorial(4) + Math.factorial(4) + Math.sqrt(4) + Math.sqrt(4)).to_i}"
puts "53 - "
puts "54 - "
puts "55 - #{(Math.log(44, 4) ** 4).floor}"
puts "56 - #{(Math.factorial(4) + Math.factorial(4) + Math.sqrt(4)*4).to_i}"
puts "57 - #{Math.exp(4).to_i + 4 - (4/4)}"
puts "58 - #{Math.exp(4).to_i + 4+4-4}"
puts "59 - "
puts "60 - #{4*4*4 - 4}"
puts "61 - "
puts "62 - "
puts "63 - "
puts "64 - "
puts "65 - "
puts "66 - #{Math.exp(4).to_i + 4+4+4}"
puts "67 - #{Math.exp(4+4).to_i / 44}"
puts "68 - #{4*4*4 + 4}"
puts "69 - "
puts "70 - #{(Math.factorial(4) + Math.factorial(4) + Math.factorial(4) - Math.sqrt(4)).to_i}"
puts "71 - "
puts "72 - "
puts "73 - "
puts "74 - #{(Math.factorial(4) + Math.factorial(4) + Math.factorial(4) + Math.sqrt(4)).to_i}"
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
puts "88 - #{44 + 44}"
puts "89 - "
puts "90 - "
puts "91 - "
puts "92 - #{44 + Math.factorial(4) + Math.factorial(4)}"
puts "93 - "
puts "94 - #{Math.log2(4.4 ** 44).floor}"
puts "95 - #{Math.factorial(4) * 4 - 4/4 }"
puts "96 - #{Math.factorial(4) * 4 + (4-4)}"
puts "97 - #{Math.factorial(4) * 4 + 4/4 }"
puts "98 - "
puts "99 - "
puts "100 - #{Math.factorial(4) * 4 + Math.sqrt(4).to_i * Math.sqrt(4).to_i}"

{% endhighlight %}

As you can see, my resolution is far from being complete, but I'll be pasting them here as soon as I solve them. I accept suggestions for new solutions or for making existing ones better.

<p class="foot-link" id="foot-link-1">[<a title="Malba Tahan article on Wikipedia" href="http://en.wikipedia.org/wiki/Malba_Tahan">1</a>]: Malba Tahan, Brazilian author and math professor.</p>
