// DOM elements
const toolsContainer = document.getElementById('tools-container');
const searchInput = document.getElementById('search-input');
const categorySelect = document.getElementById('category-select');
const emptyState = document.getElementById('empty-state');
const clearFiltersBtn = document.getElementById('clear-filters');

// Function to create tool card HTML
function createToolCard(tool) {
    let iconElement = '';
    
    // Check if the icon is an image path
    if (tool.icon.includes('.png') || tool.icon.includes('.jpg') || tool.icon.includes('.jpeg') || tool.icon.includes('.svg')) {
        iconElement = `<img src="${tool.icon}" alt="${tool.name}" class="tool-img" style="width: 80px; height: 80px; display: block; margin: 0 auto; object-fit: cover; border-radius: 50%;">`;
    } else {
        iconElement = `<i class="${tool.icon}"></i>`;
    }
    
    return `
        <div class="tool-card">
            <div class="tool-content">
                <div class="tool-icon ${tool.colorClass}">
                    ${iconElement}
                </div>
                <h3 class="tool-name">${tool.name}</h3>
                <p class="tool-description">${tool.description}</p>
            </div>
            <div class="tool-link">
                <a href="${tool.link}" class="btn" target="_blank">Explore Tool</a>
            </div>
        </div>
    `;
}

// Function to populate category dropdown with unique categories from toolsData
function populateCategoryDropdown() {
    // Get unique categories from toolsData
    const uniqueCategories = [...new Set(toolsData.map(tool => tool.category))];
    
    // Sort categories alphabetically
    uniqueCategories.sort();
    
    // Clear current options
    categorySelect.innerHTML = '';
    
    // Add "All Categories" option
    const allOption = document.createElement('option');
    allOption.value = 'All';
    allOption.textContent = 'All Categories';
    categorySelect.appendChild(allOption);
    
    // Add options for each unique category
    uniqueCategories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

// Function to render tools based on filters
function renderTools() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categorySelect.value;
    
    // Filter tools based on search and category
    const filteredTools = toolsData.filter(tool => {
        const matchesSearch = 
            tool.name.toLowerCase().includes(searchTerm) || 
            tool.description.toLowerCase().includes(searchTerm);
        
        const matchesCategory = 
            selectedCategory === 'All' || 
            tool.category === selectedCategory;
        
        return matchesSearch && matchesCategory;
    });
    
    // Clear current tools
    toolsContainer.innerHTML = '';
    
    // Add filtered tools to container
    if (filteredTools.length > 0) {
        filteredTools.forEach(tool => {
            toolsContainer.innerHTML += createToolCard(tool);
        });
        emptyState.style.display = 'none';
    } else {
        // Show empty state if no tools match
        emptyState.style.display = 'block';
    }
}

// Initialize the page
function init() {
    // Populate the category dropdown
    populateCategoryDropdown();
    
    // Render all tools on page load
    renderTools();
    
    // Add event listeners
    searchInput.addEventListener('input', renderTools);
    categorySelect.addEventListener('change', renderTools);
    clearFiltersBtn.addEventListener('click', () => {
        searchInput.value = '';
        categorySelect.value = 'All';
        renderTools();
    });
}

// Start the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);