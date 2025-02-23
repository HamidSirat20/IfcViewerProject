import { setupWorld } from "./src/core/worldSetUp.ts";
import { setupIfcLoader } from "./src/core/ifcLoader";
import { createPanel } from "./src/ui/panel";
import { setupStats } from "./src/core/stats";
import sectionPlane from "./src/core/sectionPlane.ts";

// Setup World
const container = document.getElementById("container")!;
const { world, components } = setupWorld(container);
const fragmentIfcLoader = await setupIfcLoader(components);

// Setup Clipper
sectionPlane(components, world, container);

// Setup UI
createPanel(fragmentIfcLoader, world);

// Performance monitoring
setupStats(world.renderer);
