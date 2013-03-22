---
layout: post_no_comments
title: Inside Rails 3.1 ActiveRecord
---

<span class="drops">T</span>wo weeks ago I started a series of posts explaining what's new in Rails 3.1 with a [post on the general changes] in the framework. In this new post I'll be diving into the new ActiveRecord 3.1 API.


Pluralization for database table names
--------------------------------------

One (railer) knows that Rails, by default, pluralizes a model name like <span class="small_code">Page</span> to <span class="small_code">pages</span> for the database table name. ActiveRecord 3.1 let's you disable that:

{% highlight ruby %}

class Page < ActiveRecord::Base
  self.pluralize_table_names = false
end

{% endhighlight %}

<br/>


SQL query visualization in the console
--------------------------------------

It was always possible to visualize the database queries performed from Rails in the app's log file (like _log/development.log_), now these queries are also print after SQL queries in the console, too:

![SQL query visualization in the console](/public/images/rails_console.png "SQL query visualization in the console")


update_collumn
--------------

This new method takes two arguments: the first one is the field name (referent to the class' table where it's called) and the value to be saved.

{% highlight ruby %}

Car.first.update_column(:name, "Porsche Carrera GT")

{% endhighlight %}

Important: this method ignores all callbacks, including validations. Be careful!


Default scope
-------------

Scopes are handy stuff in Rails models, Rails 3.1 brings a new addition related to them named <span class="small_code">default_scope</span>, which - as you may have guessed - lets you define a scope and set it as default (thus returning the scoped items when calling <span class="small_code">User.all</span>, instead of all actual items).

Let me demonstrate:

{% highlight ruby %}

class User < ActiveRecord::Base
  default_scope :where(city: "Recife")
end

{% endhighlight %}

And from now on <span class="small_code">User.all</span> returns the scoped collection.

P.S: This method had already been added to Rails in the past, but then it was removed. Now it's back!


Deprecations
------------

There goes the list of deprecated stuff in Rails 3.1:

* CSV Fixtures. (I didn't ever see anyone using it but anyway, it's doesn't work anymore. YAML is now the only accepted format.

* It's not possible to to interpolate SQL strings within associations and conditions anymore. Now you have to use a block (<span class="small_code">proc</span>). Example:

{% highlight ruby %}

# Rails 3.0 and lower

class House
  has_many :rooms, conditions: 'foo = #{bar}'
end

# Now

class House
  has_many :rooms, conditions: proc { "foo = #{bar}" }
end

{% endhighlight %}

* You can pass and option hash containing <span class="small_code">conditions</span>, <span class="small_code">group</span>, <span class="small_code">include</span>, <span class="small_code">joins</span>, <span class="small_code">offset</span>, <span class="small_code">limit</span>, <span class="small_code">order</span>, <span class="small_code">lock</span>, <span class="small_code">select</span>, <span class="small_code">from</span>, <span class="small_code">having</span>, <span class="small_code">readonly</span>, <span class="small_code">scoped_by</span>.. so, all this query methods that "someday where news [ActiveRecord Query Interface by Patrik Naik] is now deprecated in new _AR_, where all the filtering responsibility for database queries are now delegated to the <span class="small_code">where</span> method:

{% highlight ruby %}

# Rails 3.0 and lower
class Gallery
  scope :approved, conditions: {approved: true }
end

# Now
class Gallery
  scope :approved, where(approved: true)
end

{% endhighlight %}

There seem to have been the greatest changes in ActiveRecord 3.1 until now, be aware that more stuff may come before the final release, planned for the end of this month.

Anyway, I''ll update this post if I find more news.

[ActiveRecord Query Interface by Patrik Naik]: http://m.onkey.org/active-record-query-interface
[post on the general changes]: /inside-rails-31-generals
[subscribe to the blog's feed]: http://www.rodrigoalvesvieira.com/atom.xml
