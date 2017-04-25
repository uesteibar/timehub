# TimeHub

[![code style](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg?style=flat-square)]()
[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)]()
[![Code Climate](https://codeclimate.com/github/uesteibar/timehub/badges/gpa.svg)](https://codeclimate.com/github/uesteibar/timehub)

Analyse the entire story of your Github repo in a timeline.

Built in the #meleeton2017

- [Running Locally](#running-locally)
- [Contributing](#contributing)
- [Helpers/Tools](#helperstools)
- [Maintainers](#maintainers)

## Running locally

Clone the repository
```bash
git clone --depth=1 git@github.com:uesteibar/timehub.git
```

Install dependencies
```bash
cd timehub
yarn
```

Install MongoDB

You also need to create a `.env` file and add `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET`.
The reason for this is that we do too many requests to import a repo and we would otherwise exceed the rate limit.

Run the server
```bash
yarn start
```

Go to `http://127.0.0.1:3000/:username/:repo`
Keep in mind that in the first load we import all the date we need and it might take quite long depending on the size of the project :)


## Contributing

The project uses [`standard-version`][standard-version] to update the [CHANGELOG][] with each commit message and upgrade the package version. For that reason every contribution should have a title and body that follows the [conventional-changelog-standard][] conventions.

So this is a step by step guide to contributing to the project (mostly extracted from the [`standard-version`][standard-version] docs):

1. when you land commits on your `master` branch, select the _Rebase and Merge_ option.
2. add a title and body that follows the [conventional-changelog-standard conventions][conventional-changelog-standard].
3. when you're ready to release a new version:
  1. `git checkout master; git pull origin master`
  2. run `npm run deploy`

## Helpers/Tools

- [Changelog](https://github.com/uesteibar/timehub/blob/master/CHANGELOG.md)
- [Code of conduct](https://github.com/uesteibar/timehub/blob/master/CHANGELOG.md)
- [Code style](https://npm.im/prettier)
- [commitizen](https://github.com/commitizen/cz-cli): A cli that will prompt the author to fill out any required commit fields at commit time. For this project we would use the [cz-conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) adapter.
- [conventional-changelog-standard](https://github.com/bcoe/conventional-changelog-standard/blob/master/convention.md)
- [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog)
- [standard-version](https://github.com/conventional-changelog/standard-version)

## Maintainers

- [@uesteibar](https://github.com/uesteibar)
