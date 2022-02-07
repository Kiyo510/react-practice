//autbind decorator
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

// ProjectInput Class
class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  discriptionElement: HTMLInputElement;
  manDayElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    ) as HTMLTemplateElement;
    this.hostElement = document.getElementById("app") as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );

    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.titleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.discriptionElement = this.element.querySelector(
      "description"
    ) as HTMLInputElement;
    this.manDayElement = this.element.querySelector(
      "manday"
    ) as HTMLInputElement;

    this.element.id = "user-input";
    this.configure();
    this.attach();
  }

  private configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }

  private getherUserInput(): [string, string, number] | void {
    const enterdTitle = this.titleInputElement.value;
    const enterdDescription = this.discriptionElement.value;
    const enteredManDay = this.manDayElement.value;

    if (
      enterdTitle.trim().length === 0 ||
      enterdDescription.trim().length === 0 ||
      enteredManDay.trim().length === 0
    ) {
      alert("入力値が正しくありません。");
      return;
    } else {
      return [enterdTitle, enterdDescription, +enteredManDay];
    }
  }
  @Autobind
  private submitHandler(event: Event) {
    console.log(1111);

    event.preventDefault();
    const userInput = this.getherUserInput();
    if (Array.isArray(userInput)) {
      const [title, desc, manday] = userInput;
      console.log(title, desc, manday);
    }
  }
  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const prjInput = new ProjectInput();
