document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector(".faq-container");

  async function getFaq() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    const posts = data;

    // Loop through the FAQ item array
    posts.forEach((post) => {
      // Create a new FAQ item
      const faqItem = document.createElement("div");
      faqItem.classList.add("faqItem");

      // Create and add the title (question)
      const title = document.createElement("div");
      title.classList.add("section");
      title.textContent = post.title;
      faqItem.appendChild(title);

      // Add the icon to the title
      const icon = document.createElement("i");
      icon.classList.add("faq-icon", "fas", "fas-plus");
      title.appendChild(icon);

      // Prepend the icon to the title
      title.prepend(icon);
      faqItem.appendChild(title);

      // Create and add the description (answer)
      const description = document.createElement("div");
      description.classList.add("description");
      description.textContent = post.body;
      faqItem.appendChild(description);

      // Append the FAQ item to the container
      faqContainer.appendChild(faqItem);

      // Add the click event listener for toggling the active class
      title.addEventListener("click", () => {
        //toggle active class
        title.classList.toggle("active");
        const description = title.nextElementSibling; // Get the next sibling which is the description
        if (description && description.classList.contains("description")) {
          description.style.display =
            description.style.display === "block" ? "none" : "block";
        }

        // Toggle icon between plus and minus
        const icon = title.querySelector(".faq-icon");
        if (icon) {
          if (description.style.display === "block") {
            icon.classList.remove("fa-plus");
            icon.classList.add("fa-minus");
          } else {
            icon.classList.remove("fa-minus");
            icon.classList.add("fa-plus");
          }
        }
      });
    });
  }
  getFaq();
});
