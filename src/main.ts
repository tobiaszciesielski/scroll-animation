import "./style.scss";

const content = document.getElementById("content");
if (content) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < 36; i++) {
    const div = document.createElement("div");
    div.classList.add("content-item");
    div.innerText = `Element ${i}`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry.boundingClientRect);
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-up");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      }
    );

    observer.observe(div);
    fragment.appendChild(div);
  }

  content.appendChild(fragment);
}
