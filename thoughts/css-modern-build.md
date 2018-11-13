---
title: A modern build for CSS
summary: What if we'd separate modern browser CSS and legacy CSS?
date: 2018-11-14
---

# A modern build for CSS

In the last few days, I thought about how we could future-proof and optimise CSS builds for today's web applications. You may be familiar with the idea of a modern build for Javascript. Phil Walton outlined this in "[Deploying ES2015+ Code in Production Today](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/)". We should adopt this for CSS as well.

## Why would you want a modern build for CSS?

While using some of the latest CSS features, I noticed how dreadful it can be to optimise for older browsers. Where "older browsers" means IE11 most of the time. Building with this browser in mind creates some problems.

### Resorting to non-optimal language features

This affects mainly the usage of [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) and [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/grid). Both have quite some implications on how you architect your CSS – and your HTML.

With CSS Grid, your markup can be way simpler while creating your layout than you're used to with e.g. flexbox or floats. You'll write that differently when IE11 comes into play.

Maybe you decide to use CSS Grid, providing fallbacks for IE11. With auto-placement not working in that browser, I'm pretty sure you wouldn't use it to it's full potential, though.

With Custom Properties, you'll need some PostCSS tooling that takes care of transforming the properties into "real" values. Which either robs the Custom Properties of their original strength. Or doubles the lines of CSS for them if it provides a fallback value.

Also, you probably won't even start to think about e.g. the "[logic fold](https://www.smashingmagazine.com/2018/05/css-custom-properties-strategy-guide/#the-logic-fold)" Mike Riethmuller lines out. Similar to the grid auto-placement, this robs you of great opportunities to write cleaner code.

### The "weakest" browser determines the speed for all

If you build any web project with IE11 in mind, you're bound to build non-optimal CSS for other browsers. Catering to legacy browsers, your HTML and CSS code will include unnecessary parts. You could omit these parts when caring for evergreen browsers only.

Also, your project might at some point drop support for IE11 because the usage fell below a certain threshold. Let's be honest: No one will refactor the code to apply the latest & greatest CSS features and remove the unnecessary just-for-IE11-parts. Ever. So your product will still be kind of optimized for IE11, even though you actually do not support it anymore.

### Bundle size for CSS increases

As you probably got from the first two points, building HTML/CSS with IE11 in mind will not only hold you back regarding features. Autoprefixing the new stuff will also grow your CSS bundle. You'll have browser prefixes in there. Quite some additional rules for satisfying CSS Grid requirements. And maybe also doubled declarations for Custom Properties.

Now, CSS "normally" has bundle sizes way smaller than whatever Javascript you ship. Nevertheless, why should we shrug that off as a "necessary evil"? It would be good to optimize here as well.

### Separation of ~~concerns~~ pain

Like I mentioned above, should you ever kick IE11 out of your setup, you'll still be left with CSS and probably HTML that is unnecessary since you optimized for IE11 initially. From an architectural perspective, it would make way more sense to separate the special solutions for IE11 somewhere else than in your default CSS.

For the HTML markup, this of course poses some complicated if not impossible to solve problems. I guess that's a very, very good moment to mention http://dowebsitesneedtolookexactlythesameineverybrowser.com/

I'd argue to ship adjustments within separate IE11 files, making the interface work as good as possible within IE11.

## How could this work?

I hope the reasons lined out above did convince you that a modern build for CSS is a useful thing. Now how could we get this to work? I haven't built anything so far, so I do not have a working example for this (yet). So please take these ideas with a grain of salt. In my head, they seemed logical and doable. Which of course doesn't mean anything, I don't trust my brain and neither should you. Still, let's have a look.

### Bundling the CSS

Similar to the Javascript modern build, I could imagine having two different builds with different target browsers passed to the autoprefixer.

Regarding the separation of ~~concerns~~ pain explained above, you could use e.g. `style.css` for all browsers and `something.ie11.css` for additional IE11 CSS. That would contain the extra CSS necessary to make IE11 behave nicely. This is the structure I could imagine:

```
components/
--| button
----| index.js
----| style.css
----| corrections.ie11.css
```

This naming convention would make it quite easy to target the different files for both bundles.

In the extra bundle step, heavy autoprefixing would be involved. For example, you'd probably need to use the rather "aggressive" [postcss-css-variables](https://github.com/MadLittleMods/postcss-css-variables) instead of [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties) which takes a more careful approach on resolving Custom Properties. The autoprefixing for CSS Grid [has made great progress](https://css-tricks.com/css-grid-in-ie-css-grid-and-the-new-autoprefixer/#article-header-id-2) which should prove very useful.

The missing autoplacement functionality could be solved by using some rather elaborate `nth-child` selectors. This [is currently discussed within the autoprefixer repo](https://github.com/postcss/autoprefixer/issues/1148) as well, so maybe even that part can be solved automatically [someday](https://www.youtube.com/watch?v=QfaTbTsgGow#t=0m32s).

### Shipping the CSS bundles

If the bundling is setup, we'd need to make sure that one of these files only gets shipped to IE11 and other browsers won't use it.

In my naive mind (and in my VirtualBox), this syntax worked at least in Chrome and IE11 to load the second stylesheet only in IE11:

```html
<link rel="stylesheet" href="style.css" />
<link
  rel="stylesheet"
  media="only screen and (-ms-high-contrast: active) and (-ms-high-contrast: none)"
  href="ie11.css"
/>
```

I only did a quick test for this, so I'm not sure if this is really working in the exclusive way I imagine it does. Also, I didn't have the time to check whether the CSS is downloaded anyways – which shouldn't happen due to the media rules. But again, that's currently only my naive mind without testing it.

If this would not work, I'd have no problem with injecting the extra IE11 CSS via JS. Detecting the browser in this case seems like an okay thing to do.

### Cleanup in a future far far away

At some point, when you decide to stop shipping CSS for IE11, you would "just" remove all `*.ie11.css` files. Then remove the extra build step. And then you'd throw a giant party and of course invite me. Thanks already!

## Now what?

This idea is very rough in it's current state. Since that's so, I have not setup any kind of project testing it. Still, I'd love to get feedback:

- Is this a good idea? Is it not? Why?
- What do you think would work?
- Where does this approach fail?
- How could the implementation look like?

I don't have comments here, so publish your thoughts wherever you want & [ping me on Twitter](https://twitter.com/herrbertling/)!
