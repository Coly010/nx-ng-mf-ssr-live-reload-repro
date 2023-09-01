module.exports = {
  name: 'demo',
  exposes: {
    './Module': 'packages/demo/src/app/remote-entry/entry.module.ts',
  },
};
