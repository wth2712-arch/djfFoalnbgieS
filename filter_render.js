var _0xN1=function(a){return !!a&&a!==null;};
function _0x2a() {
      return Object.values(_0x9f6).some(arr => arr.length > 0) || document.getElementById('chapter-input').value.trim() !== '';
    }
function _0x2b() {
      if (!_0x2a()) {
        _0x2c();
        _0x6b();
        document.getElementById('result-count').textContent = '0';
        _0x4c();
        return;
      }
      const chapterValue = document.getElementById('chapter-input').value.trim();
      _0x9c3 = _0x9b2.filter(image => {
        for (const category in _0x9f6) {
          if (_0x9f6[category].length === 0) continue;
          if (category === 'topic') {
            if (!_0x9f6[category].some(v => (image.topic || []).includes(v))) return false;
          } else {
            if (!_0x9f6[category].some(v => String(image[category]) === String(v))) return false;
          }
        }
        if (chapterValue) {
          if (!(image.chapter || []).some(ch => ch.includes(chapterValue))) return false;
        }
        return true;
      });
      _0x4c(false);
      _0x2d();
    }
function _0x2c() {
      document.getElementById('image-grid').style.display = 'none';
      document.getElementById('no-results').style.display = 'none';
    }
function _0x2d() {
      const imageGrid = document.getElementById('image-grid');
      const resultCount = document.getElementById('result-count');
      const noResults = document.getElementById('no-results');
      imageGrid.innerHTML = '';
      resultCount.textContent = _0x9c3.length;
      _0x6c();
      if (_0x9c3.length === 0) {
        imageGrid.style.display = 'none';
        noResults.style.display = 'block';
        _0x4e();
        return;
      }
      imageGrid.style.display = 'grid';
      noResults.style.display = 'none';
      const hasYearFilter = _0x9f6.year.length > 0;
      if (hasYearFilter) {
        const groupedByYear = {};
        _0x9c3.forEach(image => {
          if (!groupedByYear[image.year]) groupedByYear[image.year] = [];
          groupedByYear[image.year].push(image);
        });
        const sortedYears = Object.keys(groupedByYear).sort((a,b) => Number(b) - Number(a));
        imageGrid.style.gridTemplateColumns = `repeat(${sortedYears.length}, minmax(300px, max-content))`;
        imageGrid.style.gap = '16px';
        imageGrid.style.maxWidth = 'none';
        imageGrid.style.width = 'max-content';
        imageGrid.style.overflowX = 'auto';
        sortedYears.forEach(year => {
          const yearColumn = document.createElement('div');
          yearColumn.style.display = 'flex';
          yearColumn.style.flexDirection = 'column';
          yearColumn.style.gap = '25px';
          yearColumn.style.minWidth = '300px';
          const yearTitle = document.createElement('div');
          yearTitle.className = 'year-title';
          yearTitle.textContent = `Year ${year}`;
          yearColumn.appendChild(yearTitle);
          groupedByYear[year].forEach(image => yearColumn.appendChild(_0x2e(image)));
          imageGrid.appendChild(yearColumn);
        });
      } else {
        imageGrid.style.gridTemplateColumns = '1fr';
        imageGrid.style.gap = '25px';
        imageGrid.style.maxWidth = '900px';
        imageGrid.style.width = 'auto';
        imageGrid.style.overflowX = 'visible';
        _0x9c3.forEach(image => imageGrid.appendChild(_0x2e(image)));
      }
      _0x4e();
      _0x4f();
    }
function _0x2e(image) {
      const imageCard = document.createElement('div');
      imageCard.className = 'image-card';
      imageCard.dataset.name = image.name;
      if (_0x9d4.has(image.name)) imageCard.classList.add('selected');
      const checkboxContainer = document.createElement('div');
      checkboxContainer.className = 'checkbox-container';
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'image-checkbox';
      checkbox.checked = _0x9d4.has(image.name);
      checkbox.addEventListener('change', function() {
        if (this.checked) {
          if (!_0x9d4.has(image.name)) _0x9d4.set(image.name, _0x9d4.size + 1);
          imageCard.classList.add('selected');
        } else {
          _0x9d4.delete(image.name);
          imageCard.classList.remove('selected');
          _0x4d();
        }
        _0x4e();  _0x4f();
      });
      const orderDisplay = document.createElement('div');
      orderDisplay.className = 'selection-order';
      orderDisplay.dataset.name = image.name;
      checkboxContainer.appendChild(checkbox);
      checkboxContainer.appendChild(orderDisplay);
      imageCard.appendChild(checkboxContainer);
      const imageInfo = document.createElement('div');
      imageInfo.className = 'image-info';
      const titleRow = document.createElement('div');
      titleRow.className = 'title-row';
      const title = document.createElement('h4');
      let displayText = `${String(image.name).replace(/\.[^.]+$/, '')}`;
      if (image.level) displayText += ` (Level: ${image.level})`;
      if (image.p2rate && String(image.p2rate) !== '0') displayText += ` ${image.p2rate}%`;
      title.textContent = displayText;
      const buttonBox = document.createElement('div');
      buttonBox.className = 'title-buttons';
      const solBtn = document.createElement('button');
      solBtn.className = 'pdf-btn';
      solBtn.textContent = image.solID ? 'Solution/Answer' : 'No Solution';
      solBtn.disabled = !image.solID;
      if (image.solID) solBtn.addEventListener('click', () => _0x3b(image.solID, `${displayText} - Solution/Answer`, 'pdf'));
      const ceBtn = document.createElement('button');
      ceBtn.className = 'pdf-btn ce-btn';
      ceBtn.textContent = image.CEfileID ? 'CE Image' : 'No CE';
      ceBtn.disabled = !image.CEfileID;
      if (image.CEfileID) ceBtn.addEventListener('click', () => _0x3b(image.CEfileID, `${displayText} - CE Image`, 'image'));
      buttonBox.appendChild(solBtn);
      buttonBox.appendChild(ceBtn);
      titleRow.appendChild(title);
      titleRow.appendChild(buttonBox);
      imageInfo.appendChild(titleRow);
      const imageContainer = document.createElement('div');
      imageContainer.className = 'image-container';
      imageContainer.appendChild(_0x3a(image));
      imageCard.appendChild(imageInfo);
      imageCard.appendChild(imageContainer);
      return imageCard;
    }
