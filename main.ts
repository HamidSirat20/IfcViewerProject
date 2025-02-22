import { setupWorld } from "./src/core/worldSetUp.ts";
import { setupIfcLoader } from "./src/core/ifcLoader";
import { createPanel } from "./src/ui/panel";
import { setupStats } from "./src/core/stats";

// Setup World
const container = document.getElementById("container")!;
const { world, components } = setupWorld(container);
const fragmentIfcLoader = await setupIfcLoader(components);

// Setup UI
createPanel(fragmentIfcLoader, world);

// Performance monitoring
setupStats(world.renderer);
