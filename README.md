# Deno Codespaces template 🦕
A template for building deno modules with a github codespaces setup.

## How to use
1. On Github, simply click the `Use this template` button.
2. From there, on your generated repository, click the `Code` button and create a new codespace
3. Github codespaces will do the rest for you!

## Summary of the template
This template is setup to show how one might build a module using
Deno. You'll find the following files in the template:
- `deps.ts` This is where you import and re-export any third party dependencies for convienience
- `mod.ts` This is where you might export everything a library consumer would consume
- `main.ts` This is setup for you in case you want to run an applciation, 
you can do that using `deno run main.ts`
- `src/types.ts` This is where you might define all the TypeScript types
- `src/error.ts` This is where you might define all the errors you use
- `tests/test.deps.ts` This where you import and re-export any third party dependencies
 your **tests** may use
- `test/example.test.ts` This is an example test. You can run it using `deno test`
- `import_map.json` An example import maps. As of me writing this, import maps are
**unstable** and thus not used by the other files. But I put it here for convienience
- `.devcontainer` You don't have to worry about this, this is where the setup for
github codespaces lives

## License
This template is licensed under an MIT license.

## Contributing
PRs and Issues are very welcome! 🤝

