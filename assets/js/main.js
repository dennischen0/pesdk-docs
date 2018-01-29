$(window).ready(function () {
  const toggle = $('.js-toggle-navigation')
  const navigation = $('.js-navigation')
  toggle.click(() => {
    $(navigation).toggleClass('is-visible')
  })

  const versionPicker = $('.js-toggle-version-picker')
  const content = $('.js-version-picker-content')
  versionPicker.click(() => {
    $(content).toggleClass('is-visible')
  })
})

// Used to toggle different languages in code blocks
function showCodeBlockLanguage(event, codeblock_id, language_id, prefix) {

	if (!prefix) {
		prefix = "multilingual-code-block"
	}
	let rootElement = document.getElementById(codeblock_id)

	let tabcontents = rootElement.getElementsByClassName(prefix + "__tabcontents__item")
	for (i = 0; i < tabcontents.length; i++) {
		tabcontents[i].style.display = 'none'
	}

	let tabbuttons = rootElement.getElementsByClassName(prefix + "__tabs__button")
	for (i = 0; i < tabbuttons.length; i++) {
		tabbuttons[i].className = tabbuttons[i].className.replace(" is-active", "")
	}

	document.getElementById(codeblock_id + '_' + language_id).style.display = "block"
	event.currentTarget.className += " is-active"
}
