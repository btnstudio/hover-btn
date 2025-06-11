   function copyCode(id) {
      const code = document.getElementById(id).innerText;
      navigator.clipboard.writeText(code).then(() => {
        alert("Code copied!");
      });
    }
  function copyCode(id) {
    const code = document.getElementById(id).innerText;
    navigator.clipboard.writeText(code).then(() => {
      alert("Copied!");
    });
  }
