# Svelte-Awesome
![Built with SemaphoreCI](https://img.shields.io/badge/Built%20With-SemaphoreCI-brightgreen)
[![npm](https://img.shields.io/npm/v/svelte-awesome.svg)](https://www.npmjs.com/package/svelte-awesome)
[![Code Climate](https://img.shields.io/codeclimate/maintainability/RobBrazier/svelte-awesome.svg)](https://codeclimate.com/github/RobBrazier/svelte-awesome/maintainability)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

> Awesome SVG icon component for Svelte JS, built with Font Awesome icons. Based on [Justineo/vue-awesome][vue-awesome]

Svelte-Awesome supports [Font-Awesome][font-awesome] `v4.7.0` (icons inbuilt) and `v5` (via [`@fortawesome` npm packages][fortawesome-icons])

A demo is available [here][demo]

[vue-awesome]: https://github.com/Justineo/vue-awesome
[font-awesome]: https://github.com/FortAwesome/Font-Awesome
[demo]: https://robbrazier.github.io/svelte-awesome
[fortawesome-icons]: https://www.npmjs.com/search?q=%40fortawesome%20icons

## Installation
### NPM
```
$ npm install --save svelte-awesome
```

## Usage
```html
<!-- basic -->
<Icon data={beer}></Icon>

<!-- with options -->
<Icon data={refresh} scale="2"></Icon>
<Icon data={comment} flip="horizontal"></Icon>
<Icon data={codeFork} label="Forked Repository"></Icon>

<!-- stacked icons [WIP] -->
<Icon label="No Photos">
  <Icon data={camera}></Icon>
  <Icon name={ban} scale="2" class="alert"></Icon>
</Icon>

<!-- FontAwesome v5 Icons!! -->
<Icon data={faThumbsUp}></Icon>

<script>
  import { beer, refresh, comment, codeFork, camera, ban } from 'svelte-awesome/icons';
  import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
</script>
```
