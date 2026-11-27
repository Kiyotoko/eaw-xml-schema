# Contributing

Thank you for your interest in contributing to the EaW xml schemas!  
This guide provides all the information you need to get started.

## Open an Issue

You can open an issue on GitHub [here](https://github.com/Kiyotoko/eaw-xml-schema/issues/new/choose).

Please follow these guidelines:

- **Bug reports:** Use the _bug report_ template for bugs, unexpected behaviour, or build failures.
- **Documentation requests:** Use the _documentation request_ template if you find false, outdated, or missing documentation.
- **Feature requests:** Use the _feature request_ template for proposing new features or enhancements.

Providing clear and detailed information helps us reproduce issues quickly and understand your requests more effectively.

## Open a Pull Request

> [!TIP]
> If you use Nix, you can enter a development shell by running
>
> ```sh
> nix develop
> ```
>
> from the repository root.

To contribute code, please follow these steps:

1. Fork the repository on GitHub.
2. Clone your fork locally.
3. Make your changes.
4. Format your code by running
   ```sh
    prettier --write docs/**/*.md
   ```
5. Commit your changes and open a pull request.
   In the pull request:
   - Use the pull request template.
   - Describe the changes you made.
   - Reference any related issues.
   - Complete the checklist.

## Commit Conventions

We use the [conventional commits](https://www.conventionalcommits.org/) conventions. Please write your commit messages **in English only**! Your commit messages should follow this structure:

- feat(scope): add your cool new feature
- fix: fix a bug
- docs: add or improve documentation
- style: reformat code (no logic changes)

Write commit messages in the imperative mood (e.g., “add feature”, not “added feature”).

## Documentation

We use mdBook for generating our documentation from Markdown. From there website:

> mdBook is a utility to create modern online books from Markdown files.

You can build the documentation with:

```sh
mdbook build docs
```

You can format all files with prettier:

```sh
prettier --write docs/**/*.md
```

---

Thank you for helping improve the EaW xml schemas!
