# JS DOM fundamentals

Why use React and Angular when you can’t even write an event listener?

![](https://miro.medium.com/max/1570/1*H-25KB7EbSHjv70HXrdl6w.png)

I think it’s pretty common for people who have been out of the vanilla javascript game for a while to forget a lot of the basic fundamentals. We all need a quick refresher.

Selecting a DOM element with `id=”foo"`:

```js
let foo = document.querySelector("#foo");
// or
foo = document.getElementById("foo");
```

Making an event listener that listens to a click on an DOM element with `id=”foo”` and changes its html:

```js
const foo = document.querySelector("#foo");
foo.addEventListener("click", function(){
  foo.innerHTML = "you've been clicked!";
});
```

Pretty simple.

What if we had 50 buttons in an array and we wanted all of them to do something when they are clicked?!? Are we going to write 50 event listeners?

```js
const foos = [/* array of 50 DOM elements */];
foos.forEach(function(foo) {
  foo.addEventListener("click", function(){
    foo.innerHTML = "you've been clicked!"
  });
});
```

Cool! Simple code is the best code.

Lastly, what if we wanted had 100 classes with `class="foo"` and wanted to apply an onClick to all of them?

Things get a little dicey here.

```js
const foos = document.getElementsByClassName('foo');
// or
const foos = document.querySelectorAll('.foo');
```

These line is definitely what we want, but both of these functions return an `HTMLCollection`. So we have to be a bit careful how we approach this — `forEach` won’t work.

One approach is to use es6 syntax:

```js
for (let foo of foos) {
  foo.addEventListener("click", function(){
    foo.innerHTML = "you've been clicked!"
  });
}
```

Thats all — thanks for reading.