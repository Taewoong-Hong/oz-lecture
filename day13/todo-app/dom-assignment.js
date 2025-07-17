
// 과제: 
// HTML 파일에 연결하여 브라우저에서 실행하세요

// DOM 요소 선택
const prioritySelect = document.getElementById('priority');
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const clearButton = document.getElementById('clearButton');
const taskCount = document.getElementById('taskCount');

// 할 일 목록의 개수를 세어 화면에 업데이트하는 함수

function updateTaskCount() {
    // taskList(ul) 안에 있는 li 요소의 개수를 가져옵니다.
    const count = taskList.getElementsByTagName('li').length;
    // taskCount 요소의 텍스트를 업데이트합니다.
    taskCount.textContent = `현재 할 일 : ${count} 개` ;
}

// 입력값 검증 및 할 일 추가 함수
function addTask() {
    const taskText = taskInput.value.trim();
    const priority = prioritySelect.value; // 'low' 또는 'high'


    // 입력값이 비어있는지 확인(유효성검증)
    console.log(taskText);
    if(taskText === "") {
        alert("할 일을 입력해주세요.")
        return;                        //early-return
    }

    // 새로운 리스트 아이템 생성
    const li = document.createElement("li");
    li.className = "task-item" ;
    li.classList.add(priority); // 클래스: 'low' 또는 'high'

    // 우선순위 시각화
    const span = document.createElement("span");
    const priorityIcon = document.createElement("span");
    priorityIcon.textContent = (priority === "high") ? "높음 " : "낮음 ";
    priorityIcon.style.marginRight = "5px";
    priorityIcon.style.color = (priority === "high") ? "#FF2151" : "#000000";
    span.appendChild(priorityIcon);      // 아이콘 먼저
    span.appendChild(document.createTextNode(taskText)); // 텍스트 뒤에


    // 완료 토글을 span에 적용
    span.addEventListener("click", function() {
        li.classList.toggle("completed");
    });


    // 삭제 버튼 생성
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "삭제"; // ✅ 버튼에 텍스트 추가


    // 삭제 버튼 이벤트 리스너
    deleteButton.addEventListener("click", function() {
        taskList.removeChild(li);
        updateTaskCount();     // <--- 할 일이 삭제될 때마다 카운트를 업데이트합니다.
    });

    const deleteButtons = document.querySelectorAll(".delete-button");

    deleteButtons.forEach(function(button) {
        button.addEventListener("click", function () {
            const li = button.parentElement; // ✅ 버튼의 부모 li를 찾아서
            li.remove();                     // ✅ 그 li만 삭제
            updateTaskCount();              // (선택) 할 일 개수 업데이트
        });
    });


    // 완료 상태 토글 이벤트 리스너
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });


    // 요소 조립
    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);



    // 할 일 추가 후 카운트 업데이트
    updateTaskCount();

    // 입력창 초기화
    taskInput.value = "";
    taskInput.focus();
}

// 모든 할 일 삭제 함수
function clearAllTasks() {
    if (confirm('모든 할 일을 정말로 삭제하시겠습니까?')) {
        taskList.innerHTML = ''; // ul 안의 모든 내용을 지웁니다.
        updateTaskCount(); // <--- 모든 할 일이 삭제된 후 카운트를 업데이트합니다.
    }
}
// addButton에 click 이벤트로 할 일 추가
addButton.addEventListener('click', addTask);


// taskInput에 이벤트 리스너 연결
taskInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});


// 전체 삭제 버튼 클릭 이벤트 적용
clearButton.addEventListener('click', clearAllTasks);


// 페이지가 처음 로드될 때 할 일 수를 초기화합니다.
updateTaskCount();