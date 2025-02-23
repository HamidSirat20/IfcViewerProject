import * as THREE from "three";
import Stats from "stats.js";
import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";

function sectionPlane(
  components: OBC.Components,
  world: OBC.SimpleWorld<OBC.SimpleScene, OBC.SimpleCamera, OBC.SimpleRenderer>,
  container: HTMLElement
) {
  const casters = components.get(OBC.Raycasters);
  casters.get(world);

  const clipper = components.get(OBC.Clipper);
  clipper.config.enabled = true;
  clipper.config.visible = true;
  clipper.config.opacity = 0.3;
  clipper.config.size = 13;

  // Changed to dblclick event
  container.ondblclick = () => {
    if (clipper.config.enabled) {
      console.log("✅ Creating a Clipping Plane...");
      clipper.create(world);
    }
  };

  window.onkeydown = (event) => {
    if (event.code === "Delete" || event.code === "Backspace") {
      if (clipper.config.enabled) {
        console.log("🗑 Removing Clipping Plane...");
        clipper.delete(world);
      }
    }
  };

  BUI.Manager.init();

  const panel1 = BUI.Component.create<BUI.PanelSection>(() => {
    return BUI.html`
      <bim-panel class="properties-panel" label="Legend">
        <bim-panel-section >
          <bim-label>Double click: Create clipping plane</bim-label>
          <bim-label>Delete key: Delete clipping plane</bim-label>
        </bim-panel-section>
      </bim-panel>
    `;
  });
  const panel2 = BUI.Component.create<BUI.PanelSection>(() => {
    return BUI.html`
      <bim-panel class="properties-panel">
        <bim-panel-section >
          <bim-checkbox
            label="Clipper enabled"
            checked
            @change="${({ target }: { target: BUI.Checkbox }) => {
              clipper.config.enabled = target.value;
            }}">
          </bim-checkbox>
          <bim-checkbox
            label="Clipper visible"
            checked
            @change="${({ target }: { target: BUI.Checkbox }) => {
              clipper.config.visible = target.value;
            }}">
          </bim-checkbox>

        </bim-panel-section>
      </bim-panel>
    `;
  });

  const panel3 = BUI.Component.create<BUI.PanelSection>(() => {
    return BUI.html`
      <bim-panel class="properties-panel">
        <bim-panel-section >
         <bim-color-input
            label="Planes Color"
            color="#202932"
            @input="${({ target }: { target: BUI.ColorInput }) => {
              clipper.config.color = new THREE.Color(target.color);
            }}">
          </bim-color-input>

          <bim-number-input
            slider
            step="0.01"
            label="Planes opacity"
            value="0.2"
            min="0.1"
            max="1"
            @change="${({ target }: { target: BUI.NumberInput }) => {
              clipper.config.opacity = target.value;
            }}">
          </bim-number-input>
        </bim-panel-section>
      </bim-panel>
    `;
  });
  const panel4 = BUI.Component.create<BUI.PanelSection>(() => {
    return BUI.html`
      <bim-panel class="properties-panel">
        <bim-panel-section >
          <bim-number-input
            slider
            step="0.1"
            label="Planes size"
            value="5"
            min="2"
            max="10"
            @change="${({ target }: { target: BUI.NumberInput }) => {
              clipper.config.size = target.value;
            }}">
          </bim-number-input>
          <bim-button
            label="Delete all"
            @click="${() => {
              clipper.deleteAll();
            }}">
          </bim-button>
        </bim-panel-section>
      </bim-panel>
    `;
  });

  document.getElementById("section")?.append(panel1, panel2, panel3, panel4);
}

export default sectionPlane;
