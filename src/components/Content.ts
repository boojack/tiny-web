/**
 * 工具按钮视图类：实现按钮的样式与点击事件处理（回调给Service层）
 */
import '../less/content.less'

// tslint:disable-next-line: no-empty-interface
interface State {
  // do nothing
}

class ContentComponent {
  public state: State = {}

  private rootEl: HTMLElement

  constructor() {
    // do nothing
  }

  public init(container: HTMLElement = document.body, props?: {}) {
    const rootEl = document.createElement('div')
    rootEl.className = 'tools-bar-container'

    this.rootEl = rootEl
    container.append(this.rootEl)

    this.initBtns()
  }

  private initBtns() {
    // Save
    const saveNoteBtnEl = document.createElement('button')
    saveNoteBtnEl.className = 'tool-btn save-data-btn'
    saveNoteBtnEl.innerHTML = 'Save'
    saveNoteBtnEl.addEventListener('click', this.handleSaveNoteBtnClick.bind(this))
    this.rootEl.append(saveNoteBtnEl)

  }

  private async handleSaveNoteBtnClick(e?: Event) {
    // TODO:
  }
}

export default new ContentComponent()
