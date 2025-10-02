# luismarques.io

This is a Jekyll-based project that uses Ruby and Bundler for dependency management. The project is structured as a static website, with data-driven content powered by YAML files.

Jekyll is a simple, blog-aware, static site generator that's ideal for personal, project, or organization sites.

## Project Structure

The project is structured as follows:

- `_data/`: Contains YAML files that drive the content of the website. This includes information about awards, experience, hobbies, open-source contributions, projects, publications, skills, and testimonials.
- `_includes/`: Contains HTML files for different sections of the website, such as about, awards, hobbies, intro, jobs, navbar, open source, projects, publications, scripts, skills, and testimonials.
- `_sass/`: Contains SCSS files for styling the website. Each section of the website has its own SCSS file for easy maintenance and updates.
- `assets/`: Contains static assets for the website, such as images and documents.
- `js/`: Contains JavaScript files for adding interactivity to the website. Each section of the website has its own JavaScript file for easy maintenance and updates.

## Getting Started

To get started with this project, you need to have Ruby and Bundler installed. Once you have these prerequisites, you can install the project dependencies with:

```sh
gem install bundler
bundle install
```

Then, you can run the project locally with:

```sh
bundle exec jekyll serve
```
