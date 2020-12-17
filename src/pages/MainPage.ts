import '../less/main.less'
import BasePage from '../base/BasePage'
import Content from '../components/Content'

class MainPage extends BasePage{
  public title: string = 'Notes'
  public readonly router: string = '/'
  public params: string = ''

  public async init() {
    const mainContainerEl = document.createElement('div')
    mainContainerEl.id = 'main-container'

    Content.init(mainContainerEl)

    document.body.append(mainContainerEl)

    this.initGlobalEventListener()
  }

  private initGlobalEventListener(): void {
    // Cover ctrl/cmd+s event
    document.addEventListener('keydown', (e: KeyboardEvent)=>{
      if ((window.navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)  && e.keyCode == 83) {
        e.preventDefault()
        // do nth
      }
    }, false);
  }
}

export default new MainPage()
