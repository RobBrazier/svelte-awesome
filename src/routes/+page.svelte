<svelte:head>
  {@html atomOneLight}
  <title>Svelte Awesome</title>
</svelte:head>

<main>
    <figure id="logo" on:mouseenter={toggle} on:mouseleave={toggle} on:click={change} title="{Object.keys(icon)[0]}">
      <Icon bind:data={icon} scale={4}/>
    </figure>
    <h1><a href="https://github.com/RobBrazier/svelte-awesome">Svelte-Awesome</a></h1>
    <p class="desc">Font Awesome component for Svelte.js, using inline SVG.</p>
    <p>See <a href="icons" rel="external">here</a> for a (temporarily crude) list of all available embedded icons</p>

    <h2>Basic</h2>
    <p><Icon data={flag}/></p>
    <figure><HighlightSvelte code={'<Icon data={flag}/>'} /></figure>

    <h2>Scale</h2>
    <p><Icon data={language} scale={3}/></p>

    <figure><HighlightSvelte code={`<Icon data={language} scale={3}/>`} /></figure>

    <h2>Spin</h2>
    <p><Icon data={refresh} spin/></p>
    <figure><HighlightSvelte code={'<Icon data={refresh} spin/>'} /></figure>

    <h2>Pulse</h2>
    <p><Icon data={spinner} pulse/></p>
    <figure><HighlightSvelte code={'<Icon data={spinner} pulse/>'} /></figure>

    <h2>Flip</h2>
    <p><Icon data={signal} flip="horizontal"/></p>
    <figure><HighlightSvelte code={'<Icon data={signal} flip="horizontal"/>'} /></figure>

    <h2>Label</h2>
    <p><small>Accessible for screen readers, etc.</small></p>
    <p><Icon data={code} label="Source Code"/></p>
    <figure><HighlightSvelte code={'<Icon data={code} label="Source Code"/>'} /></figure>

    <h2>Custom Class</h2>
    <p><small>Additional classes for custom styling</small></p>
    <p><Icon data={certificate} class="pinkIcon"/></p>
    <figure><HighlightSvelte code={'<Icon data={certificate} class="pinkIcon"/>'} /></figure>

    <h2>Custom Styles</h2>
    <p><small>Inline custom styling</small></p>
    <p><Icon data={paintBrush} style="border: 1px solid #000; border-radius: 8px; padding: 5px"/></p>
    <figure><HighlightSvelte code={'<Icon data={paintBrush} style="border: 1px solid #000; border-radius: 8px; padding: 5px"/>'} /></figure>

    <h2>Dynamic Scale and Styles</h2>
    <p><small>Inline dynamic scaling and styling</small></p>
    <p on:mouseenter={toggleIconOpen} on:mouseleave={toggleIconOpen}><Icon data={icons.powerOff} style={`transform:rotate(${iconOpen ? 0 : -180}deg)`} scale={iconScale}/></p>
    <figure><HighlightSvelte code={'<Icon data={powerOff} style={`transform:rotate(${iconOpen ? 0 : -180}deg)`} scale={5}/>'} /></figure>
<!--
    <h2>Stacked icons</h2>
    <p><small>Use stacked icons like in FontAwesome. Even more powerful.</small></p>
    <p>
      <Icon label="No Photo">
        <Icon data={icons.camera}/>
        <Icon data={icons.ban} scale="2" class="alert"/>
      </Icon>
    </p>
    <figure><pre class="prettyprint"><code>{'<Icon label="No Photo">'}
  {'<Icon data={camera}/>'}
  {'<Icon data={ban} scale="2" class="alert"/>'}
{'</Icon>'}</code></pre></figure>
    -->
    <h2>Custom icons</h2>
    <p><small>You can register your own icons.</small></p>
    <p><Icon data={baidu}/></p>
    <figure><HighlightSvelte code={'<Icon data={baidu}/>'} /></figure>

    <h2>FontAwesome v5 Icons</h2>
    <p><Icon data={faFontAwesomeLogoFull} scale={10}/></p>
    <figure><HighlightSvelte code={'<Icon data={faFontAwesomeLogoFull} scale={10}/>'} /></figure>

    <h2>Multi-color icons</h2>
    <p><small>Register icons in more advanced ways to unleash the full power of SVG.</small></p>
    <p><Icon data={webpack}/> <Icon data={vue}/> <Icon data={html5}/></p>
    <p>See <a href="https://github.com/RobBrazier/svelte-awesome#more-advanced-cases">readme</a> for further instructions.</p>

    <footer>
      <a href="//github.com/RobBrazier">@RobBrazier</a>|<a href="//github.com/RobBrazier/svelte-awesome/blob/master/LICENSE">MIT License</a>|<a href="//github.com/RobBrazier/svelte-awesome">View on GitHub</a>
    </footer>
</main>

<style>
  :global(.pinkIcon) {
    fill: hotpink !important;
  }
</style>

<script lang="ts">
/* eslint-disable no-unused-vars */
import { onMount } from 'svelte';
import { faFontAwesomeLogoFull } from '@fortawesome/free-regular-svg-icons';
import Icon from '../lib/components/Icon.svelte';
import * as icons from '../lib/icons';
import paintBrush from '../lib/icons/paintBrush';
import certificate from '../lib/icons/certificate';
import code from '../lib/icons/code';
import signal from '../lib/icons/signal';
import spinner from '../lib/icons/spinner';
import refresh from '../lib/icons/refresh';
import language from '../lib/icons/language';
import flag from '../lib/icons/flag';
import { HighlightSvelte } from 'svelte-highlight'
import atomOneLight from "svelte-highlight/styles/atom-one-light";

import '../global.css';

export let html5 = { 'html5-c': { width: 512, height: 512, raw: '<path fill="#E34F26" d="M71,460 L30,0 481,0 440,460 255,512"/><path fill="#EF652A" d="M256,472 L405,431 440,37 256,37"/><path fill="#EBEBEB" d="M256,208 L181,208 176,150 256,150 256,94 255,94 114,94 115,109 129,265 256,265zM256,355 L255,355 192,338 188,293 158,293 132,293 139,382 255,414 256,414z"/><path fill="#FFF" d="M255,208 L255,265 325,265 318,338 255,355 255,414 371,382 372,372 385,223 387,208 371,208zM255,94 L255,129 255,150 255,150 392,150 392,150 392,150 393,138 396,109 397,94z"/>' } };
export let baidu = { baidu: { width: 23.868, height: 26, d: 'M3.613 13.701c2.827-.608 2.442-3.986 2.357-4.725-.138-1.139-1.477-3.128-3.296-2.971C.386 6.21.052 9.515.052 9.515c-.309 1.528.74 4.793 3.561 4.186zm3.002 5.875c-.083.238-.268.846-.107 1.375.315 1.187 1.346 1.24 1.346 1.24h1.48v-3.619H7.749c-.713.213-1.057.767-1.134 1.004zM8.86 8.035c1.562 0 2.823-1.797 2.823-4.019C11.683 1.796 10.421 0 8.86 0 7.301 0 6.036 1.796 6.036 4.016c0 2.222 1.265 4.019 2.824 4.019zm6.724.265c2.087.271 3.429-1.956 3.695-3.644.272-1.686-1.074-3.644-2.552-3.98-1.48-.339-3.329 2.032-3.497 3.578-.2 1.89.271 3.778 2.354 4.046zm5.114 9.923s-3.229-2.498-5.113-5.198c-2.555-3.981-6.185-2.361-7.399-.337-1.209 2.024-3.093 3.305-3.36 3.644-.271.334-3.9 2.293-3.095 5.871.806 3.576 3.635 3.508 3.635 3.508s2.085.205 4.504-.336c2.42-.537 4.503.134 4.503.134s5.652 1.893 7.199-1.751c1.545-3.645-.874-5.535-.874-5.535zm-9.671 5.423H7.352c-1.587-.316-2.219-1.4-2.299-1.584-.078-.188-.528-1.059-.29-2.539.686-2.219 2.642-2.379 2.642-2.379h1.956V14.74l1.666.025v8.881zm6.844-.025h-4.229c-1.639-.423-1.716-1.587-1.716-1.587v-4.677l1.716-.027v4.203c.104.447.661.529.661.529h1.742v-4.705h1.825v6.264zm5.986-12.486c0-.808-.671-3.239-3.159-3.239-2.492 0-2.825 2.295-2.825 3.917 0 1.548.131 3.71 3.227 3.641 3.096-.068 2.757-3.507 2.757-4.319z' } };
export let webpack = { webpack: { width: 1200, height: 1200, paths: [{ style: 'fill:#8ED6FB', d: 'M1035.6 879.3l-418.1 236.5V931.6L878 788.3l157.6 91zm28.6-25.9V358.8l-153 88.3V765l153 88.4zm-901.5 25.9l418.1 236.5V931.6L320.3 788.3l-157.6 91zm-28.6-25.9V358.8l153 88.3V765l-153 88.4zM152 326.8L580.8 84.2v178.1L306.1 413.4l-2.1 1.2-152-87.8zm894.3 0L617.5 84.2v178.1l274.7 151.1 2.1 1.2 152-87.8z' }, { style: 'fill:#1C78C0', d: 'M580.8 889.7l-257-141.3v-280l257 148.4v272.9zm36.7 0l257-141.3v-280l-257 148.4v272.9zm-18.3-283.6zM341.2 436l258-141.9 258 141.9-258 149-258-149z' }] } };
export let vue = { vue: { width: 256, height: 221, polygons: [{ style: 'fill:#41B883', points: '0,0 128,220.8 256,0 204.8,0 128,132.48 50.56,0 0,0' }, { style: 'fill:#35495E', points: '50.56,0 128,133.12 204.8,0 157.44,0 128,51.2 97.92,0 50.56,0' }] } };

export let iconOpen = true;
export let iconScale = 5;

const keys = Object.keys(icons);

function randomIcon() {
  let icon = keys[Math.floor(Math.random() * keys.length)];
  return icons[icon];
}

export let icon = randomIcon();
let running = true;

export function change(): void {
  icon = randomIcon();
}

export function toggleIconOpen(): void {
  iconOpen = !iconOpen;
}

export function toggle(): void {
  running = !running;
}

onMount(() => {
  setInterval(() => {
    if (running) {
      change();
    }
  }, 200);

});
</script>
