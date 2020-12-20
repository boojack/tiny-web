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
    rootEl.className = 'content-container'

    this.rootEl = rootEl
    container.append(this.rootEl)

    this.initBtns()
  }

  private initBtns() {
    const saveNoteBtnEl = document.createElement('button')
    saveNoteBtnEl.className = 'btn'
    saveNoteBtnEl.innerHTML = 'Hello world!'
    this.rootEl.append(saveNoteBtnEl)
  }
}

export default new ContentComponent()
