---
layout: post_no_comments
title: OpenStruct for rapid object prototyping in Ruby
---

<span class="drops">W</span>hat if we can quickly build custom data structures and prototype them with no effort? Ruby's <span class="small_code">OpenStruct</span> class is here to help.

{% highlight ruby %}

require "ostruct"

car = OpenStruct.new(
        brand: "Ford", model: "Phusion",
        year: 2013, owner_id: 1
      )

{% endhighlight %}

The [Ruby Quicktips] blog has another good example on how we can use it for app configuration variables.

Jake Scruggs [has also] made a point about using <span class="small_code">OpenStruct</span> for mocking.

<figure>
  ![Abandoned train](/public/images/abandoned_train.jpeg "Abandoned train")
</figure>

<span class="image_caption">Abandoned train</span>

I believe this class is more for rapid prototyping purposes. <span class="small_code">OpenStruct</span> is [demonstrably slower] than <span class="small_code">Struct</span> and probably not very reliable to go for production code.

More bad news about it is that it is not as extensible as <span class="small_code">Struct</span>. There is no way for adding methods to it as it remains solely of the <span class="small_code">OpenStruct</span> class itself.

<span class="small_code">OpenStruct</span> is one of Ruby's proof of its own simplicity and dynamism. Hashes that behave like classes? That's definitely cool.

<span class="small_code">OpenStruct</span> is Ruby's metaprogramming magic all across the pond.

[has also]: http://jakescruggs.blogspot.com.br/2007/03/using-openstruct-to-enhance-your-mocks.html
[Ruby Quicktips]: http://rubyquicktips.com/post/1718141794/use-openstruct-for-application-configuration-variables
[demonstrably slower]: http://stackoverflow.com/questions/1177594/ruby-struct-vs-openstruct
