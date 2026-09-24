(() => {
  'use strict';

  // Values are transcribed from the five quantitative tables in paper/root.tex.
  // The site shows the primary navigation measures selected for each table.
  const metricInfo = {
    sr: {label: 'Success Rate', short: 'SR', unit: '%', direction: 'Higher Is Better', max: 100},
    spl: {label: 'Success Weighted by Path Length', short: 'SPL', unit: '%', direction: 'Higher Is Better', max: 100},
    ne: {label: 'Navigation Error', short: 'NE', unit: ' m', direction: 'Lower Is Better', max: 8}
  };
  const row = (name, sr, second, ours = false) => ({name, sr, second, ours});
  const charts = {
    simulation: {
      metrics: ['sr', 'spl'],
      groups: [
        {id: 'supervised', label: 'Supervised Learning', rows: [
          row('CMA', 37, 32.17), row('StreamVLN*', 47, 41.31),
          row('RecBERT', 48, 43.22), row('NaVILA*', 49, 44.22),
          row('ETPNav', 58, 52.19), row('BEVBert', 60, 53.41),
          row('AwareVLN*', 63, 56.34), row('LightNav-0*', 67, 62.71)
        ]},
        {id: 'zero-shot', label: 'Zero-Shot Baselines', rows: [
          row('Random', 2, 1.50), row('LXMERT', 2, 1.87)
        ]},
        {id: 'gpt', label: 'GPT-5.5 Backbone', rows: [
          row('SmartWay*', 44, 35.04), row('AgenticNav', 55, 48.41, true)
        ]},
        {id: 'gemini25', label: 'Gemini-2.5-Pro Backbone', rows: [
          row('Open-Nav*', 27, 23.22), row('EvoNav†', 43, 37.77),
          row('SmartWay*', 52, 41.70), row('AgenticNav', 58, 42.91, true)
        ]},
        {id: 'gemini37', label: 'Gemini-3.7-Flash Backbone', rows: [
          row('CA-Nav*', 23, 8.46), row('HSGM*', 26, 21.47),
          row('Open-Nav*', 31, 24.93), row('LaViRA*', 38, 31.71),
          row('SmartWay*', 54, 47.95), row('AgenticNav', 76, 66.50, true)
        ]}
      ]
    },
    backbone: {
      metrics: ['sr', 'spl'],
      rows: [
        row('GPT-5.5', 55, 48.41), row('Gemini-2.5-Pro', 58, 42.91),
        row('Gemini-3.7-Flash', 76, 66.50),
        row('DeepSeek-V4-Flash Vision-Exp', 49, 36.48),
        row('Qwen3.8-27B', 48, 33.57)
      ]
    },
    memory: {
      metrics: ['sr', 'spl'],
      rows: [
        row('AgenticNav (Full)', 76, 66.50, true),
        row('Without Action Reasoning History', 63, 48.49),
        row('Task Progress Text Instead of Reasoning', 64, 52.56),
        row('Without BEV Map Image', 70, 59.46),
        row('All Historical Images', 66, 54.05)
      ]
    },
    tools: {
      metrics: ['sr', 'spl'],
      rows: [
        row('AgenticNav (Full)', 76, 66.50, true),
        row('Action → Waypoint Predictor', 66, 57.73),
        row('Without Depth Tool', 60, 47.14),
        row('Depth Tool → Depth Image', 69, 55.79),
        row('Without Recall Tool', 64, 47.47)
      ]
    },
    real: {
      metrics: ['sr', 'ne'],
      scenes: [
        {id: 'overall', label: 'Overall', rows: [
          row('SmartWay · 12 Views', 22.9, 3.74), row('AgenticNav · 1 View', 37.1, 3.16, true),
          row('AgenticNav · 4 Views', 54.3, 2.51, true)
        ]},
        {id: 'laboratory', label: 'Laboratory', rows: [
          row('SmartWay · 12 Views', 44.4, 2.60), row('AgenticNav · 1 View', 55.6, 2.41, true),
          row('AgenticNav · 4 Views', 66.7, 1.96, true)
        ]},
        {id: 'office', label: 'Office', rows: [
          row('SmartWay · 12 Views', 17.6, 2.62), row('AgenticNav · 1 View', 35.3, 2.18, true),
          row('AgenticNav · 4 Views', 47.1, 1.85, true)
        ]},
        {id: 'plaza', label: 'Plaza', rows: [
          row('SmartWay · 12 Views', 11.1, 6.98), row('AgenticNav · 1 View', 22.2, 5.75, true),
          row('AgenticNav · 4 Views', 55.6, 4.29, true)
        ]}
      ]
    }
  };

  function format(metric, value) {
    const number = metric === 'sr' ? (Number.isInteger(value) ? String(value) : value.toFixed(1)) : value.toFixed(2);
    return `${number}${metricInfo[metric].unit}`;
  }

  function makeRow(item, metric) {
    const value = metric === 'sr' ? item.sr : item.second;
    const element = document.createElement('div');
    element.className = `chart-row${item.ours ? ' is-ours' : ''}`;
    const name = document.createElement('span'); name.className = `chart-name${item.ours ? ' is-ours' : ''}`; name.textContent = item.name;
    const track = document.createElement('span'); track.className = 'chart-track'; track.setAttribute('aria-hidden', 'true');
    const bar = document.createElement('span'); bar.className = 'chart-bar'; bar.style.width = `${Math.max(0, Math.min(100, value / metricInfo[metric].max * 100))}%`;
    track.append(bar);
    const number = document.createElement('strong'); number.className = 'chart-value'; number.textContent = format(metric, value);
    element.append(name, track, number);
    return element;
  }

  function makeList(rows, metric) {
    const list = document.createElement('div'); list.className = 'chart-list';
    rows.forEach(item => list.append(makeRow(item, metric)));
    return list;
  }

  document.querySelectorAll('[data-chart]').forEach(card => {
    const key = card.dataset.chart, data = charts[key];
    const controls = card.querySelector('.chart-controls'), plot = card.querySelector('.chart-plot');
    let metric = 'sr', filter = 'all', scene = 'overall';
    const buttons = document.createElement('div'); buttons.className = 'metric-buttons'; buttons.setAttribute('role', 'group'); buttons.setAttribute('aria-label', 'Metric');
    data.metrics.forEach(id => {
      const button = document.createElement('button'); button.type = 'button'; button.textContent = metricInfo[id].short;
      button.title = metricInfo[id].label; button.setAttribute('aria-label', metricInfo[id].label);
      button.setAttribute('aria-pressed', String(id === metric));
      button.addEventListener('click', () => { metric = id; buttons.querySelectorAll('button').forEach(choice => choice.setAttribute('aria-pressed', String(choice === button))); render(); });
      buttons.append(button);
    });
    controls.append(buttons);
    if (data.groups || data.scenes) {
      const select = document.createElement('select'); select.className = 'chart-filter';
      select.setAttribute('aria-label', data.groups ? 'Filter Methods by Group' : 'Choose Real-World Scene');
      const options = data.groups ? [{id:'all', label:'All Method Groups'}, ...data.groups] : data.scenes;
      options.forEach(option => { const node = document.createElement('option'); node.value = option.id; node.textContent = option.label; select.append(node); });
      select.addEventListener('change', () => { if (data.groups) filter = select.value; else scene = select.value; render(); });
      controls.append(select);
    }
    function render() {
      const info = metricInfo[metric], direction = document.createElement('p');
      direction.className = 'chart-direction'; direction.textContent = `${info.label} (${info.short}) · ${info.direction}`;
      const content = [direction];
      if (data.groups) {
        data.groups.filter(group => filter === 'all' || group.id === filter).forEach(group => {
          const heading = document.createElement('h4'); heading.className = 'chart-group-title'; heading.textContent = group.label;
          content.push(heading, makeList(group.rows, metric));
        });
      } else if (data.scenes) {
        content.push(makeList(data.scenes.find(item => item.id === scene).rows, metric));
      } else content.push(makeList(data.rows, metric));
      plot.replaceChildren(...content);
    }
    render();
  });
})();
