---
layout: post
title: Three-phase Validation For Your Web Application
---

<span class="drops">S</span>ecurity and data integrity are absolute priorites that any serious Computer Program must ensure at some level. In our Web Applications we constantly deal with information in high levels of importance and we simply can't let corruted data get into our database.

I am a defensor and a promoter of the idea of what I call **Three-phase Validation**<a href="#foot-link-1">(1)</a>. Three-phase Validation is a technique for letting your application comply with rigorous data integrity constraints, making it really hard to bad information to go persisted. "Double-check" is a term from the past.

The technique is not, though, intented to focus on preventing attacks from evil hackers. Many evil hackers are really good and can resort to more compelling artifices. It is just that in my experience, most of the occasions when the database was filled up with invalid stuff was because of poor checking and negligent validation.

The Three-phase Validation is not randomly named. It is named like that because it is distributed in - guess what - three phases (better refer to it as "levels" now): Client Level, Application Level and Database Level.

## Client Level

You should always use client-side validation in you app. Check if the entered email can actually be an email, check wheter the telephone field was properly filled up, if the credit card format is valid and so on.

Validations in this level of your application also have the aggregated value of answering more rapidly to the user input, something that might make both my users and UX buddies happy.

## Application Level

Right when the user input gets to your application, you should check again to make sure it is valid. You need to do this before repassing the information to say, a web service or API call.

## Database Level

The validation should happen again when the data is about to finally get saved. This is the most critical one, yet, often forgotten <a href="#foot-link-1">(2)</a>.

So, I encourage you to use the Three-phase Validation in any and every web application you work with (Well, at least until there's a need for a Four-phase version). This is going to make it very, very hard to let invalid data get saved in your database.

<p class="foot-link" id="foot-link-1">(1), I am pretty sure this concept is not any new but I like the idea of naming names anyway.</p>

<p class="foot-link" id="foot-link-1">(<a href="https://twitter.com/fnando/status/210878053239373824">2</a>), That is quite easy to find people doing Rails without adding proper validators in the migrations.</p>

