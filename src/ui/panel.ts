import * as BUI from "@thatopen/ui";
import { loadIfc } from "../core/ifcLoader";

export function createPanel(fragmentIfcLoader, world) {
  BUI.Manager.init();
  const panel = BUI.Component.create<BUI.PanelSection>(() => {
    return BUI.html`
        <bim-panel label="IFC Loader file" class="options-menu">
          <bim-panel-section collapsed label="Controls">
            <input type="file" id="ifcFile" accept=".ifc">
            <bim-button label="Load IFC" @click=${() =>
              loadIfc(fragmentIfcLoader, world)}></bim-button>
          </bim-panel-section>
        </bim-panel>
      `;
  });

  document.body.append(panel);
}
