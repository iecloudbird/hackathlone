# Contributing Guidelines

Please take a moment to review this document to make the contribution process easy and effective for everyone involved.

## How to Contribute

### Reporting Bugs

If you encounter a bug in the project, please open a [new issue in the NSSA Jira project](https://hackathlone.atlassian.net/jira/software/projects/NSSA/boards/1/backlog) and provide as much detail as possible, including steps to reproduce the bug, screenshots, expected behavior, and actual behavior.

### Making Changes

New features, bug fixes, improvements, and code refactoring are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

Contributors should review their code before opening a Pull Request. The review should ensure that proper documentation and tests were written and that no debug code was committed.

- Clone the repository and create a new branch from `main`.
  ```bash
  git clone git@github.com:iecloudbird/hackathlone.git
  cd hackathlone
  git checkout -b <feature-branch-name>
  ```
- Make your desired changes in your branch. Ensure that your code follows our coding standards.
- Test your changes locally to ensure they work as expected:
- If you've added code that should be tested, add tests and ensure they pass.
  ```bash
  npm run lint
  # npm run test
  # npm run func
  ```
- Add or update the documentation if necessary.
- Ensure your commits are well-structured and descriptive (see the [Convention Commits](#conventional-commits) section below).

### Submitting Changes

Once you've made your changes:

- Push your changes to origin.
- Open a pull request against your feature branch.
- Provide a clear and concise description of your changes in the pull request, including any relevant context or motivation for the changes, screenshots and video.
  - For new features, a link to the product spec and Figma design will be helpful.
- Be patient! Code reviews can take time, make sure the correct reviewers are tagged in the Pull Request.

## Conventional Commits

News uses the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard to normalize commit messages in the repository. This makes it easy to understand what changes are occurring in the commits and allows us to automate package versioning and release notes in the future.

Example:

```text
type(scope?): simple message < 72 characters

More detailed description (optional)

Footer to add additional issue references (optional)
```

### Rules

Additionally, we are using the [config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional) npm package to standardize on the ruleset. The allowed `type` include:

```js
[
  "build",
  "ci",
  "chore",
  "docs",
  "feat",
  "fix",
  "perf",
  "refactor",
  "revert",
  "style",
  "test",
];
```

### Examples

```sh
echo "foo: some message" # fails as `foo` is not allowed
echo "fix: some message" # passes
echo "feat(blogs): add new feature to blogs" # passes with scope
echo "[NSSA-1234] fix(blogs): fixed bug" # with jira tag
```
