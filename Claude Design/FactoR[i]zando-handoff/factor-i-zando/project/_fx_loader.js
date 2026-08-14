/* Resuelve los componentes: usa el bundle del design system si existe;
   si no (vista suelta del archivo), transpila los .jsx fuente al vuelo.
   Cada módulo se evalúa en su propio ámbito para evitar choques de nombres. */
window.fxLoadBundle = function (url) {
  return new Promise(function (resolve) {
    if (window.__fxBundleTried) return resolve();
    window.__fxBundleTried = true;
    var s = document.createElement('script');
    s.src = url; s.onload = resolve; s.onerror = function () { resolve(); };
    document.head.appendChild(s);
  });
};

window.fxComponents = function (base, entries) {
  var names = entries.map(function (e) { return e.name; });
  var found = Object.keys(window).map(function (k) { try { return window[k]; } catch (e) { return null; } })
    .find(function (v) {
      try {
        if (!v || typeof v !== 'object' || Array.isArray(v) || v === window || v.window === v) return false;
        return names.every(function (k) { return typeof v[k] === 'function'; });
      } catch (e) { return false; }
    });
  if (found) return Promise.resolve(found);

  return Promise.all(entries.map(function (e) {
    return fetch(base + e.path).then(function (r) { return r.text(); });
  })).then(function (srcs) {
    var ns = {};
    srcs.forEach(function (raw, i) {
      var name = entries[i].name;
      var body = raw.replace(/^\s*import[^;]*;?\s*$/gm, '').replace(/^export\s+/gm, '');
      var deps = names.slice(0, i);
      var code = Babel.transform(body, { presets: ['react'] }).code;
      var fn = new Function('React', '__ns', 'var ' + deps.concat(['__unused']).map(function (d) {
        return d === '__unused' ? '__unused' : d + ' = __ns.' + d;
      }).join(', ') + ';\n' + code + '\nreturn ' + name + ';');
      ns[name] = fn(React, ns);
    });
    return ns;
  });
};
