---
layout: post
title: Developing your JSON API in Rails with Rabl
---

<span class="drops">I</span>nterchanging data is something important in many web applications. In most cases you need this to set data available to a native mobile app, or to another web application (or even many applications!). Generally you serve it all as JSON, because it's cool to use and works fine with JavaScript and a bunch of other languages.

This post about building a simple API is only for fetching data, not persisting. And I'll not mention REST here.

The [Rabl] gem let's you easily make data available as JSON, using this gem is a real straightforward process. All you need to do is pass <span class="small_code">respond_to :json</span> in the controller of the resource you wanna set available as JSON.

{% highlight ruby %}

class CitiesController < ApplicationController
  respond_to :html, :json

  def index
    @cities = City.all
  end

  #...
end

{% endhighlight %}

Now you have to create the template that determines how the JSON objects will be displayed, the file name follows the Rails convention having the name of it's equivalent controller action and ends in .rabl:

{% highlight ruby %}
# index.json.rabl

collection @cities

attributes :name, :population, :flag, :climate, :area

child :city_hall do
  attributes :id, :name, :region, :location
end

child :neighborhoods do
  attributes :id, :name, :area, :population
end

child :inhabitants => :people do
  attributes :id, :name, :age, :profile_picture_url
end

child :major do
  attributes :id, :name, :mandate_start_date, :mandate_finish_date
end

{% endhighlight %}

Explaining what happens in this file:

* The <span class="small_code">collection</span> method takes the instance variable containing the objects you want to display, in my example, <span class="small_code">@cities</span>
* The <span class="small_code">attributes</span> method is for specifing which attributes of your model you want in the JSON output (you seldom wanna show all)
* The <span class="small_code">child</span> method takes a block for a collection or a single object you want to nest to the parent object.

Explaining it better:

When I pass <span class="small_code">:major</span> to the <span class="small_code">child</span> method, Rabl expects in City a <span class="small_code">has_one</span> associaton to the Major model. Equally, Rabl expects <span class="small_code">has_many :inhabitants</span> to be present in the City model.

The coolest stuff is that all these related data gets nested just right in the output. Neat and pretty.

Now go get it!

<pre class="terminal">
  $ curl -X GET http://localhost:3000/cities.json
</pre>

Now you have the JSON of your dreams, totally valid, semantic and formatted.

More documentation on Rabl can be found at the gem's [README] and [Wiki] on GitHub.

Rabl is very robust. If JSON is the problem, this gem solves it. Of course what I showed here is just a small part of what Rabl lets you do and I hope this blog post helps you out when you need to develop your own API. If you have something to add please leave it in the comments.

[Rabl]: https://github.com/nesquena/rabl
[README]: https://github.com/nesquena/rabl/blob/master/README.md
[Wiki]: https://github.com/nesquena/rabl/wiki