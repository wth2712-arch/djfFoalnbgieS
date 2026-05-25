function _0xN0(){try{return [1,2,3].map(function(x){return x^0;}).join('-');}catch(e){return "";}}
function _0x1a(fn, delay) { let timer; return function(...args) { clearTimeout(timer); timer = setTimeout(() => fn.apply(this, args), delay); }; }
function _0x1b() {
      for (const category in _0x9e5) {
        const container = document.getElementById(`${category}-filters`);
        if (!container) continue;
        container.innerHTML = '';
        _0x9e5[category].forEach(option => {
          const optionElement = document.createElement('div');
          optionElement.className = 'filter-option';
          optionElement.textContent = option;
          optionElement.dataset.value = option;
          optionElement.addEventListener('click', function() {
            this.classList.toggle('selected');
            if (this.classList.contains('selected')) _0x9f6[category].push(option);
            else _0x9f6[category] = _0x9f6[category].filter(v => v !== option);
            _0x2b();
          });
          container.appendChild(optionElement);
        });
      }
    }
async function _0x1c() {
      document.getElementById('loading').style.display = 'block';
      try {
        const response = await fetch(_0x9a1);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        _0x1e(data);
      } catch (error) {
        console.error(error);
        _0x6d('讀取資料失敗：' + error.message);
      } finally {
        document.getElementById('loading').style.display = 'none';
      }
    }
function _0x1d(value) {
      if (value === undefined || value === null || String(value).trim() === '') return [];
      return String(value).split(';').map(v => v.trim()).filter(Boolean);
    }
function _0x1e(data) {
      _0x9b2 = data.map(row => ({
        name: row.name || '',
        stage: row.stage || '',
        year: row.year !== undefined && row.year !== null ? String(row.year) : '',
        paper: row.paper || '',
        section: row.section || '',
        level: row.level !== undefined && row.level !== null ? String(row.level) : '',
        strand: row.strand || '',
        topic: _0x1d(row.topic),
        chapter: _0x1d(row.chapter),
        p2rate: row.p2rate || '',
        fileId: row.fileId || row.driveId || row.id || '',
        CEfileID: row.CEfileID || row.ceFileID || row.cefileID || row.CEFileID || '',
        solID: row.solID || row.solId || row.solutionId || row.answerId || ''
      }));
      _0x1f();
      _0x9c3 = [..._0x9b2];
      document.getElementById('result-count').textContent = '0';
      _0x6b();
      console.log('成功加載資料:', _0x9b2.length, '條記錄');
      console.log('包含 fileId:', _0x9b2.filter(x => x.fileId).length, '包含 CEfileID:', _0x9b2.filter(x => x.CEfileID).length);
    }
function _0x1f() {
      const levelSet = new Set();
      _0x9b2.forEach(item => { if (item.level) levelSet.add(String(item.level)); });
      _0x9e5.level = Array.from(levelSet).sort((a,b) => Number(a) - Number(b));
      const levelContainer = document.getElementById('level-filters');
      levelContainer.innerHTML = '';
      _0x9e5.level.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.className = 'filter-option';
        optionElement.textContent = option;
        optionElement.dataset.value = option;
        optionElement.addEventListener('click', function() {
          this.classList.toggle('selected');
          if (this.classList.contains('selected')) _0x9f6.level.push(option);
          else _0x9f6.level = _0x9f6.level.filter(v => v !== option);
          _0x2b();
        });
        levelContainer.appendChild(optionElement);
      });
    }
