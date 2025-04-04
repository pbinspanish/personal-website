# Person Website Source

Project files for my personal website

## Dependencies

- [Hugo](https://gohugo.io/)
- [Tailwind CSS](https://tailwindcss.com)
- [Flexoki Theme](https://stephango.com/flexoki)
- [Lucide Icons](https://lucide.dev/)

[Prettier](https://prettier.io/) is used for formatting.

## Using Tailwind

Run `tailwind -i themes/theme/static/css/tailwind.css -o themes/theme/static/css/styles.css --watch` in the project folder to update tailwind classes.

## Using Hugo

Run `hugo server` to start the server on localhost:1313.

## Notes

- The publish directory is set to `/pbinspanish.github.io` so builds automatically go to the submodule. This is set in `config.toml`. Anytime you read about publishing files to the `public` directory in the hugo docs, this is where it goes.

## TODO

- [ ] mobile compatible navbar
- [ ] move away from static lucide icons to a tree-shakable method
- [ ] RSS
- [ ] add flexoki attribution
- [ ] redo home page
- [ ] update about page text
- [ ] photograph portfolio
