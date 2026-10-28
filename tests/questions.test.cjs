const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const context = {};
const source = fs.readFileSync(path.join(__dirname, '../Quiz App/questions.js'), 'utf8');
vm.runInNewContext(source + '\nthis.bank = allQuestions;', context);
for (const [subject, categories] of Object.entries(context.bank)) {
  for (const [category, questions] of Object.entries(categories)) {
    test(`${subject}/${category} has 20 valid, distinct questions`, () => {
      assert.equal(questions.length, 20);
      assert.equal(new Set(questions.map(item => item.question)).size, 20);
      for (const item of questions) {
        assert.equal(item.options.length, 4);
        assert.equal(new Set(item.options).size, 4);
        assert.equal(item.options.filter(option => option === item.answer).length, 1);
      }
    });
  }
}
