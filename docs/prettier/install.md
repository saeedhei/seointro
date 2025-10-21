# no needed to install

# .prettierrc

    {
    "$schema": "https://json.schemastore.org/prettierrc",
    "semi": true,
    "trailingComma": "all",
    "singleQuote": true,
    "jsxSingleQuote": false,
    "printWidth": 100,
    "tabWidth": 2,
    "useTabs": false,
    "bracketSpacing": true,
    "bracketSameLine": false,
    "arrowParens": "always",
    "endOfLine": "lf",
    "quoteProps": "as-needed",
    "proseWrap": "preserve"
    }

# .prettierignore

    # VSCode
    .vscode/extensions.json

    # Node
    node_modules

    # Build outputs
    .next
    dist

    # Env files
    .env*

# .vscode\settings.json

    {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
    }
