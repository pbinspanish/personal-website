// in theory this should cause the icons to be tree-shaken,
// in practice that does not appear to be the case
// TODO: figure out why
// for now i'm just importing everything
// to avoid having to manually add all the icon names
// will also need a way to figure out how to get those automatically
// for stuff like links

import { createIcons, icons } from "./lucide-icons.js";

createIcons({
  icons,
});
