/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderHead, j as renderComponent, k as renderSlot } from '../astro_Dac1kztP.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$5 = createAstro();
const $$ThemeProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ThemeProvider;
  return renderTemplate(_a || (_a = __template(["<script>\n	const lightModePref = window.matchMedia('(prefers-color-scheme: light)')\n\n	// Get user preference from local storage or from browser preference\n	function getUserPref() {\n		const storedTheme = localStorage.getItem('theme') ?? undefined\n		return storedTheme || (lightModePref.matches ? 'light' : 'dark')\n	}\n\n	function setTheme(newTheme) {\n		if (newTheme !== 'light' && newTheme !== 'dark') {\n			return console.log(`Invalid theme value '${newTheme}' received. Expected 'light' or 'dark'.`)\n		}\n\n		localStorage.setItem('theme', newTheme)\n\n		const root = document.documentElement\n\n		// if current dark theme and new theme is dark, return\n		if (newTheme === 'dark' && root.classList.contains('dark')) {\n			return\n		} else if (newTheme === 'light' && !root.classList.contains('dark')) {\n			return\n		}\n\n		root.classList.toggle('dark')\n	}\n\n	// Initial Setup\n	setTheme(getUserPref())\n\n	// View Transitions hook to restore theme\n	document.addEventListener('astro:after-swap', () => setTheme(getUserPref()))\n\n	// Listen for theme-change custom event\n	document.addEventListener('theme-change', (e) => {\n		setTheme(e.detail.theme)\n	})\n\n	// Listen for prefers-color-scheme change\n	lightModePref.addEventListener('change', (e) => setTheme(e.matches ? 'light' : 'dark'))\n<\/script>"], ["<script>\n	const lightModePref = window.matchMedia('(prefers-color-scheme: light)')\n\n	// Get user preference from local storage or from browser preference\n	function getUserPref() {\n		const storedTheme = localStorage.getItem('theme') ?? undefined\n		return storedTheme || (lightModePref.matches ? 'light' : 'dark')\n	}\n\n	function setTheme(newTheme) {\n		if (newTheme !== 'light' && newTheme !== 'dark') {\n			return console.log(\\`Invalid theme value '\\${newTheme}' received. Expected 'light' or 'dark'.\\`)\n		}\n\n		localStorage.setItem('theme', newTheme)\n\n		const root = document.documentElement\n\n		// if current dark theme and new theme is dark, return\n		if (newTheme === 'dark' && root.classList.contains('dark')) {\n			return\n		} else if (newTheme === 'light' && !root.classList.contains('dark')) {\n			return\n		}\n\n		root.classList.toggle('dark')\n	}\n\n	// Initial Setup\n	setTheme(getUserPref())\n\n	// View Transitions hook to restore theme\n	document.addEventListener('astro:after-swap', () => setTheme(getUserPref()))\n\n	// Listen for theme-change custom event\n	document.addEventListener('theme-change', (e) => {\n		setTheme(e.detail.theme)\n	})\n\n	// Listen for prefers-color-scheme change\n	lightModePref.addEventListener('change', (e) => setTheme(e.matches ? 'light' : 'dark'))\n<\/script>"])));
}, "/Users/Nicolas.Dunke/Development/Projects/url-shortener/frontend/src/components/ThemeProvider.astro", void 0);

const $$Astro$4 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  const year = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="mx-auto w-full text-white md:max-w-7xl"> <div class="py-5"> <div class="flex flex-col items-center gap-y-3 sm:flex sm:flex-row sm:items-center sm:justify-between sm:gap-y-0"> <div class="flex gap-x-4 text-sm dark:focus:outline-none"> <a class="hover:text-secondary-foreground inline-flex gap-x-2 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/imprint">Imprint</a> <a class="hover:text-secondary-foreground inline-flex gap-x-2 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/privacy">Privacy</a> </div> <div class="text-center md:text-right">
© ${year.getFullYear()} - all rights reserved - made with ♥️ by <a class="hover:text-secondary-foreground underline" href="http://nicdun.dev" target="_blank">nicdun.dev</a> </div> </div> </div> </footer>`;
}, "/Users/Nicolas.Dunke/Development/Projects/url-shortener/frontend/src/components/layout/Footer.astro", void 0);

const siteConfig = {
  // Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
  author: "nicdun",
  // Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
  title: "astro-resume-01",
  // Meta property used as the default description meta property
  description: "Perfect, minimal resume theme with multiple configuration option, blog integration and custom stylings. Stand tall among competitors and launch your career into orbit with Astro.js Theme Resume. Explore the cosmos of possibilities for your professional future today!",
  // HTML lang property, found in src/layouts/Base.astro L:18
  lang: "en-US",
  // Meta property, found in src/components/BaseHead.astro L:42
  ogLocale: "en_US",
  // Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
  date: {
    locale: "en-US",
    options: {
      day: "numeric",
      month: "short",
      year: "numeric"
    }
  }
};

const $$Astro$3 = createAstro();
const $$Head = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Head;
  const { articleDate, description, ogImage, title } = Astro2.props;
  const titleSeparator = "\u2022";
  const siteTitle = `${title} ${titleSeparator} ${siteConfig.title}`;
  return renderTemplate`<head><meta charset="utf-8"><meta content="width=device-width, initial-scale=1.0, shrink-to-fit=no" name="viewport"><meta content="IE=edge" http-equiv="X-UA-Compatible"><title>${siteTitle}</title><link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌐</text></svg>"><!-- <link rel='preload' href='/fonts/Satoshi-Variable.ttf' as='font' type='font/ttf' crossorigin />
	<link
		rel='preload'
		href='/fonts/Satoshi-VariableItalic.ttf'
		as='font'
		type='font/ttf'
		crossorigin
	/>
	<link rel='preload' href='/fonts/ClashDisplay-Variable.ttf' as='font' type='font/ttf' crossorigin /> --><meta${addAttribute(siteTitle, "content")} name="title"><meta${addAttribute(description, "content")} name="description"><meta${addAttribute(siteConfig.author, "content")} name="author"><meta content="" name="theme-color"><meta${addAttribute(articleDate ? "article" : "website", "content")} property="og:type"><meta${addAttribute(title, "content")} property="og:title"><meta${addAttribute(description, "content")} property="og:description"><meta${addAttribute(siteConfig.title, "content")} property="og:site_name"><meta${addAttribute(siteConfig.ogLocale, "content")} property="og:locale"><meta content="1200" property="og:image:width"><meta content="630" property="og:image:height"><meta content="summary_large_image" property="twitter:card"><meta${addAttribute(title, "content")} property="twitter:title"><meta${addAttribute(description, "content")} property="twitter:description"><link href="/sitemap-index.xml" rel="sitemap"><meta${addAttribute(Astro2.generator, "content")} name="generator">${renderHead()}</head>`;
}, "/Users/Nicolas.Dunke/Development/Projects/url-shortener/frontend/src/components/layout/Head.astro", void 0);

const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="lg:max-w-7xl w-full md:fixed z-20 md:px-5" )></header> `;
}, "/Users/Nicolas.Dunke/Development/Projects/url-shortener/frontend/src/components/layout/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Base = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Base;
  const {
    meta: { articleDate, description = siteConfig.description, ogImage, title }
  } = Astro2.props;
  return renderTemplate`<html${addAttribute(siteConfig.lang, "lang")} class="h-full"> ${renderComponent($$result, "Head", $$Head, { "articleDate": articleDate, "description": description, "ogImage": ogImage, "title": title })}${maybeRenderHead()}<body class="flex h-full justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"> ${renderComponent($$result, "ThemeProvider", $$ThemeProvider, {})} <main class="font-satoshi flex h-full w-screen flex-col items-center px-2 pt-2 leading-relaxed"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} <div class="text-primary-foreground w-full"> ${renderComponent($$result, "Footer", $$Footer, {})} </div> </main> </body></html>`;
}, "/Users/Nicolas.Dunke/Development/Projects/url-shortener/frontend/src/layouts/Base.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const meta = siteConfig;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mockup-code flex h-full w-full flex-col border border-white/50 bg-black/40 md:max-w-7xl"> <div class="badge badge-accent absolute right-5">free</div> <div class="mx-auto flex h-full w-full flex-col items-center justify-center px-5 text-center md:max-w-5xl"> <h1 class="pb-2 text-5xl font-medium text-white">
Shorten your to loooooong links in now time. <span class="font-light text-gray-400">for free👨‍🚀</span> </h1> <div id="form" class="w-full text-left" x-data="{ valid: false, filled: false }"> <label class="input flex items-center gap-2 border border-white/50 shadow-xl shadow-black/30"> <input type="text" name="url" id="url" x-on:input.change="valid = isUrlValid($event.target.value); filled = !!$event.target.value; error = false" class="grow" placeholder="Url..."> <div class="tooltip" data-tip="get short url"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cursor-pointer duration-200 hover:text-white" x-bind:class="!valid && 'cursor-default text-gray-500 hover:text-gray-500'" x-on:click="valid && sendData()"> <path d="M10 14l11 -11"></path> <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path> </svg> </div> </label> <span x-show="filled && !valid" class="pl-1 text-error">invalid url</span> <span x-show="$store.error" class="pl-1 text-error">error during url processing</span> <label class="input mt-5 flex w-full items-center shadow-xl shadow-black/30" x-show="$store.result"> <input type="text" name="result" id="result" disabled="true" class="grow" x-model="$store.result"> <div class="tooltip duration-200" data-tip="copy short URL"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cursor-pointer duration-200 hover:text-white" x-on:click="copyUrl()"> <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"></path> <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"></path> </svg> </div> </label> </div> </div> </div> ` })} `;
}, "/Users/Nicolas.Dunke/Development/Projects/url-shortener/frontend/src/pages/index.astro", void 0);

const $$file = "/Users/Nicolas.Dunke/Development/Projects/url-shortener/frontend/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
