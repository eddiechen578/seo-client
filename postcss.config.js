module.exports = {
    plugins: [
        "postcss-flexbugs-fixes",
        "postcss-import",
        "tailwindcss",
        "postcss-preset-env",
        [
            "postcss-nested",
            {
                bubble: ["screen"],
            },
        ],
    ],
};
