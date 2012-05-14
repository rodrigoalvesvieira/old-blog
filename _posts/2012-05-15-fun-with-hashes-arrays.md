---
layout: post
title: Having fun with Ruby Arrays and Hashes
---

<span class="drops">T</span>here's often the need - in our projects - to convert data from a structure to another. In some languages, when it comes to array/{hashes/maps/tuples} that may be tricky when there's no built-in mechanisms for converting those datatypes. Ruby offers ways to convert them, merge, organize them in the way you need to.

## Arrays

Consider this hypothetical scenario: you have two arrays, the first one contains a set of songs, and the second a set of albums of a rock band. And then you want to merge them into on array of arrays, being each individual array a set of an album and its song.

{% highlight ruby %}

songs = %w(scar_tissue give_it_away cant_stop)

albums = %w(californication blood_sugar by_the_way)

songs.zip(albums) # => [["scar_tissue", "californication"], ["give_it_away", "blood_sugar"], ["cant_stop", "by_the_way"]]

{% endhighlight %}

Amazing, eh? Way better than having to implement the algorithm yourself in your production code. 

Ruby <span class="small_code">Array#zip</span> takes any number of arguments (arrays), and zip them within the receiver object:

{% highlight ruby %}

songs = %w(scar_tissue give_it_away cant_stop)

albums = %w(californication blood_sugar by_the_way)

awards = %w(grammy echo billboard)

albums.zip(songs, years, awards) 

# => [["californication", "scar_tissue", 1999, "grammy"], 
["blood_sugar", "give_it_away", 1991, "echo"], 
["by_the_way", "cant_stop", 2003, "billboard"]]

{% endhighlight %}

## Turning into Hashes

You can also convert your zipped arrays to hashes, by passing them to the <span class="small_code">Hash</span> constructor:

{% highlight ruby %}

Hash[albums.zip(years)]
# => {"californication"=>1999, "blood_sugar"=>1991, 
"by_the_way"=>2003}

Hash[albums.zip(songs)]
# => {"californication"=>"scar_tissue", "blood_sugar"=>"give_it_away", "by_the_way"=>"cant_stop"}

{% endhighlight %}

That's it, hope this helps you.
