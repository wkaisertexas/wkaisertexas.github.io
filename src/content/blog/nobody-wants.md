---
title: "Why I am still building a product nobody wants"
description: "How I am using RandomURL Generator as a learning experience"
pubDate: "Mar 24 2022"
heroImage: "/blog/nobody-wants/hero.jpeg"
---

A Visual Representation for What RandomURL.tech is for the Internet, a Spinner Taking You to Random Website When You Click on the Link.

Last fall, I built my own URL Shortener with one key feature: the ability to have multiple destinations. Define a list of destinations for each URL and the odds of being sent to each one. Then, when the user clicks on your link, they will be sent to one of the destinations randomly.

Though this can no-doubt be used for pranks, I actually built it for Science Bowl, a club I ran. The QR Code on our poster redirected to either our website or Remind.

Initially, I found [Teaching Statistics is Awesome’s Random redirectior](https://teaching.statistics-is-awesome.org/tools/random-redirector/). While fine on Desktops, mobile phones would not be redirected, a non-starter for a poster. So, I built my own app using Django + Bootstrap, the classic combo.

## Finding out no one uses it

And, no one used it. We have 7 users. 6 of which are test accounts I made when debugging.

So it turns out that it is actually quite difficult to make things people want to use. Humanity produces mountains of information which society filters though.

It all boils down to narratives. Like everyone else, I hated college essays. The reduction down to a fixed point is insane. Honestly though, people are lazy and reducing yourself like that is the only way to get people to care, nuance be dammed.

**Changes I Have Made in the Past Week**

![Google Analytics](/blog/nobody-wants/events.png)

Some users, but no appreciable trend.

Despite low engagement, learning to get people to care about a simple utility script is a valuable skill to learn.

Increasing engagement will take part in two places:

-   Improving Search Engine Optimization (SEO)
-   Increased Social Features

## SEO

Currently, SEO is pitiful. If you search “random url shortener,” RandomURL is at the very bottom of the second page. I decided to optimize SEO this week.

Descriptions for the main pages are now customized, and each page has much nicer HTML. The website was also made to look more normal, and the quirkier elements of the page were removed.

I also got setup with a proper sitemap.xml and robots.txt file to improve how my page looks on search. Furthermore, I got setup in the Google Search Console and have been logging keywords.

Finally, I am expanding the authentication system. Login with Google will not be available (something Google ranked as a low-tier ranking metric), and proper password reset functionality will be implemented.

After waiting about a month for the SEO changes to be reflected in rankings, I will work on increasing social features.

## Social

This is what I am less familiar about. If SEO options do not produce the intended effect, I will begin a marketing effort on sites such as Reddit, Twitter and more to get the word out.

Perhaps, a cringe hashtag of “pranked by RandomURL” or something equally as dumb could be in the future.

## Final Goals

All in all, my goal for this project is 1,000 daily active users by the end of the year. My goal is not to make money off this site, but again, it is an experiment to see if I can scale.

## Why I Wrote This

I would like to take more time to “build in public.” Development is often a lonely process, and this can isolate you from what people actually think. Like my goals, this is for the learning experience as well.

If you are interested in this project, check out the following:

-   [GitHub](https://github.com/wkaisertexas/RandomURL)
-   [Random URL Shortener](https://randomurl.tech/)
-   Medium [article](https://medium.com/@samedaycyborg/random-url-generator-a-url-shortener-with-quirks-43a7cc1a2906) written specifically about this site

Thank you for reading.