import Stats from "stats.js";

export function setupStats(worldRenderer) {
  const stats = new Stats();
  stats.showPanel(2);
  document.body.append(stats.dom);
  stats.dom.style.left = "0px";
  stats.dom.style.zIndex = "unset";
  worldRenderer.onBeforeUpdate.add(() => stats.begin());
  worldRenderer.onAfterUpdate.add(() => stats.end());
}
