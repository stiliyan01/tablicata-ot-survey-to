let namespace = {
  table: document.querySelector(".table"),

  output: "",

  array: [
    {
      className: "question",
      text: "Date",
      answers: [{ answerText: null, points: null }],
      depth: 0,
    },
    {
      className: "question",
      text: "Time in",
      answers: [{ answerText: null, points: null }],
      depth: 0,
    },
    {
      className: "question",
      text: "Time out",
      answers: [{ answerText: null, points: null }],
      depth: 0,
    },
    {
      className: "question",
      text: "1. GENERIC Question",
      answers: [
        { answerText: "answer 1", points: null },
        { answerText: "answer 2", points: null },
        { answerText: "answer 3", points: null },
        { answerText: "Other", points: null },
      ],
      depth: 0,
    },
    {
      className: "commentForShopper",
      text: "comment for shopper",
      depth: 0,
    },
    {
      className: "survey",
      text: "SECTION Level 1",
      depth: 0,
    },
    {
      className: "question",
      text: "2. NUMERIC Question",
      answers: [{ answerText: null, points: null }],
      depth: 1,
    },
    {
      className: "question",
      text: "3. TEXT Question",
      answers: [{ answerText: null, points: null }],
      depth: 1,
    },
    {
      className: "question",
      text: "4. CATEGORICAL Question",
      answers: [
        { answerText: "Yes", points: 10 },
        { answerText: "No", points: "0" },
      ],
      depth: 1,
    },
    {
      className: "commentForShopper",
      text: "comment for shopper",
      depth: 1,
    },
    {
      className: "survey",
      text: "SECTION Level 2",
      depth: 1,
    },
    {
      className: "question",
      text: "5. TEXT Question",
      answers: [{ answerText: null, points: null }],
      depth: 2,
    },
    {
      className: "question",
      text: "6. INFO",
      answers: [{ answerText: null, points: null }],
      depth: 2,
    },
    {
      className: "survey",
      text: "Grid",
      depth: 0,
    },
    {
      className: "question",
      text: "7. row 1/ col 1",
      answers: [
        { answerText: "Yes", points: 10 },
        { answerText: "No", points: "0" },
      ],
      depth: 1,
    },
    {
      className: "question",
      text: "8. row 1/ col 2",
      answers: [{ answerText: "N/A", points: null }],
      depth: 1,
    },
    {
      className: "question",
      text: "9. row 1/ col 3",
      answers: [
        { answerText: "1", points: null },
        { answerText: "2", points: null },
        { answerText: "3", points: null },
        { answerText: "4", points: null },
        { answerText: "5", points: null },
        { answerText: "6", points: null },
      ],
      depth: 1,
    },
    {
      className: "question",
      text: "10. row 2/ col 1",
      answers: [
        { answerText: "Yes", points: 10 },
        { answerText: "No", points: "0" },
      ],
      depth: 1,
    },
    {
      className: "question",
      text: "11. row 2/ col 2",
      answers: [{ answerText: "N/A", points: null }],
      depth: 1,
    },
    {
      className: "question",
      text: "12. row 2/ col 3",
      answers: [
        { answerText: "1", points: null },
        { answerText: "2", points: null },
        { answerText: "3", points: null },
        { answerText: "4", points: null },
        { answerText: "5", points: null },
        { answerText: "6", points: null },
      ],
      depth: 1,
    },
    {
      className: "question",
      text: "13. TEXT Question",
      answers: [{ answerText: null, points: null }],
      depth: 0,
    },
    {
      className: "question",
      text: "14.NUMERIC Question",
      answers: [{ answerText: null, points: null }],
      depth: 0,
    },
  ],

  renderTable: function () {
    this.output += `<tbody>`;
    this.array.forEach((row) => {
      this.output += `
      <tr>
       ${this.getRow(row)}
      </tr>`;
    });
    this.output += `</tbody>`;
    this.table.innerHTML += this.output;
  },

  getRow: function (row) {
    // debugger;
    let result = "";
    if (row.answers) {
      result += `${this.htmlForQuestion(row)}`;
    } else {
      result += `${this.htmlForSurveyAndComment(row)}`;
    }

    return result;
  },

  renderAnswers: function (answers) {
    let result = "";

    answers.forEach((answer) => {
      result += this.renderAnswer(answer);
    });

    return result;
  },

  renderAnswer: function (answer) {
    let answerForRendering = `&nbsp ${
      answer.answerText ? "()" + answer.answerText : ""
    }`;
    let answerPointsForRendering = `${
      answer.points ? "(" + answer.points + ")" : ""
    }`;
    return `&nbsp${answerForRendering} ${answerPointsForRendering}`;
  },

  levelOfDepth: function (element) {
    return `${"&nbsp&nbsp".repeat(element.depth || 0) + element.text}`;
  },
  fontSizeForSurveyTitle: function (row) {
    let originalFontSize = 25;
    let result = originalFontSize - 1 * row.depth;
    if (result > 18) {
      return result / 16;
    } else {
      return 18 / 16;
    }
  },
  fontSizeForQuestion: function (row) {
    let originalFontSize = 20;
    let result = originalFontSize - 1 * row.depth;
    if (result > 15) {
      return result / 16;
    } else {
      return 15 / 16;
    }
  },

  htmlForSurvey: function (row) {
    return `<td colspan="2" style="font-size:${this.fontSizeForSurveyTitle(
      row
    )}rem;font-weight:bold;">${this.levelOfDepth(row)}</td>`;
  },
  htmlForQuestion: function (row) {
    return `<td style="font-size:${this.fontSizeForQuestion(
      row
    )}rem;font-weight:bold"> ${this.levelOfDepth(row)}
   </td><td style="font-size:${this.fontSizeForQuestion(
     row
   )}rem;font-weight:bold">${this.renderAnswers(row.answers)}</td>`;
  },
  htmlForComment: function (row) {
    return `<td colspan="2" style="font-size:1.1rem;font-style:italic">${this.levelOfDepth(
      row
    )}</td>`;
  },
  htmlForSurveyAndComment: function (row) {
    switch (row.className) {
      case "survey":
        return this.htmlForSurvey(row);
      case "commentForShopper":
        return this.htmlForComment(row);
      default:
    }
  },
  fontSizeOptionButtons: function () {
    // let table = document.querySelector(".table");
    let fontSizeSmall = document.querySelector(".smallFont");
    let fontSizeMedium = document.querySelector(".mediumFont");
    let fontSizeLarge = document.querySelector(".largeFont");

    fontSizeSmall.addEventListener("click", () => {
      this.table.style.fontSize = "1rem";
    });

    fontSizeMedium.addEventListener("click", () => {
      this.table.style.fontSize = "2rem";
    });

    fontSizeLarge.addEventListener("click", () => {
      this.table.style.fontSize = "3rem";
    });
  },
  fontColorOptionButtons: function () {
    let table = document.querySelector(".table");
    let blackColorFont = document.querySelector(".firstColor");
    let greyColorFont = document.querySelectorAll(".secondColor");

    blackColorFont.addEventListener("click", () => {
      table.style.color = "black";
    });
    greyColorFont.forEach((el) => {
      el.addEventListener("click", () => {
        table.style.color = "grey";
      });
    });
  },
  start: function () {
    this.renderTable(), this.fontColorOptionButtons();
    this.fontSizeOptionButtons();
  },
};
namespace.start();
// let table = document.querySelector(".table");
// let blackColorFont = document.querySelector(".firstColor");
// let greyColorFont = document.querySelector(".secondColor");

// blackColorFont.addEventListener("click", () => {
//   table.style.color = "black";
// });
// greyColorFont.addEventListener("click", () => {
//   table.style.color = "grey";
// });
