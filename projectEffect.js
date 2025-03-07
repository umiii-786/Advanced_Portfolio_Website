const projectShowcase = document.querySelector(".projects");
const projects = projectShowcase.querySelectorAll(".project");
const projectImg = document.querySelectorAll('.project__image')
const images = projectShowcase.querySelectorAll("img");

document.addEventListener("DOMContentLoaded", () => {

    projects.forEach((currentProject, Index) => {
        const title = currentProject.querySelector(".project__title");

        projectImg[Index].addEventListener("mouseover", () => {
            projectShowcase.classList.add("projects--hovered");
            projects.forEach((project) => {
                if (project.classList.contains("project--hovered")) {
                    project.classList.remove("project--hovered");
                }
                if (project == currentProject) {
                    currentProject.classList.add("project--hovered");
                }
            });
        });

        currentProject.addEventListener("mouseleave", () => {
            projectShowcase.classList.remove("projects--hovered");
            currentProject.classList.remove("project--hovered");
            //   cursor.classList.remove("cursor__circle--active");
            //   cursorText.innerText = "";
        });
    });
});
