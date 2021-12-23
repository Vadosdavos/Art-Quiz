import { BaseComponent } from '../base-componet';
import { InputComponent, InputTypes } from '../input-component';
import './tree-settings.scss';

const TREE_TYPE_NUM = 7;
const BG_TYPE_NUM = 11;
const LIGHTS_COLORS = ['multi', 'red', 'yellow', 'blue', 'deeppink'];
export class Settings extends BaseComponent {
  soundButton = new BaseComponent('button', ['sound-button']);

  snowButton = new BaseComponent('button', ['snow-button']);

  buttonsContainer = new BaseComponent('div', ['buttons-container']);

  treeTypeContainer = new BaseComponent('div', ['tree-type-container']);

  bgTypeContainer = new BaseComponent('div', ['background-type-container']);

  lightsContainer = new BaseComponent('div', ['lights-container']);

  lightsTypeContainer = new BaseComponent('div', ['lights-type-container']);

  constructor() {
    super('div', ['tree-settings']);
    this.render();
  }

  lightsOffContainer = new BaseComponent('div', ['lights-off-container']);

  lightsOffButton = new InputComponent(InputTypes.checkbox, [
    'lights-off-button',
  ]);

  lightsOffLabel = new BaseComponent('label', ['lights-off-label'], 'on off');

  private render(): void {
    this.buttonsContainer.element.append(
      this.soundButton.element,
      this.snowButton.element,
    );
    this.renderSettingsCards('tree', TREE_TYPE_NUM, this.treeTypeContainer);
    this.renderSettingsCards('bg', BG_TYPE_NUM, this.bgTypeContainer);
    this.renderLightsTypes();
    this.renderLightOff();
    this.element.append(
      this.buttonsContainer.element,
      this.treeTypeContainer.element,
      this.bgTypeContainer.element,
      this.lightsContainer.element,
    );
  }

  private renderSettingsCards(
    name: string,
    amount: number,
    target: BaseComponent,
  ): void {
    for (let i = 1; i < amount; i++) {
      const item = new BaseComponent('div', [`${name}-type`]);
      item.element.style.backgroundImage = `url(../../assets/${name}/${i}.${
        name === 'tree' ? 'png' : 'jpg'
      })`;
      target.element.append(item.element);
    }
  }

  private renderLightsTypes(): void {
    LIGHTS_COLORS.forEach((el) => {
      const item = new BaseComponent('button', ['light-button', `light-${el}`]);
      this.lightsTypeContainer.element.append(item.element);
    });
  }

  private renderLightOff(): void {
    this.lightsOffLabel.element.setAttribute('for', 'off-checkbox');
    this.lightsOffButton.element.setAttribute('id', 'off-checkbox');
    this.lightsOffContainer.element.append(
      this.lightsOffButton.element,
      this.lightsOffLabel.element,
    );
    this.lightsContainer.element.append(
      this.lightsTypeContainer.element,
      this.lightsOffContainer.element,
    );
  }
}