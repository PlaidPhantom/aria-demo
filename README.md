To run the demos:
```shell
npm run-script sass
npm start
```

# WAI-ARIA

`Web Accessibility Initiative - Accessible Rich Internet Applications`

https://www.w3.org/WAI/intro/aria
https://www.w3.org/TR/wai-aria-1.1/

## Native Elements, Roles, and `aria-` Attributes

* Use semantic HTML -- it already works!
* Use roles to enhance or override native HTML semantics
* `aria-` attributes provide additional semantic information

https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques

```html
<button>A real button! I don't need a role.</button>
<a class="btn btn-default">Bootstrap will make me look like a button, but screen readers still treat me like a link</a>
<a role="button" class="btn btn-default" aria-label="a button">Screen readers will know I'm a button.</a>
<button aria-pressed="true">I'm a toggle button! Take that, HTML!</button>
```

```css
/* A SASS trick */

button, [role="button"] {
	@extend .btn;
	@extend .btn-default;

	&[aria-pressed="true"] {
		@extend .btn.active;
		@extend .btn-default.active;
	}
}
```

```html
<style>
	role["progressbar"] { height: 10px; width: 500px; background-color: black; border: 1px solid white; position: relative; }
	role["progressbar"] > div { background-color: white; height: 100%; position: absolute; }
</style>

<div role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="[...]">
    <div style="width: 50%; [...]"></div>
</div>
```

<div style="height: 10px; width: 500px; background-color: black; border: 1px solid white; position: relative"> <div style="background-color: white; width: 50%; height: 100%; position: absolute;"></div></div>  



## More Examples

https://www.w3.org/TR/wai-aria-practices/examples/menubar/menubar-1/menubar-1.html
http://heydonworks.com/practical_aria_examples/
https://www.w3.org/TR/wai-aria-practices/examples/button/button.html

# Bonus: Schemas!

http://schema.org/

```html
<p data-bind="with: origin" itemscope="" itemtype="http://schema.org/PostalAddress">
    <span itemprop="name">1 WAL-MART # 2303</span><br>
    <span itemprop="streetAddress">333 N Main S</span><br>
    <span itemprop="addressLocality">West Hartford</span>,
    <span itemprop="addressRegion">CT</span>
    <span itemprop="postalCode">06117</span>
</p>
```
