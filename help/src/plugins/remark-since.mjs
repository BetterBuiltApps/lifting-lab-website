// Release gating for guide text. Wrap anything that describes a feature that is not live yet in comment markers:
//
//   <!-- since 1.5 -->
//   ...markdown that only exists from release 1.5...
//   <!-- /since -->
//
// While the build is for an earlier release (tools/release.mjs, APP_RELEASE) everything between the markers is removed
// from the page, and so from the table of contents and the search index. When the release is reached the markers
// disappear and the text stays. Rules: markers go on their own line with a blank line around them (block use), or
// sit inline inside a paragraph. They cannot be nested. A marker that does not close, or a stray one, fails the build.
// Whole pages use `since: "1.5"` in the frontmatter instead (see content.config.ts).
import { released } from '../../../tools/release.mjs';

const OPEN = /^<!--\s*since\s+(\d+(?:\.\d+)*)\s*-->$/;
const CLOSE = /^<!--\s*\/since\s*-->$/;
const ANY = /<!--\s*\/?since\b/;

function gate(node, file) {
  if (!node.children) return;
  const out = [];
  let open = null;
  for (const child of node.children) {
    if (child.type === 'html') {
      const v = child.value.trim();
      const m = v.match(OPEN);
      if (m) {
        if (open) throw new Error(`${file}: nested <!-- since --> markers`);
        open = { keep: released(m[1]) };
        continue;
      }
      if (CLOSE.test(v)) {
        if (!open) throw new Error(`${file}: <!-- /since --> without an opening marker`);
        open = null;
        continue;
      }
      if (ANY.test(v)) {
        throw new Error(`${file}: a since marker shares an HTML block with other content. Put it on its own line with a blank line around it.`);
      }
    }
    if (open && !open.keep) continue;
    gate(child, file);
    out.push(child);
  }
  if (open) throw new Error(`${file}: <!-- since --> marker is never closed in the same block`);
  node.children = out;
}

export default function remarkSince() {
  return (tree, file) => gate(tree, file.path ?? 'a guide');
}
