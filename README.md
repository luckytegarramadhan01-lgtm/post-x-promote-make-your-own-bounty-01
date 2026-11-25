# Promote make.fun's make-your-own-bounty post on X

Entry for the make.fun bounty `post-x-promote-make-your-own-bounty-01` (top 50 share $250 in USDC).

The entry is one post of my own on X quoting make.fun's make-your-own-bounty post
(https://x.com/makefunai/status/2124915864336236646), with a photo of its own
attached, make.fun / @makefunai and my play code in its text. Places go by the
post's score: replies + reposts + quotes, read at the deadline.

`POST.json` at this repository's root names the post's address. `main.ts` copies
it to the output directory, where the gate reads it — that is all the program does.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## License

MIT — see `LICENSE`.
