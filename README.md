# @x12i/memorix-db-router usage example

Canonical database-name routing for Memorix data and metadata databases.

This consuming application demonstrates **resolve canonical tenant database names without a database connection** using the published npm package, pinned to `3.0.2`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Resolve the canonical data database name for a scope.
- Resolve the metadata database without hard-coded naming rules.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/memorix-db-router)
- [Implementation monorepo](https://github.com/x12i/memorix-mono-repo)
- [Reviewed package source](https://github.com/x12i/memorix-mono-repo/tree/b87d277ff9c40cedc18d5f4775642baf8a2d3df1/memorix-db-router)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
