var assert = require('assert');
var jsonDump = require('.');

assert(`"<\\/script >"` === jsonDump(`</script >`));
assert(`"<\\/scripT >"` === jsonDump(`</scripT >`));
