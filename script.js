class MachineProblems {
  static text(id) {
    return document.getElementById(id).value;
  }

  static setResult(id, value) {
    document.getElementById(id).textContent = value;
  }

  static handleReplaceAll() {
    const input = MachineProblems.text('mp1-input').trim();
    const output = input.replaceAll(' ', '');
    MachineProblems.setResult('mp1-result', output);
  }

  static handleSearchWord() {
    const sentence = MachineProblems.text('mp2-sentence').trim();
    const word = MachineProblems.text('mp2-word').trim();
    if (!word) {
      MachineProblems.setResult('mp2-result', 'Enter a word to search.');
      return;
    }
    const found = sentence.includes(word);
    MachineProblems.setResult('mp2-result', found ? 'Found' : 'Not Found');
  }

  static handleReplaceWord() {
    const sentence = MachineProblems.text('mp3-sentence').trim();
    const find = MachineProblems.text('mp3-find').trim();
    const replacement = MachineProblems.text('mp3-replace').trim();
    if (!find) {
      MachineProblems.setResult('mp3-result', 'Enter a word to replace.');
      return;
    }
    const output = sentence.replace(find, replacement);
    MachineProblems.setResult('mp3-result', output);
  }

  static handleCountCharacters() {
    const trimmed = MachineProblems.text('mp4-input').trim();
    MachineProblems.setResult('mp4-result', trimmed.length.toString());
  }

  static handleEmailCheck() {
    const email = MachineProblems.text('mp5-input').trim();
    const valid = email.includes('@');
    MachineProblems.setResult('mp5-result', valid ? 'Valid' : 'Invalid');
  }

  static bind() {
    const actions = [
      ['#mp1 button', MachineProblems.handleReplaceAll],
      ['#mp2 button', MachineProblems.handleSearchWord],
      ['#mp3 button', MachineProblems.handleReplaceWord],
      ['#mp4 button', MachineProblems.handleCountCharacters],
      ['#mp5 button', MachineProblems.handleEmailCheck],
    ];

    actions.forEach(([selector, handler]) => {
      const btn = document.querySelector(selector);
      if (btn) btn.addEventListener('click', handler);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => MachineProblems.bind());

