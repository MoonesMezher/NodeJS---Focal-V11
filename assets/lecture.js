document.getElementById('lecture-title').textContent = lectureConfig.title;
document.getElementById('lecture-subtitle').textContent = lectureConfig.subtitle;

// Render tabs and content
function renderTabsAndContent() {
    const tabsContainer = document.getElementById('tabs-container');
    const contentContainer = document.getElementById('tab-content-container');
    
    // Create tabs
    const tabs = document.createElement('div');
    tabs.className = 'tabs';
    
    // Create tab content areas
    lectureContent.forEach((content, index) => {
        // Create tab
        const tab = document.createElement('div');
        tab.className = 'tab' + (index === 0 ? ' active' : '');
        tab.textContent = content.tabTitle;
        tab.onclick = () => switchTab(index);
        tabs.appendChild(tab);
        
        // Create content
        const tabContent = document.createElement('div');
        tabContent.className = 'tab-content' + (index === 0 ? ' active' : '');
        tabContent.id = 'tab-' + index;
        
        // Add title
        const title = document.createElement('h3');
        title.textContent = content.title;
        tabContent.appendChild(title);
        
        // Add code content
        const pre = document.createElement('pre');
        const code = document.createElement('code');
        code.textContent = content.content;
        pre.appendChild(code);
        tabContent.appendChild(pre);

        // Add table if exists
        if (content.table) {
            const table = document.createElement('table');
            table.className = 'comparison-table';
            
            // Create header
            const thead = document.createElement('thead');
            const headerRow = document.createElement('tr');
            content.table.headers.forEach(headerText => {
                const th = document.createElement('th');
                th.textContent = headerText;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            table.appendChild(thead);
            
            // Create body
            const tbody = document.createElement('tbody');
            content.table.rows.forEach(rowData => {
                const row = document.createElement('tr');
                rowData.forEach(cellData => {
                    const td = document.createElement('td');
                    td.textContent = cellData;
                    row.appendChild(td);
                });
                tbody.appendChild(row);
            });
            table.appendChild(tbody);
            
            tabContent.appendChild(table);
        }
        
        
        contentContainer.appendChild(tabContent);
    });
    
    tabsContainer.appendChild(tabs);
}

// Switch tabs function
function switchTab(index) {
    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Add active class to clicked tab
    tabs[index].classList.add('active');
    
    // Hide all tab content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Show selected tab content
    document.getElementById('tab-' + index).classList.add('active');
}

// Render questions and tasks
function renderQuestions() {
    const container = document.getElementById('questions-container');
    
    questions.forEach((q, index) => {
        if (q.type === 'question') {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';
            
            const questionTitle = document.createElement('h3');
            questionTitle.textContent = `Question ${index + 1}: ${q.question}`;
            questionDiv.appendChild(questionTitle);
            
            if (q.code) {
                const pre = document.createElement('pre');
                const code = document.createElement('code');
                code.textContent = q.code;
                pre.appendChild(code);
                questionDiv.appendChild(pre);
            }
            
            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'options';
            
            q.options.forEach((option, optIndex) => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'option';
                optionDiv.textContent = option;
                optionDiv.onclick = function() {
                    checkAnswer(this, optIndex === q.correctIndex ? 'correct' : 'incorrect');
                };
                optionsDiv.appendChild(optionDiv);
            });
            
            questionDiv.appendChild(optionsDiv);
            
            const resultDiv = document.createElement('div');
            resultDiv.className = 'result';
            resultDiv.id = 'result-' + index;
            questionDiv.appendChild(resultDiv);
            
            container.appendChild(questionDiv);
        } else if (q.type === 'task') {
            const taskDiv = document.createElement('div');
            taskDiv.className = 'task';
            
            const taskTitle = document.createElement('h3');
            taskTitle.textContent = q.title;
            taskDiv.appendChild(taskTitle);
            
            const taskContent = document.createElement('p');
            taskContent.textContent = q.content;
            taskDiv.appendChild(taskContent);
            
            container.appendChild(taskDiv);
        } else if (q.type === 'search-task') {
            const searchTaskDiv = document.createElement('div');
            searchTaskDiv.className = 'search-task';
            
            const taskTitle = document.createElement('h3');
            taskTitle.textContent = q.title;
            searchTaskDiv.appendChild(taskTitle);
            
            const taskContent = document.createElement('p');
            taskContent.textContent = q.content;
            searchTaskDiv.appendChild(taskContent);
            
            container.appendChild(searchTaskDiv);
        }
    });
}

// Check answer function
function checkAnswer(element, type) {
    const options = element.parentElement.querySelectorAll('.option');
    options.forEach(opt => {
        opt.classList.remove('correct', 'incorrect');
        opt.onclick = null;
    });
    
    element.classList.add(type);
    
    const resultId = element.closest('.question').querySelector('.result').id;
    const resultDiv = document.getElementById(resultId);
    resultDiv.style.display = 'block';
    
    if (type === 'correct') {
        resultDiv.innerHTML = '<p style="color: #155724">✅ Correct! Good job.</p>';
        resultDiv.style.backgroundColor = '#d4edda';
    } else {
        resultDiv.innerHTML = '<p style="color: #721c24">❌ Incorrect. Try to understand why.</p>';
        resultDiv.style.backgroundColor = '#f8d7da';
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderTabsAndContent();
    renderQuestions();
});