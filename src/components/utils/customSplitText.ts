export class SplitText {
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  lines: HTMLElement[] = [];
  private elements: HTMLElement[] = [];
  private originalContents: string[] = [];

  constructor(target: string | string[] | HTMLElement | NodeListOf<HTMLElement>, options: any = {}) {
    if (typeof target === "string") {
      this.elements = Array.from(document.querySelectorAll(target));
    } else if (Array.isArray(target)) {
      target.forEach(t => {
        if (typeof t === "string") {
          this.elements.push(...Array.from(document.querySelectorAll(t)) as HTMLElement[]);
        } else {
          this.elements.push(t);
        }
      });
    } else if (target instanceof NodeList) {
      this.elements = Array.from(target) as HTMLElement[];
    } else {
      this.elements = [target];
    }

    this.elements.forEach(el => {
      this.originalContents.push(el.innerHTML);
      this.splitElement(el, options);
    });
  }

  private splitElement(element: HTMLElement, options: any) {
    const text = element.innerText;
    element.innerHTML = "";

    const linesClass = options.linesClass || "split-line";

    // Split text by lines based on newlines, or default to one line wrapper
    // For simplicity, we wrap the whole content in one linesClass div, or split by <br> if needed.
    // The original CSS uses split-line with overflow: hidden.
    const lineDiv = document.createElement("div");
    lineDiv.className = linesClass;
    lineDiv.style.display = "block";

    const words = text.split(" ");
    words.forEach((word, wordIndex) => {
      const wordSpan = document.createElement("div");
      wordSpan.style.display = "inline-block";
      wordSpan.className = options.wordsClass || "split-word";

      const chars = word.split("");
      chars.forEach((char) => {
        const charSpan = document.createElement("div");
        charSpan.style.display = "inline-block";
        charSpan.className = options.charsClass || "split-char";
        charSpan.innerText = char;
        wordSpan.appendChild(charSpan);
        this.chars.push(charSpan);
      });

      lineDiv.appendChild(wordSpan);
      this.words.push(wordSpan);

      if (wordIndex < words.length - 1) {
        lineDiv.appendChild(document.createTextNode(" "));
      }
    });

    element.appendChild(lineDiv);
    this.lines.push(lineDiv);
  }

  revert() {
    this.elements.forEach((el, i) => {
      if (this.originalContents[i] !== undefined) {
        el.innerHTML = this.originalContents[i];
      }
    });
    this.chars = [];
    this.words = [];
    this.lines = [];
  }
}
