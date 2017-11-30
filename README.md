`node index`

Test against the README. Still in development.

Handles parents (via whitespace), developer IDs (parentheses), ignoring "..." pages.

```md
* Parent Page
    * Child of Parent (dev-id)
* Top-Level Page
    * Child
        * Grandchild
        * ...
    * Another Child
```

turns into:

```js
[ { id: 0, title: 'Parent Page', parent: -1, devId: '' },
  { id: 1, title: 'Child of Parent', parent: 0, devId: 'dev-id' },
  { id: 2, title: 'Top-Level Page', parent: -1, devId: '' },
  { id: 3, title: 'Child', parent: 2, devId: '' },
  { id: 4, title: 'Grandchild', parent: 3, devId: '' },
  { id: 5, title: 'Another Child', parent: 2, devId: '' } ]
```

TODO: Translate into WordPress page creation
