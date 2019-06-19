/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const responses = {
    question: "Sure.",
    yell: "Whoa, chill out!",
    yellQuestion: "Calm down, I know what I'm doing!",
    notTalking: "Fine. Be that way!",
    default: "Whatever."
};

export const hey = message => {
    const trimMessage = message.trim();
    const isYelling = /^[^a-z]*$/.test(trimMessage);
    const isAsking = /[?]$/.test(trimMessage);
    const isYellingQuestion = isAsking && isYelling;
    const isNotTalking = /^[\s]*$/.test(trimMessage);
    const isNotWords = /^[\d\W]*[^?]$/.test(trimMessage);
    const isNotWordsQuestion = /^[\d\W]*[?]$/.test(trimMessage);

    if (isNotTalking) {
        return responses.notTalking;
    }
    if (isNotWords) {
        return responses.default;
    }
    if (isNotWordsQuestion) {
        return responses.question;
    }
    if (isYellingQuestion) {
        return responses.yellQuestion;
    }
    if (isAsking) {
        return responses.question;
    }
    if (isYelling) {
        return responses.yell;
    }
    return responses.default;
};
