name: Deployment

on: [push, pull_request]

jobs:
  cd:
    runs-on: ${{ matrix.os }}
    env:
      working-directory: ./frontend

    defaults:
      run:
        working-directory: ${{ env.working-directory }}

    strategy:
      matrix:
        os: [ubuntu-latest]
        node: [20]

    steps:
      - name: Checkout
        uses: actions/checkout@master

      - name: Setup node env
        uses: actions/setup-node@v2.1.2
        with:
          node-version: ${{ matrix.node }}

      - name: Install dependencies
        run: npm install

      - name: Generate
        run: npm run generate

      - name: Build copy push
        uses: peaceiris/actions-gh-pages@v3
        env:
          API_TOKEN_GITHUB: ${{ secrets.API_TOKEN_GITHUB }}
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./frontend/.output/public
          publish_branch: build-site
