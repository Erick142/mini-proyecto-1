const token = '';
const owner = 'ml5js';
const repo = 'ml5-library';

const apiUrl = `https://api.github.com/repos/${owner}/${repo}/commits?per_page=100`;

const headers = {
  'Authorization': `token ${token}`
};

fetch(apiUrl, { headers })
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al obtener commits:', response.statusText);
    }
    return response.json();
  })
  .then(commits => {
    const data = commits.map(commit => {
      return {
        author: commit.commit.author.name,
        date: commit.commit.author.date,
        message: commit.commit.message
      };
    });
    console.log(data);
  });


