enum Answer {
  Yes = 'Y',
  No = 'N',
}

function AnswerLog(answer: Answer): void {
  if (answer === Answer.Yes) {
    console.log(Answer.Yes);
  } else if (answer === Answer.No) {
    console.log(Answer.No);
  }
}

AnswerLog(Answer.Yes); // Y 출력
