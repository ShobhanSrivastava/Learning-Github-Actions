# First Workflow

GitHub Actions uses YAML syntax to define the workflow. Each workflow is stored as a separate YAML file in your code repository, in a directory named `.github/workflows`.

## Creation steps

- In your repository, create the `.github/workflows/` directory to store your workflow files.

- In the `.github/workflows/` directory, create a new file called `learn-github-actions.yml` and add the following code.

```
name: learn-github-actions
run-name: ${{ github.actor }} is learning GitHub Actions
on: [push]
jobs:
  check-node-version:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: node -v
```

- Commit these changes and push them to your GitHub repository.

### To understand the configuration: 

https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#understanding-the-workflow-file
