function searchJobs() {
    const query = document.getElementById('searchInput').value;
    if (query.trim()) {
      alert('Searching for: ' + query);
    } else {
      alert('Please enter a job title or skill to search.');
    }
  }

  function openChat() {
    alert('Opening Vista AI Chatbot...');
  }