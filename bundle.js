Bun.build({
    entrypoints: ["./index.mjs"],
    target: "node",
    outdir: ".",
    external: ["firebase-functions"]
})