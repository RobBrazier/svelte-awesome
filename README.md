# Svelte-Awesome
[![Semaphore CI](https://robbrazier.semaphoreci.com/badges/svelte-awesome.svg)](https://robbrazier.semaphoreci.com/projects/svelte-awesome)
[![npm](https://img.shields.io/npm/v/svelte-awesome.svg)](https://www.npmjs.com/package/svelte-awesome)
[![bundlephobia](https://badgen.net/bundlephobia/minzip/svelte-awesome)](https://bundlephobia.com/result?p=svelte-awesome)
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
<Icon data={beer}/>

<!-- with options -->
<Icon data={refresh} scale="2"/>
<Icon data={comment} flip="horizontal"/>
<Icon data={codeFork} label="Forked Repository"/>

<!-- stacked icons [WIP] -->
<Icon label="No Photos">
  <Icon data={camera}/>
  <Icon name={ban} scale="2" class="alert"/>
</Icon>

<!-- FontAwesome v5 Icons!! -->
<Icon data={faThumbsUp}/>

<script>
  import Icon from 'svelte-awesome';
  import { beer, refresh, comment, codeFork, camera, ban } from 'svelte-awesome/icons';
  import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
</script>
```

## Sapper Usage
For Sapper, you may need to import the Icon component explicitly as below:
```javascript
import Icon from 'svelte-awesome/components/Icon.svelte'
```

## Contributors
* [dimfeld](https://github.com/dimfeld)
