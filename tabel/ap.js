let namespace = {
  table: document.querySelector(".table"),
  output: "",

  array: [
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
      className: "question",
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
    this.array.forEach((row) => {
      this.output += `
      <tr>
       ${this.getRow(row)}
      </tr>`;
      // this.styling(row);
    });
    this.table.innerHTML += this.output;
  },

  getRow: function (row) {
    // debugger;
    let result = "";
    if (row.answers) {
      result += `${this.HTMLForRowQuestion(row)}`;
    } else {
      result += `${this.styling(row)}`;
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
    return ` ${answer.answerText} ${
      answer.points ? "(" + answer.points + ")" : ""
    }`;
  },

  levelOfDepth: function (element) {
    return `${"&nbsp&nbsp".repeat(element.depth || 0) + element.text}`;
  },

  start: function () {
    this.renderTable();
  },

  HTMLForRowSurvey: function (row) {
    return `<td colspan="2" style="font-size:30px;font-weight:bold;">${this.levelOfDepth(
      row
    )}</td>`;
  },
  HTMLForRowQuestion: function (row) {
    return `<td style="font-size:20px">${this.levelOfDepth(row)}
   </td><td>${this.renderAnswers(row.answers)}</td>`;
  },
  HTMLForRowComment: function (row) {
    return `<td colspan="2" style="font-size:15px;font-style:italic">${this.levelOfDepth(
      row
    )}</td>`;
  },
  styling: function (row) {
    switch (row.className) {
      case "survey":
        this.HTMLForRowSurvey(row);
        break;
      // case "question":
      //   this.HTMLForRowQuestion;
      //   break;
      case "commentForShopper":
        this.HTMLForRowComment(row);
        break;
    }
  },
};
namespace.start();
