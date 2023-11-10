---
to: src/components/<%= h.inflection.camelize(name, false) %>/<%= h.inflection.camelize(name, false) %>.scss
---

.<%= h.inflection.transform(name, ['underscore','dasherize']) %>-class {
  background-color: transparent;
  border: 1px solid red;
  cursor: pointer;
  color: var(--text-color, black);
  font-size: 24px;
  padding: 10px;
  transition: background-color 0.2s ease;
}