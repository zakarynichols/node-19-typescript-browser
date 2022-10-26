# Node v19.0.0 TypeScript and Jest w/Live Reload - Browser

A minimal boilerplate example demonstrating ECMAScript modules with TypeScript and Jest in the browser.

Take note of `"type": "module"` in the `package.json`. Jest will be able to interpret compiled ESNext code so long as the `--experimental-vm-modules` flag is used.

# Development

1. Open a terminal

2. Watch the TypeScript in and re-compile on save.

```
npm run watch-typescript
```

# Jest

1. Open another terminal

2. Run the tests. _Note:_ Must have ran `npm run watch-typescript` first.

Tests are written in TS with ECMAScript modules, compiled to JS modules, and watched by Jest for live-reload. Support for JS modules in Jest is experimental, but very workable.

```
npm run test
```
