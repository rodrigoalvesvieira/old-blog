---
layout: post
title: Inside Rails 3.1 - General News
---

<span class="drops">R</span>ails 3.1 is coming! A lot of new stuff was already announced, specially when it comes to the Asset Pipeline. In this blog post I'll try to cover the general news brought by Rails 3.1, without going to deep in any of its inherent frameworks.

Syntax
------

Rails 3.1 generates code with the new (1.9) [Ruby hash notation], I think this is nice for "pushing" the community forward, encouraging the use of the language's new version.

A difference is subtle and can be seen in following code snippet, which talks for itself :D

{% highlight ruby %}

# Old syntax (Ruby <= 1.8)
match "submit", to: "talks#submit_proposal", :as => "submit", method: :post

# New syntax (Ruby 1.9)
match "submit", to: "talks#submit_proposal", as: "submit", method: :post

{% endhighlight %}

If you're old-school you can still force Rails to generate hash in the Ruby 1.8 style, passing <span class="small_code">--old-style-hash</span> as an option, for example:

<pre class="terminal">
  $ rails g scaffold Post title:string body:text author_id:integer --old-style-hash
</pre>

<br/>

Automatic dependency resolution
-------------------------------

One of the first changes that you notice after running <span class="small_code">$ rails new my_app</span> in new Rails is that it automatically runs <span class="small_code">bundle install</span> right after the generators finish their work. I've seen some discussion going on the Rails' Issue space on GitHub about it, something that I think is unnecessary. The discussion is now over and I don't know if it's going to the final release.

If you don't the automatic bundling to happen anyway you can pass the <span class="small_code">--skip-bundle</span> option to the <span class="small_code">rails new my_app</span> command.

SCSS via scaffold generator
---------------------------

When you generate a scaffold, Rails 3.1 creates automatically a SCSS file with the name of the generated controller in _app/assets/stylesheets_

Moreover the generator also creates a _.coffee_ file. If you don't want it to happen you can pass the <span class="small_code">--skip-assets</span> options.

jQuery is default
-----------------

Most Rails projects use jQuery as they JS framework and it's not news. Rails 3.1 finally has it as default, instead if Prototype.

XML is gone. Let's welcome JSON
-------------------------------

Rails 3.0 still generated controllers with XML response defined within response blocks, alongside HTML. Now it's just HTML and JSON, by default ;)

Prettier, more human, unit test output
--------------------------------------

The new Rails puts a gem by default in your _Gemfile_. It's [turn], which colorizes your tests' output in the console. Not as flexible as RSpec yet, as it doesn't currently support formatting options but very good anyway!

Deprecations
------------

Somethings were deprecated in Rails 3.1 and you'll see warning messages while your app is running via the Rails logger, if you are evolving a 3.0.x app or writing deprecated stuff in your 3.1 app. There goes a brief list of some deprecations:

* Now it's definitive: _.rhtml_ templates (which hadn't been used since Rails 2.1) aren't accepted anymore.

* For those who use Fixtures, the CSV format is gone. Well, not totally yet but it'll will totally removed from Rails 3.2 

* There is no more support for accessing attributes via <span class="small_code">has_and_belongs_to_many</span>, which has its use discouraged for a while. You should use <span class="small_code">has_many :through</span>, instead.

That's it, hope this article helped you get started with Rails 3.1. See you in the next post!

[turn]: https://github.com/TwP/turn
[Ruby hash notation]: http://peepcode.com/blog/2011/rip-ruby-hash-rocket-syntax