# Phantom

A minimalistic theme for [Ghost](https://ghost.org/) inspired by the [Designmodo Journal](http://journal.designmodo.com/). Phantom combines clean, beautiful typography with large photos and an unobtrusive layout. Great for both print and code. Oh, and it's free. Check out the [demo](http://haydenbleasel.com/phantom/) and the [design project](https://www.behance.net/gallery/16252957/Phantom).

![Phantom](assets/images/mockup.jpg)

## Features

As Ghost is and always will be in development, Phantom will evolve with it. As new features and concepts are implemented in Ghost, Phantom will adapt and enhance to suit these new features. If you have any problems or feature requests, feel free to open an issue or submit a pull request.

- **Cover Photos:** Large cover photos covered by a dark, transparent wash allow for overlaying text.
- **CDN Resources:** All vendor stylesheets and scripts are loaded from [cdn.js](http://cdnjs.com/) for maximum performance.
- **Responsive Design:** Phantom was designed and developed with a fully responsive, mobile-first design.
- **Code Support:** Want to insert a Markdown `code block` or embed a GitHub Gist? We've both covered.
- **Comment System:** Adding a Disqus commenting system to your blog has never been easier.
- **Custom Fonts:** Phantom uses 'Open Sans' served by Google Web Fonts.
- **Social Sharing:** Each post is set up with Facebook, Twitter and Google+ social sharing options.
- **Ghost Features:** Tags, dates, partials and all the helpful Ghost features have been preconfigured.

## Installation

1. [Download the theme](https://github.com/haydenbleasel/phantom/archive/master.zip) from GitHub.
2. Upload the theme as described in the [Ghost Documentation](http://docs.ghost.org/usage/settings/).

Looking for more instructions? Sorry, it's just that easy.

## Enabling Disqus Comments

If you want to enable comments, simply open `post.hbs` and remove the exclamation mark in the comments block, so `{{!> comments}}` becomes `{{> comments}}`.

You'll also need to enter your Disqus "shortname". Just head on over to the [Disqus](http://disqus.com/) website and register for an account. They'll give you a small snippet of code, but all we need from it is the following line:

    var disqus_shortname = 'YOUR_SHORTNAME_HERE';

Once you have that, just open `partials/comments.hbs` and replace the `YOUR_SHORTNAME_HERE` variable with the one Disqus gave you. Try not to edit any other settings or replace the code though, it's preconfigured to work with Ghost.

## Featured images

While featured images are not part of Ghost (yet), there are ways to implement them with some hacky Javascript. In `post.hbs`, add the following code just after `{{> content}}`:

```
<script>
    var image = document.querySelectorAll("article img:first-child")[0],
        src = image.src,
        parent = image.parentNode;
        header = document.getElementsByTagName("header")[0],
        facebook = document.querySelectorAll("meta[property='og:image']")[0],
        twitter = document.querySelectorAll("meta[property='twitter:image']")[0];
    header.style.backgroundImage = 'url(' + src + ')';
    if (facebook) { facebook.setAttribute("content", src); }
    if (twitter) { twitter.setAttribute("content", src); }
    image.id = "remove-this";
    var im = document.getElementById("remove-this").parentNode;
    im.parentNode.removeChild(im);
</script>
```

Also remove the background-cover code from `post.hbs`:

```
{{#if @blog.cover}}style="background-image: url({{@blog.cover}})"{{/if}}
```

This will remove the first image in your article and use it as the cover photo, so make sure you put a featured image at the top of your article.
