let namespace = {
  table: document.querySelector(".table"),
  output: "<table>",

  array: [
    {
      className: "survey",
      text: "Mistery Shopping", //survey, question, section, commentForShopper
      depth: 0,
    },
    {
      className: "title",
      text: "Location Date Time ",
      depth: 0,
    },
    {
      className: "question",
      text: "Date",
      answers: [{ answerText: "", points: null }],
      depth: 0,
    },
    {
      className: "question",
      text: "Time in",
      answers: [{ answerText: "", points: null }],
      depth: 0,
    },
    {
      className: "question",
      text: "Time out",
      answers: [{ answerText: "", points: null }],
      depth: 0,
    },
    {
      className: "question",
      text: "1. GENERIC Question",
      answers: [{ text: "Other", points: null }],
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
      text: "2.NUMERIC Question",
      answers: [{ answerText: "", points: null }],
      depth: 1,
    },
    {
      className: "question",
      text: "3. TEXT Question",
      answers: [{ answerText: "", points: null }],
      depth: 1,
    },
    {
      className: "question",
      text: "4.CATEGORICAL Question",
      answers: [
        { answerText: "Yes", points: 10 },
        { answerText: "No", points: null },
      ],
      depth: 1,
    },
    {
      className: "commentForShopper",
      text: "comment for shopper",
      answers: [{ answer1: " " }],
      depth: 1,
    },
    {
      className: "survey",
      text: "SECTION Level 2",
      depth: 1,
    },
    {
      className: "question",
      text: "5. Text question",
      answers: [{ answerText: "", points: null }],
      depth: 2,
    },
    {
      className: "question",
      text: "6. INFO",
      answers: [{ answerText: "", points: null }],
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
        { answerText: "No", points: 0 },
      ],
      depth: 1,
    },
    {
      className: "question",
      text: "8. row 1/ col 2",
      answers: [{ answerText: "", points: null }],
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
        { answerText: "No", points: 0 },
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
      answers: [{ answerText: "", points: null }],
      depth: 0,
    },
    {
      className: "question",
      text: "14.NUMERIC Question",
      answers: [{ answerText: "", points: null }],
      depth: 0,
    },
  ],

  renderTable: function () {
    let html = "";
    this.array.forEach((row) => {
      this.output = `
      <tr>

       ${this.getRowHTML(row)}

      </tr>`;

      html += this.output;
      this.table.innerHTML = html;
    });
  },

  getRowHTML: function (row) {
    let result = "";
    if (row.answers) {
      result += `<td>${row.text}</td><td>${this.renderAnswers(
        row.answers
      )}</td>`;
    } else {
      result += "<td>Question text</td>";
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
    return `() ${answer.answerText} ${
      answer.points ? "(" + answer.points + ")" : ""
    }`;
  },

  levelOfDepth: function (element) {
    let result = "";
    for (const el in element) {
      switch (element.depth) {
        case 0:
          result = `${element.text}`;
          break;
        case 1:
          result = `&nbsp&nbsp${element.text}`;
          break;
        case 2:
          result = `&nbsp&nbsp&nbsp&nbsp${element.text}`;
          break;
      }
    }

    return result;
  },

  start: function () {
    this.renderTable();
  },
};
namespace.start();
