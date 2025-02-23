import * as BUI from "@thatopen/ui";
import { loadIfc } from "../core/ifcLoader";

export function createPanel(fragmentIfcLoader, world) {
  BUI.Manager.init();
  const panel = BUI.Component.create<BUI.PanelSection>(() => {
    return BUI.html`

          <bim-panel-section class="uploadBtn" collapsed label="Upload">
            <input type="file" id="ifcFile" accept=".ifc">
            <bim-button label="Load IFC" @click=${() =>
              loadIfc(fragmentIfcLoader, world)}></bim-button>
          </bim-panel-section>


      `;
  });

  document.getElementById("import-file")?.append(panel);
}
