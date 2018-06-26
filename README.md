
output json object in script tag


```html
<script>
	var data = <%=jsonDump({a:1})%>;
</script>
```

will:

```html
<script>
	var data = {a:1};
</script>
```

also:

```html
<script>
	var data = <%=jsonDump('hello')%>;	// var data = 'hello';
	var data = <%=jsonDump(null)%>; 	// var data = null;
	var data = <%=jsonDump(0)%>; 		// var data = 0;
	var data = <%=jsonDump(false)%>; 	// var data = false;
</script>
```


avoid xss leak

```html
<script>
	var data = <%=jsonDump('alert(1)')%>;	// var data = 'alert(1)';   can`t execute
	var data = <%=jsonDump('</script>')%>; 	// var data = '<\/script>'; can`t end interrupt tag
</script>
```



