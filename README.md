# local-modules-as-globals
Import local modules like node_modules/ :fire: 

## Installation
```bash
npm install --save local-module-as-globals
```

## Usage

1 . Make any local folder in your project global recursively
```js
// At the top of myProject/server/index.js
import makeItGlobal from 'local-modules-as-globals'
makeItGlobal(__dirname)
...
```

2 . You can then require from any locally-global directory using the `@` prefix.

```js
myProject/
	server/
		index.js
		myModules/
			index.js
				| ...
				| import makeItGlobal from 'local-modules-as-globals'
				| makeItGlobal(__dirname)
				| ...
			moduleA/ /* My moduleA */
			moduleB/ /* My moduleB */
				nestedModule/ /* My nested module */
		far/
			away/
				...
				require('@moduleA') // Will require /myProject/server/myModules/moduleA
				...
		other/
			place/
				...
				require('@moduleB') // Will require /myProject/server/myModules/moduleB
				require('@moduleB/nestedModule') // Will require /myProject/server/myModules/moduleB/nestedModule
				...
```