To put this together:

1. Add a site in IIS with host name  **webelement-localhost**. Point at the Host folder

0. Add a second site in IIS with any host name you like, e.g. `consumer`. Point at the Consumer folder

0. Add host entries in c:\windows\system32\drivers\etc\hosts
    ```
    127.0.0.1   webelement-localhost
    127.0.0.1   consumer (or whatever your choice was in step 2)
    ```
0. in your web browser now, hit http://consumer (or whatever your choice was in step 2, that you have added a host entry for)

You'll expect to see: two iterations of the web element as described by `host\helloworld.js`, consumed from `consumer\index.html`

It's not beautiful, but should at least serve as a start point for describing how we might be able to define an element that we simply host. Whether its the correct approach, who knows. But it should be possible at least.

When considering generating from typescript, f.x. from an angular component, we're going to want to explore if privacy can be ensured

1. install [node.js](https://nodejs.org/en/download/)
0. install typescript: `npm install -g typescript`
0. transpile: `tsc helloworld.ts`