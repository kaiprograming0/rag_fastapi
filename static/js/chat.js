
const chatForm = document.querySelector("#chat-form");
const questionInput = document.querySelector("#question");
const chatMessages = document.querySelector("#chat-messages");

// TICKET-02では固定の仮回答を使用する
const mockAnswer =
    "こちらは仮の回答です。今後、RAGによる文書検索とAIの回答生成を実装します。";

function displayMessage(message, role) {
    const messageElement = document.createElement("div");
    const textElement = document.createElement("p");

    messageElement.classList.add("message", `${role}-message`);

    // 入力をHTMLとして実行させず、文字列として表示する
    textElement.textContent = message;

    messageElement.appendChild(textElement);
    chatMessages.appendChild(messageElement);

    // 新しいメッセージが見える位置までスクロールする
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

chatForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const question = questionInput.value.trim();

    // 空文字や空白だけの質問は送信しない
    if (!question) {
        questionInput.focus();
        return;
    }

    // ユーザーの質問を表示する
    displayMessage(question, "user");

    // 仮の回答を表示する
    displayMessage(mockAnswer, "assistant");

    // 入力欄をクリアする
    questionInput.value = "";
    questionInput.focus();
});