[![Join Discord][join-discord-image]][join-discord-url]
[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-downloads-url]
[![MIT License][license-image]][license-url]
[![NPM Publish][npm-publish-action-image]][npm-publish-action-url]

# React Native Component Template

This is a sample repository which can be used to develop new component libraries and push to NPM. Tailwind is integrated and purge is configured. So, when you make a final build, CSS would be send along with package.

### Where to write components?

1. There is a `src` folder where you can write your components
2. Whichever components you want to be exposed would go into: `index.js`

## Workflow

### Storybook

- Run: `yarn storybook` and `yarn ios` or `yarn android` which will run the storybook in your localhost
- Open `storybook/stories/Box/Box.stories.js` to find an example of Storybook
- When you write your own component, also write a `.stories.jsx` and storybook would pick it up

## Contributing

### New components

Hit us on discord on `ideas` channel. Propose your ideas, we will blow our brains out.

### To existing components

Right now we don't a lot of hard and fast rules. 

Just follow: https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow

Basically:

- Fork the component to which you want to contribute
- Make your changes, test it properly
- Raise a Pull Request

## Releases

Once your pull request is made, a release would be schedule which will push the library to npm to @reusejs org. You can't push to reusejs org.
 
## License

react-native-component-template is freely distributable under the terms of the [MIT license][license-url].

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-url]: https://npmjs.org/package/@reusejs/react-native-component-template
[npm-version-image]: https://img.shields.io/npm/v/@reusejs/react-native-component-template.svg?style=flat

[npm-downloads-image]: https://img.shields.io/npm/dm/@reusejs/react-native-component-template.svg?style=flat
[npm-downloads-url]: https://npmcharts.com/compare/@reusejs/react-native-component-template?minimal=true

<!-- [view-storybook-image]: https://img.shields.io/badge/View-Storybook-F59E0B.svg
[view-storybook-url]: https://master--617258d6729860003a3d6e10.chromatic.com -->

[join-discord-image]: https://img.shields.io/badge/Join-Discord-7389D8.svg
[join-discord-url]: https://discord.gg/VUa9SHvvDb

<!-- [storybook-action-image]: https://github.com/reusejs/react-native-component-template/actions/workflows/chromatic.yml/badge.svg
[storybook-action-url]: https://github.com/reusejs/react-native-component-template/actions/workflows/chromatic.yml -->

[npm-publish-action-image]: https://github.com/reusejs/react-native-component-template/actions/workflows/publish.yml/badge.svg
[npm-publish-action-url]: https://github.com/reusejs/react-native-component-template/actions/workflows/publish.yml