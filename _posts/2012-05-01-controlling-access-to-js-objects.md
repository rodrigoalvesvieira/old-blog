---
layout: post
title: Controlling access to your JavaScript Objects properties
---

<span class="drops">J</span>avaScript objects are awesome for dealing with data into the language, parsing JSON, quick prototyping and creating your own objects that behave like a datatype on their own. When the case is the last one, you may want to define in your objects properties that may not be changed, or you may want to lock that object in order to prevent any further addition to it, etc. As any good Object Oriented programming language, JavaScript (since ECMAScript 5) defines methods for specifying object visibility.

Let's start by creating a sample, ordinary JS object to be used throughout this post:

{% highlight javascript %}

function User(name, location, username) {
  this.name = name;
  this.location = location;
  this.username = username;
  this.constructor = User
}

var user = new User(
  "Don Quixote", "La Mancha", "don"
);

{% endhighlight %}

All objects in JavaScript have an inner object containing the properties which characterize the access to it. These properties are <span class="small_code">enumerable</span>, <span class="small_code">configurable</span> and <span class="small_code">writable</span>.

Now have a glance at the following snippet:

{% highlight javascript %}

Object.isExtensible(user); // true

{% endhighlight %}

By default, all objects in JavaScript are fully modifiable. We can add, alter and remove any of its properties:

{% highlight javascript %}
  
  user.name = 1;
  
  user.name; // 1, name was set to 1
  
{% endhighlight %}

You can specify the access to the object's attributes individually, using the static <span class="small_code">Object.defineProperty</span> method:

{% highlight javascript %}

Object.defineProperty(user,
    "username", {writable: false}
) // Object may not have the username attribute changed.

user.propertyIsEnumerable("username");

{% endhighlight %}

Similarly, you can define settings for several attributes at once using the <span class="small_code">Object.defineProperties</span> method, passing the given object as first argument, and a the set of attributes as second:

{% highlight javascript %}

Object.defineProperties(user, {  
    "name": {  
      writable: true 
    },
    "username": {  
      configurable: false  
    }  
});

{% endhighlight %}


## Persistence

In OO, we're used to create objects that have a given behavior, and we further create other objects that inherit behavior/state from that original one. 

All object properties access definitions are persistent across that object prototypes. It means that if object Apartment is prototype of object House, and the latter has a protected maxAvailableSize property, that property won't be alterable from the Apartment object.

Be aware that none of these methods operate on inherited properties. They're all based on the <span class="small_code">hasOwnProperty()</span> method, for security - or sanity - reasons.

You may observed that, till now, we've been only controlling access to specific attributes of our objects, but what if we really want to lock them up?

## Meet preventExtensions()

<span class="small_code">Object.preventExtensions()</span> does exactly what its name suggests: it locks an object so it becomes impossible to add new properties to it:

{% highlight javascript %}

Object.preventExtensions(user);

user.bio = "An user";

user.bio // undefined

{% endhighlight %}

NOTE: if you're adding a new property to an object, you may - in our code - be relying upon that property. If the object is locked for extensions, you'd be badly surprised! The  <span class="small_code">Object.preventExtensions() method reveals whether a given object may be extended or not:

{% highlight javascript %}

Object.preventExtensions(user);
Object.isExtensible(user); // false

{% endhighlight %}


## Meet seal()

You may want to create a class, an object and prevent any deletion and/or addition of properties, there is the static <span class="small_code">seal()</span> for that:

{% highlight javascript %}

function Car(name, year) {  
  this.year = year;
  this.name = name;
}

var prius = new Car("Prius", 2010);

prius.name // Prius

prius.name = "Prius C"

prius.name // Prius C

// Mark that Car object as sealed
// preventing property addition and remotion

Object.seal(prius);

prius.seats = 5;

prius.seats // undefined

{% endhighlight %}

You may have already observed that all unsuccessful assignments fail silently. No JS exception is thrown at you. In the sealing case, you can use <span class="small_code">Object.isSealed()</span> to find out if the object is sealed.

## Meet freeze()

Finally, you can also lock the object entirely, preventing any further change to it, using <span class="small_code">Object.freeze()</span> and <span class="small_code">Object.isFrozen()</span> for checking if an object is frozen.

That's it for today, I hope this post was clear enough. I plan to go on writing about JavaScript. Leave your comments!
