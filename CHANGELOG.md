# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Supports Svelte 3

### Changed
- Icon definitions are via data={iconName} instead of icon="iconName" 

## [v1.4.1] - 2018-09-28
### Fixed
- Guard when accessing refs onupdate() to prevent TypeError

## [v1.4.0] - 2018-08-08
### Added
- `svelte` property in package.json (closes #244)

## [v1.3.0] - 2018-06-24
### Added
- Svelte 2 compatibility

## [v1.2.2] - 2018-02-15
### Fixed
- Icon not defined when compiling with svelte 1.55

## [v1.2.1] - 2017-12-25
### Fixed
- Resolved computed variable scope error (due to new svelte version) 

## [v1.2.0] - 2017-12-04
### Added
- CSS and animation support

## [v1.1.1] - 2017-12-04
### Fixed
- Moved raw icon rendering to separate component to resolve rendering issues

## [v1.1.0] - 2017-11-29
### Added
- Icons dynamically update when icon `name` is changed

## [v1.0.3] - 2017-11-29
### Fixed
- Redo broken release

## [v1.0.2] - 2017-11-29
### Removed
- Removed svelte as peer dependency
### Added
- Compiled javascript included in published version (in `dist` directory)

## [v1.0.1] - 2017-11-29
### Fixed
- SVG polygon rendering using incorrect HTML element

## [v1.0.0] - 2017-11-29
### Added
- Initial release

[Unreleased]:  https://github.com/RobBrazier/svelte-awesome/compare/v1.4.1...HEAD
[v1.4.1]: https://github.com/RobBrazier/svelte-awesome/compare/v1.4.1...v1.4.1
[v1.4.0]: https://github.com/RobBrazier/svelte-awesome/compare/v1.3.0...v1.4.0
[v1.3.0]: https://github.com/RobBrazier/svelte-awesome/compare/v1.2.2...v1.3.0
[v1.2.2]: https://github.com/RobBrazier/svelte-awesome/compare/v1.2.1...v1.2.2
[v1.2.1]: https://github.com/RobBrazier/svelte-awesome/compare/v1.2.0...v1.2.1
[v1.2.0]: https://github.com/RobBrazier/svelte-awesome/compare/v1.1.1...v1.2.0
[v1.1.1]: https://github.com/RobBrazier/svelte-awesome/compare/v1.1.0...v1.1.1
[v1.1.0]: https://github.com/RobBrazier/svelte-awesome/compare/v1.0.3...v1.1.0
[v1.0.3]: https://github.com/RobBrazier/svelte-awesome/compare/v1.0.2...v1.0.3
[v1.0.2]: https://github.com/RobBrazier/svelte-awesome/compare/v1.0.1...v1.0.2
[v1.0.1]: https://github.com/RobBrazier/svelte-awesome/compare/v1.0.0...v1.0.1
[v1.0.0]: https://github.com/RobBrazier/svelte-awesome/releases/tag/v1.0.0
