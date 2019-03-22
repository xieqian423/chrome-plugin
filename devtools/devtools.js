
chrome.devtools.panels.create('MyPanel', '../img/icon.png', 'devtools/pannel/index.html', function (pannel) {
	console.log('custom pannel create' + pannel);

	// devtools 中 document.getElementById 无法获取元素, 可以在pannel页面中引入的js中使用该方法
	// document.getElementById('checkjquery').addEventListener('click', function(){})

	pannel.createStatusBarButton('../img/icon.png', 'button', false);
})

// 创建自定义侧边栏
var page_getProperties = function() {
	var data = window.jQuery && $0 ? jQuery.data($0) : {};
	// Make a shallow copy with a null prototype, so that sidebar does not
	// expose prototype.
	var props = Object.getOwnPropertyNames(data);
	var copy = { __proto__: null };
	for (var i = 0; i < props.length; ++i)
	  copy[props[i]] = data[props[i]];
	return copy;
  }
chrome.devtools.panels.elements.createSidebarPane("Jquery", function(sidebar)
{
	// sidebar.setPage('devtools/pannel/index.html'); // 指定加载某个页面
	// sidebar.setExpression('document.querySelectorAll("img")', 'All Images'); // 通过表达式来指定
	//sidebar.setObject({aaa: 111, bbb: 'Hello World!'}); // 直接设置显示某个对象

	function updateElementProperties() {
		sidebar.setExpression("(" + page_getProperties.toString() + ")()");
	}
	updateElementProperties();
	chrome.devtools.panels.elements.onSelectionChanged.addListener(updateElementProperties);
});
