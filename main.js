// 保存ボタンにクリックイベント
document.getElementById("save-task").addEventListener("click", createTask);

// タスクを格納する配列
let tasks = [];

// タスクを作成
function createTask() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();
  if (taskText) {
    const newTask = {
      id: Date.now(), // タスクの一意のIDを生成
      text: taskText, // タスクテキストを保存
      completed: false, // タスクの完了状態を初期化
    };
    tasks.push(newTask); // タスク配列に新しいタスクを追加
    taskInput.value = ""; // タスク入力フィールドをクリア
    renderTasks(); // タスクを再描画
  }
}

// タスクを表示する関数
function renderTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  // タスク配列の各タスクを描画
  tasks.forEach((task) => {
    // 新しいリストアイテム要素を作成
    const listItem = document.createElement("li");
    listItem.className = "task";
    listItem.innerHTML = `
      <input type="checkbox" id="checkbox-${task.id}" ${task.completed ? "checked" : ""} class="task-input">
      <label for="checkbox-${task.id}" class="task-label">${task.text}</label>
      <button id="edit-${task.id}" class="task-button">編集</button>
      <button id="delete-${task.id}" class="task-button">削除</button>
    `;

    // タスク完了機能
    listItem.querySelector(`#checkbox-${task.id}`).addEventListener("change", () => {
      task.completed = !task.completed;
      renderTasks();
    });

    // 編集機能
    listItem.querySelector(`#edit-${task.id}`).addEventListener("click", () => {
      const editButton = listItem.querySelector(`#edit-${task.id}`);
      if (task.completed) {
        alert("完了済みのタスクは編集できません。")  // 完了済みタスクは編集不可
        return
      }
      const editText = document.createElement("input");
      editText.className = "task-input";
      editText.type = "text";
      editText.value = task.text;
      listItem.querySelector("label").replaceWith(editText);
      editButton.textContent = "保存";
      // 編集を保存して再描画
      editText.addEventListener("blur", () => {
        task.text = editText.value.trim() || task.text;
        editButton.textContent = "編集";
        renderTasks();
      });
    });
  
    // 削除機能
    listItem.querySelector(`#delete-${task.id}`).addEventListener("click", () => {
      if (confirm("本当によろしいですか？")) {
        tasks = tasks.filter((t) => t.id !== task.id);
        renderTasks();
      }
    });

    // タスクリストに新しいリストアイテムを追加
    taskList.appendChild(listItem);
  });
  // タスク統計を更新
  updateTaskStats();
}

// タスク統計を更新する関数
function updateTaskStats() {
const taskStats = document.getElementById("task-status");
const totalTasks = tasks.length; // タスクの合計数を計算
const completedTasks = tasks.filter((task) => task.completed).length; // 完了済みタスクの数を計算
const incompleteTasks = totalTasks - completedTasks; // 未完了タスクの数を計算

// タスク統計を表示
taskStats.innerHTML = `
全てのタスク：${totalTasks},
完了済み：${completedTasks},
未完了：${incompleteTasks}`;
}

// 初回のタスクリストの描画
renderTasks();
