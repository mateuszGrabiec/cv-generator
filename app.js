// const data = require("./data.json");
import fs from "fs";
import path from "path";
import Handlebars from "handlebars";
import { JSDOM } from "jsdom";
// const handlebars = require("handlebars");
// const { JSDOM } = require("jsdom");
import { jsPDF } from "jspdf";

const data = {
  name: "John Doe",
  title: "Software Developer",
  email: "johndoe@example.com",
  phone: "555-555-5555",
  summary:
    "Experienced software developer with a focus on full-stack web development. Passionate about creating high-quality, maintainable code that meets business objectives.",
  skills: [
    {
      name: "JavaScript",
      level: "Expert",
    },
    {
      name: "React",
      level: "Advanced",
    },
    {
      name: "Node.js",
      level: "Intermediate",
    },
  ],
  experience: [
    {
      title: "Senior Software Developer",
      company: "Acme Corporation",
      location: "New York, NY",
      startDate: "2018-01-01",
      endDate: null,
      description:
        "Developed and maintained a variety of web applications using React, Node.js, and MongoDB.",
    },
    {
      title: "Software Developer",
      company: "Beta Corporation",
      location: "San Francisco, CA",
      startDate: "2015-01-01",
      endDate: "2017-12-31",
      description:
        "Developed and maintained a web-based inventory management system using AngularJS and MySQL.",
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Los Angeles",
      location: "Los Angeles, CA",
      startDate: "2011-09-01",
      endDate: "2015-06-01",
    },
  ],
};

const templatePath = path.join("./src/template.html");
const template = fs.readFileSync(templatePath, "utf8");

// Compile the Handlebars template
const compiledTemplate = Handlebars.compile(template, data);

// Replace the template placeholders with actual data
const html = compiledTemplate(data);

// Save the PDF file
const pdfPath = path.join("./build/cv.html");
fs.writeFileSync(pdfPath, html);

console.log("CV generated successfully!");
