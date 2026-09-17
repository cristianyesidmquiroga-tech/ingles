import json, glob, re, os
os.chdir(os.path.dirname(os.path.abspath(__file__)))
topics = {}
oral = {}
for f in glob.glob('final/*.json'):
    d = json.load(open(f, encoding='utf8'))
    if d['key'] == 'oral':
        oral = d
    else:
        topics[d['key']] = d
clave = re.search(r'<h2 id="clave">.*?</p>\s*(.*?)\s*<footer>', open('template.html', encoding='utf8').read(), re.S).group(1)
marker = '<details class="k"><summary>RAP 5'
clave4, rest = clave.split(marker, 1)
clave5 = marker + rest
g5 = open('rap5_guia.js', encoding='utf8').read()
es = open('rap_essentials.js', encoding='utf8').read()
tr = open('rap_tricks.js', encoding='utf8').read()
le = open('rap_lecturas.js', encoding='utf8').read()
vb = open('verbos_hojas.js', encoding='utf8').read()
r4 = open('rap4_content.js', encoding='utf8').read()
r5 = open('rap5_content.js', encoding='utf8').read()
for chunk in (g5, es, tr, le, r4, r5, vb):
    assert '</script' not in chunk.lower()

def js(o):
    return json.dumps(o, ensure_ascii=False).replace('</', '<' + '\\' + '/')

g = open('game-template.html', encoding='utf8').read()
for ph in ('/*__G5__*/', '/*__ES__*/', '/*__TR__*/', '/*__LE__*/', '/*__R4__*/', '/*__R5__*/', '/*__VB__*/'):
    assert ph in g, ph
out = (g.replace('__CLAVE5__', clave5).replace('__CLAVE__', clave4)
        .replace('/*__G5__*/', g5).replace('/*__ES__*/', es).replace('/*__TR__*/', tr)
        .replace('/*__LE__*/', le).replace('/*__VB__*/', vb).replace('/*__R4__*/', r4).replace('/*__R5__*/', r5)
        .replace('__TOPICS_JSON__', js(topics)).replace('__ORAL_JSON__', js(oral)))
open(os.path.join('..', 'camino-parcial.html'), 'w', encoding='utf8').write(out)
print('built', len(out))
