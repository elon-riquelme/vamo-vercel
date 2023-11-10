---
to: src/components/<%= h.inflection.camelize(name, false) %>/index.ts
---
export { default } from './<%= h.inflection.camelize(name, false) %>';
