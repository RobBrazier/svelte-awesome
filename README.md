# Svelte-Awesome

[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/RobBrazier/svelte-awesome/build.yaml?style=flat-square&branch=master)](https://github.com/RobBrazier/svelte-awesome/actions)
[![Sonar Quality Gate](https://img.shields.io/sonar/quality_gate/RobBrazier_svelte-awesome?server=https%3A%2F%2Fsonarcloud.io&style=flat-square)](https://sonarcloud.io/summary/overall?id=RobBrazier_svelte-awesome)
[![Sonar Coverage](https://img.shields.io/sonar/coverage/RobBrazier_svelte-awesome?server=https%3A%2F%2Fsonarcloud.io&style=flat-square)](https://sonarcloud.io/summary/overall?id=RobBrazier_svelte-awesome)
[![npm](https://img.shields.io/npm/v/svelte-awesome.svg?style=flat-square)](https://www.npmjs.com/package/svelte-awesome)
[![bundlephobia](https://img.shields.io/bundlephobia/minzip/svelte-awesome?style=flat-square)](https://bundlephobia.com/result?p=svelte-awesome)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Awesome SVG icon component for Svelte JS, built with Font Awesome icons.
> Based on [Justineo/vue-awesome][vue-awesome]

Svelte-Awesome supports [Font-Awesome][font-awesome] `v4.7.0` (icons inbuilt)
and `v5`/`v6` (via [`@fortawesome` npm packages][fortawesome-icons])

A demo is available [here][demo]

A list of all available embedded icons is available [here][icons]

## Installation

### NPM

```bash
npm install --save svelte-awesome
```

## Usage

```html
<!-- basic -->
<Icon data="{beer}" />
<!-- codeFork is camelCase, unlike the js file, code-fork.js -->
<Icon data="{codeFork}" />

<!-- with options -->
<Icon data="{refresh}" scale="2" />
<Icon data="{comment}" flip="horizontal" />
<Icon data="{codeFork}" label="Forked Repository" />

<!-- stacked icons [WIP] -->
<Icon label="No Photos">
  <Icon data="{camera}" />
  <Icon name="{ban}" scale="2" class="alert" />
</Icon>

<!-- FontAwesome v5 and v6 Icons supported -->
<Icon data="{faThumbsUp}" />

<script>
  import Icon from 'svelte-awesome';

  /// *** Embedded Icons ***
  // Recommended - import just the icon you need
  import beer from 'svelte-awesome/icons/beer';
  import refresh from 'svelte-awesome/icons/refresh';
  import codeFork from 'svelte-awesome/icons/codeFork';
  import camera from 'svelte-awesome/icons/camera';
  import ban from 'svelte-awesome/icons/ban';
  // Not recommended as it will download all of the icons in dev mode
  import { ban } from 'svelte-awesome/icons';

  // EDGECASE ICONS - different names due to reserved names / starting with numbers
  import fa500px from 'svelte-awesome/icons/fa500px'; // '500px' icon
  import faTry from 'svelte-awesome/icons/faTry'; // 'try' icon

  /// *** @fortawesome/* Icons ***
  // Recommended - import the individual icon a little like with the recommended embedded icons approach above
  import { faThumbsUp } from '@fortawesome/free-regular-svg-icons/faThumbsUp';
  // Not Recommended - import the individual icon from the main file - it will download all of the icons in dev mode
  import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
</script>
```

## Sapper Usage

For Sapper, you may need to import the Icon component explicitly as below:

```javascript
import Icon from 'svelte-awesome/components/Icon.svelte';
```

## Contributors

- [dimfeld](https://github.com/dimfeld)
- [lucasnad27](https://github.com/lucasnad27)
- [josdejong](https://github.com/josdejong)

[vue-awesome]: https://github.com/Justineo/vue-awesome
[font-awesome]: https://github.com/FortAwesome/Font-Awesome
[demo]: https://robbrazier.github.io/svelte-awesome
[icons]: https://robbrazier.github.io/svelte-awesome/icons
[fortawesome-icons]: https://www.npmjs.com/search?q=%40fortawesome%20icons
